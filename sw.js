const CACHE = 'qg-v3';

// Só imagens e fontes ficam em cache (raramente mudam)
const STATIC = [
  '/assets/icon.png', '/assets/icon-180.png', '/assets/icon-192.png', '/assets/logo.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isStatic = /\.(png|webp|svg|jpg|jpeg|woff2?)$/.test(url.pathname);

  if (isStatic) {
    // Cache-first para imagens/fontes
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
  } else {
    // Network-first para HTML, CSS, JS — sempre busca versão atual
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request) || caches.match('/index.html'))
    );
  }
});
