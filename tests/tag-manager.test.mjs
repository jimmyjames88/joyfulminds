import assert from 'node:assert/strict';
import { glob, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import test from 'node:test';

const root = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
const containerId = process.env.GOOGLE_TAG_MANAGER_ID?.trim();
const loaderPattern = /<script\b[^>]*id="google-tag-manager"[^>]*>(.*?)<\/script>/gs;

test('all built pages include Tag Manager only when its build-time ID is configured', async () => {
  let pages = 0;
  for await (const file of glob('**/*.html', { cwd: root })) {
    const html = await readFile(path.join(root, file), 'utf8');
    const loaders = [...html.matchAll(loaderPattern)];
    if (containerId) {
      assert.equal(loaders.length, 1, file);
      assert.ok(html.indexOf('id="google-tag-manager"') < html.indexOf('<title>'), file);
      assert.match(html, /<body\b[^>]*>\s*<noscript>/, file);
      assert.ok(html.includes(`https://www.googletagmanager.com/ns.html?id=${containerId}`), file);
    } else {
      assert.equal(loaders.length, 0, file);
      assert.doesNotMatch(html, /googletagmanager\.com\/(?:gtm\.js|ns\.html)/, file);
    }
    pages++;
  }
  assert.ok(pages > 0, 'Build the site before running Tag Manager tests.');
});

test('Tag Manager bootstraps once across script reruns and preserves existing dataLayer entries', {
  skip: !containerId,
}, async () => {
  const html = await readFile(path.join(root, 'index.html'), 'utf8');
  const [loader] = [...html.matchAll(loaderPattern)];
  assert.ok(loader, 'Missing Tag Manager bootstrap script.');
  const existingEntry = { event: 'consent-initialized' };
  const window = { dataLayer: [existingEntry] };
  const inserted = [];
  const firstScript = { parentNode: { insertBefore: (script) => inserted.push(script) } };
  const document = {
    getElementsByTagName: () => [firstScript],
    createElement: () => ({}),
  };

  for (let run = 0; run < 2; run++) {
    vm.runInNewContext(loader[1], { window, document }, { timeout: 1000 });
  }

  assert.equal(inserted.length, 1);
  assert.equal(inserted[0].src, `https://www.googletagmanager.com/gtm.js?id=${containerId}`);
  assert.equal(inserted[0].async, true);
  assert.equal(window.dataLayer[0], existingEntry);
  assert.equal(window.dataLayer.filter((entry) => entry.event === 'gtm.js').length, 1);
});
