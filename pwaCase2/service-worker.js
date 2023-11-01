const CACHE_STATIC_NAME = 'static-cache-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      return cache.addAll([
        './manifest.json',
        './index.html',
        './styles.css',
        './scripts.js',
        './images/download (6).png',
    
      
        // Add other static assets you want to cache here
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up old caches that are no longer in use
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_STATIC_NAME && name !== CACHE_DYNAMIC_NAME) {
            return caches.delete(name);
          }
        })
      );
    })()
  );

  // Claim clients immediately to take control
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        return cacheResponse; // Serve cached content for GET requests
      } else {
        return fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse.status === 200 && event.request.method === 'GET') {
              return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch(() => {
            return new Response("You are currently offline.", {
              status: 503,
              statusText: "Service Unavailable",
              headers: new Headers({
                "Content-Type": "text/plain",
              }),
            });
          });
      }
    })
  );
});


self.addEventListener('push', (event) => {
  
  const options = {
    body: event.data.text(),
    icon: './images/download (6).png',
    badge: 'badge.png',
  };

  event.waitUntil(
     self.registration.showNotification('Push Notification', options)
  );
});

// Background sync for queuing requests and retrying when online
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

function syncData() {
  // Implement logic to synchronize data with the server
  // You can queue requests here and retry when online
}

self.addEventListener('notificationclick', (event) => {
  // Handle notification clicks here
  event.notification.close();
  event.waitUntil(
    // Implement the desired action when the notification is clicked
  );
});
