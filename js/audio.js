/* ─────────────────────────────────────────────────────────────
   Brillion · geluidjes
   Alle geluiden worden live gemaakt met de Web Audio API,
   dus er zijn geen geluidsbestanden nodig.
   - korte toontjes (goed, fout, badge, top …)
   - voetstappen: zacht op aarde, knisperend in de sneeuw,
     met af en toe het "tink" van een ijsbijl
   - wind die harder waait hoe hoger je klimt
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  let ctx = null;
  let noiseBuf = null;   // korte ruis voor voetstappen
  let wind = null;       // de wind (blijft lopen, we regelen enkel het volume)

  function ready() {
    if (!B.state.sound) return null;
    try {
      if (!ctx) {
        const AC = global.AudioContext || global.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
      }
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    } catch (e) {
      return null;
    }
  }

  /* Eén toon: frequentie (Hz), start (s), duur (s), golfvorm, volume */
  function tone(c, freq, start, dur, type, vol) {
    const t0 = c.currentTime + start;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol || 0.15, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }
  const semis = (base, n) => base * Math.pow(2, n / 12);

  /* Een stukje ruis (zoals "sssh") */
  function noise(c) {
    if (noiseBuf) return noiseBuf;
    const len = Math.floor(c.sampleRate * 0.4);
    noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
  }
  /* Ruis door een filter, met een snelle aan/uit (voor stappen en schuiven) */
  function burst(c, { start = 0, dur = 0.08, type = 'lowpass', freq = 900, q = 0.8, vol = 0.08, rate = 1, sweepTo = 0 }) {
    const t0 = c.currentTime + start;
    const src = c.createBufferSource();
    src.buffer = noise(c);
    src.playbackRate.value = rate;
    const f = c.createBiquadFilter();
    f.type = type; f.frequency.setValueAtTime(freq, t0); f.Q.value = q;
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t0 + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(c.destination);
    src.start(t0, Math.random() * 0.25);
    src.stop(t0 + dur + 0.05);
  }

  /* De wind: zachte ruis die blijft lopen, met windvlagen */
  function ensureWind(c) {
    if (wind) return wind;
    const len = c.sampleRate * 3;
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;   // "roze" ruis klinkt zachter dan gewone ruis
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.099046;
      b1 = 0.963 * b1 + w * 0.2965164;
      b2 = 0.57 * b2 + w * 1.0526913;
      d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.16;
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 420;
    filter.Q.value = 0.7;
    const gain = c.createGain();
    gain.gain.value = 0;
    // windvlagen: de toonhoogte van de wind gaat traag op en neer
    const lfo = c.createOscillator();
    lfo.frequency.value = 0.13;
    const lfoAmount = c.createGain();
    lfoAmount.gain.value = 160;
    lfo.connect(lfoAmount).connect(filter.frequency);
    src.connect(filter).connect(gain).connect(c.destination);
    src.start();
    lfo.start();
    wind = { filter, gain, level: -1 };
    return wind;
  }

  B.Sound = {
    /* Wordt aangeroepen bij de eerste klik (browsers eisen dat) */
    unlock() { ready(); },

    start() {
      const c = ready(); if (!c) return;
      [0, 5, 9].forEach((n, i) => tone(c, semis(392, n), i * 0.08, 0.28, 'triangle', 0.1));
    },

    /* Hoe zeldzamer, hoe meer en hogere noten */
    tier(t) {
      const c = ready(); if (!c) return;
      const base = [523.25, 587.33, 659.25, 698.46, 783.99][t] || 523.25;
      const steps = [[0], [0, 7], [0, 4, 7], [0, 4, 7, 12], [0, 4, 7, 12, 16]][t] || [0];
      steps.forEach((n, i) => tone(c, semis(base, n), i * 0.075, 0.42, 'triangle', 0.13));
      if (t >= 4) for (let i = 0; i < 7; i++) tone(c, 1800 + Math.random() * 1800, 0.3 + i * 0.05, 0.18, 'sine', 0.035);
    },

    /* Fout: twee dalende tonen en het geschuif van wegglijdende steentjes */
    wrong() {
      const c = ready(); if (!c) return;
      tone(c, 220, 0, 0.22, 'sine', 0.16);
      tone(c, 164.81, 0.12, 0.38, 'sine', 0.15);
      burst(c, { start: 0.02, dur: 0.42, type: 'bandpass', freq: 1400, sweepTo: 300, q: 0.9, vol: 0.07 });
    },

    /* Niet in de lijst (je mag opnieuw proberen): een kort, zacht "nee-nee" */
    nope() {
      const c = ready(); if (!c) return;
      tone(c, 196, 0, 0.09, 'square', 0.045);
      tone(c, 185, 0.11, 0.12, 'square', 0.045);
    },

    /* "Bedoelde je…?": een vragend toontje */
    suggest() {
      const c = ready(); if (!c) return;
      tone(c, 523.25, 0, 0.16, 'triangle', 0.08);
      tone(c, 659.25, 0.1, 0.22, 'triangle', 0.08);
    },

    /* Een voetstap. Hoger dan 3.600 m knerpt de sneeuw, met af en toe de ijsbijl. */
    step(alt, n) {
      const c = ready(); if (!c) return;
      const snowy = alt >= 3600;
      if (snowy) burst(c, { dur: 0.11, type: 'bandpass', freq: 2300 + Math.random() * 900, q: 1.1, vol: 0.05, rate: 0.9 + Math.random() * 0.3 });
      else burst(c, { dur: 0.07, type: 'lowpass', freq: 700 + Math.random() * 300, q: 0.7, vol: 0.07, rate: 0.8 + Math.random() * 0.4 });
      if (snowy && n % 3 === 0) {
        tone(c, 2350 + Math.random() * 200, 0.02, 0.12, 'sine', 0.03);
        tone(c, 3520, 0.02, 0.08, 'sine', 0.015);
      }
    },

    /* Je klimt voorbij een echte berg: een helder belletje */
    peak() {
      const c = ready(); if (!c) return;
      tone(c, 1046.5, 0, 0.5, 'sine', 0.06);
      tone(c, 1568, 0.07, 0.6, 'sine', 0.045);
    },

    /* De vlag gaat de grond in */
    flag() {
      const c = ready(); if (!c) return;
      tone(c, 150, 0, 0.18, 'sine', 0.16);
      burst(c, { dur: 0.14, type: 'lowpass', freq: 600, vol: 0.06 });
    },

    /* Wind: hoogte in meter, of -1 voor stilte. Wordt enkel aangepast als het verandert. */
    windLevel(alt) {
      if (!ctx || ctx.state !== 'running') return;
      const on = B.state.sound && alt >= 0;
      const level = on ? 0.12 + 0.88 * Math.pow(Math.min(1, alt / B.CONFIG.everestHeight), 1.3) : 0;
      if (!wind && level === 0) return;
      const w = ensureWind(ctx);
      if (Math.abs(level - w.level) < 0.005) return;
      w.level = level;
      const t0 = ctx.currentTime;
      w.gain.gain.setTargetAtTime(level * 0.085, t0, level ? 0.5 : 0.25);
      w.filter.frequency.setTargetAtTime(380 + level * 900, t0, 0.6);
    },

    tick() {
      const c = ready(); if (!c) return;
      tone(c, 1318.5, 0, 0.05, 'square', 0.025);
    },

    summit() {
      const c = ready(); if (!c) return;
      [[0, 0], [4, 0.12], [7, 0.24], [12, 0.36], [7, 0.52], [12, 0.62]].forEach(([n, at]) =>
        tone(c, semis(392, n), at, 0.4, 'triangle', 0.12));
    },

    badge() {
      const c = ready(); if (!c) return;
      [0, 7, 12, 19].forEach((n, i) => tone(c, semis(659.25, n), i * 0.06, 0.3, 'sine', 0.08));
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
