// Notifies IndexNow (Bing, Yandex, Seznam, Naver…) of every URL in the live sitemap.
// Run after a deployment that adds or changes pages:  node scripts/indexnow.mjs
// The key file public/<KEY>.txt must be deployed first (it proves we own the domain).
const HOST = "www.mecfinance.ma";
const KEY = "62b3d9d3ddb9c1f03025973801fb94d7";

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
// Arabic slugs must be percent-encoded for the API
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => encodeURI(decodeURI(m[1])));
if (!urlList.length) throw new Error("no URL found in the sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList })
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
