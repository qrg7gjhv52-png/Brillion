/* ─────────────────────────────────────────────────────────────
   Brillion · de klimwereld en effecten

   De wereld is één lange bergkam van het dal (0 m) tot de top van
   de Mount Everest (8.849 m). Hij vult het hele scherm. Een camera
   volgt de klimmer omhoog, langs:
     • hoogtezones: bos → alpenweide → rotsen → gletsjer →
       eeuwige sneeuw → death zone
     • wolkenlagen waar je doorheen klimt
     • bordjes van echte bergen (Kemmelberg … Everest)
     • een lucht die donkerder wordt, met sterren hoog boven
     • wind en sneeuwstorm die sterker worden met de hoogte
   Op het einde plant de klimmer een vlag en zoomt de camera uit
   over de hele berg, met je route en je 8 stops.

   Het spel (app.js) praat met de wereld via B.World:
     show(scherm) · frame(kader) · climb(hoogte) · slip() · dim()
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  const doc = global.document;
  const reduced = () => !!(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const now = () => global.performance.now();
  const EVEREST = B.CONFIG.everestHeight;
  const BOTTOM = -800;   // de wereld begint onder het dal
  const STEP = 50;       // meter tussen twee punten van de bergkam

  /* Getallen in de juiste taal (1.234 of 1,234) */
  const formats = {};
  const fmt = n => {
    const l = B.lang === 'en' ? 'en-GB' : 'nl-BE';
    return (formats[l] || (formats[l] = new Intl.NumberFormat(l))).format(Math.round(n));
  };

  /* ── Hoogtezones ─────────────────────────────────────────── */
  const ZONES = [
    { to: 1200, key: 'forest', label: 'zoneForest', icon: '🌲' },
    { to: 2300, key: 'meadow', label: 'zoneMeadow', icon: '🌼' },
    { to: 3600, key: 'rock', label: 'zoneRock', icon: '🪨' },
    { to: 4900, key: 'glacier', label: 'zoneGlacier', icon: '🧊' },
    { to: 8000, key: 'snow', label: 'zoneSnow', icon: '❄️' },
    { to: Infinity, key: 'death', label: 'zoneDeath', icon: '☠️' }
  ];
  B.ZONES = ZONES;
  B.zoneFor = alt => ZONES.find(z => alt < z.to);
  const BOUNDS = ZONES.slice(0, -1).map(z => z.to);   // 1200, 2300, …
  const BANDS = [1500, 3200, 5600, 7400];              // wolkenlagen
  const FAR_SIDE = [[420, 650], [1500, 2500], [4200, 7600], [9000, 16000]]; // achterkant van de top
  const STRATA = [[320, -130], [780, -340], [1420, -650]];                 // richels op de bergwand

  /* ── Kleuren uit de CSS-variabelen (licht of donker thema) ── */
  let C = null;
  function parseColor(str) {
    const s = String(str || '').trim();
    if (s[0] === '#') {
      const h = s.length === 4 ? s.slice(1).split('').map(c => c + c).join('') : s.slice(1, 7);
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    }
    const m = s.match(/\d+(\.\d+)?/g);
    return m && m.length >= 3 ? [Number(m[0]), Number(m[1]), Number(m[2])] : [128, 128, 128];
  }
  const rgb = (c, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a})`;
  const mix = (c1, c2, t) => [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];
  const tint = (c, f) => (f >= 0 ? mix(c, [255, 255, 255], f) : mix(c, [0, 0, 0], -f));
  function readColors() {
    const cs = global.getComputedStyle(doc.documentElement);
    const v = n => parseColor(cs.getPropertyValue(n));
    C = {
      night: cs.getPropertyValue('--night').trim() === '1',
      skyLowTop: v('--sky-low-top'), skyLowBot: v('--sky-low-bot'),
      skyHighTop: v('--sky-high-top'), skyHighBot: v('--sky-high-bot'),
      skySpaceTop: v('--sky-space-top'), skySpaceBot: v('--sky-space-bot'),
      zone: {
        forest: v('--zone-forest'), meadow: v('--zone-meadow'), rock: v('--zone-rock'),
        glacier: v('--zone-glacier'), snow: v('--zone-snow'), death: v('--zone-death')
      },
      tree: v('--tree'), rangeFar: v('--range-far'), rangeMid: v('--range-mid'), cloud: v('--cloud'),
      ink: v('--ink'), card: v('--card'), jacket: v('--glacier'), pack: v('--glacier-2'), glow: v('--alpenglow'),
      skin: v('--skin'), white: v('--cap'), bad: v('--bad'),
      tiers: [v('--t0'), v('--t1'), v('--t2'), v('--t3'), v('--t4')],
      fDisplay: cs.getPropertyValue('--font-display').trim() || 'sans-serif',
      fMono: cs.getPropertyValue('--font-mono').trim() || 'monospace'
    };
  }

  /* ── De berg van een dag (zelfde zaadje = zelfde berg) ────── */
  let world = null;
  function xAt(xs, a) {
    const f = clamp((a - BOTTOM) / STEP, 0, xs.length - 1.0001);
    const i = Math.floor(f);
    return lerp(xs[i], xs[i + 1], f - i);
  }
  const ridgeX = a => xAt(world.xs, a);

  function generate(seed) {
    const rand = B.rng('brillion-world-' + seed);
    const n = Math.ceil((EVEREST - BOTTOM) / STEP) + 1;
    const xs = new Float32Array(n);
    let x = 0, shoulder = 0;
    for (let i = 1; i < n; i++) {
      const a = BOTTOM + i * STEP;
      let slope;  // hoe steil (meter omhoog per stap opzij)
      if (a <= 0) slope = 0.14 + 0.62 * Math.pow(clamp((a + 350) / 350), 2) + rand() * 0.05;   // het dal
      else {
        if (shoulder <= 0 && a > 300 && a < EVEREST - 400 && rand() < 0.05) shoulder = 2 + Math.floor(rand() * 3);
        slope = 1.05 + 0.9 * (a / EVEREST) + (rand() - 0.5) * 0.7;   // hoe hoger, hoe steiler
        if (shoulder > 0) { slope = 0.38 + rand() * 0.22; shoulder--; } // af en toe een vlakker stuk
      }
      x += STEP / Math.max(0.12, slope);
      xs[i] = x + (a > 0 && i < n - 1 ? (rand() - 0.5) * 6 : 0);
    }
    const x0 = xs[Math.round(-BOTTOM / STEP)];
    for (let i = 0; i < n; i++) xs[i] -= x0;   // het dal (0 m) ligt op x = 0

    // Bomen, bloemen, rotsen, gletsjerspleten, sneeuw … en een dorpje in het dal
    const deco = [];
    const DENSITY = { forest: 6, meadow: 4, rock: 3, glacier: 2, snow: 2, death: 1 };
    for (let i = 0; i < n - 1; i++) {
      const a = BOTTOM + i * STEP;
      const key = B.zoneFor(a).key;
      for (let k = 0; k < DENSITY[key]; k++) {
        deco.push({ a: a + rand() * STEP, dx: 16 + rand() * 620, key, s: 0.6 + rand() * 0.8, r: rand() });
      }
    }
    for (let k = 0; k < 7; k++) deco.push({ a: -40 - rand() * 220, dx: 90 + rand() * 900, key: 'house', s: 0.8 + rand() * 0.4, r: rand() });

    const clouds = [];
    BANDS.forEach((band, bi) => {
      const cx = xAt(xs, band);
      for (let k = 0; k < 12; k++) {
        clouds.push({
          a: band + (rand() - 0.5) * 340, cx, off: rand() * 4400, w: 170 + rand() * 330, h: 36 + rand() * 48,
          front: bi < 3 && rand() < 0.38, puffs: 3 + Math.floor(rand() * 3), seed: rand(), speed: 0.7 + rand() * 0.6
        });
      }
    });
    const stars = Array.from({ length: 110 }, () => ({ x: rand(), y: rand() * 0.85, r: 0.4 + rand() * 1.2, a: 0.3 + rand() * 0.7 }));
    const phases = Array.from({ length: 8 }, () => rand() * Math.PI * 2);
    return { seed, xs, deco, clouds, stars, phases };
  }

  /* ── Toestand van camera en klimmer ──────────────────────── */
  const S = {
    canvas: null, g: null, W: 1, H: 1, refH: 800, lastW: 0, dpr: 1, dprCap: 2, raf: 0, last: 0, skip: 0,
    mode: 'home', rect: null, alt: 0, camAlt: 0, camV: 0, camX: 0, camXV: 0, ax: 0, ay: 0, snapped: false,
    zoom: 1, fit: 0, flag: 0, endAt: 0, pose: 'idle', poseUntil: 0, tween: null, slip: 0,
    stops: [], wind: [], snow: [], debris: [], time: 0, dimmed: false, dimAt: 0, windTick: 0, perf: { n: 0, sum: 0 }
  };

  /* Waar staat de klimmer op het scherm? (volgt het kader van de pagina) */
  function targetAnchor() {
    const r = S.rect || { x: 0, y: 0, w: S.W, h: S.H * 0.4 };
    if (S.mode === 'end') return [r.x + r.w * 0.5, r.y + r.h * 0.62];
    return [r.x + r.w * 0.27, r.y + r.h - 14];
  }

  /* Zachte veer: de camera vertrekt rustig en komt zacht tot stilstand */
  function spring(pos, vel, target, w, dt) {
    const x = pos - target;
    const e = Math.exp(-w * dt);
    const k = (vel + w * x) * dt;
    return [target + (x + k) * e, (vel - w * k) * e];
  }

  /* Overzicht van de hele berg, passend in het kader */
  function fitView() {
    const r = S.rect || { x: 0, y: 0, w: S.W, h: S.H * 0.45 };
    const h = Math.max(80, r.h - 24), w = Math.max(80, r.w - 24);
    const left = ridgeX(-300), right = ridgeX(EVEREST) + 4900;
    const lo = -300, hi = EVEREST + 450;
    const sc = Math.min(h / (hi - lo), w / (right - left));
    return { sc, cx: (left + right) / 2, ca: (lo + hi) / 2, ax: r.x + r.w / 2, ay: r.y + r.h / 2 };
  }

  /* De camera van dit moment: van wereld (x, hoogte) naar scherm (px) */
  function view(t) {
    const base = S.refH / 1500;          // 1.500 m hoogte past op het scherm
    const sc0 = base * S.zoom;
    let sc = sc0, cx = S.camX, ca = S.camAlt, ax = S.ax, ay = S.ay;
    const fe = ease(clamp(S.fit));
    if (fe > 0) {
      const f = fitView();
      sc = Math.exp(lerp(Math.log(sc0), Math.log(f.sc), fe));
      const span = sc0 / f.sc - 1;
      const w = span > 0.001 ? clamp((sc0 / sc - 1) / span) : fe;
      cx = lerp(cx, f.cx, w); ca = lerp(ca, f.ca, w); ax = lerp(ax, f.ax, w); ay = lerp(ay, f.ay, w);
    }
    if (S.slip && !reduced()) {           // even schudden bij uitglijden
      const k = clamp((t - S.slip) / 650);
      ax += Math.sin(k * 42) * 4 * (1 - k);
      ay += Math.cos(k * 35) * 3 * (1 - k);
    }
    return {
      sc, ca, cx, ax, ay, fe, base, k: sc / base,
      px: x => ax + (x - cx) * sc,
      py: a => ay - (a - ca) * sc,
      aTop: ca + ay / sc, aBot: ca - (S.H - ay) / sc
    };
  }
  const crest = (v, a) => ({ x: v.px(ridgeX(a)), y: v.py(a) });

  /* ── Tekenen ─────────────────────────────────────────────── */
  function skyColors(alt) {
    const t1 = clamp(alt / 5200), t2 = clamp((alt - 5200) / 3600);
    return {
      top: mix(mix(C.skyLowTop, C.skyHighTop, t1), C.skySpaceTop, t2),
      bot: mix(mix(C.skyLowBot, C.skyHighBot, t1), C.skySpaceBot, t2),
      t2
    };
  }

  function drawSky(g, v) {
    const sky = skyColors(v.ca);
    const gr = g.createLinearGradient(0, 0, 0, S.H);
    gr.addColorStop(0, rgb(sky.top));
    gr.addColorStop(1, rgb(sky.bot));
    g.fillStyle = gr;
    g.fillRect(0, 0, S.W, S.H);
    if (!C.night) {
      // zon met alpengloed
      const sx = S.W * 0.6, sy = S.H * 0.16;
      const glow = g.createRadialGradient(sx, sy, 0, sx, sy, S.H * 0.55);
      glow.addColorStop(0, rgb(C.glow, 0.34 * (1 - sky.t2 * 0.7)));
      glow.addColorStop(1, rgb(C.glow, 0));
      g.fillStyle = glow;
      g.fillRect(0, 0, S.W, S.H);
      g.fillStyle = 'rgba(255,255,255,0.85)';
      g.beginPath(); g.arc(sx, sy, Math.min(S.W, S.H) * 0.035, 0, Math.PI * 2); g.fill();
    } else {
      // maan
      const r = Math.min(S.W, S.H) * 0.042, mx = S.W * 0.6, my = S.H * 0.15;
      g.fillStyle = rgb(C.white, 0.95);
      g.beginPath(); g.arc(mx, my, r, 0, Math.PI * 2); g.fill();
      g.fillStyle = rgb(sky.top);
      g.beginPath(); g.arc(mx + r * 0.42, my - r * 0.25, r * 0.92, 0, Math.PI * 2); g.fill();
    }
    // sterren: 's nachts altijd, overdag pas hoog in de lucht
    const starA = C.night ? 0.5 + 0.5 * sky.t2 : clamp((v.ca - 6500) / 2000);
    if (starA > 0.02) {
      g.fillStyle = rgb(C.white);
      world.stars.forEach(s => {
        g.globalAlpha = s.a * starA * (0.75 + 0.25 * Math.sin(S.time * 1.7 + s.x * 40));
        g.beginPath(); g.arc(s.x * S.W, s.y * S.H, s.r, 0, Math.PI * 2); g.fill();
      });
      g.globalAlpha = 1;
    }
    return sky;
  }

  /* Bergketens in de verte: bewegen trager (diepte-effect) en zakken weg als je stijgt */
  function drawRanges(g, v, sky) {
    const layers = [
      { col: C.rangeFar, p: 0.04, base: 0.58, amp: 0.2, ph: 0, sea: true },
      { col: C.rangeMid, p: 0.15, base: 0.7, amp: 0.3, ph: 3 }
    ];
    layers.forEach(L => {
      const baseY = S.H * L.base + v.ca * v.base * L.p * 2.2;
      if (baseY - S.H * L.amp > S.H + 10) return;
      g.beginPath();
      g.moveTo(-20, S.H + 20);
      for (let sx = -20; sx <= S.W + 40; sx += 20) {
        const u = (sx + v.cx * v.sc * L.p) / Math.max(320, S.W);
        const n = 0.5 + 0.28 * Math.sin(u * 2.3 + world.phases[L.ph]) + 0.15 * Math.sin(u * 5.9 + world.phases[L.ph + 1]) +
          0.07 * Math.sin(u * 13.1 + world.phases[L.ph + 2]);
        g.lineTo(sx, baseY - S.H * L.amp * n);
      }
      g.lineTo(S.W + 40, S.H + 20);
      g.closePath();
      g.fillStyle = rgb(mix(L.col, sky.bot, 0.22));
      g.fill();
      if (L.sea && v.ca > 3500) {
        // wolkenzee onder je als je hoog zit
        const a = 0.55 * clamp((v.ca - 3500) / 3000);
        const top = baseY - S.H * 0.3;
        const gr = g.createLinearGradient(0, top, 0, baseY + 10);
        gr.addColorStop(0, rgb(C.cloud, 0));
        gr.addColorStop(1, rgb(C.cloud, a));
        g.fillStyle = gr;
        g.fillRect(0, top, S.W, Math.max(0, S.H - top));
      }
    });
  }

  function drawClouds(g, v, front) {
    const drift = S.time * 9;
    g.fillStyle = rgb(C.cloud);
    world.clouds.forEach(c => {
      if (c.front !== front) return;
      const f = front ? 1.4 : 1;   // wolken vooraan bewegen sneller
      const x = c.cx - 2600 + ((c.off + drift * c.speed) % 4400);
      const sx = v.ax + (x - v.cx) * v.sc * f;
      const sy = v.ay - (c.a - v.ca) * v.sc * f;
      const w = c.w * v.sc * f, h = c.h * v.sc * f;
      if (sx + w < -60 || sx - w > S.W + 60 || sy + h < -60 || sy - h > S.H + 60) return;
      g.globalAlpha = front ? 0.6 * (1 - v.fe) : 0.88 * (1 - 0.85 * v.fe);
      for (let k = 0; k < c.puffs; k++) {
        const ox = (k / (c.puffs - 1) - 0.5) * w * 0.95;
        const oy = Math.sin(k * 1.7 + c.seed * 6) * h * 0.22;
        const r = h * (0.5 + 0.4 * Math.pow(Math.sin(k * 2.3 + c.seed * 9), 2));
        g.beginPath(); g.ellipse(sx + ox, sy + oy, r * 1.7, r, 0, 0, Math.PI * 2); g.fill();
      }
    });
    g.globalAlpha = 1;
  }

  function drawGround(g, v) {
    const xs = world.xs;
    const i0 = Math.max(0, Math.floor((v.aBot - 400 - BOTTOM) / STEP));
    const i1 = Math.min(xs.length - 1, Math.ceil((v.aTop + 400 - BOTTOM) / STEP));
    const summit = i1 >= xs.length - 1;
    const aOf = i => BOTTOM + i * STEP;
    // de vorm van de berg
    g.beginPath();
    g.moveTo(-4000, S.H + 4000);
    g.lineTo(-4000, v.py(aOf(i0)));
    for (let i = i0; i <= i1; i++) g.lineTo(v.px(xs[i]), v.py(aOf(i)));
    if (summit) FAR_SIDE.forEach(([dx, da]) => g.lineTo(v.px(xs[xs.length - 1] + dx), v.py(EVEREST - da)));
    else g.lineTo(S.W + 4000, v.py(aOf(i1)));
    g.lineTo(S.W + 4000, S.H + 4000);
    g.closePath();
    // kleuren per hoogtezone (horizontale banden, zoals op een echte berg)
    const hiA = v.aTop + 400, loA = v.aBot - 400;
    const yTop = v.py(hiA), yBot = v.py(loA), span = yBot - yTop || 1;
    const gr = g.createLinearGradient(0, yTop, 0, yBot);
    const colAt = a => C.zone[B.zoneFor(a).key];
    const stop = (a, col) => gr.addColorStop(clamp((v.py(a) - yTop) / span), rgb(col));
    stop(hiA, colAt(hiA));
    const blend = clamp(60 / v.k, 60, 380);
    BOUNDS.filter(b => b < hiA && b > loA).reverse().forEach(b => { stop(b + blend, colAt(b + 1)); stop(b - blend, colAt(b - 1)); });
    stop(loA, colAt(loA));
    g.save();
    g.fillStyle = gr;
    g.fill();
    g.clip();
    // diepte: hoe verder van de kam, hoe donkerder
    const crestX = v.px(ridgeX(v.ca));
    const depth = g.createLinearGradient(crestX, 0, crestX + S.W * 0.9, 0);
    depth.addColorStop(0, 'rgba(0,0,0,0)');
    depth.addColorStop(1, `rgba(0,0,0,${C.night ? 0.3 : 0.16})`);
    g.fillStyle = depth;
    g.fillRect(0, 0, S.W, S.H);
    const near = clamp((v.k - 0.2) / 0.15);   // ingezoomd: details
    if (near > 0) {
      g.globalAlpha = near;
      // richels op de bergwand
      g.lineWidth = 1.3;
      g.strokeStyle = C.night ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';
      STRATA.forEach(([dx, da]) => {
        g.beginPath();
        for (let i = i0; i <= i1; i++) {
          const X = v.px(xs[i] + dx), Y = v.py(aOf(i) + da);
          i === i0 ? g.moveTo(X, Y) : g.lineTo(X, Y);
        }
        g.stroke();
      });
      // facetten langs de kam, zoals een geslepen briljant
      for (let i = i0; i < i1; i++) {
        const a = aOf(i);
        g.fillStyle = rgb(tint(colAt(a), i % 2 ? 0.1 : -0.06));
        g.beginPath();
        g.moveTo(v.px(xs[i]), v.py(a));
        g.lineTo(v.px(xs[i + 1]), v.py(a + STEP));
        g.lineTo(v.px(xs[i] + 150), v.py(a - 110));
        g.closePath();
        g.fill();
      }
      drawDeco(g, v);
      g.globalAlpha = 1;
    }
    if (near < 1) {
      // overzicht: grote facetten over de hele berg, zoals een edelsteen
      g.globalAlpha = 1 - near;
      const n = xs.length - 1, sx = xs[n];
      const faces = [];
      for (let i = Math.round(-BOTTOM / STEP); i < n; i += 16) {
        const j = Math.min(n, i + 16);
        faces.push([[xs[i], aOf(i)], [xs[j], aOf(j)], [xs[i] + 2600, aOf(i) - 1500]]);
      }
      faces.push([[sx, EVEREST], [sx + 1500, EVEREST - 2500], [sx - 700, EVEREST - 3300]]);
      faces.push([[sx + 1500, EVEREST - 2500], [sx + 4200, EVEREST - 7600], [sx + 300, EVEREST - 6200]]);
      faces.push([[sx - 700, EVEREST - 3300], [sx + 300, EVEREST - 6200], [sx - 2600, EVEREST - 6900]]);
      faces.forEach((f, idx) => {
        g.fillStyle = idx % 2 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
        g.beginPath();
        g.moveTo(v.px(f[0][0]), v.py(f[0][1]));
        g.lineTo(v.px(f[1][0]), v.py(f[1][1]));
        g.lineTo(v.px(f[2][0]), v.py(f[2][1]));
        g.closePath();
        g.fill();
      });
      g.globalAlpha = 1;
    }
    g.restore();
    // witte rand op de kam
    g.strokeStyle = rgb(C.white, C.night ? 0.35 : 0.7);
    g.lineWidth = 1.6;
    g.beginPath();
    for (let i = i0; i <= i1; i++) {
      const X = v.px(xs[i]), Y = v.py(aOf(i)) - 0.5;
      i === i0 ? g.moveTo(X, Y) : g.lineTo(X, Y);
    }
    g.stroke();
  }

  function drawDeco(g, v) {
    const k = v.k;
    world.deco.forEach(d => {
      if (d.a < v.aBot - 60 || d.a > v.aTop + 60) return;
      const x = v.px(ridgeX(d.a) + d.dx), y = v.py(d.a);
      if (x < -40 || x > S.W + 40) return;
      const s = d.s * k;
      switch (d.key) {
        case 'forest': {   // dennenboom
          const h = 21 * s, w = 8 * s;
          g.fillStyle = rgb(tint(C.tree, d.r > 0.5 ? 0.08 : -0.05));
          g.beginPath(); g.moveTo(x, y - h); g.lineTo(x + w, y - h * 0.35); g.lineTo(x - w, y - h * 0.35); g.closePath(); g.fill();
          g.beginPath(); g.moveTo(x, y - h * 0.7); g.lineTo(x + w * 1.25, y); g.lineTo(x - w * 1.25, y); g.closePath(); g.fill();
          break;
        }
        case 'meadow': {   // bloemetjes en gras
          const col = d.r < 0.33 ? C.glow : d.r < 0.66 ? C.white : C.tiers[4];
          g.fillStyle = rgb(col, 0.9);
          g.beginPath(); g.arc(x, y, 1.8 * Math.max(0.7, s), 0, Math.PI * 2); g.fill();
          g.strokeStyle = rgb(tint(C.zone.meadow, -0.25), 0.8);
          g.lineWidth = 1;
          g.beginPath(); g.moveTo(x + 4 * s, y + 3 * s); g.lineTo(x + 5 * s, y - 3 * s); g.moveTo(x + 6 * s, y + 3 * s); g.lineTo(x + 8 * s, y - 2 * s); g.stroke();
          break;
        }
        case 'rock': {     // rotsblok
          const r = 7 * s;
          g.fillStyle = rgb(tint(C.zone.rock, d.r > 0.5 ? 0.12 : -0.18));
          g.beginPath(); g.moveTo(x - r, y); g.lineTo(x - r * 0.5, y - r * 0.8); g.lineTo(x + r * 0.4, y - r);
          g.lineTo(x + r, y - r * 0.2); g.lineTo(x + r * 0.7, y); g.closePath(); g.fill();
          break;
        }
        case 'glacier': {  // gletsjerspleet
          g.strokeStyle = rgb(tint(C.zone.glacier, -0.38), 0.75);
          g.lineWidth = 1.4;
          g.beginPath(); g.moveTo(x - 9 * s, y - 2 * s); g.lineTo(x + 9 * s, y + 4 * s); g.stroke();
          break;
        }
        case 'house': {    // huisje in het dal
          const w = 9 * s, h = 7 * s;
          g.fillStyle = rgb(C.white, 0.95);
          g.fillRect(x - w / 2, y - h, w, h);
          g.fillStyle = rgb(d.r > 0.5 ? C.glow : tint(C.glow, -0.3));
          g.beginPath(); g.moveTo(x - w * 0.65, y - h); g.lineTo(x, y - h - 6 * s); g.lineTo(x + w * 0.65, y - h); g.closePath(); g.fill();
          g.fillStyle = rgb(C.ink, 0.6);
          g.fillRect(x - 1.2 * s, y - h * 0.55, 2.4 * s, 2.4 * s);
          break;
        }
        default: {         // sneeuwduin
          g.strokeStyle = rgb(C.white, 0.55);
          g.lineWidth = 1.2;
          g.beginPath(); g.arc(x, y, 7 * s, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
        }
      }
    });
  }

  function roundRect(g, x, y, w, h, r) {
    g.beginPath();
    g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
    g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
    g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y);
    g.closePath();
  }

  /* Labels van de hoogtezones aan de rechterkant */
  function drawZoneLabels(g, v) {
    const a = 1 - clamp(v.fe * 4);
    if (a <= 0) return;
    g.font = `600 11px ${C.fMono}`;
    g.textAlign = 'right';
    g.textBaseline = 'middle';
    BOUNDS.forEach((b, i) => {
      const y = v.py(b);
      if (y < 70 || y > S.H - 10) return;
      const text = `${fmt(b)} m · ${B.t(ZONES[i + 1].label).toUpperCase()}`;
      const w = g.measureText(text).width + 16;
      g.fillStyle = rgb(C.card, 0.8 * a);
      roundRect(g, S.W - w - 10, y - 10, w, 20, 10); g.fill();
      g.fillStyle = rgb(C.ink, 0.85 * a);
      g.fillText(text, S.W - 18, y + 0.5);
    });
  }

  /* Je route (oranje lijn) en je stops (gekleurd per niveau) */
  function drawRoute(g, v) {
    const top = Math.min(S.alt, EVEREST);
    if (top > 5) {
      g.strokeStyle = rgb(C.glow);
      g.lineWidth = v.fe > 0.5 ? 2.6 : 3.4;
      g.lineCap = 'round'; g.lineJoin = 'round';
      const from = Math.max(0, v.aBot - 100), to = Math.min(top, v.aTop + 100);
      if (to > from) {
        g.beginPath();
        for (let a = from; a < to; a += STEP / 2) {
          const p = crest(v, a);
          a === from ? g.moveTo(p.x, p.y - 2) : g.lineTo(p.x, p.y - 2);
        }
        const end = crest(v, to);
        g.lineTo(end.x, end.y - 2);
        g.stroke();
      }
    }
    S.stops.forEach(st => {
      const p = crest(v, Math.min(st.alt, EVEREST));
      if (p.y < -10 || p.y > S.H + 10) return;
      const r = v.fe > 0.5 ? 3.6 : 4.6;
      g.beginPath(); g.arc(p.x, p.y - 2, r, 0, Math.PI * 2);
      if (st.ok) {
        g.fillStyle = rgb(C.tiers[st.tier] || C.tiers[0]); g.fill();
        g.strokeStyle = rgb(C.white, 0.95); g.lineWidth = 1.3; g.stroke();
      } else {
        g.fillStyle = rgb(C.card); g.fill();
        g.strokeStyle = rgb(C.bad); g.lineWidth = 1.9; g.stroke();
      }
    });
  }

  /* Bordjes van echte bergen langs de route */
  function drawSigns(g, v) {
    const reachedIdx = B.mountainIndexFor(S.alt);
    B.MOUNTAINS.forEach((m, i) => {
      if (!m.h) return;
      const p = crest(v, Math.min(m.h, EVEREST));
      if (p.y < -70 || p.y > S.H + 40 || p.x < -220 || p.x > S.W + 40) return;
      const passed = S.alt >= m.h - 1;
      if (v.fe > 0.5) {
        // in het overzicht: puntjes, en een label bij de berg die je haalde
        g.fillStyle = rgb(passed ? C.glow : C.ink, passed ? 1 : 0.55);
        g.beginPath(); g.arc(p.x, p.y, 2.2, 0, Math.PI * 2); g.fill();
        if (i === reachedIdx) {
          g.font = `800 13px ${C.fDisplay}`;
          g.textAlign = 'right'; g.textBaseline = 'middle';
          const text = `${B.peakName(m, B.lang)} · ${fmt(m.h)} m`;
          const w = g.measureText(text).width + 16;
          const a = clamp((v.fe - 0.5) * 3);
          const left = p.x - w - 14 >= 8;   // past het links? anders rechts van het puntje
          const bx = left ? p.x - w - 14 : p.x + 14;
          g.fillStyle = rgb(C.card, 0.94 * a); roundRect(g, bx, p.y - 11, w, 22, 11); g.fill();
          g.textAlign = 'left';
          g.fillStyle = rgb(C.ink, a); g.fillText(text, bx + 8, p.y + 0.5);
        }
        return;
      }
      const post = 34;
      g.strokeStyle = rgb(tint(C.ink, 0.15), 0.9);
      g.lineWidth = 2.2;
      g.beginPath(); g.moveTo(p.x - 8, p.y); g.lineTo(p.x - 8, p.y - post); g.stroke();
      const name = B.peakName(m, B.lang), sub = `${fmt(m.h)} m · ${m.c}`;
      g.font = `800 14px ${C.fDisplay}`;
      const w1 = g.measureText(name).width;
      g.font = `600 11px ${C.fMono}`;
      const w2 = g.measureText(sub).width;
      const w = Math.max(w1, w2) + 16, h = 34;
      const bx = p.x - 8 - w, by = p.y - post - h + 6;
      g.fillStyle = passed ? rgb(C.glow) : rgb(C.card, 0.95);
      roundRect(g, bx, by, w, h, 6); g.fill();
      g.strokeStyle = passed ? rgb(tint(C.glow, -0.2)) : rgb(C.ink, 0.18);
      g.lineWidth = 1; g.stroke();
      g.textAlign = 'left'; g.textBaseline = 'alphabetic';
      g.fillStyle = passed ? '#FFFFFF' : rgb(C.ink);
      g.font = `800 14px ${C.fDisplay}`; g.fillText(name, bx + 8, by + 15);
      g.font = `600 11px ${C.fMono}`; g.fillText(sub, bx + 8, by + 28);
    });
  }

  /* De klimmer, getekend met eenvoudige vormen. (x, y) = zijn voeten. */
  function drawClimber(g, x, y, k, t, windy) {
    const pose = S.pose;
    let rot = 0, dx = 0, dy = 0;
    if (S.slip) {
      const s = clamp((t - S.slip) / 900);
      const e = Math.sin(Math.PI * Math.min(1, s * 1.15));
      dx = -10 * e; dy = 7 * e; rot = -0.5 * e;
    }
    const walking = pose === 'walk';
    const ph = S.time * (S.tween && S.tween.legend ? 7 : 12);
    g.save();
    g.translate(x + dx * k, y + dy * k);
    g.scale(k, k);
    g.rotate(rot + (walking ? 0.14 : 0));
    let bob = Math.sin(S.time * 2.4) * 0.6;
    if (walking) bob = -Math.abs(Math.sin(ph)) * 1.8;
    else if (pose === 'cheer') bob = -Math.abs(Math.sin(S.time * 7)) * 6;
    g.translate(0, bob);
    g.lineCap = 'round';
    // sjaal die wappert in de wind
    const wave = Math.sin(S.time * 9) * (1 + windy * 2);
    g.strokeStyle = rgb(C.glow); g.lineWidth = 2.4;
    g.beginPath(); g.moveTo(-1, -28.5); g.quadraticCurveTo(-7, -29 + wave, -12 - windy * 6, -27 + wave * 1.4); g.stroke();
    // benen met schoenen
    const swing = walking ? Math.sin(ph) * 0.6 : S.slip ? Math.sin(S.time * 30) * 0.5 : 0.1;
    g.strokeStyle = rgb(C.ink); g.lineWidth = 3.2;
    [[-2.6, swing], [2.6, -swing]].forEach(([lx, ang]) => {
      g.save(); g.translate(lx, -13); g.rotate(ang);
      g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 12.5); g.lineTo(2.6, 12.5); g.stroke();
      g.restore();
    });
    // rugzak en jas
    g.fillStyle = rgb(C.pack); roundRect(g, -10.2, -28, 7.4, 12, 2.6); g.fill();
    g.fillStyle = rgb(C.jacket); roundRect(g, -6.2, -29, 12.4, 17, 4.8); g.fill();
    // diamantje op de jas (het Brillion-logo)
    g.fillStyle = rgb(C.glow);
    g.beginPath(); g.moveTo(0, -24.6); g.lineTo(2.6, -21.6); g.lineTo(0, -18.6); g.lineTo(-2.6, -21.6); g.closePath(); g.fill();
    // arm met ijsbijl
    let arm = -0.4;
    if (pose === 'cheer') arm = -2.1;
    else if (pose === 'flag') arm = -0.95;
    else if (walking) arm = -0.6 + Math.sin(ph + 1.2) * 0.55;
    if (S.slip) arm = -2.4;
    g.save(); g.translate(4.6, -25); g.rotate(arm);
    g.strokeStyle = rgb(C.jacket); g.lineWidth = 3.4;
    g.beginPath(); g.moveTo(0, 0); g.lineTo(7.5, 0); g.stroke();
    if (pose !== 'flag') {
      g.strokeStyle = rgb(C.ink); g.lineWidth = 1.7;
      g.beginPath(); g.moveTo(7.5, 0); g.lineTo(8.4, -10); g.stroke();
      g.beginPath(); g.moveTo(5.6, -9.6); g.lineTo(11.2, -10.2); g.stroke();
    }
    g.restore();
    // hoofd, muts met pompon, ogen (kijken naar boven)
    g.fillStyle = rgb(C.skin); g.beginPath(); g.arc(0.4, -34, 4.8, 0, Math.PI * 2); g.fill();
    g.fillStyle = rgb(C.glow);
    g.beginPath(); g.arc(0.4, -34.4, 5, Math.PI, 0); g.closePath(); g.fill();
    g.beginPath(); g.arc(0.4, -40, 1.9, 0, Math.PI * 2); g.fill();
    g.fillStyle = rgb(C.ink);
    g.beginPath(); g.arc(1.4, -33, 0.85, 0, Math.PI * 2); g.arc(4.1, -33, 0.85, 0, Math.PI * 2); g.fill();
    g.restore();
  }

  /* De vlag op de top */
  function drawFlag(g, x, y, k, amount) {
    if (amount <= 0) return;
    const h = 42 * k * ease(amount), px = x + 12 * k;
    g.strokeStyle = rgb(C.ink); g.lineWidth = 2 * Math.max(0.6, k); g.lineCap = 'round';
    g.beginPath(); g.moveTo(px, y + 1); g.lineTo(px, y - h); g.stroke();
    if (amount < 0.55) return;
    const open = clamp((amount - 0.55) / 0.45);
    const fw = 24 * k * open, fh = 15 * k, top = y - h;
    g.fillStyle = rgb(C.glow);
    g.beginPath(); g.moveTo(px, top);
    for (let i = 0; i <= 6; i++) g.lineTo(px + (fw * i) / 6, top + Math.sin(S.time * 6 + i) * 1.6 * k);
    for (let i = 6; i >= 0; i--) g.lineTo(px + (fw * i) / 6, top + fh + Math.sin(S.time * 6 + i) * 1.6 * k);
    g.closePath(); g.fill();
    if (open > 0.6) {
      const cx = px + fw * 0.5, cy = top + fh * 0.5, d = 4 * k;
      g.fillStyle = 'rgba(255,255,255,0.95)';
      g.beginPath(); g.moveTo(cx, cy - d); g.lineTo(cx + d, cy); g.lineTo(cx, cy + d); g.lineTo(cx - d, cy); g.closePath(); g.fill();
    }
  }

  /* Steentjes en sneeuw die wegvallen als de klimmer uitglijdt */
  function drawDebris(g, v) {
    if (!S.debris.length) return;
    S.debris.forEach(p => {
      const col = p.a > 3600 ? C.white : tint(C.zone[B.zoneFor(p.a).key], -0.35);
      g.fillStyle = rgb(col, clamp(p.life * 1.5));
      g.beginPath(); g.arc(v.px(p.x), v.py(p.a), p.r * Math.max(0.6, v.k), 0, Math.PI * 2); g.fill();
    });
  }

  /* Mist als je door een wolkenlaag klimt, witte waas hoog in de storm */
  function drawMist(g, v) {
    if (v.fe > 0.5) return;
    let a = 0;
    const moving = clamp(Math.abs(S.camV) / 280);
    BANDS.slice(0, 3).forEach(b => {
      const d = Math.abs(v.ca - b);
      if (d < 300) a = Math.max(a, (0.08 + 0.24 * moving) * (1 - d / 300));
    });
    a += 0.07 * Math.pow(clamp((v.ca - 6000) / 2849), 1.5);
    if (a > 0.01) { g.fillStyle = rgb(C.cloud, a * (1 - v.fe * 2)); g.fillRect(0, 0, S.W, S.H); }
  }

  /* Wind en sneeuw worden sterker met de hoogte */
  function windLevelAt(v) { return Math.pow(clamp(v.ca / EVEREST), 1.2) * (1 - v.fe * 0.5); }
  function weatherUpdate(dt, level) {
    const off = reduced();
    const gust = 0.8 + 0.2 * Math.sin(S.time * 0.7) + 0.12 * Math.sin(S.time * 1.9);
    const windN = off ? 0 : Math.round(3 + 40 * level);
    const spawn = anywhere => ({
      x: anywhere ? Math.random() * S.W : S.W + Math.random() * 80, y: Math.random() * S.H,
      len: 24 + Math.random() * 70, v: (360 + 780 * level) * (0.7 + Math.random() * 0.6), a: 0.1 + Math.random() * 0.22
    });
    while (S.wind.length < windN) S.wind.push(spawn(true));
    if (S.wind.length > windN) S.wind.length = windN;
    const snowN = off ? 0 : Math.round(190 * Math.pow(clamp((S.camAlt - 4300) / 4549), 1.1) * (1 - S.fit * 0.6));
    const flake = anywhere => ({
      x: anywhere ? Math.random() * S.W : S.W + Math.random() * 40, y: anywhere ? Math.random() * S.H : Math.random() * S.H * 0.9,
      vx: -(110 + 420 * level) * (0.6 + Math.random() * 0.8), vy: 30 + Math.random() * 90, r: 0.8 + Math.random() * 1.8
    });
    while (S.snow.length < snowN) S.snow.push(flake(true));
    if (S.snow.length > snowN) S.snow.length = snowN;
    S.wind.forEach(p => { p.x -= p.v * gust * dt; if (p.x + p.len < -20) Object.assign(p, spawn(false)); });
    S.snow.forEach(p => {
      p.x += p.vx * gust * dt; p.y += p.vy * dt;
      if (p.x < -10 || p.y > S.H + 10) Object.assign(p, flake(false));
    });
  }
  function drawWeather(g) {
    g.strokeStyle = rgb(C.white);
    g.lineWidth = 1.2;
    S.wind.forEach(p => {
      g.globalAlpha = p.a;
      g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(p.x + p.len, p.y - p.len * 0.08); g.stroke();
    });
    g.fillStyle = rgb(C.white);
    g.globalAlpha = 0.85;
    S.snow.forEach(p => { g.beginPath(); g.arc(p.x, p.y, p.r, 0, Math.PI * 2); g.fill(); });
    g.globalAlpha = 1;
  }

  /* ── Bewegen ─────────────────────────────────────────────── */
  // Legendarisch: snel vertrekken, traag (slow-motion) in het midden, dan doorstomen
  function slowmo(k) {
    if (k < 0.22) return ease(k / 0.22) * 0.3;
    if (k < 0.78) return 0.3 + ((k - 0.22) / 0.56) * 0.38;
    return 0.68 + ease((k - 0.78) / 0.22) * 0.32;
  }
  function altAt(tw, t) {
    const k = clamp((t - tw.t0) / tw.dur);
    return tw.from + (tw.to - tw.from) * (tw.legend ? slowmo(k) : ease(k));
  }

  let lastWind = null;
  function update(t, dt) {
    if (!reduced()) S.time += dt;
    const tw = S.tween;
    if (tw) {
      const k = clamp((t - tw.t0) / tw.dur);
      S.alt = altAt(tw, t);
      S.zoom = 1 + (tw.legend ? 0.18 : 0.05) * Math.sin(Math.PI * k);
      S.pose = 'walk';
      if (tw.onAlt) tw.onAlt(S.alt);
      const mi = B.mountainIndexFor(S.alt);
      if (mi > tw.peak) { tw.peak = mi; if (tw.onPeak) tw.onPeak(B.MOUNTAINS[mi]); }
      if (t - tw.step > (tw.legend ? 300 : 175)) {
        tw.step = t; tw.n++;
        if (B.Sound && B.Sound.step) B.Sound.step(S.alt, tw.n);
      }
      if (k >= 1) {
        S.tween = null;
        S.zoom = 1;
        S.pose = S.mode === 'end' ? 'flag' : tw.tier >= 3 ? 'cheer' : 'idle';
        S.poseUntil = t + 1600;
        if (tw.done) tw.done();
      }
    } else if (S.pose === 'cheer' && t > S.poseUntil) S.pose = 'idle';
    if (S.slip && t - S.slip > 900) S.slip = 0;

    // de camera volgt met een zachte veer (en kijkt een beetje vooruit tijdens het klimmen)
    const target = S.tween ? altAt(S.tween, t + 150) : S.alt;
    const w = S.tween ? 8 : 5;
    [S.camAlt, S.camV] = spring(S.camAlt, S.camV, target, w, dt);
    [S.camX, S.camXV] = spring(S.camX, S.camXV, ridgeX(target), w, dt);
    const [tax, tay] = targetAnchor();
    const fa = 1 - Math.exp(-dt * 10);
    S.ax += (tax - S.ax) * fa;
    S.ay += (tay - S.ay) * fa;

    // einde: vlag planten, daarna uitzoomen over de hele berg
    if (S.mode === 'end') {
      const e = t - S.endAt;
      if (e >= 0) {
        if (S.flag === 0 && B.Sound && B.Sound.flag) B.Sound.flag();
        S.flag = Math.max(0.001, clamp(e / 900));
        S.pose = 'flag';
        S.fit = reduced() ? 1 : clamp((e - 1500) / 2400);
      }
    } else if (S.fit > 0) S.fit = Math.max(0, S.fit - dt / 0.9);

    S.debris = S.debris.filter(p => (p.life -= dt) > 0);
    S.debris.forEach(p => { p.va -= 1300 * dt; p.x += p.vx * dt; p.a += p.va * dt; });

    const fe = ease(clamp(S.fit));
    weatherUpdate(dt, Math.pow(clamp(S.camAlt / EVEREST), 1.2) * (1 - fe * 0.5));

    // wind-geluid: luider hoe hoger, stil op het startscherm
    // (ook om de halve seconde opnieuw, zodat geluid aan/uit meteen werkt)
    const wind = S.mode === 'home' || S.dimmed || doc.hidden ? -1 : Math.round(S.camAlt / 25) * 25;
    S.windTick = (S.windTick + 1) % 30;
    if ((wind !== lastWind || S.windTick === 0) && B.Sound && B.Sound.windLevel) { lastWind = wind; B.Sound.windLevel(wind); }
  }

  function isBusy() {
    const [tax, tay] = targetAnchor();
    return !!(S.tween || S.slip || S.debris.length || (S.mode === 'end' && S.fit < 1) || (S.mode !== 'end' && S.fit > 0) ||
      Math.abs(S.camV) > 1 || Math.abs(S.camAlt - S.alt) > 1 || Math.abs(S.ax - tax) > 0.5 || Math.abs(S.ay - tay) > 0.5);
  }

  function draw(t) {
    const g = S.g, v = view(t);
    g.setTransform(S.dpr, 0, 0, S.dpr, 0, 0);
    const sky = drawSky(g, v);
    drawRanges(g, v, sky);
    drawClouds(g, v, false);
    drawGround(g, v);
    drawZoneLabels(g, v);
    drawRoute(g, v);
    drawSigns(g, v);
    const k = clamp(S.refH / 680, 0.95, 1.45) * clamp(v.k, 0.45, 1.3);
    const me = crest(v, Math.min(S.alt, EVEREST));
    drawFlag(g, me.x, me.y, k, S.flag);
    drawClimber(g, me.x, me.y - 1, k, t, windLevelAt(v));
    drawDebris(g, v);
    drawClouds(g, v, true);
    drawMist(g, v);
    drawWeather(g);
  }

  function frame(t) {
    S.raf = 0;
    if (!world || !C || !S.g) return;
    const dtRaw = S.last ? (t - S.last) / 1000 : 1 / 60;
    S.last = t;
    const dt = Math.min(0.05, dtRaw);
    update(t, dt);
    // stilstaand beeld: maar half zo vaak tekenen (spaart de batterij)
    const busy = isBusy();
    S.skip = busy ? 0 : (S.skip + 1) % 2;
    if (S.skip === 0) draw(t);
    // trage toestellen: minder scherpe pixels
    if (busy && dtRaw < 0.2) {
      S.perf.sum += dtRaw;
      if (++S.perf.n >= 90) {
        if (S.perf.sum / S.perf.n > 0.026 && S.dprCap > 1) { S.dprCap = Math.max(1, S.dprCap - 0.5); resize(true); }
        S.perf.n = 0; S.perf.sum = 0;
      }
    }
    if (S.dimmed && t - S.dimAt > 700) return;   // bevroren achter een ander scherm
    if (doc.hidden) return;
    S.raf = global.requestAnimationFrame(frame);
  }
  function wake() {
    if (!S.raf && S.g && !doc.hidden) { S.last = 0; S.raf = global.requestAnimationFrame(frame); }
  }

  function resize(force) {
    if (!S.canvas) return;
    const W = Math.max(1, S.canvas.clientWidth || global.innerWidth);
    const H = Math.max(1, S.canvas.clientHeight || global.innerHeight);
    // de schaal hangt af van de grootste hoogte (zo springt alles niet als de adresbalk verdwijnt)
    if (W !== S.lastW) { S.lastW = W; S.refH = H; } else S.refH = Math.max(S.refH, H);
    const dpr = Math.min(S.dprCap, global.devicePixelRatio || 1);
    if (!force && W === S.W && H === S.H && dpr === S.dpr) return;
    S.W = W; S.H = H; S.dpr = dpr;
    S.canvas.width = Math.round(W * dpr);
    S.canvas.height = Math.round(H * dpr);
    S.wind = []; S.snow = [];
    wake();
  }

  function snapCamera() {
    S.camAlt = S.alt; S.camV = 0;
    S.camX = ridgeX(S.alt); S.camXV = 0;
    [S.ax, S.ay] = targetAnchor();
    S.fit = 0;
  }

  /* ── Wat het spel kan vragen ─────────────────────────────── */
  B.World = {
    init(canvas) {
      if (!canvas || !canvas.getContext) return;
      S.canvas = canvas;
      S.g = canvas.getContext('2d');
      if (!S.g) return;
      readColors();
      world = generate(1);
      resize(true);
      global.addEventListener('resize', () => resize(false));
      doc.addEventListener('visibilitychange', () => {
        if (doc.hidden) { if (B.Sound && B.Sound.windLevel) B.Sound.windLevel(-1); lastWind = -1; }
        else wake();
      });
      wake();
    },

    /* Een scherm kiezen: 'home', 'game' of 'end' */
    show(mode, { seed = 1, alt = 0, stops = [], flag = false } = {}) {
      if (!S.g) return;
      const fresh = !world || world.seed !== seed;
      if (fresh) world = generate(seed);
      alt = clamp(alt, 0, EVEREST);
      const t = now();
      // een klim die nog bezig is naar dezelfde hoogte mag eerst afwerken
      const keep = !!S.tween && Math.abs(S.tween.to - alt) < 1;
      if (!keep) { S.tween = null; S.zoom = 1; S.alt = alt; }
      S.mode = mode;
      S.stops = stops;
      if (mode === 'end') {
        S.flag = 0;
        S.endAt = keep ? S.tween.t0 + S.tween.dur + 250 : t + 350;
        if (!keep) S.pose = 'idle';
      } else {
        S.endAt = 0;
        S.flag = flag ? 1 : 0;
        if (!keep) S.pose = flag ? 'flag' : 'idle';
      }
      if (fresh || !S.snapped) { snapCamera(); S.snapped = true; }
      this.dim(false);
      wake();
    },

    /* Het kader op de pagina waarin de klimmer moet staan (in px) */
    frame(rect, instant) {
      S.rect = rect;
      if (instant || !S.snapped) [S.ax, S.ay] = targetAnchor();
      wake();
    },

    /* Wereld zacht wegdimmen achter lijsten (categorieën, archief, statistieken) */
    dim(on) {
      if (!S.canvas) return;
      on = !!on;
      if (on === S.dimmed) return;
      S.dimmed = on;
      S.dimAt = now();
      S.canvas.classList.toggle('dim', on);
      wake();
    },

    /* Klimmen naar een nieuwe hoogte. Hogere klasse = langere klim; 1 in a Brillion = slow-motion. */
    climb(to, { score = 0, tier = 0, onAlt, onPeak, done } = {}) {
      to = clamp(to, 0, EVEREST);
      if (!S.g || reduced()) {
        S.alt = to;
        if (onAlt) onAlt(to);
        if (done) done();
        wake();
        return;
      }
      const legend = tier >= 4;
      S.tween = {
        from: S.alt, to, t0: now(), dur: legend ? 3400 : 900 + (score / 100) * 1500, legend, tier,
        onAlt, onPeak, done, step: 0, n: 0, peak: B.mountainIndexFor(S.alt)
      };
      wake();
    },

    /* Fout antwoord: de klimmer glijdt even weg (de hoogte blijft) */
    slip() {
      if (!S.g) return;
      S.slip = now();
      if (!reduced() && world) {
        const x0 = ridgeX(S.alt);
        for (let i = 0; i < 10; i++) {
          S.debris.push({ x: x0 - Math.random() * 10, a: S.alt + Math.random() * 6, vx: -(60 + Math.random() * 220), va: 80 + Math.random() * 260, life: 0.9 + Math.random() * 0.5, r: 1.2 + Math.random() * 2.2 });
        }
      }
      wake();
    },

    setStops(stops) { S.stops = stops || []; wake(); },
    /* voor tests: wat doet de camera nu? */
    debug: () => ({ mode: S.mode, alt: S.alt, camAlt: S.camAlt, fit: S.fit, flag: S.flag, dimmed: S.dimmed, pose: S.pose, tween: !!S.tween }),
    refresh() { if (S.canvas) { readColors(); wake(); } }
  };

  /* ── Sneeuw-confetti (bij Legendarisch en op de Everest) ─── */
  let fxRunning = false;
  function snow(strength = 1) {
    if (reduced() || !C) return;
    const canvas = doc.getElementById('fx');
    if (!canvas || fxRunning) return;
    fxRunning = true;
    canvas.hidden = false;
    const dpr = Math.min(2, global.devicePixelRatio || 1);
    const w = global.innerWidth, h = global.innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    const g = canvas.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = [C.white, C.jacket, C.glow, C.tiers[4], C.zone.glacier];
    const parts = Array.from({ length: Math.round(120 * strength) }, () => ({
      x: Math.random() * w, y: -Math.random() * h * 0.6 - 10,
      vx: (Math.random() - 0.5) * 1.4, vy: 1.6 + Math.random() * 2.8,
      r: 2.5 + Math.random() * 4.5, rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.12,
      gem: Math.random() < 0.4, color: colors[Math.floor(Math.random() * colors.length)]
    }));
    const t0 = now(), life = 3000;
    const tick = t => {
      const e = t - t0;
      g.clearRect(0, 0, w, h);
      g.globalAlpha = e > life - 700 ? Math.max(0, (life - e) / 700) : 1;
      parts.forEach(p => {
        p.x += p.vx + Math.sin((e + p.r * 100) / 500) * 0.4;
        p.y += p.vy; p.rot += p.vr;
        g.save(); g.translate(p.x, p.y); g.rotate(p.rot);
        if (p.gem) {
          g.fillStyle = rgb(p.color);
          g.beginPath(); g.moveTo(0, -p.r * 1.3); g.lineTo(p.r, 0); g.lineTo(0, p.r * 1.3); g.lineTo(-p.r, 0); g.closePath(); g.fill();
        } else {
          g.strokeStyle = rgb(p.color === C.white ? C.jacket : p.color); g.lineWidth = 1.2;
          for (let i = 0; i < 3; i++) { g.rotate(Math.PI / 3); g.beginPath(); g.moveTo(-p.r, 0); g.lineTo(p.r, 0); g.stroke(); }
        }
        g.restore();
      });
      if (e < life) global.requestAnimationFrame(tick);
      else { g.clearRect(0, 0, w, h); canvas.hidden = true; fxRunning = false; }
    };
    global.requestAnimationFrame(tick);
  }
  B.FX = { snow };
})(typeof window !== 'undefined' ? window : globalThis);
