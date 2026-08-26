const CACHE_NAME = "nutre-tu-alma-runtime-v9";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/images/01-cristo-y-pedro.png",
  "./assets/images/02-virgen-y-nino.png",
  "./assets/images/03-virgen-consuela.png",
  "./assets/images/04-agustin-corazon-inquieto.png",
  "./assets/images/05-manos-confianza.png",
  "./assets/images/06-mana-desierto.png",
  "./assets/images/07-fariseo-publicano.png",
  "./assets/images/08-padre-misericordioso.png",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
