self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-cache').then((cache) => cache.addAll([
      '/lv-coffee/',
      '/lv-coffee/index.php',
      '/lv-coffee/admin.php',
      '/lv-coffee/style.css',
      '/lv-coffee/script.js',
      '/lv-coffee/manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});