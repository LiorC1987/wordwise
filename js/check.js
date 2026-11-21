// Text normalising and answer checking.

const ARTICLES = {
  en: /^(?:to|the|a|an)\s+/,
  fr: /^(?:l'|(?:le|la|les|un|une|des)\s+)/,
  es: /^(?:el|la|los|las|un|una|unos|unas)\s+/,
  it: /^(?:l'|un'|(?:il|lo|la|i|gli|le|un|uno|una)\s+)/,
  pl: null,
  he: null,
};
const HE_FINALS = { 'ך': 'כ', 'ם': 'מ', 'ן': 'נ', 'ף': 'פ', 'ץ': 'צ' };

export const stripAccents = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/ł/g, 'l').replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/ß/g, 'ss');

/** Lower-case, drop punctuation, notes and leading articles. Keeps accents. */
export function normalize(text, lang) {
  let s = text.toLowerCase().normalize('NFC')
    .replace(/[’`´]/g, "'")
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[¿¡?!.,;:"“”«»…]/g, ' ')
    .replace(/\s+/g, ' ').trim();
  if (lang === 'he') {
    s = s.replace(/[֑-ׇ]/g, '').replace(/[׳״'"]/g, '').replace(/[־-]/g, ' ')
      .replace(/[ךםןףץ]/g, c => HE_FINALS[c]).replace(/\s+/g, ' ').trim();
  }
  const art = ARTICLES[lang];
  if (art) s = s.replace(art, '');
  return s;
}

/** Key used to decide whether two answers are "the same" (homonyms, duplicates). */
export const sameKey = (text, lang) => normalize(text, lang);

function lev(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m || !n) return m || n;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}
const typoAllowance = len => (len >= 9 ? 2 : len >= 4 ? 1 : 0);

const translitKey = s => stripAccents(s.toLowerCase())
  .replace(/['’\s-]/g, '').replace(/ch|kh/g, 'h').replace(/tz/g, 'ts').replace(/(.)\1+/g, '$1');

/**
 * Check a typed answer.
 * targets: accepted answers (strings) in `lang`. translits: Hebrew romanisations (optional).
 * Returns { ok, kind: 'exact' | 'accents' | 'typo' | 'translit' | 'wrong', match }.
 */
export function checkTyped(input, targets, lang, { strict = false, translits = [] } = {}) {
  const typed = normalize(input, lang);
  if (!typed) return { ok: false, kind: 'empty' };
  const norm = targets.map(t => ({ t, n: normalize(t, lang) }));

  const exact = norm.find(x => x.n === typed);
  if (exact) return { ok: true, kind: 'exact', match: exact.t };

  const bare = stripAccents(typed);
  const acc = norm.find(x => stripAccents(x.n) === bare);
  if (acc) return { ok: !strict, kind: 'accents', match: acc.t };

  let best = null;
  for (const x of norm) {
    const d = lev(stripAccents(x.n), bare);
    if (d <= typoAllowance(x.n.length) && (!best || d < best.d)) best = { d, t: x.t };
  }
  if (best) return { ok: true, kind: 'typo', match: best.t };

  if (lang === 'he' && translits.length && /[a-z]/.test(bare)) {
    const tk = translitKey(input);
    const hit = translits.find(tr => {
      const k = translitKey(tr);
      return k === tk || lev(k, tk) <= Math.max(1, Math.floor(k.length / 4));
    });
    if (hit) return { ok: true, kind: 'translit', match: targets[0] };
  }
  return { ok: false, kind: 'wrong', match: targets[0] };
}
