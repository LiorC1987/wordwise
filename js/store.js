// Saves everything in this browser (localStorage), with an in-memory
// fallback for browsers that block storage (e.g. some private modes).
const KEY = 'wordwise:v1';

const defaults = () => ({
  prefs: { lang: 'he', dir: 'to', mode: 'choice', topic: 'all' },
  settings: { length: 20, audio: true, translit: true, strict: false },
  progress: {},            // "he:to" -> { wordId: { b, due, r, w } }
  stats: { streak: 0, lastDay: null, best: {} },
});

function read() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}

const saved = read();
const base = defaults();
export const state = {
  prefs: { ...base.prefs, ...saved.prefs },
  settings: { ...base.settings, ...saved.settings },
  progress: saved.progress || {},
  stats: { ...base.stats, ...saved.stats },
};

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage unavailable: keep in memory */ }
}

const dayKey = d => d.toLocaleDateString('en-CA'); // YYYY-MM-DD in local time

/** Call when a session finishes; keeps the daily streak up to date. */
export function markPlayedToday() {
  const today = dayKey(new Date());
  const s = state.stats;
  if (s.lastDay === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  s.streak = s.lastDay === dayKey(y) ? s.streak + 1 : 1;
  s.lastDay = today;
}

/** Streak to display: resets to 0 if a whole day was missed. */
export function currentStreak() {
  const s = state.stats;
  if (!s.lastDay) return 0;
  const y = new Date(); y.setDate(y.getDate() - 1);
  return s.lastDay === dayKey(new Date()) || s.lastDay === dayKey(y) ? s.streak : 0;
}
