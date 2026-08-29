import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const ROOT = path.resolve(import.meta.dirname, '..');
const read = (relativePath) => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

test('docs hub exposes both journeys and locale-aligned TIDAS deep links', () => {
  const source = read('components/docs-portal.tsx');

  assert.match(source, /data-docs-portal-map-v2="two-lca-journeys"/);
  assert.match(source, /'lca-study'/);
  assert.match(source, /'data-production'/);
  assert.match(source, /core-modules\/schema\/tidas-schema-intro/);
  assert.match(source, /core-modules\/schema\/tidas-schema-validation/);

  for (const language of ['zh', 'en', 'de', 'fr']) {
    assert.match(source, new RegExp(`tidasHref\\('${language}', 'core-modules/schema/tidas-schema-intro'\\)`));
    assert.match(source, new RegExp(`tidasHref\\('${language}', 'core-modules/schema/tidas-schema-validation'\\)`));
  }
});

test('quick start is a fixed golden path with prerequisites, sample, completion, and recovery', () => {
  const source = read('components/quick-start-guide.tsx');

  assert.match(source, /data-quick-start-map-v2="golden-path"/);
  assert.match(source, /data-quick-start-prerequisites/);
  assert.match(source, /data-quick-start-sample/);
  assert.match(source, /data-quick-start-recovery/);
  assert.doesNotMatch(source, /data-quick-start-branch/);
  assert.doesNotMatch(source, /choose-first-task/);
  assert.equal((source.match(/code: '0[1-5]'/g) ?? []).length, 20);
});

test('governed copy rejects retired Gate instructions, bare TIDAS origins, and superiority claims', () => {
  const files = [
    ...['zh', 'en', 'de', 'fr'].map((language) =>
      language === 'zh'
        ? 'content/docs/user-guide/create-my-data.mdx'
        : `content/docs/user-guide/create-my-data.${language}.mdx`,
    ),
    ...['zh', 'en', 'de', 'fr'].map((language) =>
      language === 'zh'
        ? 'content/docs/user-guide/search.mdx'
        : `content/docs/user-guide/search.${language}.mdx`,
    ),
    ...['zh', 'en', 'de', 'fr'].map((language) =>
      language === 'zh'
        ? 'content/docs/user-guide/process-analysis.mdx'
        : `content/docs/user-guide/process-analysis.${language}.mdx`,
    ),
    'content/docs/overview/intro.mdx',
    'content/docs/overview/intro.en.mdx',
    'content/docs/overview/intro.de.mdx',
    'content/docs/overview/intro.fr.mdx',
    'content/docs/overview/resources-and-support.mdx',
  ];
  const source = files.map(read).join('\n');

  assert.doesNotMatch(source, /Review submission is queued|提交审核任务已排队|Prüfeinreichung ist in der Warteschlange|soumission en revue est en file|review_submit_job_id|waiting for gate|等待门禁|wartet auf Gate|en attente de contrôle/i);
  assert.doesNotMatch(source, /显著优于|significant advantages|erhebliche Vorteile|avantage significatif/i);
  assert.doesNotMatch(source, /https:\/\/tidas\.tiangong\.earth\/(?:[)#\s]|$)/);
});

test('review guidance keeps synchronous admission separate from the non-blocking diagnostic', () => {
  const variants = [
    ['content/docs/user-guide/data-review.mdx', /直接调用审核提交/u, /不会改变审核状态，也不会阻止/u],
    ['content/docs/user-guide/data-review.en.mdx', /submission directly/u, /do not change review\s+state or block/u],
    ['content/docs/user-guide/data-review.de.mdx', /Prüfeinreichung direkt/u, /ändern den Prüfstatus nicht und blockieren/u],
    ['content/docs/user-guide/data-review.fr.mdx', /commande de revue est appelée directement/u, /ne changent pas l'état de revue et ne bloquent/u],
  ];

  for (const [relativePath, directSubmission, nonBlockingDiagnostic] of variants) {
    const source = read(relativePath);
    assert.match(source, directSubmission, relativePath);
    assert.match(source, nonBlockingDiagnostic, relativePath);
    assert.match(source, /review-admin/u, relativePath);
  }
});
