/* ─────────────────────────────────────────────────────────────
   Brillion · de motor
   Alles wat geen scherm is: categorieën, vragen inlezen,
   antwoorden nakijken, punten, niveaus, bergen en de planning
   van de dagelijkse beklimming.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = (global.Brillion = global.Brillion || {});

  /* ── Instellingen van het spel ───────────────────────────── */
  B.CONFIG = {
    version: '1.0.0',
    perRound: 8,            // vragen per ronde
    seconds: 20,            // seconden per vraag
    launch: '2026-11-02',   // dag van Beklimming #1
    everestAt: 720,         // zoveel punten = top van de Everest
    everestHeight: 8849
  };

  /* ── Categorieën ─────────────────────────────────────────── */
  B.CATEGORIES = [
    { id: 'geo',      icon: '🌍', nl: 'Aardrijkskunde',    en: 'Geography' },
    { id: 'sport',    icon: '⚽', nl: 'Sport',             en: 'Sports' },
    { id: 'film',     icon: '🎬', nl: 'Film & tv',         en: 'Film & TV' },
    { id: 'music',    icon: '🎵', nl: 'Muziek',            en: 'Music' },
    { id: 'games',    icon: '🎮', nl: 'Games & strips',    en: 'Games & comics' },
    { id: 'science',  icon: '🔬', nl: 'Wetenschap',        en: 'Science' },
    { id: 'food',     icon: '🍝', nl: 'Eten & drinken',    en: 'Food & drink' },
    { id: 'nature',   icon: '🌲', nl: 'Natuur',            en: 'Nature' },
    { id: 'belgium',  icon: '🇧🇪', nl: 'België',            en: 'Belgium' },
    { id: 'business', icon: '💼', nl: 'Business & merken', en: 'Business & brands' },
    { id: 'history',  icon: '🏛️', nl: 'Geschiedenis',      en: 'History' },
    { id: 'language', icon: '🔤', nl: 'Taal',              en: 'Language' }
  ];
  B.catById = {};
  B.CATEGORIES.forEach(c => (B.catById[c.id] = c));

  /* ── Zeldzaamheidsniveaus (zoals loot in games) ──────────── */
  B.TIERS = [
    { id: 'common',    nl: 'Gewoon',       en: 'Common',    emoji: '⬜', max: 20 },
    { id: 'uncommon',  nl: 'Ongewoon',     en: 'Uncommon',  emoji: '🟩', max: 40 },
    { id: 'rare',      nl: 'Zeldzaam',     en: 'Rare',      emoji: '🟦', max: 60 },
    { id: 'epic',      nl: 'Episch',       en: 'Epic',      emoji: '🟪', max: 80 },
    { id: 'legendary', nl: 'Legendarisch', en: 'Legendary', emoji: '🟧', max: 100 }
  ];
  B.WRONG_EMOJI = '⬛';
  B.tierOf = score => B.TIERS.findIndex(t => score <= t.max);

  /* ── Bergen: je eindscore wordt een top ──────────────────── */
  B.MOUNTAINS = [
    { h: 0,    nl: 'het dal',               en: 'the valley',           c: '' },
    { h: 156,  nl: 'de Kemmelberg',         en: 'Kemmelberg',           c: 'BE' },
    { h: 322,  nl: 'de Vaalserberg',        en: 'Vaalserberg',          c: 'NL' },
    { h: 694,  nl: 'het Signaal van Botrange', en: 'Signal de Botrange', c: 'BE' },
    { h: 1345, nl: 'de Ben Nevis',          en: 'Ben Nevis',            c: 'GB' },
    { h: 1909, nl: 'de Mont Ventoux',       en: 'Mont Ventoux',         c: 'FR' },
    { h: 2962, nl: 'de Zugspitze',          en: 'the Zugspitze',        c: 'DE' },
    { h: 3798, nl: 'de Großglockner',       en: 'the Grossglockner',    c: 'AT' },
    { h: 4478, nl: 'de Matterhorn',         en: 'the Matterhorn',       c: 'CH' },
    { h: 4806, nl: 'de Mont Blanc',         en: 'Mont Blanc',           c: 'FR' },
    { h: 5642, nl: 'de Elbroes',            en: 'Mount Elbrus',         c: 'RU' },
    { h: 5895, nl: 'de Kilimanjaro',        en: 'Kilimanjaro',          c: 'TZ' },
    { h: 6190, nl: 'de Denali',             en: 'Denali',               c: 'US' },
    { h: 6961, nl: 'de Aconcagua',          en: 'Aconcagua',            c: 'AR' },
    { h: 8091, nl: 'de Annapurna',          en: 'Annapurna',            c: 'NP' },
    { h: 8611, nl: 'de K2',                 en: 'K2',                   c: 'PK' },
    { h: 8849, nl: 'de Mount Everest',      en: 'Mount Everest',        c: 'NP' }
  ];
  /* Naam zonder lidwoord ("de Mont Blanc" → "Mont Blanc") voor korte labels */
  B.peakName = (m, lang) => (lang === 'nl' ? m.nl.replace(/^(de|het) /, '') : m.en.replace(/^the /, ''));
  B.altitudeFor = points =>
    Math.min(B.CONFIG.everestHeight, Math.round((points / B.CONFIG.everestAt) * B.CONFIG.everestHeight));
  B.mountainIndexFor = alt => {
    let idx = 0;
    B.MOUNTAINS.forEach((m, i) => { if (alt >= m.h) idx = i; });
    return idx;
  };

  /* ── Teksten normaliseren voor het nakijken ──────────────── */
  const ARTICLES = new Set(['the', 'de', 'het', 'een', 'a', 'an', 'la', 'le', 'les', 'l', 'el', 'los', 'las', 'il', 'lo', 'gli', 'der', 'die', 'das', 't']);
  const CONNECTORS = new Set(['and', 'en', 'und', 'et', 'y', 'e']);
  const SAINTS = new Set(['st', 'sint', 'saint', 'sankt', 'ste', 'sainte']);
  const ROMAN = {};
  ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi', 'xvii', 'xviii', 'xix', 'xx',
   'xxi', 'xxii', 'xxiii', 'xxiv', 'xxv'].forEach((r, i) => (ROMAN[r] = String(i + 1)));

  /* Maakt van een antwoord een "sleutel": kleine letters, geen accenten,
     geen spaties of leestekens. "Côte d'Ivoire" → "cotedivoire" */
  B.normalize = function (text) {
    let s = String(text == null ? '' : text).toLowerCase().trim();
    s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    s = s.replace(/ß/g, 'ss').replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/ø/g, 'o')
         .replace(/ł/g, 'l').replace(/đ/g, 'd').replace(/ð/g, 'd').replace(/þ/g, 'th').replace(/ı/g, 'i');
    s = s.replace(/♀/g, ' female ').replace(/♂/g, ' male ');
    s = s.replace(/c\+\+/g, ' cplusplus ').replace(/c#/g, ' csharp ').replace(/f#/g, ' fsharp ').replace(/\.net\b/g, ' dotnet ');
    s = s.replace(/&/g, ' and ').replace(/\+/g, ' plus ').replace(/['’`´]/g, '');
    let words = s.split(/[^a-z0-9]+/).filter(Boolean);
    while (words.length > 1 && ARTICLES.has(words[0])) words.shift();
    words = words.map(w => (SAINTS.has(w) ? 'saint' : ROMAN[w] || w));
    words = words.filter((w, i) => !(i > 0 && i < words.length - 1 && CONNECTORS.has(w)));
    return words.join('');
  };

  /* Afstand tussen twee woorden (tikfouten tellen, ook 2 letters omgewisseld).
     Stopt vroeg zodra het verschil groter wordt dan "max". */
  function editDistance(a, b, max) {
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > max) return max + 1;
    let r0 = new Array(lb + 1), r1 = new Array(lb + 1), r2 = new Array(lb + 1);
    for (let j = 0; j <= lb; j++) r1[j] = j;
    for (let i = 1; i <= la; i++) {
      r2[0] = i;
      let rowMin = i;
      for (let j = 1; j <= lb; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(r1[j] + 1, r2[j - 1] + 1, r1[j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, r0[j - 2] + 1);
        r2[j] = v;
        if (v < rowMin) rowMin = v;
      }
      if (rowMin > max) return max + 1;
      const tmp = r0; r0 = r1; r1 = r2; r2 = tmp;
    }
    return r1[lb];
  }
  B.editDistance = editDistance;

  /* Hoeveel tikfouten mogen er zijn voor een woord van deze lengte? */
  function allowedTypos(len) {
    if (len <= 4) return 0;
    if (len <= 7) return 1;
    if (len <= 11) return 2;
    return 3;
  }
  const digitsOf = s => s.replace(/[^0-9]/g, '');
  const isSwap = (a, b) => {
    if (a.length !== b.length) return false;
    const diff = [];
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) diff.push(i);
    return diff.length === 2 && diff[1] === diff[0] + 1 && a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]];
  };

  /* ── Vragen inlezen ──────────────────────────────────────── */
  B.questions = [];
  B.byId = {};
  B.globalKeys = new Map(); // sleutel → aantal vragen waarin die voorkomt

  /* Antwoordtekst → lijst. Formaat: "NL|EN|alias|alias; volgend antwoord; ..."
     Een leeg EN-veld betekent: zelfde naam in het Engels. */
  B.parseAnswers = function (text) {
    return String(text)
      .split(/[;\n]/)
      .map(s => s.trim())
      .filter(Boolean)
      .map(s => s.split('|').map(x => x.trim()));
  };

  /* Punten volgens de plaats in de lijst: eerste (meest gegeven) = 1, laatste = 100 */
  B.scoreForRank = (rank, total) =>
    total <= 1 ? 50 : Math.round(1 + 99 * Math.pow(rank / (total - 1), 0.7));

  /* Vragen toevoegen. Elke vraag: { id, nl, en, a } waarbij a een tekst of
     een lijst van [NL, EN, aliassen...] is, gesorteerd van gewoon naar zeldzaam. */
  B.addQuestions = function (cat, list) {
    list.forEach(def => {
      const raw = typeof def.a === 'string' ? B.parseAnswers(def.a) : def.a;
      const answers = [];
      const keyMap = new Map();
      raw.forEach(names => {
        const nl = names[0];
        const en = names[1] ? names[1] : nl;
        const entry = { nl, en, rank: answers.length, keys: [] };
        const all = [nl, en].concat(names.slice(2));
        all.forEach((name, i) => {
          if (!name) return;
          const key = B.normalize(name);
          if (!key) return;
          if (!entry.keys.includes(key)) entry.keys.push(key);
          if (!keyMap.has(key)) keyMap.set(key, { entry, via: i === 0 ? 'nl' : i === 1 ? 'en' : 'alias' });
        });
        answers.push(entry);
      });
      answers.forEach(e => {
        e.score = B.scoreForRank(e.rank, answers.length);
        e.tier = B.tierOf(e.score);
      });
      const q = { id: cat + '-' + def.id, cat, nl: def.nl, en: def.en, answers, keyMap };
      if (B.byId[q.id]) console.warn('Dubbele vraag-id:', q.id);
      B.questions.push(q);
      B.byId[q.id] = q;
      new Set(keyMap.keys()).forEach(k => B.globalKeys.set(k, (B.globalKeys.get(k) || 0) + 1));
    });
  };

  B.totalAnswers = () => B.questions.reduce((s, q) => s + q.answers.length, 0);

  /* ── Een antwoord nakijken ───────────────────────────────── */
  B.check = function (q, input, lang) {
    const key = B.normalize(input);
    if (!key) return { ok: false, empty: true };

    const result = hit => {
      const shownIn = lang === 'en' ? 'en' : 'nl';
      const other = shownIn === 'nl' ? 'en' : 'nl';
      const translated = hit.typo ? false :
        hit.via === other && B.normalize(hit.entry[other]) !== B.normalize(hit.entry[shownIn]);
      return { ok: true, entry: hit.entry, typo: !!hit.typo, translated };
    };

    // 1. precies juist (of een gekende alternatieve naam)
    const exact = q.keyMap.get(key);
    if (exact) return result(exact);

    // 2. enkelvoud / meervoud
    const variants = [];
    if (key.length > 4) {
      if (key.endsWith('s')) variants.push(key.slice(0, -1));
      if (key.endsWith('en') || key.endsWith('es')) variants.push(key.slice(0, -2));
    }
    variants.push(key + 's', key + 'en', key + 'es', key + 'n');
    for (const v of variants) {
      const hit = q.keyMap.get(v);
      if (hit) return result(hit);
    }

    // 3. is het een echt bestaand antwoord van een ándere vraag? Dan is het fout,
    //    en verbeteren we het niet naar iets dat er toevallig op lijkt.
    if (B.globalKeys.has(key)) return { ok: false };

    // 4. tikfouten verbeteren
    let best = null, bestD = Infinity;
    for (const [k, hit] of q.keyMap) {
      const minLen = Math.min(k.length, key.length);
      const max = allowedTypos(minLen);
      if (digitsOf(k) !== digitsOf(key)) continue;
      let d;
      if (max === 0) {
        if (minLen === 4 && isSwap(key, k)) d = 1; else continue;
      } else {
        d = editDistance(key, k, max);
        if (d > max) continue;
      }
      if (d < bestD || (d === bestD && hit.entry.rank < best.entry.rank)) { best = hit; bestD = d; }
    }
    if (best) return result({ entry: best.entry, via: best.via, typo: true });
    return { ok: false };
  };

  /* ── Toevalsgetallen met een vast zaadje (voor de dagplanning) ── */
  function hashString(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  }
  B.rng = function (seed) {
    let a = hashString(String(seed));
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  B.shuffle = function (arr, rand) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /* ── Datums ──────────────────────────────────────────────── */
  const pad = n => String(n).padStart(2, '0');
  B.dateStr = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  B.todayStr = () => B.dateStr(new Date());
  const utcDay = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };
  B.dayNumber = (dateString = B.todayStr()) => utcDay(dateString) - utcDay(B.CONFIG.launch) + 1;
  B.dateForDay = n => {
    const t = (utcDay(B.CONFIG.launch) + n - 1) * 864e5;
    const d = new Date(t);
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
  };

  /* ── Planning van de dagelijkse beklimming ───────────────── *
     Alle vragen krijgen één vaste volgorde. Elke categorie wordt gelijkmatig
     over die volgorde verspreid. Dag 1 krijgt plaats 1-8, dag 2 plaats 9-16, …
     Zo komt een vraag pas terug als alle andere vragen geweest zijn
     (bij 152 vragen: na 19 dagen). */
  let orderCache = null;
  B.dailyOrder = function () {
    if (orderCache && orderCache.n === B.questions.length) return orderCache.ids;
    const placed = [];
    B.CATEGORIES.forEach((cat, ci) => {
      const qs = B.questions.filter(q => q.cat === cat.id).sort((a, b) => (a.id < b.id ? -1 : 1));
      const rand = B.rng('brillion-order-' + cat.id);
      const mixed = B.shuffle(qs, rand);
      const offset = rand();
      mixed.forEach((q, k) => placed.push({ id: q.id, pos: (k + offset) / mixed.length, ci }));
    });
    placed.sort((a, b) => a.pos - b.pos || a.ci - b.ci);
    orderCache = { n: B.questions.length, ids: placed.map(p => p.id) };
    return orderCache.ids;
  };
  B.dailyQuestionIds = function (day) {
    const order = B.dailyOrder();
    const n = order.length, per = B.CONFIG.perRound;
    const start = (((day - 1) * per) % n + n) % n;
    return Array.from({ length: per }, (_, i) => order[(start + i) % n]);
  };

  /* ── Vragen kiezen voor Onbeperkt en Per categorie ───────── *
     Eerst vragen die je nog nooit zag, dan de vragen die je het langst
     geleden zag. Vragen van de dagelijkse beklimming van vandaag en de
     komende dagen schuiven achteraan, zodat je ze niet dubbel krijgt. */
  B.pickQuestions = function ({ cat = null, seen = {}, count = B.CONFIG.perRound, today = B.dayNumber() } = {}) {
    const exclude = new Set(B.dailyQuestionIds(today));
    const upcoming = new Set();
    for (let d = today + 1; d <= today + 7; d++) B.dailyQuestionIds(d).forEach(id => upcoming.add(id));
    let pool = B.questions.filter(q => (!cat || q.cat === cat) && !exclude.has(q.id));
    if (pool.length < count) pool = B.questions.filter(q => !cat || q.cat === cat);
    const now = Date.now();
    const keyed = pool.map(q => ({ q, k: Math.max(seen[q.id] || 0, upcoming.has(q.id) ? now : 0), r: Math.random() }));
    keyed.sort((a, b) => a.k - b.k || a.r - b.r);
    const picked = [], perCat = {};
    for (const x of keyed) {
      if (picked.length >= count) break;
      if (!cat && (perCat[x.q.cat] || 0) >= 2) continue;
      picked.push(x.q);
      perCat[x.q.cat] = (perCat[x.q.cat] || 0) + 1;
    }
    for (const x of keyed) {
      if (picked.length >= count) break;
      if (!picked.includes(x.q)) picked.push(x.q);
    }
    return B.shuffle(picked, Math.random).map(q => q.id);
  };
})(typeof window !== 'undefined' ? window : globalThis);
