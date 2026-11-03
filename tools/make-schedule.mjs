// ─────────────────────────────────────────────────────────────
// Brillion · de planning van de dagelijkse beklimming maken
// Gebruik:  node brillion/tools/make-schedule.mjs [--from dag]
//
// Schrijft data/schedule.js: voor elke dag de 8 vragen.
// - Dagen tot en met morgen blijven zoals ze waren (niemand ziet
//   een dag veranderen die al begonnen kan zijn).
// - Daarna een jaar vooruit: 4 makkelijke, 3 gemiddelde, 1 moeilijke
//   vraag, nooit twee vragen die te veel op elkaar lijken, hoogstens
//   2 per categorie, en een vraag komt pas terug als het niet anders kan.
// Draai dit opnieuw nadat je vragen hebt toegevoegd.
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1])
  .filter(src => src.startsWith('js/i18n') || src.startsWith('js/core') || src.startsWith('data/'));
const sandbox = { console, Date, Math };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const src of scripts) {
  const file = path.join(root, src);
  if (fs.existsSync(file)) vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: src });
}
const B = sandbox.Brillion;
const DAYS_AHEAD = 365;
const today = B.dayNumber();
// vandaag en morgen liggen vast; met --from N maak je de planning opnieuw vanaf dag N
const fromArg = process.argv.indexOf('--from');
const keepUntil = fromArg > 0 ? Number(process.argv[fromArg + 1]) - 1 : today + 1;
const per = B.CONFIG.perRound;

/* Bestaande planning inlezen (of de oude rekenmethode gebruiken als die er nog niet is) */
function legacyDay(day) {
  const mix = B.DAILY_MIX, counts = {}, used = {};
  mix.forEach(l => (counts[l] = (counts[l] || 0) + 1));
  return mix.map(l => {
    const order = B.levelOrder(l), n = order.length;
    const k = used[l] = (used[l] || 0) + 1;
    return order[((((day - 1) * counts[l] + k - 1) % n) + n) % n];
  });
}
const existing = {};
if (B.SCHEDULE) {
  const ids = B.SCHEDULE.ids.split(' ');
  B.SCHEDULE.days.split(';').forEach((d, i) => { existing[B.SCHEDULE.first + i] = d.split(',').map(x => ids[parseInt(x, 36)]); });
}
const days = {};
for (let d = 1; d <= keepUntil; d++) days[d] = existing[d] || legacyDay(d);

/* Wanneer werd elke vraag laatst gebruikt? */
const lastUsed = new Map();
for (let d = 1; d <= keepUntil; d++) days[d].forEach(id => lastUsed.set(id, d));

const rand = B.rng('brillion-schedule');
const tie = new Map(B.questions.map(q => [q.id, rand()]));
for (let d = keepUntil + 1; d <= keepUntil + DAYS_AHEAD; d++) {
  const picked = [];
  for (const lvl of B.DAILY_MIX) {
    const cands = B.questions.filter(q => q.lvl === lvl && !picked.includes(q))
      .sort((a, b) => (lastUsed.get(a.id) ?? -1e9) - (lastUsed.get(b.id) ?? -1e9) || tie.get(a.id) - tie.get(b.id));
    const clash = q => picked.some(p => B.conflict(p, q));
    const catFull = q => picked.filter(p => p.cat === q.cat).length >= 2;
    const recent = q => d - (lastUsed.get(q.id) ?? -1e9) < 28;
    const choice = cands.find(q => !clash(q) && !catFull(q) && !recent(q))
      || cands.find(q => !clash(q) && !catFull(q))
      || cands.find(q => !clash(q))
      || cands[0];
    if (choice) picked.push(choice);
  }
  days[d] = picked.map(q => q.id);
  days[d].forEach(id => lastUsed.set(id, d));
}

/* Compact wegschrijven: eerst alle vraag-id's, daarna per dag de nummers (in base 36) */
const registry = [];
const index = new Map();
const num = id => { if (!index.has(id)) { index.set(id, registry.length); registry.push(id); } return index.get(id).toString(36); };
const lastDay = keepUntil + DAYS_AHEAD;
const lines = [];
for (let d = 1; d <= lastDay; d++) lines.push(days[d].map(num).join(','));
const out = `/* ─────────────────────────────────────────────────────────────
   Brillion · planning van de dagelijkse beklimming
   Gemaakt door tools/make-schedule.mjs: niet met de hand aanpassen.
   Dag 1 = ${B.CONFIG.launch}. Dagen 1 t/m ${lastDay} liggen vast.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  global.Brillion.SCHEDULE = {
    first: 1,
    ids: '${registry.join(' ')}',
    days: '${lines.join(';')}'
  };
})(typeof window !== 'undefined' ? window : globalThis);
`;
fs.writeFileSync(path.join(root, 'data', 'schedule.js'), out);

/* Even controleren */
let minGap = Infinity, clashes = 0;
const seenAt = new Map();
for (let d = keepUntil + 1; d <= lastDay; d++) {
  const qs = days[d].map(id => B.byId[id]);
  for (let i = 0; i < qs.length; i++) for (let j = i + 1; j < qs.length; j++) if (B.conflict(qs[i], qs[j])) clashes++;
  days[d].forEach(id => { if (seenAt.has(id)) minGap = Math.min(minGap, d - seenAt.get(id)); seenAt.set(id, d); });
}
console.log(`Planning: dag 1 t/m ${lastDay} (vandaag is dag ${today}, dagen t/m ${keepUntil} liggen vast)`);
console.log(`Een vraag komt ten vroegste na ${minGap} dagen terug · botsingen binnen een dag: ${clashes}`);
console.log(`Bestand: data/schedule.js (${Math.round(out.length / 1024)} kB, ${registry.length} vragen)`);
