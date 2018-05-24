
let cacheName = 'conhecendoServiceWorker';
let filesToCache = [
    '/',
    'index.html',
    'styles.css',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-128x128.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-144x144.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-152x152.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-192x192.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-256x256.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-512x512.png'
];

self.addEventListener('install', function(e){
    console.log('[SW] Installer');
    e.waitUntil(
        caches.open(cacheName)
        .then(function (cache){
          console.log('[SW] Caching app shell');
          //Lista de arquivos que vou add ao cache.
          return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e){
    console.log('[SW] activate');
});

self.addEventListener('fetch', function(e){
    console.log('[SW] fetch', e.request.url);
    e.respondWith(
        caches.match(e.request)
        .then(function (response){
            console.log('[SW] Get cache for ', e.request.url )
            //Se achou a requisição no chache senão executa a requisição
            return response || fetch(e.request);
        })
    );
});