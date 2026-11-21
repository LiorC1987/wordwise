import { TOPICS, WORDS, LANGS } from '../js/words.js';
const ids = new Set(); let errs = 0;
for (const w of WORDS) {
  if (ids.has(w.id)) { console.log('DUP KEY', w.id); errs++; } ids.add(w.id);
  for (const l of Object.keys(LANGS)) if (!w.tr[l]?.length) { console.log('MISSING', l, w.id); errs++; }
  if (!w.translit) { console.log('NO TRANSLIT', w.id); errs++; }
}
console.log(TOPICS.map(t => `${t.id}:${t.words.length}`).join('  '));
console.log('TOTAL', WORDS.length, 'errors', errs);
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-֑ͯ-ׇ]/g,'')
  .replace(/^(le |la |les |l'|el |los |las |il |lo |i |gli |l’)/,'').replace(/[¿¡?!.,]/g,'').trim();
for (const l of Object.keys(LANGS)) {
  const m = new Map();
  for (const w of WORDS) { const k = norm(w.tr[l][0]); (m.get(k) || m.set(k, []).get(k)).push(w.en); }
  const d = [...m].filter(([, v]) => v.length > 1);
  console.log(`\n${l}: ${d.length} shared main forms:`, d.map(([k, v]) => `${k}=[${v.join(', ')}]`).join('; '));
}
