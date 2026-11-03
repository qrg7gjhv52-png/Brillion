/* ─────────────────────────────────────────────────────────────
   Brillion · de schermen en het spelverloop
   Startscherm → vraag 1 t/m 8 → eindscherm met je berg.

   De berg op de achtergrond (over het hele scherm) wordt getekend
   door fx.js (B.World). Dit bestand vertelt de berg wat er moet
   gebeuren: klimmen, uitglijden, vlag planten, uitzoomen …
   Elk scherm heeft een leeg vak met de klasse "stage": daar staat
   de klimmer, zodat hij nooit achter een kaart verdwijnt.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  const doc = global.document;
  const t = B.t;
  const $ = id => doc.getElementById(id);
  const PER = B.CONFIG.perRound;
  const EVEREST = B.CONFIG.everestHeight;
  const World = B.World;

  /* Veilig tekst in HTML zetten (wat iemand typt, wordt nooit code) */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
  const locale = () => (B.lang === 'nl' ? 'nl-BE' : 'en-GB');
  const fmt = n => new Intl.NumberFormat(locale()).format(n);
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const embedded = (() => { try { return global.self !== global.top; } catch (e) { return true; } })();

  /* ── Icoontjes (SVG) ─────────────────────────────────────── */
  const svg = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const ICON = {
    soundOn: svg('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>'),
    soundOff: svg('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6M21 9l-5 6"/>'),
    stats: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    help: svg('<circle cx="12" cy="12" r="9.5"/><path d="M9.3 9.2a2.8 2.8 0 0 1 5.4 1c0 1.9-2.7 2.4-2.7 4"/><path d="M12 17.6h.01"/>'),
    gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
    infinity: svg('<path d="M18.2 8.2a5.2 5.2 0 1 1 0 7.6L12 12l-6.2-3.8a5.2 5.2 0 1 0 0 7.6L12 12z"/>'),
    grid: svg('<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'),
    calendar: svg('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
    chev: svg('<path d="m9 6 6 6-6 6"/>', 'class="chev"'),
    back: svg('<path d="M15 6l-6 6 6 6"/>'),
    share: svg('<path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>'),
    flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.6 2.3c.4 3-1.3 4.6-2.8 6.3-1.4 1.6-2.8 3.3-2.8 6.1A5.4 5.4 0 0 0 12.3 20a5.6 5.6 0 0 0 5.7-5.5c0-2.6-1.2-4-2.2-5.3-.2 1.3-.9 2.3-1.9 2.6.5-3.4-.3-7-1.3-9.5Z"/></svg>'
  };

  /* ── Hulpjes ─────────────────────────────────────────────── */
  const qText = q => (B.lang === 'en' ? q.en : q.nl);
  const ansText = e => (B.lang === 'en' ? e.en : e.nl);
  const catName = id => (B.catById[id] ? B.catById[id][B.lang] : id);
  const tierName = i => (B.TIERS[i] ? B.TIERS[i][B.lang] : '');
  const mountainName = m => (B.lang === 'nl' ? m.nl : m.en);
  const tierClass = r => (r.ok ? 't' + r.tier : 'tw');
  const levelOf = id => B.LEVELS.find(l => l.id === id);
  const levelName = id => { const l = levelOf(id); return l ? l[B.lang] : ''; };
  const levelTag = id => { const l = levelOf(id); return l ? `<span class="lvl-tag l${l.id}"><span aria-hidden="true">${l.icon}</span> ${esc(l[B.lang])}</span>` : ''; };
  /* Letterspel: een tegeltje met de letter (of het aantal letters) */
  const ruleTile = rule => {
    const label = rule.type === 'len' ? String(rule.v) : rule.type === 'double' ? 'AA' : String(rule.v).toUpperCase();
    return `<span class="rule-tile" aria-hidden="true">${esc(label)}</span>`;
  };
  const ruleFailText = (rule, input) => t({ starts: 'ruleStarts', contains: 'ruleContains', ends: 'ruleEnds', len: 'ruleLen', double: 'ruleDouble' }[rule.type],
    { a: input, x: rule.type === 'len' ? rule.v : String(rule.v || '').toUpperCase() });
  /* 5 balkjes, zoals bij signaalsterkte: hoe hoger de klasse, hoe meer balkjes */
  const ladderHTML = tier => `<span class="ladder t${tier}" aria-hidden="true">${[0, 1, 2, 3, 4].map(i => `<span${i <= tier ? ' class="on"' : ''}></span>`).join('')}</span>`;

  function squaresHTML(results) {
    return `<div class="squares" role="img" aria-label="${esc(results.map(r => (r.ok ? tierName(r.tier) : t('wrongShort'))).join(', '))}">` +
      results.map(r => `<span class="sq ${tierClass(r)}"></span>`).join('') + '</div>';
  }
  const unpackAll = res => (res || []).map(B.unpack);

  /* Op welke hoogte stond je na elke vraag? (de stops op je route) */
  function stopsFor(results) {
    let total = 0;
    return (results || []).map(r => {
      total += r.score || 0;
      return { alt: B.altitudeFor(total), ok: !!r.ok, tier: r.tier };
    });
  }

  function toast(html, icon) {
    const box = $('toasts');
    const el = doc.createElement('div');
    el.className = 'toast';
    el.innerHTML = (icon ? `<span class="t-icon">${icon}</span>` : '') + `<span>${html}</span>`;
    box.appendChild(el);
    setTimeout(() => el.remove(), 3100);
  }
  function badgeToast(b) {
    B.Sound.badge();
    toast(`${esc(t('badgeNew'))}: ${esc(b[B.lang])}<small>${esc(B.lang === 'nl' ? b.dnl : b.den)}</small>`, b.icon);
  }
  function pulse(el) {
    if (!el) return;
    el.classList.remove('pulse');
    void el.offsetWidth;   // animatie opnieuw laten starten
    el.classList.add('pulse');
  }

  /* ── Grote hoogtemeter ──────────────────────────────────────
     In het spel staat hij bovenaan in de balk ("meter"), op het
     startscherm klein linksboven in het klimvak ("compact"). */
  let hudZone = null, hudPeak = -1, hudAlt = 0;
  const zoneHTML = alt => { const z = B.zoneFor(alt); return `<span aria-hidden="true">${z.icon}</span> ${esc(t(z.label))}`; };
  function nextHTML(alt, flag) {
    const mi = B.mountainIndexFor(alt), m = B.MOUNTAINS[mi], next = B.MOUNTAINS[mi + 1];
    if ((flag && mi > 0) || !next) return `🚩 ${esc(B.peakName(m, B.lang))}`;
    return `→ ${esc(B.peakName(next, B.lang))} · ${fmt(next.h)} m`;
  }
  function hudHTML(alt, flag, variant) {
    hudZone = B.zoneFor(alt);
    hudPeak = B.mountainIndexFor(alt);
    hudAlt = alt;
    return `<div class="alt-hud ${variant}">
        ${variant === 'compact' ? `<span class="hud-lbl">${t('altitude')}</span>` : ''}
        <span class="hud-num" aria-label="${t('altitude')}"><span class="hud-val">${fmt(Math.round(alt))}</span><small>m</small></span>
        <span class="hud-side">
          <span class="hud-zone">${zoneHTML(alt)}</span>
          <span class="hud-next">${nextHTML(alt, flag)}</span>
        </span>
        <span class="hud-pass" aria-live="polite"></span>
      </div>`;
  }
  /* De hoogtemeter van het scherm dat nu open is */
  const hudEl = (sel = '.alt-hud') => { const el = $('screen-' + current); return el ? el.querySelector(sel) : null; };
  /* Wordt tijdens het klimmen elk beeldje aangeroepen */
  function updateHud(alt) {
    hudAlt = alt;
    const hud = hudEl();
    if (!hud) return;
    hud.querySelector('.hud-val').textContent = fmt(Math.round(alt));
    const z = B.zoneFor(alt);
    if (z !== hudZone) {
      hudZone = z;
      const el = hud.querySelector('.hud-zone');
      el.innerHTML = zoneHTML(alt);
      pulse(el);
    }
    const mi = B.mountainIndexFor(alt);
    if (mi !== hudPeak) { hudPeak = mi; hud.querySelector('.hud-next').innerHTML = nextHTML(alt, false); }
  }
  /* Je klimt voorbij een echte berg */
  function peakPassed(m) {
    B.Sound.peak();
    const hud = hudEl();
    if (!hud) return;
    pulse(hud);
    const el = hud.querySelector('.hud-pass');
    el.textContent = '✓ ' + B.peakName(m, B.lang);
    pulse(el);
  }

  /* ── Schermen wisselen ───────────────────────────────────── */
  const SCREENS = ['home', 'cats', 'archive', 'game', 'end', 'stats'];
  let current = 'home';
  function show(name) {
    const changed = current !== name;
    SCREENS.forEach(s => { $('screen-' + s).hidden = s !== name; });
    current = name;
    if (changed) global.scrollTo(0, 0);
    World.dim(!stageEl());   // lijsten (categorieën, archief, statistieken): berg zacht op de achtergrond
    syncStage(false);
  }
  const stageEl = () => { const el = $('screen-' + current); return el ? el.querySelector('.stage') : null; };
  /* Vertel de berg waar het klimvak op het scherm staat */
  function syncStage(instant) {
    const el = stageEl();
    if (!el) return;
    const r = el.getBoundingClientRect();
    World.frame({ x: r.left, y: r.top, w: r.width, h: r.height }, instant);
  }
  let syncRAF = 0;
  function queueSync(instant) {
    if (syncRAF) return;
    syncRAF = global.requestAnimationFrame(() => { syncRAF = 0; syncStage(instant); });
  }
  global.addEventListener('scroll', () => queueSync(true), { passive: true });
  global.addEventListener('resize', () => queueSync(false));
  if (global.ResizeObserver) new ResizeObserver(() => queueSync(false)).observe($('app'));
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(() => queueSync(false));

  /* ── Kopbalk ─────────────────────────────────────────────── */
  function renderBar() {
    $('btn-lang').textContent = B.lang === 'nl' ? 'EN' : 'NL';
    $('btn-lang').setAttribute('aria-label', B.lang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands');
    $('btn-sound').innerHTML = B.state.sound ? ICON.soundOn : ICON.soundOff;
    $('btn-sound').setAttribute('aria-label', t('sound') + ': ' + (B.state.sound ? t('on') : t('off')));
    $('btn-stats').innerHTML = ICON.stats;
    $('btn-stats').setAttribute('aria-label', t('stats'));
    $('btn-help').innerHTML = ICON.help;
    $('btn-help').setAttribute('aria-label', t('help'));
    $('btn-settings').innerHTML = ICON.gear;
    $('btn-settings').setAttribute('aria-label', t('settings'));
    doc.documentElement.lang = B.lang;
  }

  /* ── Startscherm ─────────────────────────────────────────── */
  let countdownTimer = null;
  function renderHome() {
    const today = B.dayNumber();
    const played = B.state.daily[today];
    const prog = B.state.prog[today] || null;
    const date = cap(new Intl.DateTimeFormat(locale(), { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date()));
    let body, alt = 0, stops = [];
    if (played) {
      const m = B.MOUNTAINS[B.mountainIndexFor(played.alt)];
      alt = played.alt;
      stops = stopsFor(unpackAll(played.res));
      body = `<div class="done-row">
          <div class="stat"><span class="stat-val">${fmt(played.alt)}</span><span class="stat-lbl">${t('altitude')} (m)</span></div>
          <div class="stat"><span class="stat-val peak">${esc(B.peakName(m, B.lang))}</span><span class="stat-lbl">${t('peakLbl')}</span></div>
        </div>
        ${played.res ? squaresHTML(unpackAll(played.res)) : ''}
        <div class="btn-row">
          <button class="btn primary" type="button" data-act="share-day" data-day="${today}">${ICON.share}${t('share')}</button>
          <button class="btn" type="button" data-act="view-day" data-day="${today}">${t('yourAnswers')}</button>
        </div>
        <p class="next-in" id="next-in"></p>`;
    } else if (prog) {
      alt = B.altitudeFor(prog.results.reduce((s, r) => s + r.score, 0));
      stops = stopsFor(prog.results);
      body = `<p class="daily-intro">${t('dailyIntro')}</p>
        <button class="btn primary big" type="button" data-act="resume">${t('resume', { i: Math.min(PER, prog.results.length + 1), n: PER })}</button>`;
    } else {
      body = `<p class="daily-intro">${t('dailyIntro')}</p>
        <button class="btn primary big" type="button" data-act="start-daily">${t('start')}</button>`;
    }
    const streak = B.currentStreak();
    const streakText = streak === 0 ? t('streak0') : streak === 1 ? t('streak1') : t('streakN', { n: streak });
    $('screen-home').innerHTML = `
      <div class="stage home-stage" id="home-stage">${hudHTML(alt, !!played, 'compact')}</div>
      <div class="card daily-card">
        <div class="daily-head">
          <span class="eyebrow">${t('daily')}</span>
          <h1 class="daily-title">${t('dailyNo', { n: today })}</h1>
          <span class="daily-date">${esc(date)}</span>
        </div>
        ${body}
      </div>
      <div class="streak">${ICON.flame}<span>${streakText}</span><span class="muted">${t('bestStreak')}: ${B.state.streak.best}</span></div>
      <div class="modes">
        ${modeButton('mode-unlimited', ICON.infinity, t('unlimited'), t('unlimitedSub'))}
        <div class="level-bar"><span class="level-bar-name">${t('levelFor')}</span>${levelSeg()}</div>
        ${modeButton('mode-cats', ICON.grid, t('byCategory'), t('byCategorySub'))}
        ${modeButton('mode-archive', ICON.calendar, t('archive'), t('archiveSub'))}
      </div>
      <p class="foot"><span>${t('aboutText', { q: fmt(B.questions.length), a: fmt(B.totalAnswers()), v: B.CONFIG.version })}</span></p>`;
    show('home');
    World.show('home', { seed: today, alt, stops, flag: !!played });
    clearInterval(countdownTimer);
    if (played) { updateCountdown(); countdownTimer = setInterval(updateCountdown, 1000); }
  }
  /* De drie niveauknoppen (startscherm en instellingen) */
  const levelSeg = () => `<div class="seg level-seg" role="group" aria-label="${t('levelFor')}">${B.LEVELS.map(l =>
    `<button type="button" data-act="set-level" data-v="${l.id}" aria-pressed="${l.id === B.state.level}"><span aria-hidden="true">${l.icon}</span> ${esc(l[B.lang])}</button>`).join('')}</div>`;
  const modeButton = (act, icon, title, sub) =>
    `<button class="mode" type="button" data-act="${act}"><span class="mode-icon">${icon}</span><span><span class="mode-title">${title}</span><span class="mode-sub">${sub}</span></span>${ICON.chev}</button>`;

  function updateCountdown() {
    const el = $('next-in');
    if (!el) { clearInterval(countdownTimer); return; }
    const nowDate = new Date();
    const midnight = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);
    const s = Math.max(0, Math.floor((midnight - nowDate) / 1000));
    const hh = String(Math.floor(s / 3600)).padStart(2, '0');
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    el.textContent = t('nextIn', { t: `${hh}:${mm}:${ss}` });
    if (s === 0) setTimeout(() => current === 'home' && renderHome(), 1200);
  }

  /* ── Categorieën ─────────────────────────────────────────── */
  function renderCats() {
    const seen = B.state.seen;
    const cards = B.CATEGORIES.map(c => {
      const qs = B.questions.filter(q => q.cat === c.id);
      const fresh = qs.filter(q => !seen[q.id]).length;
      return `<button class="cat-card" type="button" data-act="cat" data-id="${c.id}">
          <span class="cat-emoji" aria-hidden="true">${c.icon}</span>
          <span class="cat-name">${esc(c[B.lang])}</span>
          <span class="cat-meta">${fresh ? t('newLeft', { n: fresh }) : t('allSeen')} · ${qs.length}</span>
        </button>`;
    }).join('');
    $('screen-cats').innerHTML = `
      <button class="back-btn" type="button" data-act="home">${ICON.back}${t('back')}</button>
      <h1 class="screen-title">${t('chooseCategory')}</h1>
      <div class="cat-grid">${cards}</div>`;
  }

  /* ── Archief ─────────────────────────────────────────────── */
  function renderArchive() {
    const today = B.dayNumber();
    const rows = [];
    for (let d = today - 1; d >= 1; d--) {
      const res = B.state.daily[d];
      const date = cap(new Intl.DateTimeFormat(locale(), { weekday: 'short', day: 'numeric', month: 'long' }).format(new Date(B.dateForDay(d) + 'T12:00:00')));
      const prog = B.state.prog[d] || null;
      if (res) {
        const m = B.MOUNTAINS[B.mountainIndexFor(res.alt)];
        rows.push(`<button class="row" type="button" data-act="view-day" data-day="${d}">
            <span class="row-main"><span class="row-title">${t('dailyNo', { n: d })}</span><span class="row-sub">${esc(date)} · ${esc(B.peakName(m, B.lang))}</span></span>
            <span class="row-side">${fmt(res.alt)} m</span></button>`);
      } else {
        rows.push(`<button class="row" type="button" data-act="${prog ? 'resume-day' : 'play-day'}" data-day="${d}">
            <span class="row-main"><span class="row-title">${t('dailyNo', { n: d })}</span><span class="row-sub">${esc(date)}</span></span>
            <span class="pill">${prog ? t('resume', { i: prog.results.length + 1, n: PER }) : t('archivePlay')}</span></button>`);
      }
    }
    $('screen-archive').innerHTML = `
      <button class="back-btn" type="button" data-act="home">${ICON.back}${t('back')}</button>
      <h1 class="screen-title">${t('archive')}</h1>
      ${rows.length ? `<div class="list">${rows.join('')}</div>` : `<div class="card"><p class="muted">${t('archiveEmpty')}</p></div>`}`;
  }

  /* ── Het spel ────────────────────────────────────────────── */
  let G = null;            // de ronde die nu bezig is
  let timerRAF = null;
  let lastRound = null;    // de laatst afgewerkte ronde (voor het eindscherm)

  let lastStart = -Infinity;
  function startRound(mode, opts = {}) {
    const nowT = performance.now();
    if (nowT - lastStart < 800) return;   // dubbele tik: niet twee rondes na elkaar starten
    lastStart = nowT;
    B.Sound.unlock();
    const today = B.dayNumber();
    let ids, day = 0, cat = '';
    if (mode === 'daily') { day = today; ids = B.dailyQuestionIds(day); }
    else if (mode === 'archive') { day = opts.day; ids = B.dailyQuestionIds(day); }
    else if (mode === 'category') { cat = opts.cat; ids = B.pickQuestions({ cat, seen: B.state.seen }); }
    let lvl = 0;
    if (mode === 'unlimited') {
      lvl = [1, 2, 3].includes(opts.lvl) ? opts.lvl : B.state.level;
      ids = B.pickQuestions({ lvl, seen: B.state.seen });
    }
    ids = [...new Set(ids)];   // een vraag komt nooit twee keer in dezelfde ronde
    // de berg van die dag (onbeperkt en per categorie: de berg van vandaag)
    const seed = day || today;
    G = { mode, day, cat, lvl, ids, idx: 0, results: [], total: 0, alt: 0, qStart: 0, answered: false, seed, pending: null };
    B.Sound.start();
    renderGame();
    showQuestion();
  }

  /* Een bewaarde dagelijkse klim verder spelen */
  function resumeRound(prog) {
    B.Sound.unlock();
    const results = prog.results || [];
    const total = results.reduce((s, r) => s + r.score, 0);
    G = { mode: prog.mode, day: prog.day, cat: '', lvl: 0, ids: prog.ids, idx: prog.idx, results, total, alt: B.altitudeFor(total), qStart: prog.qStart, answered: prog.answered, seed: prog.day, pending: null };
    if (G.answered) { G.idx++; G.qStart = 0; G.answered = false; }
    if (G.idx >= G.ids.length) { finish(); return; }
    renderGame();
    showQuestion();
  }

  function persist() {
    if (G && (G.mode === 'daily' || G.mode === 'archive')) {
      B.state.prog[G.day] = { mode: G.mode, day: G.day, ids: G.ids, results: G.results, idx: G.idx, qStart: G.qStart, answered: G.answered };
    }
    B.save();
  }

  function renderGame() {
    const quitLabel = G.mode === 'daily' || G.mode === 'archive' ? t('pause') : t('quit');
    $('screen-game').innerHTML = `
      <div class="game-top">
        <div class="game-row">
          <button class="text-btn" type="button" data-act="quit">${quitLabel}</button>
          <div class="dots" id="g-dots" aria-hidden="true"></div>
        </div>
        <div id="g-hud">${hudHTML(G.alt, false, 'meter')}</div>
      </div>
      <div class="stage game-stage" id="game-stage"></div>
      <div class="card qcard" id="g-card">
        <div class="qmeta"><span class="cat-chip" id="g-cat"></span><span id="g-lvl"></span><span id="g-rule"></span><span class="qnum" id="g-num"></span></div>
        <h2 class="qtext" id="g-q"></h2>
        <div id="g-play">
          <div class="timer"><div class="timer-track"><div class="timer-fill" id="g-timer"></div></div><span class="timer-secs" id="g-secs">${B.CONFIG.seconds}</span></div>
          <form class="answer-form" id="g-form" autocomplete="off">
            <input class="answer-input" id="g-input" type="text" inputmode="text" enterkeyhint="go"
              autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="60">
            <button class="btn primary" type="submit" id="g-submit"></button>
          </form>
          <p class="try-msg" id="g-try" hidden></p>
          <div class="suggest" id="g-suggest" hidden></div>
        </div>
        <div id="g-result" hidden></div>
      </div>`;
    $('g-form').addEventListener('submit', e => { e.preventDefault(); submit(false); });
    const input = $('g-input');
    // verder typen = het voorstel verdwijnt (je past het zelf aan)
    input.addEventListener('input', () => { if (G && G.pending) hideSuggest(); });
    input.addEventListener('keydown', e => { if (e.key === 'Escape' && G && G.pending) { e.preventDefault(); hideSuggest(); } });
    show('game');
    World.show('game', { seed: G.seed, alt: G.alt, stops: stopsFor(G.results) });
  }

  function updateGameTexts() {
    if (!G) return;
    const q = B.byId[G.ids[G.idx]];
    if (!q) return;
    const c = B.catById[q.cat];
    $('g-cat').innerHTML = `<span aria-hidden="true">${c.icon}</span>${esc(c[B.lang])}`;
    $('g-lvl').innerHTML = levelTag(q.lvl);
    $('g-rule').innerHTML = q.rule ? ruleTile(q.rule) : '';
    $('g-num').textContent = t('question', { i: G.idx + 1, n: G.ids.length });
    $('g-q').textContent = qText(q);
    $('g-input').placeholder = t('placeholder');
    $('g-input').setAttribute('aria-label', qText(q));
    $('g-submit').textContent = t('submit');
    $('g-dots').innerHTML = G.ids.map((id, i) => {
      const r = G.results[i];
      return `<span class="dot ${r ? tierClass(r) : i === G.idx ? 'now' : ''}"></span>`;
    }).join('');
  }

  const remainingMs = () => B.CONFIG.seconds * 1000 - (Date.now() - G.qStart);

  function showQuestion() {
    const q = B.byId[G.ids[G.idx]];
    if (!q) { G.idx++; if (G.idx >= G.ids.length) return finish(); return showQuestion(); }
    if (!G.qStart) G.qStart = Date.now();
    G.answered = false;
    G.tries = [];            // foute pogingen bij deze vraag
    B.markSeen(q.id);
    persist();
    $('g-play').hidden = false;
    $('g-result').hidden = true;
    hideSuggest();
    $('g-try').hidden = true;
    $('g-card').classList.remove('hurry');
    $('g-input').value = '';
    updateGameTexts();
    if (remainingMs() <= 0) { submit(true); return; }
    startTimer();
    setTimeout(() => { const i = $('g-input'); if (i && G && !G.answered) i.focus({ preventScroll: true }); }, 60);
  }

  function startTimer() {
    stopTimer();
    const total = B.CONFIG.seconds * 1000;
    let lastSec = null;
    const fill = $('g-timer'), secs = $('g-secs'), card = $('g-card');
    const tick = () => {
      if (!G || G.answered) return;
      const left = remainingMs();
      fill.style.transform = `scaleX(${Math.max(0, left / total)})`;
      const s = Math.max(0, Math.ceil(left / 1000));
      if (s !== lastSec) {
        secs.textContent = s;
        if (s <= 5 && s > 0) { card.classList.add('hurry'); if (lastSec !== null) B.Sound.tick(); }
        lastSec = s;
      }
      if (left <= 0) { submit(true); return; }
      timerRAF = global.requestAnimationFrame(tick);
    };
    tick();
  }
  function stopTimer() { if (timerRAF) global.cancelAnimationFrame(timerRAF); timerRAF = null; }

  function shake(el) {
    if (el && el.animate) el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'none' }], { duration: 260 });
  }
  const okResult = (q, input, e, flags, timeLeft) =>
    ({ q: q.id, input, ok: true, rank: e.rank, score: e.score, tier: e.tier, translated: !!flags.translated, typo: !!flags.typo, timeLeft });

  /* Antwoord nakijken. auto = de tijd is op. */
  function submit(auto) {
    if (!G || G.answered) return;
    const q = B.byId[G.ids[G.idx]];
    const inputEl = $('g-input');
    const input = (inputEl.value || '').trim();
    if (!input && !auto) { inputEl.focus(); shake(inputEl); return; }
    // Enter terwijl "Bedoelde je…?" openstaat (met dezelfde tekst) = het eerste voorstel kiezen
    if (!auto && G.pending && G.pending.input === input) { pick(0); return; }
    const timeLeft = Math.max(0, remainingMs() / 1000);
    const tries = (G.tries || []).slice();
    // tijd op zonder iets in het vak: uitgegleden
    if (!input) { commit(q, { q: q.id, input: '', ok: false, rank: -1, score: 0, tier: -1, timeUp: true, timeLeft: 0, tries }); return; }
    const res = B.check(q, input, B.lang);
    // 1. juist (of juist in de andere taal) — ook als de tijd net op is
    if (res.ok) { commit(q, okResult(q, input, res.entry, { translated: res.translated }, timeLeft)); return; }
    // 2. lijkt op een juist antwoord: vragen "Bedoelde je…?" (de klok loopt door)
    if (!auto && !res.ruleFail && res.suggestions.length) { openSuggest(input, res.suggestions, false); return; }
    // 3. tijd op met een fout of niet bevestigd antwoord: uitgegleden
    if (auto) {
      const late = res.suggestions[0] || null;
      commit(q, { q: q.id, input, ok: false, rank: -1, score: 0, tier: -1, timeUp: true, timeLeft: 0, ruleFail: !!res.ruleFail, lateRank: late ? late.rank : -1, tries });
      return;
    }
    // 4. fout: zoals bij Krillion kan je dit niet doorgeven. Opnieuw proberen tot de tijd op is!
    wrongTry(q, input, res.ruleFail ? ruleFailText(q.rule, input) : t('tryNotOnList', { a: input }), !res.ruleFail);
  }

  /* Een fout antwoord: schudden, melding, en het vak klaar voor een nieuwe poging */
  function wrongTry(q, input, msg, canReport) {
    if (!G.tries.includes(input)) G.tries.push(input);
    hideSuggest();
    const box = $('g-try');
    box.innerHTML = `<span>${esc(msg)} <strong>${esc(t('tryAgain'))}</strong></span>` +
      (canReport ? ` <button class="link-btn" type="button" data-act="report-try" data-a="${esc(input)}">${esc(t('report'))}</button>` : '');
    box.hidden = false;
    box.classList.remove('flash'); void box.offsetWidth; box.classList.add('flash');
    B.Sound.nope();
    const inputEl = $('g-input');
    shake(inputEl);
    inputEl.focus({ preventScroll: true });
    inputEl.select();   // typen vervangt meteen je vorige poging
  }

  /* De naam tonen in de taal die het best lijkt op wat je typte */
  function bestName(e, key) {
    const mine = ansText(e), other = B.lang === 'en' ? e.nl : e.en;
    if (!other || other === mine) return mine;
    const d1 = B.editDistance(B.normalize(mine), key, 99);
    const d2 = B.editDistance(B.normalize(other), key, 99);
    return d2 < d1 ? other : mine;
  }

  function openSuggest(input, list, quiet) {
    G.pending = { input, list };
    const key = B.normalize(input);
    const cur = B.byId[G.ids[G.idx]];
    // letterspel: altijd de naam tonen die bij de letter past
    const label = e => (cur && cur.rule ? ansText(e) : bestName(e, key));
    const box = $('g-suggest');
    box.innerHTML = `
      <p class="suggest-q"><span aria-hidden="true">🤔</span> ${esc(t('suggestQ'))}</p>
      <div class="suggest-list">${list.map((e, i) =>
        `<button class="suggest-btn" type="button" data-act="pick" data-i="${i}">${esc(label(e))}</button>`).join('')}</div>
      <div class="suggest-no">
        <button class="link-btn" type="button" data-act="suggest-edit">${esc(t('suggestEdit'))}</button>
        <button class="link-btn subtle" type="button" data-act="suggest-keep">${esc(t('suggestKeep', { a: input }))}</button>
      </div>`;
    box.hidden = false;
    if (quiet) return;
    B.Sound.suggest();
    // Gsm/tablet: toetsenbord dicht, zodat het voorstel niet achter het toetsenbord valt.
    // Computer: je blijft in het vak (Enter = eerste voorstel kiezen, verder typen = zelf aanpassen).
    const touch = global.matchMedia && global.matchMedia('(pointer: coarse)').matches;
    if (touch) {
      $('g-input').blur();
      setTimeout(() => { if (!box.hidden) box.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 250);
    }
  }
  function hideSuggest() {
    if (G) G.pending = null;
    const box = $('g-suggest');
    if (box && !box.hidden) { box.hidden = true; box.innerHTML = ''; }
  }
  /* Je koos een voorstel: dat telt als juist */
  function pick(i) {
    if (!G || G.answered || !G.pending) return;
    const e = G.pending.list[i];
    if (!e) return;
    const q = B.byId[G.ids[G.idx]];
    commit(q, okResult(q, G.pending.input, e, { typo: true }, Math.max(0, remainingMs() / 1000)));
  }

  /* Het antwoord is definitief: punten, klimmen of uitglijden */
  function commit(q, r) {
    stopTimer();
    if (!r.lang) r.lang = B.lang;   // bij een letterspel hoort de plaats in de lijst bij deze taal
    G.pending = null;
    G.results.push(r);
    G.total += r.score;
    G.alt = B.altitudeFor(G.total);
    G.answered = true;
    persist();
    const inputEl = $('g-input');
    if (inputEl) inputEl.blur();
    showResult(q, r);
    const results = G.results;
    if (r.ok) {
      B.Sound.tier(r.tier);
      if (r.tier === 4) B.FX.snow(1);
      World.setStops(stopsFor(results).slice(0, -1));
      World.climb(G.alt, {
        score: (r.tier + 1) * 20, tier: r.tier,   // klimtijd volgens de klasse (20 = Gewoon … 100 = 1 in a Brillion)
        onAlt: updateHud, onPeak: peakPassed,
        done: () => World.setStops(stopsFor(results))
      });
    } else {
      B.Sound.wrong();
      World.slip();
      World.setStops(stopsFor(results));
      updateHud(G.alt);
    }
  }

  function animateNumber(el, from, to) {
    if (!el) return;
    const dur = 800, t0 = performance.now();
    const step = nowT => {
      const k = Math.min(1, (nowT - t0) / dur);
      el.textContent = fmt(Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))));
      if (k < 1) global.requestAnimationFrame(step);
    };
    global.requestAnimationFrame(step);
  }

  function resultHTML(q, r) {
    const last = G.idx >= G.ids.length - 1;
    let html = '';
    if (r.ok) {
      const e = B.entryAt(q, r.rank, r.lang);
      const gain = B.altitudeFor(G.total) - B.altitudeFor(G.total - r.score);
      let note = '';
      if (r.typo) note = `${esc(t('corrected', { a: '' }))}<strong>${esc(ansText(e))}</strong> · ${esc(t('youTyped'))} “${esc(r.input)}”`;
      else if (r.translated) note = `${esc(t('translated', { a: '' }))}<strong>${esc(ansText(e))}</strong> · ${esc(t('youTyped'))} “${esc(r.input)}”`;
      html = `<div class="result-top"><span class="result-class"><span class="result-tier t${r.tier}">${esc(tierName(r.tier))}</span>${ladderHTML(r.tier)}</span><span class="gain">+${fmt(gain)} m</span></div>
        <div class="result-answer">${esc(ansText(e))}</div>
        ${note ? `<p class="result-note">${note}</p>` : ''}`;
    } else {
      // tijd op zonder goed antwoord (of een oude ronde met een fout antwoord)
      const late = B.entryAt(q, r.lateRank, r.lang);
      const tried = (r.tries || []).filter(x => x !== r.input).concat(r.input ? [r.input] : []);
      const ruleNote = r.ruleFail && q.rule ? ruleFailText(q.rule, r.input) : '';
      const note = late ? esc(t('lateConfirm', { a: ansText(late) })) : ruleNote ? esc(ruleNote)
        : tried.length ? esc(t('triedList', { a: tried.join(', ') })) : r.timeUp ? t('noAnswer') : t('notOnListSub');
      // een paar goede antwoorden tonen: zo leer je iets bij
      const ex = q.answers.filter(e => !e.extra).slice(0, 3).map(e => ansText(e));
      html = `<div class="result-top"><span class="result-tier tw">${r.timeUp ? t('timeUp') : t('notOnList')}</span><span class="gain slip">${esc(t('slipped'))}</span></div>
        <p class="result-note">${note}</p>
        ${ex.length ? `<p class="result-note">${esc(t('examples', { a: '' }))}<strong>${esc(ex.join(', '))}</strong></p>` : ''}
        ${r.input && !r.ruleFail && !late ? `<div><button class="link-btn" type="button" data-act="report" id="g-report">${t('report')}</button></div>` : ''}`;
    }
    return `<div class="result">${html}
      <button class="btn primary big" type="button" data-act="next" id="g-next">${last ? t('finish') : t('next')}</button></div>`;
  }

  let resultAt = 0;
  function showResult(q, r) {
    $('g-play').hidden = true;
    const box = $('g-result');
    box.innerHTML = resultHTML(q, r);
    box.hidden = false;
    resultAt = performance.now();
    updateGameTexts();
    // pas na even op "Volgende" zetten: zo sla je de uitslag niet over met een dubbele Enter
    setTimeout(() => { const n = $('g-next'); if (n && G && G.answered) n.focus({ preventScroll: true }); }, 650);
  }

  function nextQuestion() {
    if (!G || !G.answered) return;
    G.idx++;
    G.qStart = 0;
    G.answered = false;
    if (G.idx >= G.ids.length) { finish(); return; }
    showQuestion();
  }

  function finish() {
    stopTimer();
    const round = { mode: G.mode, day: G.day, cat: G.cat, lvl: G.lvl || 0, results: G.results, total: G.total, alt: G.alt, seed: G.seed };
    const earned = B.recordRound(round);
    lastRound = round;
    G = null;
    renderEnd(round, true);
    earned.forEach((b, i) => setTimeout(() => badgeToast(b), 1600 + i * 3300));
  }

  /* ── Eindscherm ──────────────────────────────────────────── */
  function roundTitle(round) {
    if (round.mode === 'daily' || round.mode === 'archive') return t('dailyNo', { n: round.day });
    if (round.mode === 'category') return catName(round.cat);
    return round.lvl ? `${t('unlimited')} · ${levelName(round.lvl)}` : t('unlimited');
  }

  function answersListHTML(results) {
    return `<ol class="answers-list">${results.map(r => {
      const q = B.byId[r.q];
      if (!q) return '';
      const e = r.ok ? B.entryAt(q, r.rank, r.lang) : null;
      const shown = e ? esc(ansText(e)) : r.input ? `“${esc(r.input)}”` : '—';
      const badge = r.ok ? `<span class="tier-badge t${r.tier}">${esc(tierName(r.tier))}</span>` : `<span class="tier-badge tw">${r.input ? t('wrongShort') : t('timeUp')}</span>`;
      return `<li><span class="al-q">${esc(qText(q))}</span><span class="al-a">${shown}</span><span class="al-pts">${badge}${r.ok ? `+${fmt(r.score)} m` : ''}</span></li>`;
    }).join('')}</ol>`;
  }

  /* animate = net klaar met klimmen: vlag planten en uitzoomen */
  function renderEnd(round, animate) {
    const mi = B.mountainIndexFor(round.alt);
    const m = B.MOUNTAINS[mi], next = B.MOUNTAINS[mi + 1];
    const headline = round.alt >= EVEREST ? t('everestDone') : mi === 0 ? t('valley') : t('topReached', { name: mountainName(m) });
    const again = round.mode === 'unlimited' || round.mode === 'category';
    $('screen-end').innerHTML = `
      <div class="stage end-stage" id="end-stage" aria-hidden="true"></div>
      <div class="card end-card">
        <span class="eyebrow">${t('roundDone')} · ${esc(roundTitle(round))}</span>
        <h1 class="end-peak">${esc(headline)}</h1>
        <div class="end-alt"><span class="stat-val" id="end-alt">0</span><span class="end-unit">m</span></div>
        ${next ? `<p class="muted">${t('nextPeak', { name: B.peakName(next, B.lang), h: fmt(next.h) })}</p>` : ''}
        ${squaresHTML(round.results)}
        <div class="btn-row">
          <button class="btn primary" type="button" data-act="share-last">${ICON.share}${t('share')}</button>
          ${again ? `<button class="btn" type="button" data-act="again">${t('again')}</button>` : ''}
        </div>
      </div>
      <div class="card">
        <h2 class="section-title">${t('yourAnswers')}</h2>
        ${answersListHTML(round.results)}
      </div>
      <button class="btn full" type="button" data-act="home">${t('home')}</button>`;
    show('end');
    if (animate) {
      World.show('end', { seed: round.seed || B.dayNumber(), alt: round.alt, stops: stopsFor(round.results) });
      animateNumber($('end-alt'), 0, round.alt);
      setTimeout(() => B.Sound.summit(), 650);
      if (round.alt >= EVEREST) setTimeout(() => B.FX.snow(1.4), 900);
    } else {
      $('end-alt').textContent = fmt(round.alt);
    }
  }

  /* ── Delen ───────────────────────────────────────────────── */
  function shareText(round) {
    const m = B.MOUNTAINS[B.mountainIndexFor(round.alt)];
    const squares = round.results.map(r => (r.ok ? B.TIERS[r.tier].emoji : B.WRONG_EMOJI)).join('');
    return `Brillion · ${roundTitle(round)} 🏔️\n${squares}\n${fmt(round.alt)} m · ${B.peakName(m, B.lang)}`;
  }
  function share(round) {
    const text = shareText(round);
    const fallback = () => {
      openDialog(t('share'), `<p>${t('copyFail')}</p><textarea class="share-fallback" id="share-text" readonly>${esc(text)}</textarea>`);
      const ta = $('share-text');
      if (ta) { ta.focus(); ta.select(); }
    };
    const copy = () => {
      try {
        navigator.clipboard.writeText(text).then(() => toast(esc(t('copied')), '📋'), fallback);
      } catch (e) { fallback(); }
    };
    if (!embedded && navigator.share) {
      navigator.share({ text }).catch(err => { if (!err || err.name !== 'AbortError') copy(); });
    } else copy();
  }
  function dayRound(day) {
    const d = B.state.daily[day];
    if (!d) return null;
    return { mode: 'daily', day: Number(day), results: unpackAll(d.res), alt: d.alt };
  }

  /* ── Statistieken ────────────────────────────────────────── */
  function renderStats() {
    const s = B.state, st = s.stats;
    const avg = st.dailyCount ? Math.round(st.dailyTotal / st.dailyCount) : 0;
    const best = B.MOUNTAINS[B.mountainIndexFor(st.bestAlt)];
    const counts = st.tiers.concat([st.wrong]);
    const max = Math.max(1, ...counts);
    const colors = ['var(--t0)', 'var(--t1)', 'var(--t2)', 'var(--t3)', 'var(--t4)', 'var(--bad)'];
    const dist = counts.map((n, i) => `<div class="dist-row"><span>${i < 5 ? esc(tierName(i)) : esc(cap(t('wrongShort')))}</span>
        <span class="dist-bar"><span style="width:${(n / max) * 100}%;background:${colors[i]}"></span></span><span class="num">${fmt(n)}</span></div>`).join('');
    const badges = B.BADGES.map(b => {
      const got = !!s.badges[b.id];
      return `<button class="badge ${got ? 'got' : 'locked'}" type="button" data-act="badge" data-id="${b.id}" aria-label="${esc(b[B.lang])}">
          <span class="b-icon" aria-hidden="true">${b.icon}</span><span class="b-name">${esc(b[B.lang])}</span></button>`;
    }).join('');
    const hist = s.history.slice(0, 40).map((h, i) => {
      const m = B.MOUNTAINS[B.mountainIndexFor(h.alt)];
      const when = new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(h.ts));
      return `<button class="row" type="button" data-act="hist" data-i="${i}">
          <span class="row-main"><span class="row-title">${esc(roundTitle(h))}</span><span class="row-sub">${esc(when)} · ${esc(B.peakName(m, B.lang))}</span></span>
          <span class="row-side">${fmt(h.alt)} m</span></button>`;
    }).join('');
    $('screen-stats').innerHTML = `
      <button class="back-btn" type="button" data-act="home">${ICON.back}${t('back')}</button>
      <h1 class="screen-title">${t('stats')}</h1>
      <div class="card" style="display:flex;flex-direction:column;gap:14px">
        <h2 class="section-title">${t('daily')}</h2>
        <div class="tiles">
          ${tile(fmt(st.dailyCount), t('climbs'))}
          ${tile(fmt(B.currentStreak()), t('currentStreak'))}
          ${tile(fmt(s.streak.best), t('bestStreak'))}
          ${tile(st.dailyCount ? fmt(avg) + ' m' : '–', t('average'))}
          ${tile(fmt(st.bestAlt) + ' m', t('bestScore'))}
          ${tile(esc(B.peakName(best, B.lang)), t('highestPeak'))}
        </div>
      </div>
      <div class="card" style="display:flex;flex-direction:column;gap:14px">
        <h2 class="section-title">${t('tierDist')}</h2>
        <div class="tiles">${tile(fmt(st.rounds), t('rounds'))}${tile(fmt(st.answers), t('answers'))}${tile(st.answers ? Math.round((st.correct / st.answers) * 100) + '%' : '–', t('correctPct'))}</div>
        <div class="dist">${dist}</div>
      </div>
      <div class="card" style="display:flex;flex-direction:column;gap:14px">
        <h2 class="section-title">${t('badges')} · ${Object.keys(s.badges).length}/${B.BADGES.length}</h2>
        <div class="badge-grid">${badges}</div>
      </div>
      <div class="card" style="display:flex;flex-direction:column;gap:12px">
        <h2 class="section-title">${t('history')}</h2>
        ${hist ? `<div class="list">${hist}</div>` : `<p class="muted">${t('historyEmpty')}</p>`}
      </div>`;
  }
  const tile = (val, lbl) => `<div class="tile"><span class="stat-val">${val}</span><span class="stat-lbl">${lbl}</span></div>`;

  /* ── Venstertjes ─────────────────────────────────────────── */
  function openDialog(title, bodyHTML, kind = '') {
    const dlg = $('dlg');
    $('dlg-inner').dataset.kind = kind;
    $('dlg-inner').innerHTML = `<div class="dlg-head"><h2>${esc(title)}</h2><button class="icon-btn" type="button" data-act="close" aria-label="${t('close')}">${svg('<path d="M6 6l12 12M18 6 6 18"/>')}</button></div><div class="dlg-body">${bodyHTML}</div>`;
    if (!dlg.open) { try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); } }
  }
  function closeDialog() { const dlg = $('dlg'); if (dlg.open) { try { dlg.close(); } catch (e) { dlg.removeAttribute('open'); } } }

  function openHelp() {
    const legend = B.TIERS.map((tier, i) => `<div><span class="tier-badge t${i}">${esc(tier[B.lang])}</span>${ladderHTML(i)}<span class="num">+${fmt(tier.meters)} m</span></div>`).join('');
    const levels = B.LEVELS.map(l => `<span>${l.icon} ${esc(l[B.lang])}</span><span>${esc(t('lvlEx' + l.id))}</span>`).join('');
    const peaks = B.MOUNTAINS.slice(1).map(m => `<span>${esc(B.peakName(m, B.lang))}</span><span>${fmt(m.h)} m</span>`).join('');
    const zones = B.ZONES.map((z, i) => `<span>${z.icon} ${esc(t(z.label))}</span><span>${i ? fmt(B.ZONES[i - 1].to) : 0}+ m</span>`).join('');
    openDialog(t('helpTitle'), `
      <div><h3>${t('help1t')}</h3><p>${t('help1')}</p></div>
      <div><h3>${t('help2t')}</h3><p>${t('help2')}</p><div class="tier-legend" style="margin-top:10px">${legend}</div></div>
      <div><h3>${t('help9t')}</h3><p>${t('help9')}</p><p class="help-rule">${ruleTile({ type: 'starts', v: 'b' })}<span>${esc(t('helpRuleEx'))}</span></p></div>
      <div><h3>${t('help4t')}</h3><p>${t('help4')}</p><div class="peaks" style="margin-top:10px">${peaks}</div></div>
      <div><h3>${t('help8t')}</h3><p>${t('help8')}</p><div class="peaks levels" style="margin-top:10px">${levels}</div></div>
      <div><h3>${t('help7t')}</h3><p>${t('help7')}</p><div class="peaks" style="margin-top:10px">${zones}</div></div>
      <div><h3>${t('help5t')}</h3><p>${t('help5')}</p></div>
      <div><h3>${t('help6t')}</h3><p>${t('help6')}</p></div>`, 'help');
  }

  /* Onbeperkt: kies je moeilijkheid */
  function openLevelPicker() {
    const last = B.state.level;
    const count = id => B.questions.filter(q => q.lvl === id).length;
    openDialog(t('chooseLevel'), `<p>${t('chooseLevelSub')}</p><div class="level-list">${B.LEVELS.map(l => `
        <button class="level-btn l${l.id}" type="button" data-act="start-unlimited" data-lvl="${l.id}">
          <span class="lvl-icon" aria-hidden="true">${l.icon}</span>
          <span class="lvl-text"><span class="lvl-name">${esc(l[B.lang])}</span><span class="lvl-sub">${esc(t('lvlSub' + l.id))}</span>
            <span class="lvl-meta">${t('lvlCount', { n: fmt(count(l.id)) })}</span></span>
          ${l.id === last ? `<span class="pill">${t('lastTime')}</span>` : ''}
        </button>`).join('')}</div>`, 'level');
  }

  let installPrompt = null;
  function openSettings(confirmReset) {
    const seg = (act, options, value) => `<div class="seg" role="group">${options.map(([v, label]) =>
      `<button type="button" data-act="${act}" data-v="${v}" aria-pressed="${v === value}">${label}</button>`).join('')}</div>`;
    const reps = B.state.reports;
    const repList = reps.length
      ? `<ul class="report-list">${reps.slice(-8).reverse().map(r => `<li>${esc(r.text)} → “${esc(r.input)}”</li>`).join('')}</ul>
         <div class="btn-row"><button class="btn" type="button" data-act="copy-reports">${t('reportsCopy')}</button><button class="btn" type="button" data-act="clear-reports">${t('reportsClear')}</button></div>`
      : `<p>${t('reportsNone')}</p>`;
    openDialog(t('settings'), `
      <div class="setting"><span class="setting-name">${t('language')}</span>${seg('set-lang', [['nl', 'Nederlands'], ['en', 'English']], B.lang)}</div>
      <div class="setting"><span class="setting-name">${t('sound')}</span>${seg('set-sound', [['1', t('on')], ['0', t('off')]], B.state.sound ? '1' : '0')}</div>
      <div class="setting"><span class="setting-name">${t('levelFor')}</span>${levelSeg()}</div>
      <div class="setting"><span class="setting-name">${t('theme')}</span>${seg('set-theme', [['auto', t('themeAuto')], ['light', t('themeLight')], ['dark', t('themeDark')]], B.state.theme)}</div>
      <div><h3>${t('reports')} (${reps.length})</h3><p>${t('reportsInfo')}</p>${B.Cloud.isActive() ? `<p style="margin-top:6px">${t('reportsSynced')}</p>` : ''}<div style="margin-top:10px;display:flex;flex-direction:column;gap:10px">${repList}</div></div>
      ${installPrompt ? `<div><button class="btn full" type="button" data-act="install">${t('install')}</button><p style="margin-top:6px">${t('offline')}</p></div>` : ''}
      <div>${confirmReset
        ? `<p style="margin-bottom:10px">${t('resetConfirm')}</p><div class="btn-row"><button class="btn danger" type="button" data-act="reset-yes">${t('resetYes')}</button><button class="btn" type="button" data-act="settings">${t('cancel')}</button></div>`
        : `<button class="btn full danger" type="button" data-act="reset">${t('resetData')}</button>`}</div>
      <div><h3>${t('about')}</h3><p>${t('aboutText', { q: fmt(B.questions.length), a: fmt(B.totalAnswers()), v: B.CONFIG.version })}</p></div>`, 'settings');
  }

  function openConfirmQuit() {
    const daily = G && (G.mode === 'daily' || G.mode === 'archive');
    if (daily) {
      // Dagelijkse klim: gewoon pauzeren, alles blijft bewaard
      stopTimer();
      G = null;
      goHome();
      toast(esc(t('pauseInfo')), '⏸️');
      return;
    }
    openDialog(t('quit'), `<p>${t('quitConfirm')}</p><div class="btn-row"><button class="btn danger" type="button" data-act="quit-yes">${t('quitYes')}</button><button class="btn primary" type="button" data-act="close">${t('keepPlaying')}</button></div>`);
  }

  function openRoundDetail(round) {
    openDialog(roundTitle(round), `${squaresHTML(round.results)}<p class="num">${fmt(round.alt)} m · ${esc(B.peakName(B.MOUNTAINS[B.mountainIndexFor(round.alt)], B.lang))}</p>${answersListHTML(round.results)}`);
  }

  /* ── Algemene acties ─────────────────────────────────────── */
  function goHome() { stopTimer(); renderHome(); }

  function setLang(lang) {
    if (lang !== 'nl' && lang !== 'en') return;
    B.lang = lang;
    B.state.lang = lang;
    B.save();
    renderBar();
    rerender();
  }
  function rerender() {
    if (current === 'home') renderHome();
    else if (current === 'cats') renderCats();
    else if (current === 'archive') renderArchive();
    else if (current === 'stats') renderStats();
    else if (current === 'end' && lastRound) renderEnd(lastRound, false);
    else if (current === 'game' && G) {
      updateGameTexts();
      $('g-hud').innerHTML = hudHTML(hudAlt, false, 'meter');
      if (G.answered) { const q = B.byId[G.ids[G.idx]]; $('g-result').innerHTML = resultHTML(q, G.results[G.results.length - 1]); }
      else if (G.pending) openSuggest(G.pending.input, G.pending.list, true);
    }
    const dlg = $('dlg');
    if (dlg.open && $('dlg-inner').dataset.kind === 'settings') openSettings(false);
    else if (dlg.open && $('dlg-inner').dataset.kind === 'help') openHelp();
    else if (dlg.open && $('dlg-inner').dataset.kind === 'level') openLevelPicker();
  }

  const hostTheme = doc.documentElement.getAttribute('data-theme');
  function applyTheme() {
    const th = B.state.theme;
    if (th === 'light' || th === 'dark') doc.documentElement.setAttribute('data-theme', th);
    else if (hostTheme) doc.documentElement.setAttribute('data-theme', hostTheme);
    else doc.documentElement.removeAttribute('data-theme');
    World.refresh();
  }

  /* Eén klik-luisteraar voor alle knoppen met data-act */
  doc.addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.dataset.act;
    switch (act) {
      case 'home': closeDialog(); if (G && current === 'game') { openConfirmQuit(); break; } goHome(); break;
      case 'lang': setLang(B.lang === 'nl' ? 'en' : 'nl'); break;
      case 'sound': B.state.sound = !B.state.sound; B.save(); renderBar(); if (B.state.sound) { B.Sound.unlock(); B.Sound.badge(); } break;
      case 'stats': if (G && current === 'game') break; renderStats(); show('stats'); break;
      case 'help': openHelp(); break;
      case 'settings': openSettings(false); break;
      case 'close': closeDialog(); break;
      case 'start-daily': if (!B.state.daily[B.dayNumber()]) startRound('daily'); break;
      case 'resume': if (B.state.prog[B.dayNumber()]) resumeRound(B.state.prog[B.dayNumber()]); break;
      case 'resume-day': if (B.state.prog[el.dataset.day]) resumeRound(B.state.prog[el.dataset.day]); break;
      case 'play-day': {
        const day = Number(el.dataset.day);
        if (!B.state.daily[day]) startRound('archive', { day });
        break;
      }
      case 'mode-unlimited': startRound('unlimited', { lvl: B.state.level }); break;
      case 'set-level': {
        const lvl = Number(el.dataset.v);
        if (![1, 2, 3].includes(lvl)) break;
        B.state.level = lvl;
        B.save();
        doc.querySelectorAll('[data-act="set-level"]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.v) === lvl)));
        const sub = doc.querySelector('[data-act="mode-unlimited"] .mode-sub');
        if (sub) sub.textContent = t('unlimitedSub');
        break;
      }
      case 'start-unlimited': {
        const lvl = Number(el.dataset.lvl);
        if (![1, 2, 3].includes(lvl)) break;
        B.state.level = lvl;
        B.save();
        closeDialog();
        startRound('unlimited', { lvl });
        break;
      }
      case 'mode-cats': renderCats(); show('cats'); break;
      case 'mode-archive': renderArchive(); show('archive'); break;
      case 'cat': startRound('category', { cat: el.dataset.id }); break;
      case 'pick': pick(Number(el.dataset.i)); break;
      case 'suggest-edit': {
        hideSuggest();
        const i = $('g-input');
        if (i) { i.focus(); i.select(); }
        break;
      }
      case 'suggest-keep': {
        if (!G || G.answered || !G.pending) break;
        const q = B.byId[G.ids[G.idx]];
        const input = G.pending.input;
        wrongTry(q, input, t('tryNotOnList', { a: input }), true);
        break;
      }
      case 'report-try': {
        if (!G || G.answered) break;
        const earned = B.addReport(B.byId[G.ids[G.idx]], el.dataset.a || '');
        el.textContent = t('reported');
        el.disabled = true;
        earned.forEach(b => badgeToast(b));
        const i = $('g-input');
        if (i) i.focus({ preventScroll: true });
        break;
      }
      case 'next': if (performance.now() - resultAt > 450) nextQuestion(); break;
      case 'quit': openConfirmQuit(); break;
      case 'quit-yes': closeDialog(); stopTimer(); G = null; goHome(); break;
      case 'again': if (lastRound) startRound(lastRound.mode === 'category' ? 'category' : 'unlimited', { cat: lastRound.cat, lvl: lastRound.lvl }); break;
      case 'report': {
        if (!G || !G.answered) break;
        const r = G.results[G.results.length - 1];
        const q = B.byId[r.q];
        const earned = B.addReport(q, r.input);
        el.textContent = t('reported');
        el.disabled = true;
        earned.forEach(b => badgeToast(b));
        break;
      }
      case 'share-last': if (lastRound) share(lastRound); break;
      case 'share-day': { const r = dayRound(el.dataset.day); if (r) share(r); break; }
      case 'view-day': { const r = dayRound(el.dataset.day); if (r) openRoundDetail(r); break; }
      case 'hist': {
        const h = B.state.history[Number(el.dataset.i)];
        if (h) openRoundDetail({ mode: h.mode, day: h.day, cat: h.cat, lvl: h.lvl || 0, results: unpackAll(h.res), alt: h.alt });
        break;
      }
      case 'badge': {
        const b = B.BADGES.find(x => x.id === el.dataset.id);
        if (b) toast(`${esc(b[B.lang])}<small>${esc(B.lang === 'nl' ? b.dnl : b.den)}</small>`, b.icon);
        break;
      }
      case 'set-lang': setLang(el.dataset.v); break;
      case 'set-sound': B.state.sound = el.dataset.v === '1'; B.save(); renderBar(); openSettings(false); break;
      case 'set-theme': B.state.theme = el.dataset.v; B.save(); applyTheme(); openSettings(false); break;
      case 'copy-reports': {
        const text = B.reportsText();
        try {
          navigator.clipboard.writeText(text).then(() => toast(esc(t('copied')), '📋'), () => openDialog(t('reports'), `<textarea class="share-fallback" readonly>${esc(text)}</textarea>`));
        } catch (err) { openDialog(t('reports'), `<textarea class="share-fallback" readonly>${esc(text)}</textarea>`); }
        break;
      }
      case 'clear-reports': B.state.reports = []; B.save(); openSettings(false); break;
      case 'reset': openSettings(true); break;
      case 'reset-yes': B.resetAll(); closeDialog(); goHome(); break;
      case 'install': if (installPrompt) { installPrompt.prompt(); installPrompt = null; closeDialog(); } break;
      default: break;
    }
  });

  /* Klik buiten het venster = sluiten */
  $('dlg').addEventListener('click', e => { if (e.target === $('dlg')) closeDialog(); });

  /* Thema verandert → de berg krijgt nieuwe kleuren */
  if (global.matchMedia) {
    const mq = global.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', () => World.refresh());
  }
  if (global.MutationObserver) new MutationObserver(() => World.refresh()).observe(doc.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  /* Als je terugkomt na middernacht: nieuwe dag tonen */
  let shownDay = B.dayNumber();
  doc.addEventListener('visibilitychange', () => {
    if (doc.hidden) return;
    if (B.dayNumber() !== shownDay) { shownDay = B.dayNumber(); if (current === 'home') renderHome(); }
  });

  /* Installeren als app (PWA) */
  global.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; });
  if (!embedded && 'serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    global.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
    // Nieuwe versie geïnstalleerd? Dan meteen één keer herladen (niet pas de volgende keer)
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || reloaded || G) return;
      reloaded = true;
      global.location.reload();
    });
  }

  /* ── Opstarten ───────────────────────────────────────────── */
  function detectLang() {
    if (B.state.lang === 'nl' || B.state.lang === 'en') return B.state.lang;
    const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'nl'];
    return langs.some(l => /^nl\b/i.test(l)) ? 'nl' : 'en';
  }

  function start(hotData) {
    B.lang = detectLang();
    // Een dagelijkse klim van een vorige dag die nog bezig was, wordt een archiefklim
    Object.keys(B.state.prog).forEach(d => {
      const p = B.state.prog[d];
      if (!p || B.state.daily[d]) { delete B.state.prog[d]; return; }
      if (p.mode === 'daily' && Number(d) !== B.dayNumber()) p.mode = 'archive';
    });
    renderBar();
    applyTheme();
    World.init($('world'));
    if (hotData && hotData.G && hotData.G.ids) {
      G = Object.assign({ pending: null }, hotData.G);
      renderGame();
      if (G.answered) { showResult(B.byId[G.ids[G.idx]], G.results[G.results.length - 1]); }
      else showQuestion();
    } else goHome();
    // Online kopie ophalen (enkel in de claude.ai speel-link)
    B.Cloud.init(() => { B.lang = detectLang(); renderBar(); applyTheme(); if (!G) goHome(); });
  }

  const hot = global.claude && global.claude.hot;
  if (hot && typeof hot.snapshot === 'function') {
    try { hot.snapshot(() => ({ G: G && G.mode !== 'daily' && G.mode !== 'archive' ? Object.assign({}, G, { pending: null }) : null })); } catch (e) { /* niet beschikbaar */ }
  }
  if (hot && typeof hot.ready === 'function') hot.ready(start);
  else start((hot && hot.data) || {});
})(window);
