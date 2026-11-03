/* Service Worker – Youth Hill (Младежки хълм) PWA */
const CACHE_NAME = 'youth-hill-pwa-v3';
const CACHE_PREFIX = 'youth-hill-pwa-';

// '/' redirects to '/bg/'. Never cache a redirected navigation response:
// serving it back to the browser can produce net::ERR_FAILED on later visits.
const CORE_ASSETS = ['/bg/', '/en/', '/zh/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Let the browser handle document navigations and HTTP redirects directly.
  // This also avoids serving any stale redirect response from the v2 cache.
  if (request.mode === 'navigate') return;

  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached && !cached.redirected) return cached;
      return fetch(request)
        .then((response) => {
          if (response.ok && !response.redirected && response.type === 'basic') {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
            );
          }
          return response;
        })
        .catch(() => Response.error());
    })
  );
});
