// Pronunciation through the browser's built-in voices (no network needed).
const synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
let voices = [];
const refresh = () => { voices = synth ? synth.getVoices() : []; };
if (synth) {
  refresh();
  synth.addEventListener?.('voiceschanged', refresh);
}

export const canSpeak = !!synth;

export function voiceFor(tag) {
  const p = tag.slice(0, 2).toLowerCase();
  const prefixes = p === 'he' ? ['he', 'iw'] : [p];
  const match = v => prefixes.some(x => v.lang.toLowerCase().replace('_', '-').startsWith(x));
  const all = voices.filter(match);
  return all.find(v => v.lang.replace('_', '-').toLowerCase() === tag.toLowerCase() && v.localService)
    || all.find(v => v.localService) || all[0] || null;
}

export function speak(text, tag) {
  if (!synth || !text) return;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = tag;
  const v = voiceFor(tag);
  if (v) u.voice = v;
  u.rate = 0.9;
  synth.speak(u);
}
