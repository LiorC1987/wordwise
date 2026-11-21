import part1 from './data/part1.js';
import part2 from './data/part2.js';

export const LANGS = {
  he: { name: 'Hebrew', native: 'עברית', tts: 'he-IL', rtl: true },
  fr: { name: 'French', native: 'Français', tts: 'fr-FR' },
  es: { name: 'Spanish', native: 'Español', tts: 'es-ES' },
  pl: { name: 'Polish', native: 'Polski', tts: 'pl-PL' },
  it: { name: 'Italian', native: 'Italiano', tts: 'it-IT' },
};
const ORDER = ['he', 'fr', 'es', 'pl', 'it'];

const split = s => s.split('/').map(x => x.trim()).filter(Boolean);

/** Parse the raw text lists into topics and word entries. */
function parse(raw) {
  const topics = [];
  const words = [];
  let topic = null;
  raw.split('\n').forEach((line, i) => {
    line = line.trim();
    if (!line) return;
    if (line.startsWith('##')) {
      const [id, name] = line.slice(2).split('|').map(s => s.trim());
      topic = { id, name, words: [] };
      topics.push(topic);
      return;
    }
    const f = line.split('|');
    if (f.length !== 7 || !topic) throw new Error(`Bad word line: "${line}"`);
    const [en, pos, heRaw, ...rest] = f.map(s => s.trim());
    const [heWords, translit = ''] = heRaw.split(':');
    const tr = { he: split(heWords) };
    rest.forEach((v, j) => { tr[ORDER[j + 1]] = split(v); });
    const note = (en.match(/\(([^)]+)\)\s*$/) || [])[1] || '';
    const word = {
      id: en, en, head: note ? en.replace(/\s*\([^)]+\)\s*$/, '') : en, note,
      pos, topic: topic.id, tr, translit: translit.trim(),
    };
    topic.words.push(word);
    words.push(word);
  });
  return { topics, words };
}

export const { topics: TOPICS, words: WORDS } = parse(part1 + '\n' + part2);
export const WORD_BY_ID = new Map(WORDS.map(w => [w.id, w]));
