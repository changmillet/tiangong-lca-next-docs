import fs from 'node:fs';
import path from 'node:path';
import { i18n } from './i18n.ts';
import { isCategoryIndex } from './ia.ts';

export const toolGuideSections = Object.freeze({
  cli: ['index', 'getting-started', 'queries', 'data-quality', 'authentication', 'automation', 'publishing', 'maintenance'],
  skills: ['index', 'getting-started', 'first-task', 'catalog', 'safe-workflows', 'troubleshooting'],
  tidas: ['index', 'installation', 'first-package', 'reference'],
});

export const publicLocales = [...i18n.languages];
export const normalizeRoute = (url) => `${new URL(url, 'https://docs.invalid').pathname.replace(/\/$/u, '')}/`;

// Derive expectations from source, not from the output being tested. In particular,
// moving cli.mdx to cli/index.mdx must preserve exactly one public route.
export function readPublicDocInventory(contentRoot, options = {}) {
  const languages = options.languages ?? publicLocales;
  const defaultLanguage = options.defaultLanguage ?? i18n.defaultLanguage;
  const pages = [];
  const routes = new Set();

  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(absolute);
        continue;
      }
      if (!entry.isFile() || !entry.name.endsWith('.mdx')) continue;
      const relative = path.relative(contentRoot, absolute).split(path.sep).join('/');
      const stem = relative.slice(0, -4);
      const locale = languages.find((candidate) => stem.endsWith(`.${candidate}`)) ?? defaultLanguage;
      const localizedStem = stem.endsWith(`.${locale}`) ? stem.slice(0, -(locale.length + 1)) : stem;
      const slugs = localizedStem.split('/');
      if (slugs.at(-1) === 'index') slugs.pop();
      const url = `/${locale}/docs/${slugs.length ? `${slugs.join('/')}/` : ''}`;
      if (routes.has(url)) throw new Error(`Duplicate public source route: ${url}`);
      routes.add(url);
      pages.push({ source: relative, locale, slugs, url, indexable: !isCategoryIndex(slugs) });
    }
  }

  walk(contentRoot);
  return pages.sort((a, b) => a.url.localeCompare(b.url, 'en'));
}

export function toolGuideRoutes(languages = publicLocales) {
  return languages.flatMap((locale) => Object.entries(toolGuideSections).flatMap(([section, slugs]) =>
    slugs.map((slug) => `/${locale}/docs/integration/${section}/${slug === 'index' ? '' : `${slug}/`}`),
  ));
}
