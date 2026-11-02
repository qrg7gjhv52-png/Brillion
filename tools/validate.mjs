// ─────────────────────────────────────────────────────────────
// Brillion · controle van de vragen
// Gebruik:  node brillion/tools/validate.mjs
// Controleert alle vragen: genoeg antwoorden, geen dubbele
// namen binnen één vraag, en of het nakijken werkt.
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1])
  .filter(src => src.startsWith('js/i18n') || src.startsWith('js/core') || src.startsWith('data/'));

const sandbox = { console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const src of scripts) {
  const file = path.join(root, src);
  if (!fs.existsSync(file)) { console.log('ontbreekt (nog):', src); continue; }
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: src });
}
const B = sandbox.Brillion;

let problems = 0;
const perCat = {};
for (const q of B.questions) {
  perCat[q.cat] = (perCat[q.cat] || 0) + 1;
  if (q.answers.length < 5) { console.log(`⚠️  ${q.id}: maar ${q.answers.length} antwoorden`); problems++; }
  // Dubbele sleutels: dezelfde naam bij twee verschillende antwoorden
  const owner = new Map();
  for (const e of q.answers) {
    for (const k of e.keys) {
      if (owner.has(k) && owner.get(k) !== e) {
        console.log(`⚠️  ${q.id}: "${k}" hoort bij "${owner.get(k).nl}" én "${e.nl}"`);
        problems++;
      } else owner.set(k, e);
    }
  }
  // Elk antwoord moet zichzelf terugvinden, in beide talen
  for (const e of q.answers) {
    for (const name of [e.nl, e.en]) {
      const r = B.check(q, name, 'nl');
      if (!r.ok || r.entry !== e) { console.log(`⚠️  ${q.id}: "${name}" wordt niet herkend als zichzelf`); problems++; }
    }
  }
  if (!q.nl || !q.en) { console.log(`⚠️  ${q.id}: vraagtekst ontbreekt`); problems++; }
}

const total = B.questions.reduce((s, q) => s + q.answers.length, 0);
console.log('\nVragen per categorie:');
for (const c of B.CATEGORIES) console.log(`  ${c.icon} ${c.nl.padEnd(18)} ${String(perCat[c.id] || 0).padStart(3)}`);
console.log(`\nTotaal: ${B.questions.length} vragen, ${total} antwoorden`);

// Dagplanning: na hoeveel dagen komt een vraag terug?
const seenAt = new Map();
let minGap = Infinity;
for (let d = 1; d <= 120; d++) {
  for (const id of B.dailyQuestionIds(d)) {
    if (seenAt.has(id)) minGap = Math.min(minGap, d - seenAt.get(id));
    seenAt.set(id, d);
  }
}
console.log(`Dagelijkse beklimming: een vraag komt ten vroegste na ${minGap} dagen terug`);
const cats = new Set(B.dailyQuestionIds(1).map(id => B.byId[id].cat));
console.log(`Dag 1 heeft vragen uit ${cats.size} verschillende categorieën`);

// Een paar nakijk-tests
const tests = [
  ['geo-europe', 'Duitsladn', true], ['geo-europe', 'germany', true], ['geo-europe', 'belgie', true],
  ['geo-landlocked', 'Australia', false], ['geo-landlocked', 'Oostenryk', true], ['geo-capital-europe', 'brussels', true],
  ['geo-africa', 'congo', true], ['geo-asia', 'Laos', true], ['geo-europe', 'Engeland', true], ['geo-north-america', 'St. Lucia', true],
  ['geo-euro', 'Trinidad', false], ['geo-north-america', 'trinidad & tobago', true]
];
for (const [id, input, expect] of tests) {
  const q = B.byId[id];
  if (!q) continue;
  const r = B.check(q, input, 'nl');
  const mark = r.ok === expect ? '✓' : '✗';
  if (r.ok !== expect) problems++;
  console.log(`${mark} ${id}: "${input}" → ${r.ok ? r.entry.nl + ' (' + r.entry.score + ' pt' + (r.typo ? ', verbeterd' : '') + (r.translated ? ', vertaald' : '') + ')' : 'fout'}`);
}
console.log(problems ? `\n${problems} probleem/problemen gevonden.` : '\nAlles in orde ✓');
process.exitCode = problems ? 1 : 0;
