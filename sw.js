// Serve solo perche il telefono riconosca l'app come installabile.
// Non salva nulla in memoria: la pagina e sempre quella aggiornata.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
