importScripts('./prx/prx.sw.js');

const sw = new prxServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);