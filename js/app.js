import { LANGS, TOPICS, WORDS } from './words.js';
import { state, save, markPlayedToday, currentStreak } from './store.js';
import { deckFor, grade, poolFor, summary, buildSession, shuffle } from './srs.js';
import { sameKey, checkTyped } from './check.js';
import { canSpeak, speak, voiceFor } from './speech.js';

const $ = id => document.getElementById(id);
const SPRINT_MS = 60_000;
const LENGTHS = [10, 20, 30];
const TOPIC_NAME = Object.fromEntries(TOPICS.map(t => [t.id, t.name]));

/* ---------- small helpers ---------- */
function h(tag, props = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (k in n && k !== 'dir') n[k] = v;
    else n.setAttribute(k, v);
  }
  kids.flat().forEach(c => c != null && n.append(c));
  return n;
}
const icon = id => {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const u = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  u.setAttribute('href', `#${id}`);
  s.append(u);
  return s;
};
const tagFor = l => (l === 'en' ? 'en-US' : LANGS[l].tts);
const dirAttr = l => (l === 'he' ? 'rtl' : 'ltr');
const sides = (lang, dir) => (dir === 'to' ? { q: lang, a: 'en' } : { q: 'en', a: lang });
/** Display text of a word in a language (English keeps its sense note). */
const textIn = (w, l) => (l === 'en' ? w.en : w.tr[l][0]);
const promptText = (w, l) => (l === 'en' ? w.head : w.tr[l][0]);
const altsIn = (w, l) => (l === 'en' ? w.head.split('/').map(s => s.trim()) : w.tr[l]);
const speakable = l => l !== 'en' && canSpeak;

function speakBtn(text, l, cls = 'speak small') {
  if (!speakable(l)) return null;
  const b = h('button', { class: cls, type: 'button', 'aria-label': 'Play pronunciation' }, icon('i-sound'));
  b.addEventListener('click', e => { e.stopPropagation(); say(text, l, b); });
  return b;
}
function say(text, l, btn) {
  if (!speakable(l)) return;
  speak(text, tagFor(l));
  if (btn) { btn.classList.remove('playing'); void btn.offsetWidth; btn.classList.add('playing'); }
}

function showView(id) {
  document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== id; });
  window.scrollTo(0, 0);
}

/* ---------- home ---------- */
function renderHome() {
  const { lang, dir, mode, topic } = state.prefs;
  const L = LANGS[lang];

  $('langs').replaceChildren(...Object.entries(LANGS).map(([code, info]) =>
    h('button', {
      class: 'chip', role: 'radio', 'aria-checked': String(code === lang), dir: 'auto',
      onclick: () => { state.prefs.lang = code; save(); renderHome(); },
    }, info.native)));

  $('dirSeg').replaceChildren(
    ...[['to', `${L.name} → English`], ['from', `English → ${L.name}`]].map(([d, label]) =>
      h('button', {
        role: 'radio', 'aria-checked': String(d === dir),
        onclick: () => { state.prefs.dir = d; save(); renderHome(); },
      }, label)));

  const deck = deckFor(state.progress, lang, dir);
  const pool = poolFor(topic);
  const s = summary(deck, pool);
  $('statLearned').textContent = s.learned;
  $('statDue').textContent = s.due;
  $('statStreak').textContent = currentStreak();
  const pct = s.total ? s.learned / s.total : 0;
  $('ringFg').style.strokeDashoffset = String(169.65 * (1 - pct));
  $('ringPct').textContent = `${Math.round(pct * 100)}%`;

  document.querySelectorAll('.mode').forEach(b => b.setAttribute('aria-checked', String(b.dataset.mode === mode)));
  const best = state.stats.best[`${lang}:${dir}`];
  $('sprintSub').textContent = best ? `60 seconds · best ${best}` : '60 seconds, build a streak';
  $('topicName').textContent = topic === 'all' ? 'All topics' : TOPIC_NAME[topic];

  const n = state.settings.length;
  let hint;
  if (mode === 'sprint') hint = `${s.total} words in the mix`;
  else {
    const due = Math.min(s.due, n), fresh = Math.min(s.fresh, n - due);
    const parts = [];
    if (due) parts.push(`${due} to review`);
    if (fresh) parts.push(`${fresh} new`);
    hint = parts.length ? `${Math.min(n, s.total)} words · ${parts.join(', ')}` : `${Math.min(n, s.total)} words · extra practice`;
  }
  $('startHint').textContent = hint;
}

