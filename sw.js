/* ─────────────────────────────────────────────────────────────
   Brillion · service worker
   Zorgt dat Brillion ook zonder internet werkt (als app op je gsm).
   Werkwijze: eerst uit het geheugen tonen (snel), en op de achtergrond
   de nieuwste versie ophalen voor de volgende keer.
   ───────────────────────────────────────────────────────────── */
const CACHE = 'brillion-app-6';   // nieuw nummer = alles opnieuw ophalen
const FONTS = 'brillion-fonts';
const FILES = [
  './', 'index.html', 'css/style.css', 'manifest.webmanifest',
  'js/i18n.js', 'js/core.js', 'js/store.js', 'js/audio.js', 'js/fx.js', 'js/app.js',
  'data/countries.js', 'data/earth.js', 'data/history.js', 'data/politics.js', 'data/science.js',
  'data/body.js', 'data/nature.js', 'data/language.js', 'data/sport.js', 'data/culture.js', 'data/everyday.js', 'data/open-life.js', 'data/open-food.js', 'data/open-more.js', 'data/letters.js', 'data/schedule.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Eigen bestanden: meteen uit het geheugen, en stil bijwerken
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(req, { ignoreSearch: true }).then(hit => {
          const fresh = fetch(req)
            .then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; })
            .catch(() => hit || cache.match('index.html'));
          return hit || fresh;
        })
      )
    );
    return;
  }

  // Lettertypes van Google Fonts: één keer ophalen en bewaren
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONTS).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => { cache.put(req, res.clone()); return res; }))
      )
    );
  }
});
