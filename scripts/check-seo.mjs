import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";

// Validate the actual production output, not just the metadata declarations.
// Run after npm run build. No network or search-service credentials required.
const output = path.resolve(".next/server/app");
const origin = "https://www.phakamawomens.org";
const sitemap = await readFile(path.join(output, "sitemap.xml.body"), "utf8");
const robots = await readFile(path.join(output, "robots.txt.body"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert(urls.length > 0, "Sitemap must contain public pages");
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert(robots.includes("Allow: /"));
assert(!/^Disallow:\s*\/\s*$/m.test(robots), "Public crawling is blocked");
assert(!sitemap.includes("<lastmod>"), "Do not invent last-modified dates");

const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin);
  assert(!parsed.search && !parsed.hash);
  const filename = parsed.pathname === "/" ? "index" : parsed.pathname.slice(1);
  const html = await readFile(path.join(output, `${filename}.html`), "utf8");
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal(canonicals.length, 1, `${url}: one canonical required`);
  assert.equal(new URL(canonicals[0][1]).href, url, `${url}: canonical must point to itself`);
  const socialUrl = html.match(/property="og:url" content="([^"]+)"/)?.[1];
  assert(socialUrl, `${url}: missing social URL`);
  assert.equal(new URL(socialUrl).href, url, `${url}: incorrect social URL`);
  assert(!/<meta\b[^>]*name="(?:robots|googlebot)"[^>]*content="[^"]*noindex/.test(html), `${url}: noindex found`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(title && description, `${url}: missing title or description`);
  assert(!titles.has(title), `${url}: duplicate title`);
  assert(!descriptions.has(description), `${url}: duplicate description`);
  titles.add(title);
  descriptions.add(description);
}

// Every public page in this app must be discoverable through the sitemap.
for (const entry of await readdir("src/app", { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  try { await access(path.join("src/app", entry.name, "page.tsx")); }
  catch { continue; }
  assert(urls.includes(`${origin}/${entry.name}`), `Missing page: ${entry.name}`);
}

const images = [...sitemap.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map((match) => match[1]);
assert(images.length > urls.length, "Gallery images must be included");
for (const image of images) {
  const url = new URL(image);
  assert.equal(url.origin, origin);
  await access(path.join("public", url.pathname));
}

const home = await readFile(path.join(output, "index.html"), "utf8");
const schema = JSON.parse(home.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1] ?? "null");
assert.equal(schema?.["@context"], "https://schema.org");
assert(schema["@graph"].some((item) => item["@type"] === "Organization" && item.url === origin));
assert(schema["@graph"].some((item) => item["@type"] === "WebSite" && item.url === origin));
console.log(`SEO checks passed: ${urls.length} canonical pages, ${images.length} image entries, unique metadata, robots rules and valid JSON-LD.`);
