const CACHE_NAME = "nutre-tu-alma-runtime-v12";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/images/01-cristo-y-pedro.webp",
  "./assets/images/02-virgen-y-nino.webp",
  "./assets/images/03-virgen-consuela.webp",
  "./assets/images/04-agustin-corazon-inquieto.webp",
  "./assets/images/05-manos-confianza.webp",
  "./assets/images/06-mana-desierto.webp",
  "./assets/images/07-fariseo-publicano.webp",
  "./assets/images/08-padre-misericordioso.webp",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
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

  const url = new URL(event.request.url);

  // Imágenes: Estrategia Cache-First con recuperación y reintento garantizado
  if (url.pathname.includes("/assets/images/")) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200) return response;
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
            return response;
          })
          .catch(() => {
            // Fallback ante fallo de red móvil momentáneo
            return fetch(event.request, { cache: "no-store" }).catch(() => null);
          });
      })
    );
    return;
  }

  // Código y Shell (HTML, JS, CSS): Network-First para recibir actualizaciones de inmediato
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
