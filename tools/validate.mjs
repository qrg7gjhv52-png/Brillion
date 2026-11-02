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

// Een paar nakijk-tests: ok = meteen juist, suggest = "Bedoelde je …?", wrong = fout
const tests = [
  ['geo-europe', 'germany', 'ok'], ['geo-europe', 'belgie', 'ok'], ['geo-europe', 'Engeland', 'ok'],
  ['geo-capital-europe', 'brussels', 'ok'], ['geo-africa', 'congo', 'ok'], ['geo-north-america', 'trinidad & tobago', 'ok'],
  ['geo-north-america', 'St. Lucia', 'ok'], ['belgium-red-devils-2018', 'de bruyne', 'ok'],
  ['geo-europe', 'Duitsladn', 'suggest'], ['geo-landlocked', 'Oostenryk', 'suggest'], ['geo-asia', 'Filippijnen', 'suggest'],
  ['geo-south-america', 'Pru', 'suggest'], ['music-composers', 'Tsjaikofski', 'suggest'], ['geo-africa', 'Mozambiek', 'suggest'],
  ['business-musk', 'xcom', 'ok'], ['language-nato-alphabet', 'xray', 'ok'], ['music-be-festivals', 'Feest in het Prak', 'suggest'],
  ['geo-landlocked', 'Australia', 'wrong'], ['geo-euro', 'Trinidad', 'wrong'], ['geo-europe', 'Noord', 'wrong'], ['geo-europe', 'xyz', 'wrong']
];
for (const [id, input, expect] of tests) {
  const q = B.byId[id];
  if (!q) continue;
  const r = B.check(q, input, 'nl');
  const got = r.ok ? 'ok' : r.suggestions.length ? 'suggest' : 'wrong';
  if (got !== expect) problems++;
  const detail = r.ok ? `${r.entry.nl} (${r.entry.score} pt${r.translated ? ', vertaald' : ''})` : r.suggestions.length ? 'Bedoelde je: ' + r.suggestions.map(e => e.nl).join(' / ') : 'fout';
  console.log(`${got === expect ? '✓' : '✗'} ${id}: "${input}" → ${detail}`);
}
console.log(problems ? `\n${problems} probleem/problemen gevonden.` : '\nAlles in orde ✓');
process.exitCode = problems ? 1 : 0;
