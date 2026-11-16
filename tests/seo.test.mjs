import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { canonicalUrl, serializeJsonLd } from '../src/utils/seo.ts';

const root = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
const origin = 'https://www.joyfulminds.ca';
const routes = [
  '/',
  '/about',
  '/contact',
  '/services/individual-counselling',
  '/services/womens-counselling',
  '/services/teen-counselling',
  '/services/senior-counselling',
  '/services/team-workshops',
];
const decode = (value) => value.replace(/&(amp|quot|#39|lt|gt);/g, (_, entity) => ({
  amp: '&', quot: '"', '#39': "'", lt: '<', gt: '>',
})[entity]);
const meta = (html, name) => {
  const tag = [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([value]) => value)
    .find((value) => value.includes(`name="${name}"`) || value.includes(`property="${name}"`));
  assert.ok(tag, `Missing ${name}`);
  const content = tag.match(/content="([^"]*)"/);
  assert.ok(content, `Missing content for ${name}`);
  return decode(content[1]);
};

test('canonical normalization removes duplicate slash, query and fragment variants', () => {
  const site = new URL(origin);
  assert.equal(canonicalUrl('/about/?utm_source=test#details', site).href, `${origin}/about`);
  assert.equal(canonicalUrl('/services/teen-counselling///', site).href, `${origin}/services/teen-counselling`);
  assert.equal(canonicalUrl('/?utm_source=test', site).href, `${origin}/`);
});

test('JSON-LD serialization cannot close its HTML script element', () => {
  const value = {
    '@context': 'https://schema.org',
    '@graph': [{ '@type': 'WebPage', description: '</script><script>alert("test")</script>' }],
  };
  const serialized = serializeJsonLd(value);
  assert.ok(!serialized.includes('<'));
  assert.deepEqual(JSON.parse(serialized), value);
});

test('build emits exactly the canonical content inventory and advertises the sitemap', async () => {
  const sitemap = await readFile(path.join(root, 'sitemap-0.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
  assert.deepEqual(urls.sort(), routes.map((route) => origin + route).sort());
  const index = await readFile(path.join(root, 'sitemap-index.xml'), 'utf8');
  assert.ok(index.includes(`<loc>${origin}/sitemap-0.xml</loc>`));
  const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
  assert.match(robots, /User-agent: \*\s+Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap-index.xml`));
});

test('Vercel output normalizes slash variants and preserves the legacy redirect', async () => {
  const config = JSON.parse(await readFile(new URL('../.vercel/output/config.json', import.meta.url), 'utf8'));
  const redirectFor = (pathname) => config.routes.find((route) =>
    route.status && new RegExp(route.src).test(pathname));
  const slash = redirectFor('/about/');
  assert.equal(slash.status, 308);
  assert.equal('/about/'.replace(new RegExp(slash.src), slash.headers.Location), '/about');
  assert.equal(redirectFor('/'), undefined);
  const legacy = redirectFor('/services/couples-therapy');
  assert.equal(legacy.status, 301);
  assert.equal(legacy.headers.Location, '/services/womens-counselling');
});

test('all generated pages have consistent metadata, connected schema and truthful service scope', async () => {
  const titles = new Set();
  const descriptions = new Set();
  let sharedOrganization;

  for (const route of routes) {
    const html = await readFile(path.join(root, route.slice(1), 'index.html'), 'utf8');
    const url = origin + route;
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.equal(canonical?.[1], url, route);
    assert.equal(meta(html, 'og:url'), url);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, route);
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/);
    assert.ok(html.includes('href="/sitemap-index.xml"'));
    const title = decode(html.match(/<title>(.*?)<\/title>/s)[1]);
    const description = meta(html, 'description');
    assert.ok(!titles.has(title), `Duplicate title at ${route}`);
    assert.ok(!descriptions.has(description), `Duplicate description at ${route}`);
    titles.add(title);
    descriptions.add(description);

    const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
    assert.equal(scripts.length, 1, route);
    const schema = JSON.parse(scripts[0][1]);
    assert.equal(schema['@context'], 'https://schema.org');
    const graph = schema['@graph'];
    const ids = new Set(graph.map((node) => node['@id']));
    assert.equal(ids.size, graph.length, `Duplicate entity at ${route}`);
    const page = graph.find((node) => ['WebPage', 'AboutPage', 'ContactPage'].includes(node['@type']));
    assert.equal(page.url, url);
    assert.equal(page.name, title);
    assert.equal(page.description, description);
    const organization = graph.find((node) => node['@type'] === 'Organization');
    if (sharedOrganization) assert.deepEqual(organization, sharedOrganization);
    sharedOrganization = organization;

    const checkReferences = (value) => {
      if (!value || typeof value !== 'object') return;
      if (value['@id']) assert.ok(ids.has(value['@id']), `Unresolved entity ${value['@id']} at ${route}`);
      for (const child of Object.values(value)) checkReferences(child);
    };
    checkReferences(graph);

    const image = new URL(meta(html, 'og:image'));
    assert.equal(image.origin, origin);
    assert.equal(meta(html, 'twitter:image'), image.href);
    assert.equal(meta(html, 'og:image:width'), '1200');
    assert.equal(meta(html, 'og:image:height'), '630');
    assert.ok(meta(html, 'og:image:alt'));
    await access(path.join(root, decodeURIComponent(image.pathname)));
    const logo = await readFile(path.join(root, new URL(organization.logo).pathname));
    assert.ok(logo.readUInt32BE(16) >= 112 && logo.readUInt32BE(20) >= 112, 'Logo is below Google image size guidance');

    const breadcrumb = graph.find((node) => node['@type'] === 'BreadcrumbList');
    if (route === '/') {
      assert.equal(breadcrumb, undefined);
    } else {
      assert.equal(breadcrumb.itemListElement.length, 2);
      assert.equal(breadcrumb.itemListElement[0].item, `${origin}/`);
      assert.equal(breadcrumb.itemListElement[1].item, url);
      assert.equal(
        decode(html.match(/<li aria-current="page">(.*?)<\/li>/s)[1]),
        breadcrumb.itemListElement[1].name,
      );
    }

    const service = graph.find((node) => node['@type'] === 'Service');
    if (route.startsWith('/services/')) {
      assert.equal(page.mainEntity['@id'], service['@id']);
      if (route === '/services/team-workshops') {
        assert.equal(service.areaServed, undefined);
        assert.equal(service.availableChannel, undefined);
        assert.equal(service.offers, undefined);
      } else {
        assert.deepEqual(service.areaServed.map((area) => area.name), ['Alberta', 'Ontario']);
        assert.equal(service.availableChannel['@type'], 'ServiceChannel');
        assert.ok(service.availableChannel.serviceUrl.startsWith('https://'));
        assert.ok(html.includes('Ask About a Free Consultation'));
        assert.ok(html.includes('href="/#booking"'));
      }
    } else {
      assert.equal(service, undefined);
    }
    if (route === '/about') {
      assert.equal(page['@type'], 'AboutPage');
      const person = graph.find((node) => node['@type'] === 'Person');
      assert.equal(page.mainEntity['@id'], person['@id']);
      assert.equal(person.identifier.length, 2);
      await access(path.join(root, new URL(person.image).pathname));
    }
    if (route === '/contact') assert.equal(page['@type'], 'ContactPage');
  }
});
