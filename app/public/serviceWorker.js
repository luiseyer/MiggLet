const cacheName = 'cache-v1'
const resourcesToPrecache = [
  '/',
  'index.html',
  'styles/index.css',
  'styles/modern-normalize.css',
  'images/logotipo.svg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache)
      })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cacheResponse => {
      return cacheResponse || fetch(event.request)
    })
  )
})