function renderTopics() {
  const { lang, dir, topic } = state.prefs;
  const deck = deckFor(state.progress, lang, dir);
  const row = (id, name, pool) => {
    const s = summary(deck, pool);
    return h('button', {
      class: 'topic', role: 'radio', 'aria-checked': String(id === topic),
      onclick: () => { state.prefs.topic = id; save(); renderHome(); showView('home'); },
    },
    h('span', { class: 'topic-name' }, name),
    h('span', { class: 'topic-count' }, `${s.learned} / ${s.total}`),
    h('span', { class: 'meter' }, h('i', { style: `width:${(s.learned / s.total) * 100}%` })));
  };
  $('topicList').replaceChildren(
    row('all', 'All topics', poolFor('all')),
    ...TOPICS.map(t => row(t.id, t.name, t.words)));
}

/* ---------- session ---------- */
let S = null;

function homonymIndex(q) {
  // For foreign prompts, group words that share a written form so either meaning is accepted.
  const m = new Map();
  if (q === 'en') return m;
  for (const w of WORDS) for (const t of w.tr[q]) {
    const k = sameKey(t, q);
    if (!m.has(k)) m.set(k, new Set());
    m.get(k).add(w);
  }
  return m;
}

function acceptedFor(w) {
  if (S.q === 'en') return [w];
  return [...(S.index.get(sameKey(w.tr[S.q][0], S.q)) || [w])];
}

function distractors(w, accepted, n = 3) {
  const a = S.a;
  const banned = new Set();
  accepted.forEach(x => altsIn(x, a).forEach(t => banned.add(sameKey(t, a))));
  if (a === 'en') accepted.forEach(x => banned.add(sameKey(x.en, a)));
  const ids = new Set(accepted.map(x => x.id));
  const tiers = [
    WORDS.filter(x => x.topic === w.topic && x.pos === w.pos),
    WORDS.filter(x => x.pos === w.pos),
    WORDS.filter(x => x.topic === w.topic),
    WORDS,
  ];
  const out = [];
  for (const tier of tiers) {
    for (const c of shuffle(tier.slice())) {
      if (out.length >= n) return out;
      if (ids.has(c.id)) continue;
      const keys = [...altsIn(c, a), textIn(c, a)].map(t => sameKey(t, a));
      if (keys.some(k => banned.has(k))) continue;
      out.push(c);
      ids.add(c.id);
      keys.forEach(k => banned.add(k));
    }
  }
  return out;
}

function startSession(words) {
  const { lang, dir, mode, topic } = state.prefs;
  const deck = deckFor(state.progress, lang, dir);
  const pool = poolFor(topic);
  const queue = words ? shuffle(words.slice())
    : mode === 'sprint' ? shuffle(pool.slice())
      : buildSession(deck, pool, state.settings.length);
  if (!queue.length) return;
  const { q, a } = sides(lang, dir);
  S = {
    lang, dir, q, a, deck, pool, queue,
    mode: words && mode === 'sprint' ? 'choice' : mode,
    index: homonymIndex(q),
    i: 0, locked: false, streak: 0, bestStreak: 0, score: 0,
    attempted: new Set(), results: [], freshAtStart: new Set(queue.filter(w => !deck[w.id]).map(w => w.id)),
    timer: null, endsAt: 0,
  };
  $('choices').hidden = S.mode === 'type';
  $('typeForm').hidden = S.mode !== 'type';
  $('barFill').parentElement.classList.toggle('timer', S.mode === 'sprint');
  showView('play');
  if (S.mode === 'sprint') {
    S.endsAt = Date.now() + SPRINT_MS;
    S.timer = setInterval(tick, 100);
    tick();
  }
  showQuestion();
}

function tick() {
  const left = Math.max(0, S.endsAt - Date.now());
  $('barFill').style.width = `${(left / SPRINT_MS) * 100}%`;
  $('barFill').parentElement.classList.toggle('low', left < 10_000);
  if (left <= 0) finish();
}

function current() { return S.queue[S.i]; }

