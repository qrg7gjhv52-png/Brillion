/* ─────────────────────────────────────────────────────────────
   Brillion · de motor
   Alles wat geen scherm is: categorieën, vragen inlezen,
   antwoorden nakijken, klassen, moeilijkheid, bergen en de
   planning van de dagelijkse beklimming.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = (global.Brillion = global.Brillion || {});

  /* ── Instellingen van het spel ───────────────────────────── */
  B.CONFIG = {
    version: '2.3.0',
    tierCap: 50,          // de 50 bekendste antwoorden bepalen de klassen
    perRound: 8,            // vragen per ronde
    seconds: 20,            // seconden per vraag
    launch: '2026-11-02',   // dag van Beklimming #1
    everestHeight: 8849     // de top van de Mount Everest (m)
  };

  /* ── Categorieën ─────────────────────────────────────────── */
  B.CATEGORIES = [
    { id: 'geo',      icon: '🌍', nl: 'Landen & hoofdsteden',    en: 'Countries & capitals' },
    { id: 'earth',    icon: '🗺️', nl: 'Aardrijkskunde',          en: 'Geography' },
    { id: 'history',  icon: '🏛️', nl: 'Geschiedenis & politiek', en: 'History & politics' },
    { id: 'science',  icon: '🔬', nl: 'Wetenschap & lichaam',    en: 'Science & the body' },
    { id: 'nature',   icon: '🌲', nl: 'Natuur & eten',           en: 'Nature & food' },
    { id: 'language', icon: '🔤', nl: 'Taal',                    en: 'Language' },
    { id: 'sport',    icon: '⚽', nl: 'Sport',                   en: 'Sports' },
    { id: 'culture',  icon: '🎭', nl: 'Cultuur',                 en: 'Culture' },
    { id: 'life',     icon: '🏠', nl: 'Alledaags',               en: 'Everyday life' },
    { id: 'letters',  icon: '🔠', nl: 'Letterspel',              en: 'Letter games' }
  ];
  B.catById = {};
  B.CATEGORIES.forEach(c => (B.catById[c.id] = c));

  /* ── Moeilijkheid van een vraag ──────────────────────────── */
  B.LEVELS = [
    { id: 1, icon: '🟢', nl: 'Makkelijk', en: 'Easy' },
    { id: 2, icon: '🟡', nl: 'Gemiddeld', en: 'Medium' },
    { id: 3, icon: '🔴', nl: 'Moeilijk',  en: 'Hard' }
  ];
  /* De dagelijkse beklimming wordt moeilijker naarmate je hoger klimt */
  B.DAILY_MIX = [1, 1, 1, 1, 2, 2, 2, 3];

  /* ── De 5 klassen ────────────────────────────────────────────
     De antwoorden van elke vraag staan van vaak genoemd naar
     zeldzaam. Ze worden in 5 even grote delen verdeeld (elk 20%).
     Elke klasse laat je een vast aantal meter klimmen. */
  B.TIERS = [
    { id: 'common',   nl: 'Gewoon',          en: 'Common',          emoji: '⬜', meters: 250 },
    { id: 'uncommon', nl: 'Ongewoon',        en: 'Uncommon',        emoji: '🟩', meters: 500 },
    { id: 'rare',     nl: 'Zeldzaam',        en: 'Rare',            emoji: '🟦', meters: 750 },
    { id: 'epic',     nl: 'Episch',          en: 'Epic',            emoji: '🟪', meters: 1000 },
    { id: 'brillion', nl: '1 in a Brillion', en: '1 in a Brillion', emoji: '💎', meters: 1250 }
  ];
  B.WRONG_EMOJI = '⬛';
  /* Klasse van het antwoord op plaats "rank" in een lijst van n antwoorden */
  B.tierForRank = (rank, n) => Math.max(0, Math.min(4, Math.floor((rank * 5) / Math.max(1, n))));
  /* Klasse uit bewaarde meters (oude rondes met punten 1-100 worden ook nog begrepen) */
  B.tierOf = value => {
    const byMeters = B.TIERS.findIndex(t => t.meters === value);
    if (byMeters >= 0) return byMeters;
    return Math.max(0, Math.min(4, Math.ceil(value / 20) - 1));
  };

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
  /* Hoogte = alle geklommen meters samen (de Everest is het maximum) */
  B.altitudeFor = meters => Math.min(B.CONFIG.everestHeight, Math.round(meters));
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
    s = s.replace(/\b([a-z])-(?=[a-z])/g, '$1');   // T-shirt, e-mail, X-ray: de letter hoort bij het woord
    s = s.replace(/&/g, ' and ').replace(/\+/g, ' plus ').replace(/['’`´]/g, '');
    let words = s.split(/[^a-z0-9]+/).filter(Boolean);
    while (words.length > 1 && ARTICLES.has(words[0])) words.shift();
    // Romeinse cijfers → gewone cijfers ("Rocky IV" = "Rocky 4"), maar niet als eerste woord
    // ("X-ray", "I Will Survive") en een losse letter (i, v, x) enkel als laatste woord ("Karel V")
    const last = words.length - 1;
    words = words.map((w, i) => {
      if (SAINTS.has(w)) return 'saint';
      if (ROMAN[w] && i > 0 && (w.length > 1 || i === last)) return ROMAN[w];
      return w;
    });
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

  /* Hoeveel tikfouten mogen er zijn om nog een voorstel te doen? */
  function allowedTypos(len) {
    if (len <= 2) return 0;
    if (len <= 5) return 1;
    if (len <= 8) return 2;
    if (len <= 12) return 3;
    return 4;
  }
  const digitsOf = s => s.replace(/[^0-9]/g, '');

  /* Klanksleutel: woorden die hetzelfde klinken krijgen dezelfde sleutel.
     "Tsjaikofski" en "Tsjaikovski" → "tjaikofski", "Philippijnen" = "Filipijnen". */
  B.phonetic = function (key) {
    return String(key)
      .replace(/^y(?=[aeiou])/, 'j').replace(/qu/g, 'kw').replace(/ow/g, 'au')
      .replace(/tsch|tsj|tch/g, 'tj').replace(/sch/g, 'sk').replace(/ph/g, 'f')
      .replace(/sh|sj/g, 'sj').replace(/ck|qu|q/g, 'k')
      .replace(/c(?=[eiy])/g, 's').replace(/c/g, 'k')
      .replace(/x/g, 'ks').replace(/z/g, 's')
      .replace(/ij|ei|ey|ie|y/g, 'i').replace(/ae/g, 'e')
      .replace(/oe|oo/g, 'u').replace(/ou/g, 'au')
      .replace(/w/g, 'v').replace(/v/g, 'f')
      .replace(/(.)h/g, '$1')
      .replace(/dt$|d$/g, 't')
      .replace(/(.)\1+/g, '$1');
  };

  /* Woorden die te algemeen zijn om op te zoeken ("Noord", "Republiek", ...) */
  const STOP = new Set(('saint sint noord zuid oost west north south east nieuw nieuwe new republiek republic koninkrijk kingdom ' +
    'verenigd verenigde united grote groot kleine klein great little island islands eiland eilanden city stad mount mont monte ' +
    'lake meer river rivier zee sea golf gulf nationaal national federale federal democratische democratic peoples volksrepubliek ' +
    'staat state states union unie centraal central kaap cape port puerto porto fort santa santo sao del della van von der den des ' +
    'het the and with from voor met over part deel episode film movie spel game club vitamine vitamin').split(' '));
  const wordsOf = text => String(text).split(/[\s\-–—\/,:;()'’.&+!?*]+/).map(w => B.normalize(w)).filter(w => w.length >= 4 && !STOP.has(w) && !/^\d+$/.test(w));

  /* ── Vragen inlezen ──────────────────────────────────────── */
  /* ── Letterspel ──────────────────────────────────────────────
     Een vraag kan een letterregel hebben, bv. "begint met een B".
     Elke taal heeft een eigen lijst. De klassen (Gewoon … 1 in a Brillion)
     komen van de antwoorden waarvan de naam in jouw taal past. Past enkel een
     andere naam (Groot-Brittannië bij een G, Butterfly bij een B)? Dan telt
     dat ook, met de klasse die bij zijn plaats in de lijst hoort.
     De naam die je typt, moet zelf altijd passen. */
  B.letters = function (text) {
    let s = String(text == null ? '' : text).toLowerCase().trim();
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
         .replace(/ß/g, 'ss').replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/ø/g, 'o').replace(/ł/g, 'l');
    const words = s.split(/[^a-z]+/).filter(Boolean);
    while (words.length > 1 && ['de', 'het', 'een', 'the', 'a', 'an'].includes(words[0])) words.shift();
    return words.join('');
  };
  B.RULES = {
    starts: (w, x) => w.startsWith(x),
    contains: (w, x) => w.includes(x),
    ends: (w, x) => w.endsWith(x),
    len: (w, n) => w.length === n,
    double: w => /([a-z])\1/.test(w)
  };
  B.ruleOk = (rule, text) => { const w = B.letters(text); return !!w && !!B.RULES[rule.type] && B.RULES[rule.type](w, rule.v); };
  /* Past de gewone naam van dit antwoord in deze taal bij de regel? */
  B.ruleFits = (names, rule, lang) => B.ruleOk(rule, lang === 'en' ? names[1] || names[0] : names[0]);
  /* De lijst van een letterspel in één taal:
     main  = antwoorden waarvan de gewone naam past (die bepalen de klassen)
     extra = antwoorden waarvan enkel een andere naam past, met hun plaats (pos)
             tussen de gewone antwoorden; de passende naam komt vooraan */
  B.ruleList = function (raw, rule, lang) {
    const main = [], extra = [];
    raw.forEach(names => {
      if (B.ruleFits(names, rule, lang)) { main.push(names); return; }
      const nl = names[0], en = names[1] || names[0];
      const order = (lang === 'en' ? [en, nl] : [nl, en]).concat(names.slice(2));
      const fit = order.find(n => n && B.ruleOk(rule, n));
      if (!fit) return;
      const rest = names.slice(2).filter(n => n && n !== fit);
      extra.push({ names: lang === 'en' ? [nl, fit, en].concat(rest) : [fit, en, nl].concat(rest), pos: main.length });
    });
    return { main, extra };
  };

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

  /* Vragen toevoegen. Elke vraag: { id, lvl, nl, en, a } waarbij lvl de moeilijkheid
     is (1 = makkelijk, 2 = gemiddeld, 3 = moeilijk) en a een tekst of een lijst van
     [NL, EN, aliassen...], gesorteerd van vaak genoemd naar zeldzaam. */
  /* Lijst van namen → antwoorden (met klasse en meters) + zoektabellen om na te kijken.
     tierPos/tierN (enkel bij een letterspel): de plaats en lijstlengte waarmee de klasse
     berekend wordt. */
  function buildAnswers(raw, tierPos, tierN) {
    const answers = [];
    const keyMap = new Map();
    const tokenMap = new Map(); // los woord → antwoorden waarin het voorkomt
    raw.forEach(names => {
      const nl = names[0];
      const en = names[1] ? names[1] : nl;
      const all = [nl, en].concat(names.slice(2));
      const entry = { nl, en, rank: answers.length, keys: [], names: all.filter(Boolean) };
      all.forEach((name, i) => {
        if (!name) return;
        const key = B.normalize(name);
        if (!key) return;
        if (!entry.keys.includes(key)) entry.keys.push(key);
        if (!keyMap.has(key)) keyMap.set(key, { entry, via: i === 0 ? 'nl' : i === 1 ? 'en' : 'alias', phon: B.phonetic(key) });
        wordsOf(name).forEach(w => {
          if (!tokenMap.has(w)) tokenMap.set(w, new Set());
          tokenMap.get(w).add(entry);
        });
      });
      answers.push(entry);
    });
    answers.forEach((e, i) => {
      // Enkel de bekendste antwoorden (B.CONFIG.tierCap) worden over de 5 klassen verdeeld.
      // Alles daarna is meteen "1 in a Brillion": zo moet je geen obscure namen kennen om hoog te scoren.
      const n = Math.min(tierPos ? tierN : answers.length, B.CONFIG.tierCap);
      e.tier = B.tierForRank(tierPos ? tierPos[i] : e.rank, n);
      e.score = B.TIERS[e.tier].meters;   // "score" = zoveel meter klim je met dit antwoord
    });
    return { answers, keyMap, tokenMap };
  }

  B.addQuestions = function (cat, list) {
    list.forEach(def => {
      const raw = typeof def.a === 'string' ? B.parseAnswers(def.a) : def.a;
      const lvl = [1, 2, 3].includes(def.lvl) ? def.lvl : 2;
      const q = { id: cat + '-' + def.id, cat, lvl, lvlGiven: lvl === def.lvl, nl: def.nl, en: def.en };
      let keys;
      if (def.rule) {
        // Letterspel: een lijst per taal. q.answers geeft altijd de lijst van de taal waarin je speelt.
        const make = lang => {
          const { main, extra } = B.ruleList(raw, def.rule, lang);
          const pos = main.map((_, i) => i).concat(extra.map(x => x.pos));
          const built = buildAnswers(main.concat(extra.map(x => x.names)), pos, Math.max(1, main.length));
          built.answers.slice(main.length).forEach(e => (e.extra = true));   // telt via een andere naam
          return built;
        };
        const L = { nl: make('nl'), en: make('en') };
        const cur = () => L[B.lang === 'en' ? 'en' : 'nl'];
        Object.defineProperty(q, 'answers', { get: () => cur().answers, enumerable: true });
        Object.defineProperty(q, 'keyMap', { get: () => cur().keyMap });
        Object.defineProperty(q, 'tokenMap', { get: () => cur().tokenMap });
        q.byLang = L;
        q.rule = def.rule;
        q.base = def.base || '';
        // alle namen uit de volledige lijst: zo weten we dat "Olifant" wel een dier is, maar niet met een B
        q.baseNames = new Set();
        raw.forEach(names => names.forEach(n => { const k = n && B.normalize(n); if (k) q.baseNames.add(k); }));
        keys = new Set([...L.nl.keyMap.keys(), ...L.en.keyMap.keys()]);
      } else {
        Object.assign(q, buildAnswers(raw));
        keys = new Set(q.keyMap.keys());
      }
      if (B.byId[q.id]) console.warn('Dubbele vraag-id:', q.id);
      B.questions.push(q);
      B.byId[q.id] = q;
      keys.forEach(k => B.globalKeys.set(k, (B.globalKeys.get(k) || 0) + 1));
    });
  };

  /* Het antwoord op plaats "rank" (bij een letterspel: in de lijst van de taal waarin je speelde) */
  B.entryAt = function (q, rank, lang) {
    if (!q || rank == null || rank < 0) return null;
    const list = q.byLang ? q.byLang[(lang || B.lang) === 'en' ? 'en' : 'nl'].answers : q.answers;
    return list[rank] || null;
  };

  B.totalAnswers = () => B.questions.reduce((s, q) => s + q.answers.length, 0);

  /* Andere vormen van hetzelfde woord: meervoud, enkelvoud en verkleinwoord.
     "Aardbeien" → aardbei, "peren" → peer, "katten" → kat, "tomaatjes" → tomaat,
     "cherries" → cherry. Enkel als zo'n vorm precies een antwoord is, telt het. */
  B.variants = function (key) {
    const v = [];
    if (key.length > 4) {
      if (key.endsWith('s')) v.push(key.slice(0, -1));
      if (key.endsWith('en') || key.endsWith('es')) v.push(key.slice(0, -2));
      ['etjes', 'etje', 'tjes', 'tje', 'pjes', 'pje', 'jes', 'je'].forEach(suf => {
        if (key.endsWith(suf) && key.length - suf.length >= 3) v.push(key.slice(0, -suf.length));
      });
      if (key.endsWith('ies')) v.push(key.slice(0, -3) + 'y');
      if (key.endsWith('ves')) v.push(key.slice(0, -3) + 'f', key.slice(0, -3) + 'fe');
      if (key.endsWith('en')) {
        const stem = key.slice(0, -2);
        v.push(stem.replace(/([aeou])([^aeiouy])$/, '$1$1$2'));   // peren → peer, bomen → boom
        v.push(stem.replace(/([^aeiouy])\1$/, '$1'));             // katten → kat
        v.push(stem.replace(/v$/, 'f'), stem.replace(/z$/, 's'));   // duiven → duif, huizen → huis
      }
      if (key.endsWith('eren')) v.push(key.slice(0, -4));        // kinderen → kind, eieren → ei
    }
    v.push(key + 's', key + 'en', key + 'es', key + 'n');
    return [...new Set(v)].filter(x => x && x !== key);
  };

  /* ── Een antwoord nakijken ───────────────────────────────── *
     Juist (ook in de andere taal, of enkelvoud/meervoud) → meteen goed.
     Bijna juist → tot 3 voorstellen ("Bedoelde je …?"), de speler kiest. */
  B.check = function (q, input, lang) {
    const key = B.normalize(input);
    if (!key) return { ok: false, empty: true, suggestions: [] };

    const result = hit => {
      const shownIn = lang === 'en' ? 'en' : 'nl';
      const other = shownIn === 'nl' ? 'en' : 'nl';
      const translated = hit.via === other && B.normalize(hit.entry[other]) !== B.normalize(hit.entry[shownIn]);
      return { ok: true, entry: hit.entry, typo: false, translated, suggestions: [] };
    };

    // Letterspel: een bestaand antwoord dat niet past bij de regel ("Frankrijk" bij "begint met B")
    const ruleFail = entry => ({ ok: false, ruleFail: true, entry: entry || null, suggestions: [] });

    // 1. precies juist (of een gekende alternatieve naam)
    const exact = q.keyMap.get(key);
    if (exact) return q.rule && !B.ruleOk(q.rule, input) ? ruleFail(exact.entry) : result(exact);

    // 2. enkelvoud / meervoud / verkleinwoord
    const variants = B.variants(key);
    for (const v of variants) {
      const hit = q.keyMap.get(v);
      if (hit) return q.rule && !B.ruleOk(q.rule, input) ? ruleFail(hit.entry) : result(hit);
    }
    if (q.baseNames && [key].concat(variants).some(x => q.baseNames.has(x))) return ruleFail(null);

    // 3. is het een echt bestaand antwoord van een ándere vraag? Dan is het fout,
    //    en stellen we niets voor dat er toevallig op lijkt.
    if (B.globalKeys.has(key)) return { ok: false, suggestions: [] };

    // 4. voorstellen zoeken
    return { ok: false, suggestions: B.suggest(q, input, key) };
  };

  /* Zoekt de antwoorden die het dichtst bij de invoer liggen. Lager cijfer = beter. */
  B.suggest = function (q, input, key = B.normalize(input)) {
    const found = new Map();
    const add = (entry, quality) => {
      const prev = found.get(entry);
      if (prev === undefined || quality < prev) found.set(entry, quality);
    };
    const digits = digitsOf(key);
    const phon = B.phonetic(key);
    for (const [k, hit] of q.keyMap) {
      if (digitsOf(k) !== digits) continue;
      // a. tikfouten (letters vergeten, te veel, verkeerd of omgewisseld)
      const max = allowedTypos(Math.min(k.length, key.length));
      if (max > 0) {
        const d = editDistance(key, k, max);
        if (d <= max) add(hit.entry, d);
      }
      // b. klankfouten (schrijven zoals je het hoort)
      if (key.length >= 4) {
        if (hit.phon === phon) add(hit.entry, 0.5);
        else if (phon.length >= 5 && Math.abs(hit.phon.length - phon.length) <= 1 && editDistance(phon, hit.phon, 1) <= 1) add(hit.entry, 1.5);
        else if (phon.length >= 9 && editDistance(phon, hit.phon, 2) <= 2) add(hit.entry, 2.2);
      }
      // c. maar het begin van de naam ("Kopenh" → Kopenhagen), eventueel met 1 tikfout
      if (key.length >= 4 && k.length > key.length && key.length >= k.length * 0.5) {
        if (k.startsWith(key)) add(hit.entry, 1.2);
        else if (key.length >= 6 && editDistance(key, k.slice(0, key.length), 1) <= 1) add(hit.entry, 1.8);
      }
    }
    // d. een andere vorm van het woord met een tikfout ("aardbeijen", "tomaatjes")
    for (const v of B.variants(key)) {
      if (v.length < 4) continue;
      for (const [k, hit] of q.keyMap) {
        if (Math.abs(k.length - v.length) <= 1 && editDistance(v, k, 1) <= 1) add(hit.entry, 1.4);
      }
    }
    // e. een deel van de naam ("Bosnië" → Bosnië en Herzegovina, "Hazard" → Eden Hazard), ook met tikfouten
    const words = wordsOf(input);
    if (words.length) {
      const sets = words.map(w => {
        const set = new Set(q.tokenMap.get(w) || []);
        if (w.length >= 5) {
          const max = w.length >= 9 ? 2 : 1;
          for (const [t, entries] of q.tokenMap) {
            if (Math.abs(t.length - w.length) <= max && editDistance(w, t, max) <= max) entries.forEach(e => set.add(e));
          }
        }
        return set;
      });
      let common = sets[0];
      sets.slice(1).forEach(set => { common = new Set([...common].filter(e => set.has(e))); });
      common.forEach(e => add(e, 1));
    }
    return [...found.entries()]
      .sort((a, b) => a[1] - b[1] || a[0].rank - b[0].rank)
      .slice(0, 3)
      .map(x => x[0]);
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

  /* ── Vragen die te veel op elkaar lijken ─────────────────────
     Twee vragen "botsen" als minstens de helft van de antwoorden van de
     kleinste vraag ook bij de andere vraag hoort (bv. "Noem een land in
     Europa" en "Noem een EU-land"). Die komen nooit samen in één ronde. */
  const keySets = new WeakMap();
  const conflictCache = new Map();
  const allKeys = q => {
    if (!keySets.has(q)) { const set = new Set(); q.answers.forEach(e => e.keys.forEach(k => set.add(k))); keySets.set(q, set); }
    return keySets.get(q);
  };
  B.conflict = function (a, b) {
    if (!a || !b) return false;
    if (a.id === b.id) return true;
    if (a.base && a.base === b.base) return true;   // twee letterspellen met dezelfde lijst (bv. twee keer landen)
    const id = a.id < b.id ? a.id + '|' + b.id : b.id + '|' + a.id;
    if (conflictCache.has(id)) return conflictCache.get(id);
    const [small, big] = a.answers.length <= b.answers.length ? [a, b] : [b, a];
    const bigKeys = allKeys(big);
    let shared = 0;
    small.answers.forEach(e => { if (e.keys.some(k => bigKeys.has(k))) shared++; });
    const res = shared / Math.max(1, small.answers.length) >= 0.5;
    conflictCache.set(id, res);
    return res;
  };
  /* Kies uit een gesorteerde lijst kandidaten: geen dubbele vragen, geen botsingen,
     hoogstens 2 per categorie (als dat lukt). */
  function pickFrom(sorted, count, { perCatMax = 2, taken = [] } = {}) {
    const picked = [];
    const clash = q => taken.concat(picked).some(p => B.conflict(p, q));
    const catCount = c => taken.concat(picked).filter(p => p.cat === c).length;
    const steps = [
      q => catCount(q.cat) < perCatMax && !clash(q),
      q => !clash(q),
      q => !taken.concat(picked).some(p => p.id === q.id)
    ];
    for (const ok of steps) {
      for (const q of sorted) {
        if (picked.length >= count) return picked;
        if (picked.includes(q) || taken.includes(q)) continue;
        if (ok(q)) picked.push(q);
      }
    }
    return picked;
  }

  /* ── Planning van de dagelijkse beklimming ───────────────── *
     De planning staat vast in data/schedule.js (gemaakt door
     tools/make-schedule.mjs), zodat ze niet verandert als er vragen
     bijkomen. Voor dagen verder dan die planning rekent het spel zelf:
     per moeilijkheid krijgen alle vragen één vaste volgorde. */
  let orderCache = null;
  B.levelOrder = function (lvl) {
    if (!orderCache || orderCache.n !== B.questions.length) orderCache = { n: B.questions.length, byLvl: {} };
    if (orderCache.byLvl[lvl]) return orderCache.byLvl[lvl];
    const placed = [];
    B.CATEGORIES.forEach((cat, ci) => {
      const qs = B.questions.filter(q => q.cat === cat.id && q.lvl === lvl).sort((a, b) => (a.id < b.id ? -1 : 1));
      if (!qs.length) return;
      const rand = B.rng('brillion-order-' + lvl + '-' + cat.id);
      const mixed = B.shuffle(qs, rand);
      const offset = rand();
      mixed.forEach((q, k) => placed.push({ id: q.id, pos: (k + offset) / mixed.length, ci }));
    });
    placed.sort((a, b) => a.pos - b.pos || a.ci - b.ci);
    orderCache.byLvl[lvl] = placed.map(p => p.id);
    return orderCache.byLvl[lvl];
  };
  /* Zonder vaste planning: vraag k van niveau l op dag d, zonder botsingen */
  function computedDay(day) {
    const mix = B.DAILY_MIX, per = {}, used = {}, picked = [];
    mix.forEach(l => (per[l] = (per[l] || 0) + 1));
    mix.forEach(l => {
      const order = B.levelOrder(l), n = order.length;
      if (!n) return;
      for (let tries = 0; tries < n; tries++) {
        const k = used[l] = (used[l] || 0) + 1;
        const q = B.byId[order[((((day - 1) * per[l] + k - 1) % n) + n) % n]];
        if (q && !picked.some(p => p.id === q.id || B.conflict(p, q))) { picked.push(q); break; }
      }
    });
    return picked;
  }
  let scheduleCache = null;
  function scheduledDay(day) {
    const S = B.SCHEDULE;
    if (!S) return null;
    if (!scheduleCache) {
      const ids = S.ids.split(' ');
      scheduleCache = S.days.split(';').map(d => d.split(',').map(x => ids[parseInt(x, 36)]));
    }
    const list = scheduleCache[day - S.first];
    return list ? list.map(id => B.byId[id]).filter(Boolean) : null;
  }
  B.dailyQuestionIds = function (day) {
    let qs = scheduledDay(day);
    if (!qs) qs = computedDay(day);
    // Ontbreekt er een vraag (bv. weggehaald)? Dan aanvullen, zonder dubbels of botsingen.
    if (qs.length < B.CONFIG.perRound) {
      const extra = computedDay(day).concat(B.questions);
      qs = qs.concat(pickFrom(extra, B.CONFIG.perRound - qs.length, { taken: qs, perCatMax: 8 }));
    }
    const seen = new Set();
    return qs.filter(q => (seen.has(q.id) ? false : seen.add(q.id))).map(q => q.id).slice(0, B.CONFIG.perRound);
  };

  /* ── Vragen kiezen voor Onbeperkt en Per categorie ───────── *
     Eerst vragen die je nog nooit zag, dan de vragen die je het langst
     geleden zag. Vragen van de dagelijkse beklimming van vandaag en de
     komende dagen schuiven achteraan, zodat je ze niet dubbel krijgt.
     Nooit twee keer dezelfde vraag, nooit twee vragen die te veel op
     elkaar lijken. lvl = 1, 2 of 3 (Onbeperkt); zonder lvl: alle
     niveaus, van makkelijk naar moeilijk (Per categorie). */
  B.pickQuestions = function ({ cat = null, lvl = 0, seen = {}, count = B.CONFIG.perRound, today = B.dayNumber() } = {}) {
    const exclude = new Set(B.dailyQuestionIds(today));
    const upcoming = new Set();
    for (let d = today + 1; d <= today + 7; d++) B.dailyQuestionIds(d).forEach(id => upcoming.add(id));
    const fits = q => (!cat || q.cat === cat) && (!lvl || q.lvl === lvl);
    let pool = B.questions.filter(q => fits(q) && !exclude.has(q.id));
    if (pool.length < count) pool = B.questions.filter(fits);
    const now = Date.now();
    const keyed = pool.map(q => ({ q, k: Math.max(seen[q.id] || 0, upcoming.has(q.id) ? now : 0), r: Math.random() }));
    keyed.sort((a, b) => a.k - b.k || a.r - b.r);
    const picked = pickFrom(keyed.map(x => x.q), count, { perCatMax: cat ? 8 : 2 });
    const mixed = B.shuffle(picked, Math.random);
    if (!lvl) mixed.sort((a, b) => a.lvl - b.lvl);   // per categorie: steeds moeilijker
    return mixed.map(q => q.id);
  };
})(typeof window !== 'undefined' ? window : globalThis);
