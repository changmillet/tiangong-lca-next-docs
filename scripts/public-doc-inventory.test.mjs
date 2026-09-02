import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { readPublicDocInventory, toolGuideRoutes, normalizeRoute, assertStaticSearchPageCoverage } from '../lib/public-doc-inventory.mjs';

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

const guideRoot = '/en/docs/integration/cli/';
const guideChild = '/en/docs/integration/cli/getting-started/';
const staticPayload = (documents) => ({
  type: 'advanced',
  i18n: true,
  internalDocumentIDStore: { internalIdToId: [guideRoot, guideChild] },
  docs: { docs: Object.fromEntries(documents.map((document, index) => [String(index + 1), document])), count: documents.length },
});

test('static search compares normalized URLs of real page records exactly', () => {
  const routes = assertStaticSearchPageCoverage(staticPayload([
    { type: 'page', url: guideRoot.slice(0, -1), locale: 'en' },
    { type: 'page', url: guideChild, locale: 'en' },
    { type: 'text', url: `${guideChild}#first-step`, content: 'Body' },
  ]), [guideRoot, guideChild]);
  assert.deepEqual([...routes].sort(), [guideRoot, guideChild].sort());
});

test('static search rejects a missing parent even when its child and metadata remain', () => {
  const payload = staticPayload([
    { type: 'page', url: guideChild, locale: 'en', content: `Read ${guideRoot}` },
    { type: 'heading', url: `${guideRoot}#overview` },
  ]);
  assert.ok(JSON.stringify(payload).includes(guideRoot.slice(0, -1)), 'the old substring test would pass');
  assert.throws(() => assertStaticSearchPageCoverage(payload, [guideRoot, guideChild]), /missing.*\/en\/docs\/integration\/cli\//iu);
});

test('static search fails closed on an unexpected store or malformed page URL', () => {
  for (const payload of [null, { type: 'simple', docs: {} }, { type: 'advanced', i18n: true, docs: { docs: [] } }]) {
    assert.throws(() => assertStaticSearchPageCoverage(payload, [guideRoot]), /document store/iu);
  }
  assert.throws(() => assertStaticSearchPageCoverage(staticPayload([{ type: 'page' }]), [guideRoot]), /page URL/iu);
  assert.throws(() => assertStaticSearchPageCoverage(staticPayload([{ type: 'page', url: '//elsewhere.example/en/docs/integration/cli/' }]), [guideRoot]), /page URL/iu);
});

test('static search rejects a page assigned to the wrong locale', () => {
  assert.throws(() => assertStaticSearchPageCoverage(staticPayload([{ type: 'page', url: guideRoot, locale: 'fr' }]), [guideRoot]), /locale does not match/iu);
});