function showQuestion() {
  const w = current();
  S.accepted = acceptedFor(w);
  S.locked = false;
  hideFeedback();

  $('pTopic').textContent = TOPIC_NAME[w.topic];
  const pw = $('pWord');
  pw.textContent = promptText(w, S.q);
  pw.setAttribute('dir', dirAttr(S.q));
  pw.classList.remove('pop'); void pw.offsetWidth; pw.classList.add('pop');
  let sub = '';
  if (S.q === 'en' && w.note) sub = `(${w.note})`;
  if (S.q === 'he' && state.settings.translit) sub = w.translit;
  $('pSub').textContent = sub;

  const sp = $('pSpeak');
  sp.hidden = !speakable(S.q);
  if (S.q !== 'en' && state.settings.audio) say(promptText(w, S.q), S.q);

  if (S.mode !== 'sprint') $('barFill').style.width = `${(S.i / S.queue.length) * 100}%`;
  updateCombo();

  if (S.mode === 'type') {
    const inp = $('typeInput');
    inp.value = '';
    inp.className = '';
    inp.readOnly = false;
    inp.setAttribute('dir', dirAttr(S.a));
    inp.placeholder = S.a === 'en' ? 'Type in English' : `Type in ${LANGS[S.a].name}`;
    inp.focus({ preventScroll: true });
    return;
  }

  const opts = shuffle([w, ...distractors(w, S.accepted)]);
  const box = $('choices');
  box.classList.remove('locked');
  box.replaceChildren(...opts.map((o, i) => {
    const txt = h('span', { class: 'txt', dir: dirAttr(S.a) }, h('span', {}, textIn(o, S.a)));
    if (S.a === 'he' && state.settings.translit) txt.append(h('span', { class: 'tl' }, o.translit));
    const b = h('button', { class: 'choice', type: 'button' }, h('span', { class: 'k' }, String(i + 1)), txt);
    b.dataset.id = o.id;
    b.addEventListener('click', () => pickChoice(b, o));
    return b;
  }));
}

function updateCombo() {
  const c = $('combo');
  c.replaceChildren();
  c.classList.remove('hot');
  if (S.mode === 'sprint') {
    const m = multiplier();
    c.append(`${S.score}`, m > 1 ? ` ×${m}` : '');
    c.classList.toggle('hot', m > 1);
  } else if (S.streak >= 2) {
    const f = icon('i-flame'); f.classList.add('flame');
    c.append(f, ` ${S.streak}`);
    c.classList.add('hot');
  }
}
const multiplier = () => Math.min(1 + Math.floor(S.streak / 5), 4);

function record(ok) {
  const w = current();
  const first = !S.attempted.has(w.id);
  S.attempted.add(w.id);
  if (S.mode !== 'sprint') grade(S.deck, w.id, ok, { retry: !first });
  if (first) S.results.push({ w, ok });
  if (ok) {
    S.streak++;
    S.bestStreak = Math.max(S.bestStreak, S.streak);
    if (S.mode === 'sprint') S.score += 10 * multiplier();
  } else {
    S.streak = 0;
    // Missed words come back a few questions later in the same session.
    if (S.mode !== 'sprint' && first) S.queue.splice(Math.min(S.i + 3, S.queue.length), 0, w);
  }
  save();
  updateCombo();
}

function pickChoice(btn, o) {
  if (S.locked) return;
  S.locked = true;
  const w = current();
  const ok = S.accepted.some(x => x.id === o.id);
  $('choices').classList.add('locked');
  document.querySelectorAll('.choice').forEach(b => {
    if (b === btn) b.classList.add(ok ? 'correct' : 'wrong');
    else if (b.dataset.id === w.id && !ok) b.classList.add('correct');
    else b.classList.add('dim');
  });
  record(ok);
  if (S.q === 'en' && state.settings.audio) say(textIn(w, S.a), S.a);
  if (S.mode === 'sprint') { setTimeout(() => S && next(), ok ? 420 : 1100); return; }
  if (ok) { setTimeout(() => S && S.locked && next(), 750); return; }
  const picked = [h('span', {}, 'You picked '), h('bdi', {}, textIn(o, S.a)), h('span', {}, ', which means '), h('bdi', {}, promptText(o, S.q)), '.'];
  showFeedback(false, w, { extra: picked });
}

