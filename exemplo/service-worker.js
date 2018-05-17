
self.addEventListener('install', function(e){
    console.log('[SW] Installer');
});

self.addEventListener('activate', function(e){
    console.log('[SW] activate');
});

self.addEventListener('fetch', function(e){
    console.log('[SW] fetch', e.request.url);
});