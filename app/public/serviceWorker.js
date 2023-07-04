/* eslint-disable no-undef */

const cacheName = 'cache-v1'
const resourcesToPrecache = [
  '/'
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