function submitTyped() {
  if (!S || S.mode !== 'type') return;
  if (S.locked) { next(); return; }
  const w = current();
  const inp = $('typeInput');
  const targets = [...new Set(S.accepted.flatMap(x => altsIn(x, S.a)))];
  const translits = S.a === 'he' ? S.accepted.map(x => x.translit).filter(Boolean) : [];
  const res = checkTyped(inp.value, targets, S.a, { strict: state.settings.strict, translits });
  if (res.kind === 'empty') { inp.focus(); return; }
  S.locked = true;
  inp.readOnly = true;
  inp.classList.add(res.ok ? 'good' : 'bad');
  record(res.ok);
  if (S.a !== 'en' && state.settings.audio) say(textIn(w, S.a), S.a);
  const notes = {
    exact: '', translit: '',
    accents: res.ok ? 'Mind the accents.' : 'Almost — check the accents.',
    typo: 'Accepted, but check the spelling.',
    wrong: [h('span', {}, 'You wrote '), h('bdi', {}, inp.value.trim()), '.'],
  };
  showFeedback(res.ok, w, { extra: notes[res.kind], shown: res.ok && res.match ? res.match : null });
  inp.focus({ preventScroll: true });
}

function dontKnow() {
  if (!S || S.locked) return;
  S.locked = true;
  $('typeInput').readOnly = true;
  record(false);
  if (S.a !== 'en' && state.settings.audio) say(textIn(current(), S.a), S.a);
  showFeedback(false, current(), {});
}

function showFeedback(ok, w, { extra = '', shown = null } = {}) {
  const fb = $('feedback');
  fb.className = `feedback ${ok ? 'good' : 'bad'}`;
  $('fbHead').textContent = ok ? 'Correct' : 'Not quite';
  const main = shown || textIn(w, S.a);
  const ans = $('fbAnswer');
  ans.textContent = main;
  ans.setAttribute('dir', dirAttr(S.a));
  const fbs = $('fbSpeak');
  fbs.hidden = !speakable(S.a);
  fbs.onclick = () => say(main, S.a, fbs);

  const lines = [];
  if (S.a === 'he' && state.settings.translit) {
    const src = S.accepted.find(x => x.tr.he.includes(main)) || w;
    if (src.translit) lines.push(src.translit);
  }
  const others = [...new Set(S.accepted.flatMap(x => altsIn(x, S.a)))].filter(t => t !== main);
  if (others.length) lines.push([h('span', {}, 'Also: '), ...others.flatMap((t, i) => (i ? [', ', h('bdi', {}, t)] : [h('bdi', {}, t)]))]);
  if (extra && extra.length) lines.push(extra);
  $('fbExtra').replaceChildren(...lines.map(l => h('div', {}, l)));
  fb.hidden = false;
  $('play').classList.add('has-fb');
  $('fbContinue').focus({ preventScroll: true });
}
function hideFeedback() { $('feedback').hidden = true; $('play').classList.remove('has-fb'); }

function next() {
  if (!S) return;
  hideFeedback();
  S.i++;
  if (S.i >= S.queue.length) {
    if (S.mode !== 'sprint') { finish(); return; }
    const last = S.queue[S.queue.length - 1];
    let more = shuffle(S.pool.slice());
    if (more[0] === last && more.length > 1) more.push(more.shift());
    S.queue.push(...more);
  }
  showQuestion();
}

function finish() {
  if (!S) return;
  clearInterval(S.timer);
  hideFeedback();
  const done = S;
  S = null;
  if (!done.results.length) { renderHome(); showView('home'); return; }
  markPlayedToday();
  let newBest = false;
  if (done.mode === 'sprint') {
    const key = `${done.lang}:${done.dir}`;
    if (done.score > (state.stats.best[key] || 0)) { state.stats.best[key] = done.score; newBest = true; }
  }
  save();
  renderResults(done, newBest);
  showView('results');
}

function renderResults(R, newBest) {
  const right = R.results.filter(r => r.ok).length;
  const total = R.results.length;
  const pct = Math.round((right / total) * 100);
  const stat = (v, l) => h('div', {}, h('b', {}, String(v)), h('span', {}, l));
  if (R.mode === 'sprint') {
    $('rEyebrow').textContent = newBest ? 'New best score' : 'Sprint over';
    $('rBig').textContent = R.score;
    $('rSub').textContent = `${right} correct · ${pct}% accuracy`;
    $('rStats').replaceChildren(stat(right, 'correct'), stat(R.bestStreak, 'best streak'),
      stat(state.stats.best[`${R.lang}:${R.dir}`] || 0, 'best score'));
  } else {
    $('rEyebrow').textContent = 'Session complete';
    $('rBig').textContent = `${pct}%`;
    $('rSub').textContent = `${right} of ${total} right first time`;
    const fresh = R.results.filter(r => R.freshAtStart.has(r.w.id)).length;
    $('rStats').replaceChildren(stat(right, 'correct'), stat(R.bestStreak, 'best streak'), stat(fresh, 'new words'));
  }
  const missed = R.results.filter(r => !r.ok).map(r => r.w);
  $('rMissLabel').hidden = !missed.length;
  $('rMiss').hidden = !missed.length;
  $('rMiss').replaceChildren(...missed.map(w => {
    const foreign = R.q === 'en' ? R.a : R.q;
    return h('div', { class: 'miss' },
      h('span', { class: 'miss-q', dir: dirAttr(R.q) }, promptText(w, R.q)),
      h('span', { class: 'miss-a', dir: dirAttr(R.a) }, textIn(w, R.a)),
      speakBtn(w.tr[foreign][0], foreign));
  }));
  $('rRetry').hidden = !missed.length;
  $('rRetry').onclick = () => startSession(missed);
  document.querySelector('.r-actions').classList.toggle('single', !missed.length);
}

