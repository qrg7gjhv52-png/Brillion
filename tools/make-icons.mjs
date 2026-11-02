// ─────────────────────────────────────────────────────────────
// Brillion · app-icoontjes maken uit icons/icon.svg
// Gebruik:  node brillion/tools/make-icons.mjs   (heeft Playwright nodig)
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svg = fs.readFileSync(path.join(root, 'icons/icon.svg'), 'utf8');
// Maskable: logo kleiner in het midden, zodat ronde of afgeronde iconen niets afknippen
const maskable = svg.replace(/(<rect[^>]*\/>)/, '$1<g transform="translate(256 256) scale(0.72) translate(-256 -256)">').replace('</svg>', '</g></svg>');

const jobs = [
  ['icon-192.png', svg, 192], ['icon-512.png', svg, 512],
  ['icon-maskable-512.png', maskable, 512], ['apple-touch-icon.png', svg, 180]
];
const browser = await chromium.launch();
const page = await browser.newPage();
for (const [name, source, size] of jobs) {
  await page.setViewportSize({ width: size, height: size });
  const data = 'data:image/svg+xml;base64,' + Buffer.from(source).toString('base64');
  await page.setContent(`<html><body style="margin:0"><img src="${data}" width="${size}" height="${size}" style="display:block"></body></html>`);
  await page.waitForTimeout(100);
  await page.screenshot({ path: path.join(root, 'icons', name), clip: { x: 0, y: 0, width: size, height: size } });
  console.log('gemaakt:', name);
}
await browser.close();
