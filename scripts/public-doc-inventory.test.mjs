import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { readPublicDocInventory, toolGuideRoutes, normalizeRoute } from '../lib/public-doc-inventory.mjs';

function fixture(t, files) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'public-doc-inventory-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  for (const file of files) {
    const target = path.join(directory, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, '---\ntitle: "Fixture"\n---\n\nBody.\n');
  }
  return directory;
}

test('source inventory maps root, locale siblings and substantive nested guide indexes', (t) => {
  const root = fixture(t, ['index.mdx', 'index.en.mdx', 'integration/index.mdx', 'integration/cli/index.mdx', 'integration/cli/queries.fr.mdx', '.source/ignored.mdx']);
  const pages = readPublicDocInventory(root);
  assert.equal(pages.length, 5);
  assert.deepEqual(pages.filter((page) => !page.indexable).map((page) => page.url), ['/zh/docs/integration/']);
  assert.ok(pages.find((page) => page.url === '/zh/docs/integration/cli/')?.indexable);
  assert.equal(pages.find((page) => page.source === 'integration/cli/queries.fr.mdx')?.locale, 'fr');
  assert.ok(pages.some((page) => page.url === '/en/docs/'));
});

test('source inventory rejects duplicate flat and folder-index public URLs', (t) => {
  const root = fixture(t, ['integration/cli.en.mdx', 'integration/cli/index.en.mdx']);
  assert.throws(() => readPublicDocInventory(root), /Duplicate public source route: \/en\/docs\/integration\/cli\//u);
});

test('all guide routes are unique and normalize without losing locale or nested slugs', () => {
  const routes = toolGuideRoutes();
  assert.equal(routes.length, 72);
  assert.equal(new Set(routes).size, routes.length);
  assert.ok(routes.includes('/fr/docs/integration/skills/first-task/'));
  assert.equal(normalizeRoute('https://docs.tiangong.earth/de/docs/integration/cli'), '/de/docs/integration/cli/');
  assert.equal(normalizeRoute('/'), '/');
});
