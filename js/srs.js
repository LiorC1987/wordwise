// Spaced repetition (Leitner boxes).
// Box 1 = learning (due now), boxes 2–6 come back after 1, 3, 7, 16 and 40 days.
// A wrong answer sends the word back to box 1.
import { TOPICS } from './words.js';

const DAY = 864e5;
const INTERVAL_DAYS = [0, 0, 1, 3, 7, 16, 40];
export const LEARNED_BOX = 3;   // answered right on two separate days
export const MASTERED_BOX = 5;

export function deckFor(progress, lang, dir) {
  const key = `${lang}:${dir}`;
  return (progress[key] ||= {});
}

/** Record an answer. `retry` = second attempt within the same session. */
export function grade(deck, id, ok, { retry = false, now = Date.now() } = {}) {
  const c = (deck[id] ||= { b: 0, due: now, r: 0, w: 0 });
  if (retry) {
    if (ok) c.due = now + 4 * 36e5; // got it on the retry: see it again in a few hours
    return c;
  }
  if (ok) { c.r++; c.b = Math.min(Math.max(c.b + 1, 2), 6); }
  else { c.w++; c.b = 1; }
  c.due = now + INTERVAL_DAYS[c.b] * DAY;
  return c;
}

// New words are introduced round-robin across topics so "All topics" stays varied.
const ROUND_ROBIN = (() => {
  const out = [];
  const max = Math.max(...TOPICS.map(t => t.words.length));
  for (let i = 0; i < max; i++) TOPICS.forEach(t => t.words[i] && out.push(t.words[i]));
  return out;
})();

export function poolFor(topicId) {
  return topicId === 'all' ? ROUND_ROBIN : TOPICS.find(t => t.id === topicId)?.words || ROUND_ROBIN;
}

export function summary(deck, pool, now = Date.now()) {
  let due = 0, learned = 0, mastered = 0, seen = 0;
  for (const w of pool) {
    const c = deck[w.id];
    if (!c) continue;
    seen++;
    if (c.due <= now) due++;
    if (c.b >= LEARNED_BOX) learned++;
    if (c.b >= MASTERED_BOX) mastered++;
  }
  return { due, learned, mastered, seen, total: pool.length, fresh: pool.length - seen };
}

export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

/** Pick words for a session: due reviews first, then new words, then early reviews. */
export function buildSession(deck, pool, n, now = Date.now()) {
  const due = pool.filter(w => deck[w.id] && deck[w.id].due <= now)
    .sort((a, b) => deck[a.id].due - deck[b.id].due).slice(0, n);
  const fresh = pool.filter(w => !deck[w.id]).slice(0, n - due.length);
  let picked = [...due, ...fresh];
  if (picked.length < n) {
    const ids = new Set(picked.map(w => w.id));
    const early = pool.filter(w => !ids.has(w.id)).sort((a, b) => deck[a.id].due - deck[b.id].due);
    picked = picked.concat(early.slice(0, n - picked.length));
  }
  return shuffle(picked);
}
