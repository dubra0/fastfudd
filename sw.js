// Network first, so an upload to GitHub reaches phones right away.
// The cached copy is only used when the phone is offline.
const CACHE = "melano-v2";
// Push notifications: order status, chat messages and new orders
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (_) {}
  e.waitUntil(self.registration.showNotification(d.title || "Melano", {
    body: d.body || "", tag: d.tag || undefined, renotify: !!d.tag,
    icon: "icons/customer-192.png", badge: "icons/customer-192.png",
    vibrate: [200, 100, 200], data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => {
    const w = ws.find(c => c.url.split(/[?#]/)[0] === url.split(/[?#]/)[0]);
    return w ? w.focus() : clients.openWindow(url);
  }));
});
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin || u.pathname.includes("melano-owner")) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
      return r;
    }).catch(() => caches.match(e.request))
  );
});
