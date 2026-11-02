/* ─────────────────────────────────────────────────────────────
   Brillion · tekeningen en effecten
   - De berg: elke dag een andere, met facetten zoals een
     geslepen briljant. Getekend op een <canvas>.
   - Sneeuw-confetti bij een Legendarisch antwoord.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  const doc = global.document;
  const reduced = () => global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lerp = (a, b, t) => a + (b - a) * t;

  /* Kleuren uit de CSS-variabelen lezen (zo volgt alles het licht/donker thema) */
  function tokens() {
    const cs = global.getComputedStyle(doc.documentElement);
    const g = n => cs.getPropertyValue(n).trim();
    return {
      sky1: g('--sky1'), sky2: g('--sky2'), ridge3: g('--ridge3'), ridge2: g('--ridge2'),
      lit: g('--peak-lit'), lit2: g('--peak-lit2'), shade: g('--peak-shade'), dark: g('--peak-dark'),
      cap: g('--cap'), capShade: g('--cap-shade'), trail: g('--trail'), glow: g('--alpenglow'),
      ground: g('--snow'), night: g('--night') === '1', glacier: g('--glacier'), legend: g('--t4')
    };
  }

  function setup(canvas) {
    const dpr = Math.min(2, global.devicePixelRatio || 1);
    const w = Math.max(1, canvas.clientWidth), h = Math.max(1, canvas.clientHeight);
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    const g = canvas.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { g, w, h };
  }

  function poly(g, pts, fill) {
    g.beginPath();
    pts.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)));
    g.closePath();
    g.fillStyle = fill;
    g.fill();
  }

  /* De vorm van de berg voor een bepaalde dag (altijd dezelfde voor hetzelfde zaadje) */
  function geometry(w, h, seed, compact) {
    const rand = B.rng('scene-' + seed);
    const baseY = h * (compact ? 1.02 : 0.97);
    const apex = { x: w * (0.58 + rand() * 0.1), y: h * (compact ? 0.1 : 0.12) };
    const left = { x: -w * 0.1, y: baseY };
    const right = { x: w * 1.1, y: baseY };
    const n = 4;
    const L = [apex], R = [apex], S = [apex];
    for (let i = 1; i < n; i++) {
      const t = i / n;
      L.push({ x: lerp(apex.x, left.x, t) + (rand() - 0.5) * w * 0.04, y: lerp(apex.y, left.y, t) + (rand() - 0.6) * h * 0.09 });
      R.push({ x: lerp(apex.x, right.x, t) + (rand() - 0.5) * w * 0.04, y: lerp(apex.y, right.y, t) + (rand() - 0.6) * h * 0.09 });
      S.push({ x: apex.x + w * (0.03 + rand() * 0.05) * t, y: lerp(apex.y, baseY, t) });
    }
    L.push(left); R.push(right); S.push({ x: apex.x + w * 0.07, y: baseY });
    const ridgeA = [], ridgeB = [];
    for (let i = 0; i <= 8; i++) ridgeA.push({ x: (w * i) / 8, y: h * (0.42 + rand() * 0.2) });
    for (let i = 0; i <= 10; i++) ridgeB.push({ x: (w * i) / 10, y: h * (0.55 + rand() * 0.18) });
    const stars = [];
    for (let i = 0; i < 46; i++) stars.push({ x: rand() * w, y: rand() * h * 0.55, r: 0.4 + rand() * 1.1, a: 0.3 + rand() * 0.6 });
    const capT = 0.3 + rand() * 0.08;
    const jag = [];
    for (let i = 0; i <= 12; i++) jag.push((rand() - 0.5) * h * 0.06);

    /* Rand van de berg aan de linkerkant op hoogte y (zodat het pad op de berg blijft) */
    const edgeX = y => {
      for (let i = 0; i < L.length - 1; i++) {
        const a = L[i], b = L[i + 1];
        if (y >= Math.min(a.y, b.y) && y <= Math.max(a.y, b.y)) return lerp(a.x, b.x, (y - a.y) / (b.y - a.y || 1));
      }
      return left.x;
    };
    const start = { x: Math.max(w * 0.14, edgeX(baseY - h * 0.06) + w * 0.06), y: baseY - h * (compact ? 0.08 : 0.06) };
    const trail = p => {
      const y = lerp(start.y, apex.y + h * 0.02, p);
      const cx = lerp(start.x, apex.x, p);
      const amp = w * 0.09 * (1 - p * 0.92);
      let x = cx + Math.sin(p * Math.PI * 5) * amp;
      x = Math.max(x, edgeX(y) + w * 0.035);
      return { x, y };
    };
    return { apex, baseY, L, R, S, ridgeA, ridgeB, stars, capT, jag, trail };
  }

  /* Tekent de volledige scène. progress = 0 (onderaan) tot 1 (top). */
  function draw(canvas, { seed = 1, progress = 0, compact = false } = {}) {
    if (!canvas) return null;
    const { g, w, h } = setup(canvas);
    const c = tokens();
    const geo = geometry(w, h, seed, compact);
    g.clearRect(0, 0, w, h);

    // Lucht
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, c.sky1);
    sky.addColorStop(1, c.sky2);
    g.fillStyle = sky;
    g.fillRect(0, 0, w, h);

    if (c.night) {
      geo.stars.forEach(s => { g.globalAlpha = s.a; g.fillStyle = c.cap; g.beginPath(); g.arc(s.x, s.y, s.r, 0, Math.PI * 2); g.fill(); });
      g.globalAlpha = 1;
      g.fillStyle = c.cap;
      g.beginPath(); g.arc(w * 0.16, h * 0.2, Math.min(w, h) * 0.06, 0, Math.PI * 2); g.fill();
      g.fillStyle = c.sky1;
      g.beginPath(); g.arc(w * 0.16 + Math.min(w, h) * 0.025, h * 0.2 - Math.min(w, h) * 0.015, Math.min(w, h) * 0.055, 0, Math.PI * 2); g.fill();
    } else {
      const sun = g.createRadialGradient(w * 0.2, h * 0.62, 0, w * 0.2, h * 0.62, h * 0.7);
      sun.addColorStop(0, c.glow);
      sun.addColorStop(1, 'rgba(0,0,0,0)');
      g.globalAlpha = 0.28; g.fillStyle = sun; g.fillRect(0, 0, w, h); g.globalAlpha = 1;
    }

    // Bergketens in de verte
    poly(g, [{ x: 0, y: h }].concat(geo.ridgeA, [{ x: w, y: h }]), c.ridge3);
    poly(g, [{ x: 0, y: h }].concat(geo.ridgeB, [{ x: w, y: h }]), c.ridge2);

    // De berg zelf, in facetten (zoals een briljant)
    const { L, R, S } = geo;
    for (let k = 0; k < L.length - 1; k++) {
      poly(g, [L[k], L[k + 1], S[k + 1]], k % 2 ? c.lit2 : c.lit);
      if (k > 0) poly(g, [L[k], S[k + 1], S[k]], k % 2 ? c.lit : c.lit2);
      poly(g, [R[k], R[k + 1], S[k + 1]], k % 2 ? c.dark : c.shade);
      if (k > 0) poly(g, [R[k], S[k + 1], S[k]], k % 2 ? c.shade : c.dark);
    }

    // Sneeuwkap
    const outline = [].concat(L.slice().reverse(), R.slice(1));
    const capY = lerp(geo.apex.y, geo.baseY, geo.capT);
    g.save();
    g.beginPath();
    outline.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)));
    g.closePath();
    g.clip();
    const cap = [{ x: -w, y: -10 }, { x: 2 * w, y: -10 }];
    for (let i = 12; i >= 0; i--) cap.push({ x: (w * i) / 12, y: capY + geo.jag[i] + (i % 2 ? h * 0.025 : -h * 0.01) });
    cap.push({ x: -w, y: capY });
    poly(g, cap, c.cap);
    g.beginPath();
    S.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)));
    g.lineTo(2 * w, h); g.lineTo(2 * w, -10); g.closePath();
    g.clip();
    poly(g, cap, c.capShade);
    g.restore();

    // Pad naar de top: gestippeld, en het stuk dat je al klom in alpengloed-kleur
    const steps = 90;
    g.lineCap = 'round';
    g.setLineDash([2, 5]);
    g.lineWidth = compact ? 1.6 : 2;
    g.strokeStyle = c.trail;
    g.globalAlpha = 0.45;
    g.beginPath();
    for (let i = 0; i <= steps; i++) { const p = geo.trail(i / steps); i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y); }
    g.stroke();
    g.globalAlpha = 1;
    g.setLineDash([]);
    if (progress > 0) {
      g.strokeStyle = c.glow;
      g.lineWidth = compact ? 2.6 : 3;
      g.beginPath();
      const upTo = Math.max(1, Math.round(steps * Math.min(1, progress)));
      for (let i = 0; i <= upTo; i++) { const p = geo.trail(Math.min(progress, i / steps)); i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y); }
      g.stroke();
    }

    // Vlag op de top als je de Everest haalde
    if (progress >= 1) {
      const a = geo.apex;
      g.strokeStyle = c.trail; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(a.x, a.y - 16); g.stroke();
      poly(g, [{ x: a.x, y: a.y - 16 }, { x: a.x + 11, y: a.y - 12 }, { x: a.x, y: a.y - 8 }], c.glow);
    }

    return { point: p => geo.trail(Math.max(0, Math.min(1, p))), apex: geo.apex };
  }

  /* De klimmer (HTML-element) op de juiste plek van het pad zetten */
  function placeClimber(el, scene, progress) {
    if (!el || !scene) return;
    const p = scene.point(progress);
    el.style.transform = `translate(${p.x}px, ${p.y}px)`;
  }

  /* Klimmer laten klimmen van "from" naar "to" (0-1) */
  function climb(canvas, el, seed, from, to, compact, done) {
    if (!canvas) return;
    const dur = reduced() ? 0 : 900;
    const t0 = performance.now();
    const id = (canvas._climb = (canvas._climb || 0) + 1);
    const step = now => {
      if (canvas._climb !== id) return; // een nieuwere animatie neemt het over
      const k = dur ? Math.min(1, (now - t0) / dur) : 1;
      const e = 1 - Math.pow(1 - k, 3);
      const p = lerp(from, to, e);
      const scene = draw(canvas, { seed, progress: p, compact });
      placeClimber(el, scene, p);
      if (k < 1) global.requestAnimationFrame(step);
      else if (done) done();
    };
    global.requestAnimationFrame(step);
  }

  /* ── Sneeuw-confetti ─────────────────────────────────────── */
  let fxRunning = false;
  function snow(strength = 1) {
    if (reduced()) return;
    const canvas = doc.getElementById('fx');
    if (!canvas || fxRunning) return;
    fxRunning = true;
    canvas.hidden = false;
    const c = tokens();
    const colors = [c.cap, c.glacier, c.glow, c.legend, c.capShade];
    const { g, w, h } = setup(canvas);
    const count = Math.round(120 * strength);
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: -Math.random() * h * 0.6 - 10,
      vx: (Math.random() - 0.5) * 1.4, vy: 1.6 + Math.random() * 2.8,
      r: 2.5 + Math.random() * 4.5, rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.12,
      gem: Math.random() < 0.4, color: colors[Math.floor(Math.random() * colors.length)]
    }));
    const t0 = performance.now(), life = 3000;
    const frame = now => {
      const t = now - t0;
      g.clearRect(0, 0, w, h);
      g.globalAlpha = t > life - 700 ? Math.max(0, (life - t) / 700) : 1;
      parts.forEach(p => {
        p.x += p.vx + Math.sin((t + p.r * 100) / 500) * 0.4;
        p.y += p.vy; p.rot += p.vr;
        g.save(); g.translate(p.x, p.y); g.rotate(p.rot);
        if (p.gem) {
          g.fillStyle = p.color;
          g.beginPath(); g.moveTo(0, -p.r * 1.3); g.lineTo(p.r, 0); g.lineTo(0, p.r * 1.3); g.lineTo(-p.r, 0); g.closePath(); g.fill();
          g.strokeStyle = 'rgba(255,255,255,0.7)'; g.lineWidth = 0.8;
          g.beginPath(); g.moveTo(-p.r * 0.4, -p.r * 0.2); g.lineTo(0, -p.r * 0.9); g.stroke();
        } else {
          g.strokeStyle = p.color === c.cap ? c.glacier : p.color; g.lineWidth = 1.2;
          for (let i = 0; i < 3; i++) { g.rotate(Math.PI / 3); g.beginPath(); g.moveTo(-p.r, 0); g.lineTo(p.r, 0); g.stroke(); }
        }
        g.restore();
      });
      if (t < life) global.requestAnimationFrame(frame);
      else { g.clearRect(0, 0, w, h); canvas.hidden = true; fxRunning = false; }
    };
    global.requestAnimationFrame(frame);
  }

  B.Scene = { draw, placeClimber, climb };
  B.FX = { snow };
})(typeof window !== 'undefined' ? window : globalThis);
