// ─────────────────────────────────────────────────────────────
// Brillion · kies de letterspel-vragen
// Gebruik:  node brillion/tools/pick-letters.mjs [aantal]
// Berekent alle combinaties (lijst × letterregel), houdt enkel goede
// over (genoeg antwoorden in het Nederlands én het Engels, niet te
// makkelijk) en schrijft de keuze als SPECS in data/letters.js.
// Vragen die er al in staan en nog goed zijn, blijven staan.
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = Number(process.argv.slice(2).find(x => /^\d+$/.test(x)) || 250);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1])
  .filter(src => (src.startsWith('js/i18n') || src.startsWith('js/core') || src.startsWith('data/')) && src !== 'data/schedule.js');
const sandbox = { console, Date, Math };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const src of scripts) vm.runInContext(fs.readFileSync(path.join(root, src), 'utf8'), sandbox, { filename: src });
const B = sandbox.Brillion;

const CAPS = { countries: 24, capitals: 18, animals: 30, birds: 10, fruit: 11, vegetables: 10, jobs: 16, body: 13, instruments: 11, sports: 15,
  elements: 10, clothing: 8, kitchen: 8, transport: 8, tools: 6, furniture: 5, usstates: 6, flowers: 8, trees: 5, colours: 8, desserts: 6,
  sauces: 6, cheeses: 7, herbs: 5, hobbies: 7, dinosaurs: 6, cartoons: 7, superheroes: 6, creatures: 6, rivers: 6, emotions: 5, dogs: 8, pasta: 3 };
const abc = 'abcdefghijklmnoprstuvwz'.split('');
const cands = [];
for (const base of Object.keys(B.LETTER_BASES)) {
  const list = B.LETTER_BASES[base][3]();
  // "makkelijk" = hoeveel van de bekendste antwoorden van de lijst passen
  // Elke taal telt apart (in het Nederlands moet de Nederlandse naam passen).
  const top = Math.max(15, Math.round(list.length * 0.1)), top2 = Math.max(40, Math.round(list.length * 0.3));
  const evalRule = rule => {
    const per = ['nl', 'en'].map(lang => {
      let n = 0, famous = 0, known = 0;
      list.forEach((names, i) => { if (B.ruleFits(names, rule, lang)) { n++; if (i < top) famous++; if (i < top2) known++; } });
      return { n, famous, known };
    });
    return { n: Math.min(per[0].n, per[1].n), nMax: Math.max(per[0].n, per[1].n),
      famous: (per[0].famous + per[1].famous) / 2, known: (per[0].known + per[1].known) / 2 };
  };
  const add = (type, v, pref) => {
    const r = evalRule({ type, v });
    if (r.n < (type === 'starts' || type === 'len' ? 8 : 10)) return;   // in beide talen genoeg antwoorden
    if (type !== 'starts' && r.nMax > list.length * 0.35) return;   // te makkelijk
    const ease = r.famous + 0.3 * r.known - (type === 'starts' ? 0 : type === 'contains' ? 1 : 1.5);
    cands.push({ base, type, v, n: r.n, ease, score: pref + Math.min(r.famous, 8) + Math.min(r.n, 40) / 10 });
  };
  // Leukste soorten eerst: begint met, aantal letters, een zeldzame letter erin, dubbele letter
  abc.forEach(x => add('starts', x, 10));
  [3, 4, 5, 6].forEach(n => add('len', n, 8));
  'zxqyjwkv'.split('').forEach(x => add('contains', x, 7));
  add('double', null, 6);
  add('contains', 'f', 3);
}
// Al gekozen vragen blijven staan (stabiele id's voor de planning)
const src = fs.readFileSync(path.join(root, 'data/letters.js'), 'utf8');
const keep = [];
const m = src.match(/\/\/ BEGIN SPECS[^\n]*\n  const SPECS = \[([\s\S]*?)\];\n  \/\/ END SPECS/);
if (m && m[1].trim()) keep.push(...JSON.parse('[' + m[1].replace(/'/g, '"').replace(/undefined/g, 'null').replace(/,\s*$/, '') + ']'));
const fresh = process.argv.includes('--fresh');   // --fresh = alles opnieuw kiezen
const chosen = fresh ? [] : keep.map(([base, type, v]) => cands.find(c => c.base === base && c.type === type && String(c.v) === String(v == null ? null : v))).filter(Boolean);
const has = c => chosen.some(x => x.base === c.base && x.type === c.type && String(x.v) === String(c.v));
const perBase = b => chosen.filter(x => x.base === b).length;
// eerlijk verdelen: telkens de beste kandidaat van de lijst die nog het verst van zijn maximum zit
cands.sort((a, b) => b.score - a.score);
while (chosen.length < target) {
  const options = cands.filter(c => !has(c) && perBase(c.base) < (CAPS[c.base] || 4));
  if (!options.length) break;
  options.sort((a, b) => perBase(a.base) / (CAPS[a.base] || 4) - perBase(b.base) / (CAPS[b.base] || 4) || b.score - a.score);
  chosen.push(options[0]);
}
// Niveaus eerlijk verdelen: de 40% makkelijkste = 1, de volgende 35% = 2, de rest = 3
const byEase = chosen.slice().sort((a, b) => b.ease - a.ease);
byEase.forEach((c, i) => { c.lvl = i < byEase.length * 0.4 ? 1 : i < byEase.length * 0.75 ? 2 : 3; });
const fmt = c => `    ['${c.base}', '${c.type}', ${c.v == null ? 'null' : typeof c.v === 'number' ? c.v : `'${c.v}'`}, ${c.lvl}]`;
const block = `// BEGIN SPECS (gemaakt door tools/pick-letters.mjs)\n  const SPECS = [\n${chosen.map(fmt).join(',\n')}\n  ];\n  // END SPECS`;
fs.writeFileSync(path.join(root, 'data/letters.js'), src.replace(/\/\/ BEGIN SPECS[\s\S]*?\/\/ END SPECS/, block));
const byLvl = [1, 2, 3].map(l => chosen.filter(c => c.lvl === l).length);
const byType = ['starts', 'contains', 'len', 'double'].map(t => t + ' ' + chosen.filter(c => c.type === t).length);
console.log(`${chosen.length} letterspel-vragen (${cands.length} mogelijk) · niveaus ${byLvl.join(' / ')} · ${byType.join(', ')}`);
