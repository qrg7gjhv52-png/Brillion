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
for (const q of B.questions) {
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
// Moeilijkheid: elke vraag moet een niveau hebben, en elk niveau genoeg vragen
const perLvl = { 1: 0, 2: 0, 3: 0 };
for (const q of B.questions) {
  perLvl[q.lvl]++;
  if (!q.lvlGiven) { console.log(`⚠️  ${q.id}: geen moeilijkheid (lvl) opgegeven`); problems++; }
}
console.log('\nVragen per categorie (makkelijk / gemiddeld / moeilijk):');
for (const c of B.CATEGORIES) {
  const qs = B.questions.filter(q => q.cat === c.id);
  const by = [1, 2, 3].map(l => qs.filter(q => q.lvl === l).length);
  console.log(`  ${c.icon} ${c.nl.padEnd(24)} ${String(qs.length).padStart(3)}   (${by.join(' / ')})`);
  if (qs.length < 8) { console.log(`⚠️  categorie ${c.id} heeft minder dan 8 vragen`); problems++; }
}
console.log(`\nTotaal: ${B.questions.length} vragen, ${total} antwoorden`);
console.log(`Per niveau: makkelijk ${perLvl[1]} · gemiddeld ${perLvl[2]} · moeilijk ${perLvl[3]}`);
const rounds = Math.min(perLvl[1], perLvl[2], perLvl[3]) / B.CONFIG.perRound;
console.log(`Onbeperkt: per niveau ${Math.floor(rounds)} rondes zonder herhaling (minstens)`);

// Dagplanning: na hoeveel dagen komt een vraag terug? En klopt de mix?
const seenAt = new Map();
let minGap = Infinity, mixOk = true;
for (let d = 1; d <= 160; d++) {
  const ids = B.dailyQuestionIds(d);
  if (ids.length !== B.CONFIG.perRound || new Set(ids).size !== ids.length) mixOk = false;
  ids.forEach((id, i) => { if (B.byId[id].lvl !== B.DAILY_MIX[i]) mixOk = false; });
  for (const id of ids) {
    if (seenAt.has(id)) minGap = Math.min(minGap, d - seenAt.get(id));
    seenAt.set(id, d);
  }
}
console.log(`Dagelijkse beklimming: een vraag komt ten vroegste na ${minGap} dagen terug`);
if (minGap < 18) { console.log('⚠️  een vraag komt binnen 2,5 week terug'); problems++; }
if (!mixOk) { console.log('⚠️  de dagelijkse mix (3 makkelijk, 3 gemiddeld, 2 moeilijk) klopt niet'); problems++; }
const cats = new Set(B.dailyQuestionIds(1).map(id => B.byId[id].cat));
console.log(`Dag 1 heeft vragen uit ${cats.size} verschillende categorieën: ` + B.dailyQuestionIds(1).map(id => B.byId[id].id).join(', '));

// Klassen: elke vraag moet alle 5 klassen hebben
for (const q of B.questions) {
  const tiers = new Set(q.answers.map(e => e.tier));
  if (tiers.size < 5) { console.log(`⚠️  ${q.id}: niet alle 5 klassen komen voor`); problems++; }
}

// Een paar nakijk-tests: ok = meteen juist, suggest = "Bedoelde je …?", wrong = fout
const tests = [
  ['geo-europe', 'germany', 'ok'], ['geo-europe', 'belgie', 'ok'], ['geo-europe', 'Engeland', 'ok'],
  ['geo-capital-europe', 'brussels', 'ok'], ['geo-africa', 'congo', 'ok'], ['geo-north-america', 'trinidad & tobago', 'ok'],
  ['geo-north-america', 'St. Lucia', 'ok'], ['culture-composers', 'mozart', 'ok'], ['language-nato-alphabet', 'xray', 'ok'],
  ['earth-us-states', 'Californie', 'ok'], ['history-german-chancellors', 'merkel', 'ok'], ['science-vitamins', 'b12', 'ok'],
  ['history-british-monarchs', 'Elizabeth 2', 'ok'], ['earth-seven-summits', 'McKinley', 'ok'], ['science-noble-gases', 'xenon', 'ok'],
  ['geo-europe', 'Duitsladn', 'suggest'], ['geo-landlocked', 'Oostenryk', 'suggest'], ['geo-asia', 'Filippijnen', 'suggest'],
  ['geo-south-america', 'Pru', 'suggest'], ['culture-composers', 'Tsjaikofski', 'suggest'], ['geo-africa', 'Mozambiek', 'suggest'],
  ['earth-us-states', 'Calfornia', 'suggest'], ['history-german-chancellors', 'Merkell', 'suggest'], ['science-noble-gases', 'Kripton', 'suggest'],
  ['history-roman-kings', 'Tarquinius', 'suggest'],
  ['geo-landlocked', 'Australia', 'wrong'], ['geo-euro', 'Trinidad', 'wrong'], ['geo-europe', 'Noord', 'wrong'], ['geo-europe', 'xyz', 'wrong'],
  ['science-energy-units', 'watt', 'wrong'], ['science-particles', 'proton', 'wrong']
];
for (const [id, input, expect] of tests) {
  const q = B.byId[id];
  if (!q) { console.log(`✗ ${id}: vraag bestaat niet`); problems++; continue; }
  const r = B.check(q, input, 'nl');
  const got = r.ok ? 'ok' : r.suggestions.length ? 'suggest' : 'wrong';
  if (got !== expect) problems++;
  const detail = r.ok ? `${r.entry.nl} (${B.TIERS[r.entry.tier].nl}, +${r.entry.score} m${r.translated ? ', vertaald' : ''})` : r.suggestions.length ? 'Bedoelde je: ' + r.suggestions.map(e => e.nl).join(' / ') : 'fout';
  console.log(`${got === expect ? '✓' : '✗'} ${id}: "${input}" → ${detail}`);
}
console.log(problems ? `\n${problems} probleem/problemen gevonden.` : '\nAlles in orde ✓');
process.exitCode = problems ? 1 : 0;
