/* ─────────────────────────────────────────────────────────────
   Brillion · opslag
   Bewaart je statistieken, reeks, badges, geschiedenis en
   meldingen op je toestel. In de online speel-link (claude.ai)
   gaat een kopie ook naar de online opslag, zodat je gegevens
   op al je toestellen hetzelfde zijn.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  const KEY = 'brillion.v1';

  const fresh = () => ({
    v: 1,
    lang: null,          // 'nl' of 'en' (null = volg het toestel)
    sound: true,
    theme: 'auto',       // 'auto' | 'light' | 'dark'
    seen: {},            // vraag-id → tijdstip waarop je ze laatst zag
    daily: {},           // dagnummer → resultaat van die beklimming
    prog: {},            // dagnummer → een dagelijkse klim die nog bezig is
    history: [],         // laatste rondes (nieuwste eerst)
    stats: {
      rounds: 0, answers: 0, correct: 0, wrong: 0,
      tiers: [0, 0, 0, 0, 0],
      bestTotal: 0, bestAlt: 0,
      cats: {}, translated: 0, lastSecond: 0, night: 0,
      archive: 0, dailyTotal: 0, dailyCount: 0, reported: 0
    },
    streak: { current: 0, best: 0, lastDay: 0 },
    badges: {},
    reports: [],
    updatedAt: 0
  });

  /* Oude of halve gegevens aanvullen met de standaardwaarden */
  function complete(data) {
    const base = fresh();
    const out = Object.assign(base, data || {});
    out.stats = Object.assign(fresh().stats, (data && data.stats) || {});
    out.streak = Object.assign(fresh().streak, (data && data.streak) || {});
    if (!Array.isArray(out.stats.tiers) || out.stats.tiers.length !== 5) out.stats.tiers = [0, 0, 0, 0, 0];
    ['seen', 'daily', 'badges', 'prog'].forEach(k => { if (!out[k] || typeof out[k] !== 'object') out[k] = {}; });
    ['history', 'reports'].forEach(k => { if (!Array.isArray(out[k])) out[k] = []; });
    return out;
  }

  function readLocal() {
    try {
      const raw = global.localStorage && global.localStorage.getItem(KEY);
      if (raw) return complete(JSON.parse(raw));
    } catch (e) { /* privévenster of geblokkeerde opslag: dan starten we leeg */ }
    return fresh();
  }
  function writeLocal() {
    try { global.localStorage && global.localStorage.setItem(KEY, JSON.stringify(B.state)); } catch (e) { /* geen opslag beschikbaar */ }
  }

  B.state = readLocal();

  /* Opslaan na elke wijziging */
  B.save = function () {
    B.state.updatedAt = Date.now();
    writeLocal();
    B.Cloud.schedule();
  };

  B.markSeen = function (id) {
    B.state.seen[id] = Date.now();
  };

  /* Een antwoord compact bewaren: [vraag, getypt, plaats in lijst (-1 = fout), punten, extra] */
  const pack = r => [r.q, r.input || '', r.ok ? r.rank : -1, r.score || 0, (r.translated ? 1 : 0) | (r.typo ? 2 : 0) | (r.timeUp ? 4 : 0)];
  B.unpack = a => ({
    q: a[0], input: a[1], ok: a[2] >= 0, rank: a[2], score: a[3],
    tier: a[2] >= 0 ? B.tierOf(a[3]) : -1,
    translated: !!(a[4] & 1), typo: !!(a[4] & 2), timeUp: !!(a[4] & 4)
  });

  /* ── Een afgewerkte ronde verwerken ─────────────────────── */
  B.recordRound = function (round) {
    const s = B.state, st = s.stats;
    const now = Date.now();
    st.rounds++;
    round.results.forEach(r => {
      st.answers++;
      const q = B.byId[r.q];
      if (q) st.cats[q.cat] = 1;
      if (r.ok) {
        st.correct++;
        st.tiers[r.tier]++;
        if (r.translated) st.translated++;
        if (r.timeLeft != null && r.timeLeft <= 2) st.lastSecond++;
      } else st.wrong++;
    });
    st.bestTotal = Math.max(st.bestTotal, round.total);
    st.bestAlt = Math.max(st.bestAlt, round.alt);
    if (new Date().getHours() < 5) st.night++;

    const packed = round.results.map(pack);
    if (round.mode === 'daily' || round.mode === 'archive') {
      s.daily[round.day] = { total: round.total, alt: round.alt, res: packed, ts: now, late: round.mode === 'archive' };
      if (round.mode === 'archive') st.archive++;
      if (round.mode === 'daily') {
        st.dailyTotal += round.total;
        st.dailyCount++;
        const sk = s.streak;
        if (sk.lastDay === round.day - 1) sk.current++;
        else if (sk.lastDay !== round.day) sk.current = 1;
        sk.lastDay = round.day;
        sk.best = Math.max(sk.best, sk.current);
      }
      delete s.prog[round.day];
      // Oude dagen: enkel de score houden, zodat de opslag klein blijft
      const days = Object.keys(s.daily).map(Number).sort((a, b) => b - a);
      days.slice(60).forEach(d => { delete s.daily[d].res; });
    }
    s.history.unshift({ ts: now, mode: round.mode, day: round.day || 0, cat: round.cat || '', total: round.total, alt: round.alt, res: packed });
    s.history = s.history.slice(0, 120);
    const earned = B.checkBadges(round);
    B.save();
    return earned;
  };

  /* Huidige reeks: telt alleen als je gisteren of vandaag speelde */
  B.currentStreak = function () {
    const sk = B.state.streak, today = B.dayNumber();
    return sk.lastDay === today || sk.lastDay === today - 1 ? sk.current : 0;
  };

  /* ── Badges ─────────────────────────────────────────────── */
  B.BADGES = [
    { id: 'first',      icon: '🥾', nl: 'Eerste stappen',   en: 'First steps',        dnl: 'Speel je eerste ronde.',                      den: 'Play your first round.',                         test: s => s.stats.rounds >= 1 },
    { id: 'legend1',    icon: '💎', nl: 'Legende',          en: 'Legend',             dnl: 'Geef een Legendarisch antwoord.',             den: 'Give a Legendary answer.',                       test: s => s.stats.tiers[4] >= 1 },
    { id: 'legend10',   icon: '💠', nl: 'Diamantjager',     en: 'Diamond hunter',     dnl: 'Geef 10 Legendarische antwoorden.',           den: 'Give 10 Legendary answers.',                     test: s => s.stats.tiers[4] >= 10 },
    { id: 'legend50',   icon: '✨', nl: 'Briljant',         en: 'Brilliant',          dnl: 'Geef 50 Legendarische antwoorden.',           den: 'Give 50 Legendary answers.',                     test: s => s.stats.tiers[4] >= 50 },
    { id: 'epicround',  icon: '🔮', nl: 'Episch avontuur',  en: 'Epic adventure',     dnl: '4 antwoorden van Episch of hoger in één ronde.', den: '4 answers of Epic or higher in one round.',     test: (s, r) => !!r && r.results.filter(x => x.ok && x.tier >= 3).length >= 4 },
    { id: 'perfect',    icon: '🎯', nl: 'Foutloze klim',    en: 'Clean climb',        dnl: '8 van de 8 goed in één ronde.',               den: '8 out of 8 correct in one round.',               test: (s, r) => !!r && r.results.length >= 8 && r.results.every(x => x.ok) },
    { id: 'high600',    icon: '🦅', nl: 'Hoogvlieger',      en: 'High flyer',         dnl: 'Scoor 600 punten in één ronde.',              den: 'Score 600 points in one round.',                 test: s => s.stats.bestTotal >= 600 },
    { id: 'alpinist',   icon: '🏔️', nl: 'Alpinist',         en: 'Alpinist',           dnl: 'Haal de Mont Blanc (4.806 m).',               den: 'Reach Mont Blanc (4,806 m).',                    test: s => s.stats.bestAlt >= 4806 },
    { id: 'thinair',    icon: '🌬️', nl: 'IJle lucht',       en: 'Thin air',           dnl: 'Klim hoger dan 7.000 m.',                     den: 'Climb higher than 7,000 m.',                     test: s => s.stats.bestAlt >= 7000 },
    { id: 'everest',    icon: '🚩', nl: 'Dak van de wereld', en: 'Roof of the world', dnl: 'Haal de top van de Mount Everest.',           den: 'Reach the summit of Mount Everest.',             test: s => s.stats.bestAlt >= 8849 },
    { id: 'streak3',    icon: '🔥', nl: 'Op dreef',         en: 'On a roll',          dnl: '3 dagen op rij geklommen.',                   den: 'Climbed 3 days in a row.',                       test: s => s.streak.best >= 3 },
    { id: 'streak7',    icon: '📅', nl: 'Weekklimmer',      en: 'Week climber',       dnl: '7 dagen op rij geklommen.',                   den: 'Climbed 7 days in a row.',                       test: s => s.streak.best >= 7 },
    { id: 'streak30',   icon: '🏕️', nl: 'Bergbewoner',      en: 'Mountain dweller',   dnl: '30 dagen op rij geklommen.',                  den: 'Climbed 30 days in a row.',                      test: s => s.streak.best >= 30 },
    { id: 'explorer',   icon: '🧭', nl: 'Verkenner',        en: 'Explorer',           dnl: 'Beantwoord vragen uit alle 12 categorieën.',  den: 'Answer questions from all 12 categories.',       test: s => Object.keys(s.stats.cats).length >= 12 },
    { id: 'bilingual',  icon: '🗣️', nl: 'Tweetalig',        en: 'Bilingual',          dnl: 'Geef een goed antwoord in de andere taal.',   den: 'Give a correct answer in the other language.',   test: s => s.stats.translated >= 1 },
    { id: 'lastsecond', icon: '⏱️', nl: 'Op het nippertje', en: 'Just in time',       dnl: 'Antwoord goed in de laatste 2 seconden.',     den: 'Answer correctly in the last 2 seconds.',        test: s => s.stats.lastSecond >= 1 },
    { id: 'night',      icon: '🌙', nl: 'Nachtklimmer',     en: 'Night climber',      dnl: 'Speel tussen middernacht en 5 uur.',          den: 'Play between midnight and 5 a.m.',               test: s => s.stats.night >= 1 },
    { id: 'hundred',    icon: '💯', nl: 'Honderd',          en: 'Century',            dnl: 'Beantwoord 100 vragen.',                      den: 'Answer 100 questions.',                          test: s => s.stats.answers >= 100 },
    { id: 'reporter',   icon: '🔎', nl: 'Scherp oog',       en: 'Sharp eye',          dnl: 'Meld een antwoord dat volgens jou klopt.',    den: 'Report an answer you think is right.',           test: s => s.stats.reported >= 1 },
    { id: 'archivist',  icon: '📚', nl: 'Archivaris',       en: 'Archivist',          dnl: 'Speel 5 beklimmingen uit het archief.',       den: 'Play 5 climbs from the archive.',                test: s => s.stats.archive >= 5 }
  ];
  B.checkBadges = function (round) {
    const earned = [];
    B.BADGES.forEach(b => {
      if (!B.state.badges[b.id] && b.test(B.state, round)) {
        B.state.badges[b.id] = Date.now();
        earned.push(b);
      }
    });
    return earned;
  };

  /* ── Meldingen ("Klopt het toch?") ──────────────────────── */
  B.addReport = function (q, input) {
    const rep = { q: q.id, text: q.nl, input: String(input).slice(0, 80), lang: B.lang, ts: Date.now() };
    B.state.reports.push(rep);
    B.state.reports = B.state.reports.slice(-300);
    B.state.stats.reported++;
    const earned = B.checkBadges(null);
    B.save();
    B.Cloud.report(rep);
    return earned;
  };
  B.reportsText = function () {
    const lines = B.state.reports.map(r => `- [${r.q}] ${r.text} → "${r.input}"`);
    return 'Brillion: deze antwoorden zou ik willen toevoegen\n' + lines.join('\n');
  };

  B.resetAll = function () {
    const keep = { lang: B.state.lang, sound: B.state.sound, theme: B.state.theme };
    B.state = Object.assign(fresh(), keep);
    B.save();
  };

  /* ── Online kopie (enkel in de claude.ai speel-link) ────── *
     De pagina vraagt de online opslag ("db") aan. Lukt dat niet
     (bv. op GitHub Pages), dan werkt alles gewoon lokaal. */
  B.Cloud = (function () {
    let db = null, uid = null, timer = null, writing = false, again = false;
    let reportChain = Promise.resolve();
    const statePath = () => 'data/users/' + uid + '/state';

    async function init(onRemoteNewer) {
      try {
        const c = global.claude;
        if (!c || typeof c.use !== 'function') return;
        const [dbNs, userNs] = await Promise.all([c.use('db'), c.use('user')]);
        if (!dbNs || !userNs) return;
        const id = await userNs.id();
        if (!id) return;
        db = dbNs; uid = id;
        const snap = await db.doc(statePath()).get();
        const remote = snap.exists && snap.data() ? snap.data().state : null;
        if (remote && (remote.updatedAt || 0) > (B.state.updatedAt || 0)) {
          B.state = complete(JSON.parse(JSON.stringify(remote)));
          writeLocal();
          if (onRemoteNewer) onRemoteNewer();
        } else if (B.state.updatedAt && (!remote || B.state.updatedAt > (remote.updatedAt || 0))) {
          schedule();
        }
      } catch (e) {
        db = null;
      }
    }
    function schedule() {
      if (!db) return;
      clearTimeout(timer);
      timer = setTimeout(flush, 1500);
    }
    async function flush() {
      if (!db) return;
      if (writing) { again = true; return; }
      writing = true;
      try {
        await db.doc(statePath()).set({ state: JSON.parse(JSON.stringify(B.state)) });
      } catch (e) {
        if (e && ['invalid_argument', 'revoked', 'not_granted', 'capability_disabled', 'capability_removed'].includes(e.code)) db = null;
      }
      writing = false;
      if (again) { again = false; schedule(); }
    }
    function report(rep) {
      if (!db) return;
      reportChain = reportChain.then(async () => {
        const ref = db.doc('reports/' + uid);
        const snap = await ref.get();
        const items = snap.exists && snap.data() && Array.isArray(snap.data().items) ? snap.data().items.slice() : [];
        items.push(rep);
        await ref.set({ items: items.slice(-300), updatedAt: Date.now() });
      }).catch(() => {});
    }
    return { init, schedule, report, isActive: () => !!db };
  })();
})(typeof window !== 'undefined' ? window : globalThis);
