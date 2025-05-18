self.addEventListener('install', event => {
    console.log('Service Worker installed.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated.');
    // Perform cleanup or initialization tasks here.
});

/* self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    return
}); */
