// Melano — ناردنی ئاگادارکردنەوە (Web Push) بۆ مۆبایلی کڕیار، گەیەنەر و خاوەن
// تەنها بنکەدراوەکەی خۆت دەتوانێت بانگی بکات (بە SECRET)
// ئەم فایلە نهێنییە: لە GitHub دایمەنێ و بۆ کەسی مەنێرە
const SECRET = "4e3e0eec12527d34f062448169b267e19b514acc12a52ecb8dad0e8f505d5a44";
const VAPID = { kty: "EC", crv: "P-256", x: "Sv42EQ3syiQ7lcVKObzLuvuHu2Yys65uzLIAgDWG8qY", y: "eVN_O7d1aahMOW0YYYfzsVbMzmdEl3mlrn14WBy4vlc", d: "tmB41aohLgg-gt0unHwOq-7m3BocBb7hBOtKb6i2rQY" };
const VAPID_PUB = "BEr-NhEN7MokO5XFSjm8y7r7h7tmMrOubsyyAIA1hvKmeVN_O7d1aahMOW0YYYfzsVbMzmdEl3mlrn14WBy4vlc";
const CONTACT = "mailto:aeadnajm33@gmail.com";
// تەنها خزمەتگوزارییە فەرمییەکانی Push، بۆ ئەوەی کەس نەتوانێت ئەم فەنکشنە بۆ شوێنی تر بەکاربهێنێت
const HOSTS = /^https:\/\/(fcm\.googleapis\.com|updates\.push\.services\.mozilla\.com|[a-z0-9.-]+\.notify\.windows\.com|[a-z0-9.-]*push\.apple\.com)\//;

const te = new TextEncoder();
const b64u = (b) => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64u = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4)), (c) => c.charCodeAt(0));
const cat = (...a) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };
async function hmac(key, data) {
  const k = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", k, data));
}

// RFC 8291 (aes128gcm)
async function encrypt(text, p256dh, auth, salt, asKeys) {
  const uaPub = unb64u(p256dh), secret = unb64u(auth);
  salt = salt || crypto.getRandomValues(new Uint8Array(16));
  const as = asKeys || await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const asPub = new Uint8Array(await crypto.subtle.exportKey("raw", as.publicKey));
  const uaKey = await crypto.subtle.importKey("raw", uaPub, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdh = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, as.privateKey, 256));
  const prkKey = await hmac(secret, ecdh);
  const ikm = await hmac(prkKey, cat(te.encode("WebPush: info\0"), uaPub, asPub, new Uint8Array([1])));
  const prk = await hmac(salt, ikm);
  const cek = (await hmac(prk, cat(te.encode("Content-Encoding: aes128gcm\0"), new Uint8Array([1])))).slice(0, 16);
  const nonce = (await hmac(prk, cat(te.encode("Content-Encoding: nonce\0"), new Uint8Array([1])))).slice(0, 12);
  const key = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, key, cat(te.encode(text), new Uint8Array([2]))));
  return cat(salt, new Uint8Array([0, 0, 16, 0, 65]), asPub, ct);
}

let signKey = null;
const jwtCache = new Map();
async function vapidAuth(endpoint) {
  const aud = new URL(endpoint).origin, now = Math.floor(Date.now() / 1000);
  const hit = jwtCache.get(aud);
  if (hit && hit.exp - now > 3600) return hit.v;
  signKey = signKey || await crypto.subtle.importKey("jwk", VAPID, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const exp = now + 12 * 3600;
  const unsigned = b64u(te.encode(JSON.stringify({ typ: "JWT", alg: "ES256" }))) + "." + b64u(te.encode(JSON.stringify({ aud, exp, sub: CONTACT })));
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, signKey, te.encode(unsigned));
  const v = `vapid t=${unsigned}.${b64u(sig)}, k=${VAPID_PUB}`;
  jwtCache.set(aud, { v, exp });
  return v;
}

async function sendOne(s, n) {
  if (!HOSTS.test(s.ep || "")) return 0;
  const t = n[s.l] || n.ku;
  const body = await encrypt(JSON.stringify({ title: t.t, body: t.b, url: n.url, tag: n.tag }), s.k, s.a);
  const r = await fetch(s.ep, {
    method: "POST",
    headers: { Authorization: await vapidAuth(s.ep), "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream", TTL: "3600", Urgency: "high" },
    body,
  });
  return r.status;
}

Deno.serve(async (req) => {
  let j;
  try { j = await req.json(); } catch { return new Response("bad", { status: 400 }); }
  if (!j || j.s !== SECRET || !Array.isArray(j.subs) || !j.n) return new Response("no", { status: 403 });
  const res = await Promise.all(j.subs.slice(0, 200).map((s) => sendOne(s, j.n).catch(() => 0)));
  // ئەو مۆبایلانەی ئاگادارکردنەوەیان کوژاندووەتەوە (404/410) دەگەڕێنرێنەوە بۆ سڕینەوە
  const gone = j.subs.filter((_, i) => res[i] === 404 || res[i] === 410).map((s) => s.ep);
  return new Response(JSON.stringify({ sent: res.filter((x) => x >= 200 && x < 300).length, gone }), { headers: { "Content-Type": "application/json" } });
});
