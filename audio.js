/* ─────────────────────────────────────────────────────────────
   Brillion · geluidjes
   Alle geluiden worden live gemaakt met de Web Audio API,
   dus er zijn geen geluidsbestanden nodig.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  let ctx = null;

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

    wrong() {
      const c = ready(); if (!c) return;
      tone(c, 220, 0, 0.22, 'sine', 0.16);
      tone(c, 164.81, 0.12, 0.38, 'sine', 0.15);
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
