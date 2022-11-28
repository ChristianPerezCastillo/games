importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([
  "index.html",
  "chess.html",
  "offline.html",
  "img/chess.png",
  "img/Bbishop.png",
  "img/Bking.png",
  "img/Bknight.png",
  "img/Bpawn.png",
  "img/Bqueen.png",
  "img/Brook.png",
  "img/Wbishop.png",
  "img/Wking.png",
  "img/Wknight.png",
  "img/Wpawn.png",
  "img/Wqueen.png",
  "img/Wrook.png",
]);

workbox.routing.registerRoute(
  ({request}) => request.destination === "document",
  new workbox.strategies.NetworkOnly()
);

workbox.routing.setCatchHandler(async context =>{
  console.log(context);
  console.log(context.request);
  if(context.request.destination === 'document'){
    return workbox.precaching.matchPrecache('offline.html');
  }
  return Response.error();
});


















//before
// const filesToCache = [
//     "index.html",
//     "passwords.html",
//     "text.html",
//     "assets/css/bootstrap.min.css",
//     "assets/css/style.css",
//     "assets/css/boxicons.min.css",
//     "manifest.webmanifest",
//     "assets/js/app.js",
//     "sw.js",
//     "assets/js/function.js",
//     "assets/js/bootstrap.min.js"
//   ];
  
//   const staticCacheName = 'pages-cache-v';
  
  
//   self.addEventListener('install', (e) => {
//     console.log("Attempting to install service worker and cache static assets");
//     e.waitUntil((async () => {
//       const cache = await caches.open(staticCacheName);
//       await cache.addAll(filesToCache);
//     })());
//   });
  
//   self.addEventListener('fetch', (e) => {
//     console.log("Fetch event for ", e.request.url);
//     e.respondWith((async () => {
//       const r = await caches.match(e.request);
//       if (r) return r;
//       const response = await fetch(e.request);
//       const cache = await caches.open(staticCacheName);
//       cache.put(e.request, response.clone());
//       return response;
//     })());
//   });
  