/* ---------- settings ---------- */
function renderSettings() {
  const st = state.settings;
  $('lenSeg').replaceChildren(...LENGTHS.map(n => h('button', {
    type: 'button', role: 'radio', 'aria-checked': String(n === st.length),
    onclick: () => { st.length = n; save(); renderSettings(); renderHome(); },
  }, String(n))));
  $('setAudio').checked = st.audio;
  $('setTranslit').checked = st.translit;
  $('setStrict').checked = st.strict;
  const L = LANGS[state.prefs.lang];
  $('resetSub').textContent = `Clears your ${L.name} progress (both directions)`;
  const rb = $('resetBtn');
  rb.classList.remove('armed');
  rb.textContent = 'Reset';
  let note = '';
  if (!canSpeak) note = 'Pronunciation isn’t supported in this browser.';
  else if (!voiceFor(L.tts)) note = `No ${L.name} voice found on this device yet. If pronunciation is silent, add a ${L.name} voice in your device’s text-to-speech settings.`;
  $('voiceNote').textContent = note;
}

/* ---------- wiring ---------- */
function bind() {
  document.querySelectorAll('.mode').forEach(b => b.addEventListener('click', () => {
    state.prefs.mode = b.dataset.mode; save(); renderHome();
  }));
  $('openTopics').addEventListener('click', () => { renderTopics(); showView('topics'); });
  document.querySelectorAll('[data-back]').forEach(b => b.addEventListener('click', () => { renderHome(); showView('home'); }));
  $('startBtn').addEventListener('click', () => startSession());
  $('quitBtn').addEventListener('click', finish);
  $('pSpeak').addEventListener('click', () => S && say(promptText(current(), S.q), S.q, $('pSpeak')));
  $('fbContinue').addEventListener('click', next);
  $('typeForm').addEventListener('submit', e => { e.preventDefault(); submitTyped(); });
  $('dontKnow').addEventListener('click', dontKnow);
  $('rDone').addEventListener('click', () => { renderHome(); showView('home'); });

  const dlg = $('settings');
  $('openSettings').addEventListener('click', () => { renderSettings(); dlg.showModal(); });
  $('closeSettings').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', renderHome);
  [['setAudio', 'audio'], ['setTranslit', 'translit'], ['setStrict', 'strict']].forEach(([id, key]) =>
    $(id).addEventListener('change', e => { state.settings[key] = e.target.checked; save(); }));
  let armTimer;
  $('resetBtn').addEventListener('click', e => {
    const b = e.currentTarget;
    if (!b.classList.contains('armed')) {
      b.classList.add('armed'); b.textContent = 'Tap again';
      clearTimeout(armTimer);
      armTimer = setTimeout(() => { b.classList.remove('armed'); b.textContent = 'Reset'; }, 3000);
      return;
    }
    const l = state.prefs.lang;
    delete state.progress[`${l}:to`]; delete state.progress[`${l}:from`];
    delete state.stats.best[`${l}:to`]; delete state.stats.best[`${l}:from`];
    save(); renderSettings(); renderHome();
    b.textContent = 'Done';
  });

  document.addEventListener('keydown', e => {
    if (!S || $('play').hidden) return;
    if (e.key === 'Escape') { finish(); return; }
    if (!$('feedback').hidden && e.key === 'Enter' && e.target.id !== 'typeInput') { e.preventDefault(); next(); return; }
    if (S.mode !== 'type' && /^[1-4]$/.test(e.key)) document.querySelectorAll('.choice')[+e.key - 1]?.click();
  });
}

bind();
renderHome();
