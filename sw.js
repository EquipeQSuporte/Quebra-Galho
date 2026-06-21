const CACHE = 'qg-v1';
const ASSETS = [
  '/', '/index.html', '/home.html', '/categorias.html',
  '/profissionais.html', '/perfil-pro.html', '/pedidos.html',
  '/receber.html', '/ganhos.html', '/perfil-usuario.html',
  '/acompanhamento.html', '/solicitar.html', '/pro-home.html',
  '/css/style.css', '/js/app.js', '/assets/icon.png', '/assets/logo.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/index.html')))
  );
});
