// ─────────────────────────────────────────────────────────────
// Brillion · één bestand maken voor de online speel-link (claude.ai)
// Gebruik:  node brillion/tools/build-artifact.mjs [uitvoerbestand]
// Standaard: brillion/dist/brillion.html
// Zet de CSS en alle scripts samen in één pagina, zonder <html>/<head>/<body>
// (claude.ai voegt die zelf toe).
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.resolve(process.argv[2] || path.join(root, 'dist', 'brillion.html'));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const between = (start, end) => {
  const a = html.indexOf(start), b = html.indexOf(end);
  if (a < 0 || b < 0) throw new Error('Markering niet gevonden: ' + start);
  return html.slice(a + start.length, b);
};
const body = between('<!-- BUILD:BODY-START -->', '<!-- BUILD:BODY-END -->').trim();
const scripts = [...between('<!-- BUILD:SCRIPTS-START -->', '<!-- BUILD:SCRIPTS-END -->').matchAll(/src="([^"]+)"/g)].map(m => m[1]);
const fonts = html.match(/<link rel="stylesheet" href="(https:\/\/fonts\.googleapis\.com[^"]+)">/)[1];
const css = fs.readFileSync(path.join(root, 'css/style.css'), 'utf8');
const js = scripts.map(src => `/* ── ${src} ── */\n` + fs.readFileSync(path.join(root, src), 'utf8').replace(/<\/script/gi, '<\\/script')).join('\n');

const page = `<title>Brillion</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<style>
${css}
</style>
${body}
<script>
${js}
</script>
`;
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, page);
console.log(`Gemaakt: ${out} (${Math.round(page.length / 1024)} kB, ${scripts.length} scripts)`);
