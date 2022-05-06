importScripts('./prx/prx.sw.js');

const sw = new PRXServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);