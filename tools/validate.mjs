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
// Een letterspel heeft een lijst per taal: die controleren we allebei
const langsOf = q => (q.byLang ? ['nl', 'en'] : ['nl']);
for (const q of B.questions) {
  for (const lang of langsOf(q)) {
    B.lang = lang;
    const tag = q.byLang ? `${q.id} (${lang})` : q.id;
    const n = q.rule ? q.answers.filter(e => !e.extra).length : q.answers.length;   // letterspel: enkel de gewone namen
    if (n < (q.rule ? 8 : 5)) { console.log(`⚠️  ${tag}: maar ${n} antwoorden`); problems++; }
    // Dubbele sleutels: dezelfde naam bij twee verschillende antwoorden
    const owner = new Map();
    for (const e of q.answers) {
      for (const k of e.keys) {
        if (owner.has(k) && owner.get(k) !== e) {
          console.log(`⚠️  ${tag}: "${k}" hoort bij "${owner.get(k).nl}" én "${e.nl}"`);
          problems++;
        } else owner.set(k, e);
      }
    }
    // Elk antwoord moet zichzelf terugvinden, in beide talen (letterspel: de naam die past)
    for (const e of q.answers) {
      for (const name of q.rule ? [e[lang]] : [e.nl, e.en]) {
        const r = B.check(q, name, lang);
        if (!r.ok || r.entry !== e) { console.log(`⚠️  ${tag}: "${name}" wordt niet herkend als zichzelf`); problems++; }
        if (q.rule && !B.ruleOk(q.rule, name)) { console.log(`⚠️  ${tag}: "${name}" past niet bij de regel`); problems++; }
      }
    }
  }
  B.lang = 'nl';
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
let clashDays = 0;
for (let d = 1; d <= 160; d++) {
  const ids = B.dailyQuestionIds(d);
  if (ids.length !== B.CONFIG.perRound || new Set(ids).size !== ids.length) mixOk = false;
  // dagen die al voorbij zijn (of vandaag/morgen) liggen vast: daar enkel dubbels tellen
  if (d > B.dayNumber() + 1) {
    ids.forEach((id, i) => { if (B.byId[id].lvl !== B.DAILY_MIX[i]) mixOk = false; });
    const qs = ids.map(id => B.byId[id]);
    if (qs.some((a, i) => qs.some((b, j) => j > i && B.conflict(a, b)))) clashDays++;
  }
  for (const id of ids) {
    if (seenAt.has(id)) minGap = Math.min(minGap, d - seenAt.get(id));
    seenAt.set(id, d);
  }
}
console.log(`Dagelijkse beklimming: een vraag komt ten vroegste na ${minGap} dagen terug`);
if (minGap < 18) { console.log('⚠️  een vraag komt binnen 2,5 week terug'); problems++; }
if (!mixOk) { console.log('⚠️  de dagelijkse mix (4 makkelijk, 3 gemiddeld, 1 moeilijk) klopt niet'); problems++; }
if (clashDays) { console.log(`⚠️  ${clashDays} dagen met vragen die te veel op elkaar lijken`); problems++; }
// Onbeperkt: nooit dubbel of botsend binnen een ronde
let badRounds = 0;
for (const lvl of [1, 2, 3]) {
  const seen = {};
  for (let r = 0; r < 40; r++) {
    const ids = B.pickQuestions({ lvl, seen });
    const qs = ids.map(id => B.byId[id]);
    if (new Set(ids).size !== ids.length || qs.some((a, i) => qs.some((b, j) => j > i && B.conflict(a, b)))) badRounds++;
    ids.forEach((id, i) => (seen[id] = 1e12 + r * 10 + i));
  }
}
console.log(`Onbeperkt: ${badRounds} van 120 testrondes met een dubbele of te gelijkaardige vraag`);
if (badRounds) problems++;
const cats = new Set(B.dailyQuestionIds(1).map(id => B.byId[id].cat));
console.log(`Dag 1 heeft vragen uit ${cats.size} verschillende categorieën: ` + B.dailyQuestionIds(1).map(id => B.byId[id].id).join(', '));

// Klassen: elke vraag moet alle 5 klassen hebben (in elke taal)
for (const q of B.questions) {
  for (const lang of langsOf(q)) {
    B.lang = lang;
    const tiers = new Set(q.answers.map(e => e.tier));
    if (tiers.size < 5) { console.log(`⚠️  ${q.id} (${lang}): niet alle 5 klassen komen voor`); problems++; }
  }
  B.lang = 'nl';
}

// Een paar nakijk-tests: ok = meteen juist, suggest = "Bedoelde je …?", wrong = fout,
// rule = bestaat wel, maar past niet bij de letter. Vierde waarde = taal (standaard nl).
const tests = [
  ['geo-europe', 'germany', 'ok'], ['geo-europe', 'belgie', 'ok'], ['geo-europe', 'Engeland', 'ok'],
  ['geo-capital-europe', 'brussels', 'ok'], ['geo-africa', 'congo', 'ok'], ['geo-north-america', 'trinidad & tobago', 'ok'],
  ['geo-north-america', 'St. Lucia', 'ok'], ['culture-composers', 'mozart', 'ok'], ['language-nato-alphabet', 'xray', 'ok'],
  ['earth-us-states', 'Californie', 'ok'], ['history-german-chancellors', 'merkel', 'ok'], ['science-vitamins', 'b12', 'ok'],
  ['history-british-monarchs', 'Elizabeth 2', 'ok'], ['earth-seven-summits', 'McKinley', 'ok'], ['science-noble-gases', 'xenon', 'ok'],
  ['geo-europe', 'Duitsladn', 'suggest'], ['geo-landlocked', 'Oostenryk', 'suggest'], ['geo-asia', 'Filippijnen', 'suggest'],
  ['geo-south-america', 'Pru', 'suggest'], ['culture-composers', 'Tsjaikofski', 'suggest'], ['geo-africa', 'Mozambiek', 'suggest'],
  ['earth-us-states', 'Calfornia', 'suggest'], ['history-german-chancellors', 'Merkell', 'suggest'], ['science-noble-gases', 'Kripton', 'suggest'],
  ['geo-capital-europe', 'Kopenh', 'suggest'], ['nature-fruit', 'aardbeijen', 'suggest'], ['geo-europe', 'Zwitserlnd', 'suggest'],
  ['nature-fruit', 'peren', 'ok'], ['nature-fruit', 'aardbeien', 'ok'], ['nature-vegetables', 'tomaatjes', 'ok'], ['life-jobs', 'bakkers', 'ok'],
  ['geo-landlocked', 'Australia', 'wrong'], ['geo-euro', 'Trinidad', 'wrong'], ['geo-europe', 'Noord', 'wrong'], ['geo-europe', 'xyz', 'wrong'],
  ['science-time-units', 'xyzzy', 'wrong'],
  // letterspel
  ['letters-animals-starts-b', 'beer', 'ok'], ['letters-animals-starts-b', 'Bear', 'ok'], ['letters-animals-starts-b', 'Beeer', 'suggest'],
  ['letters-animals-starts-b', 'Aap', 'rule'], ['letters-animals-starts-b', 'Vlinder', 'rule'], ['letters-animals-starts-b', 'xyz', 'wrong'],
  ['letters-animals-starts-b', 'Butterfly', 'ok', 'en'], ['letters-animals-starts-b', 'Monkey', 'rule', 'en'], ['letters-animals-starts-b', 'Bergleeuw', 'ok'],
  ['letters-countries-contains-z', 'Zwitserland', 'ok'], ['letters-countries-contains-z', 'Frankrijk', 'rule'],
  ['letters-countries-contains-z', 'switzerland', 'ok', 'en'],
  ['letters-fruit-len-5', 'Appel', 'ok'], ['letters-fruit-len-5', 'Banaan', 'rule'], ['letters-fruit-len-5', 'Citroen', 'rule'],
  ['letters-fruit-len-5', 'Lemon', 'ok', 'en'], ['letters-fruit-len-5', 'Banana', 'rule', 'en']
];
for (const [id, input, expect, lang = 'nl'] of tests) {
  const q = B.byId[id];
  if (!q) { console.log(`✗ ${id}: vraag bestaat niet`); problems++; continue; }
  B.lang = lang;
  const r = B.check(q, input, lang);
  const got = r.ok ? 'ok' : r.ruleFail ? 'rule' : r.suggestions.length ? 'suggest' : 'wrong';
  if (got !== expect) problems++;
  const name = e => e[lang];
  const detail = r.ok ? `${name(r.entry)} (${B.TIERS[r.entry.tier].nl}, +${r.entry.score} m${r.translated ? ', vertaald' : ''}${r.entry.extra ? ', andere naam' : ''})`
    : r.ruleFail ? 'past niet bij de letter' : r.suggestions.length ? 'Bedoelde je: ' + r.suggestions.map(name).join(' / ') : 'fout';
  console.log(`${got === expect ? '✓' : '✗'} ${id}${lang === 'en' ? ' (en)' : ''}: "${input}" → ${detail}`);
  B.lang = 'nl';
}
console.log(problems ? `\n${problems} probleem/problemen gevonden.` : '\nAlles in orde ✓');
process.exitCode = problems ? 1 : 0;
