#!/usr/bin/env node
/**
 * Sync ProductOS markdown from the private source repo into this site's
 * src/content/docs/ tree.
 *
 * - SOURCE is read-only. We never write back to it.
 * - For each copied file we ensure it has a `title:` in frontmatter; if it
 *   doesn't, we derive one from the first `# H1` and inject it into the COPY.
 * - Relative `.md` links (incl. `../` forms and `#anchors`) are rewritten to
 *   extensionless, root-relative Starlight routes so they resolve under the
 *   site `base`.
 *
 * Re-run any time the source changes:  npm run sync   (also runs in `build`).
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
// Content now lives in THIS repo. The source root is the repo root itself
// (the dir holding anchors/, guides/, templates/, pm-playbook/, etc.). The
// env var override is kept for flexibility but defaults to the repo root.
const SOURCE = process.env.PRODUCTOS_SRC || ROOT;
const DEST = path.join(ROOT, 'src', 'content', 'docs');

// Map of source-relative path -> dest-relative path (under src/content/docs).
// dest path determines the Starlight route (route = dest minus .md, slugified).
const FILES = [
  // NOTE: index.md (site homepage) is intentionally NOT synced from README.md.
  // The homepage is a standalone committed file at src/content/docs/index.mdx —
  // edit it there. The repo README.md is the GitHub readme only.
  // orientation (root)
  ['AGENTS.md', 'AGENTS.md'],
  // anchors
  ...['product-vision', 'product-principles', 'invariants']
    .map((n) => [`anchors/${n}.md`, `anchors/${n}.md`]),
  // guides — the OS method
  ...['agentic-delivery', 'worked-example', 'strategy-as-code', 'jtbd-guide', 'headline-metric', 'org-as-an-api', 'product-specs']
    .map((n) => [`guides/${n}.md`, `guides/${n}.md`]),
  // templates — the OS blank shapes
  ...['strategy', 'product-spec', 'job-spec', 'job-links', 'rfc', 'decision-record'].map((n) => [`templates/${n}.md`, `templates/${n}.md`]),
  // examples — the Tempo worked example
  ['examples/strategy-example/README.md', 'examples/tempo-overview.md'],
  ['examples/strategy-example/STRATEGY.md', 'examples/tempo-strategy.md'],
  ['examples/product-spec-example.md', 'examples/tempo-product-spec.md'],
  ['examples/job-spec-example.md', 'examples/tempo-job-spec.md'],
  ['examples/job-links-example.md', 'examples/tempo-job-links.md'],
  ['examples/rfc-example.md', 'examples/tempo-rfc.md'],
  ['examples/strategy-example/decisions/2026-01-15-initial-h1-strategy.md', 'examples/tempo-decision-2026-01.md'],
  ['examples/strategy-example/decisions/2026-04-22-gridline-integration-move.md', 'examples/tempo-decision-2026-04.md'],
  // skills: flatten <x>/SKILL.md -> skills/<x>.md
  ['skills/create-job-spec/SKILL.md', 'skills/create-job-spec.md'],
  ['skills/feedback-to-jobs/SKILL.md', 'skills/feedback-to-jobs.md'],
  ['skills/feedback-to-jobs/references/rating-criteria.md', 'skills/feedback-to-jobs/rating-criteria.md'],
  ['skills/feedback-to-jobs/references/theme-structure.md', 'skills/feedback-to-jobs/theme-structure.md'],
  ['skills/uat-ux-debug/SKILL.md', 'skills/uat-ux-debug.md'],
  // pm-playbook: the human product-management craft layer (published as a
  // top-level site section). README.md is the section landing page.
  // NOTE: headline-metric.md is a redirect stub and is intentionally NOT
  // published; the core guides/headline-metric.md ("The Anchor Signal") owns
  // that slug. Any pm-playbook link that pointed at the stub is rewritten to
  // point at the core guide instead.
  ['pm-playbook/README.md', 'pm-playbook/index.md'],
  ...['product-playbook', 'pm-handbook', 'working-together', 'decision-framework', 'delivery-standards', 'release-phases', 'discovery', 'customer-feedback', 'rice', 'personas', 'tools-we-use']
    .map((n) => [`pm-playbook/${n}.md`, `pm-playbook/${n}.md`]),
  ...['customer-call', 'research', 'ritual-review', 'post-launch-review']
    .map((n) => [`pm-playbook/templates/${n}.md`, `pm-playbook/templates/${n}.md`]),
];

// Images to copy: source-relative -> dest-relative (under public/ or assets).
// Markdown image links use relative paths, so we mirror them under docs so the
// path resolves relative to the synced page (Astro optimises it from there).
const IMAGES = [
  ['pm-playbook/images/product-loop.png', 'pm-playbook/images/product-loop.png'],
];

// The site is served under this base path (must match astro.config `base`).
// Markdown links are NOT auto-prefixed with base, so we bake it in here.
const BASE = '/ProductOS';

// Build a lookup from a source-relative md path -> site route (no extension,
// base-prefixed root-relative route).
function routeFor(destRel) {
  let r = destRel.replace(/\.md$/, '');
  if (r === 'index') return BASE + '/';
  // A nested `<dir>/index.md` is served at `<dir>/`, not `<dir>/index/`.
  r = r.replace(/\/index$/, '');
  // Starlight lowercases & slugifies segments for the URL.
  return BASE + '/' + r.split('/').map(slugSegment).join('/') + '/';
}
function slugSegment(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

// source-rel -> dest-rel
const SRC_TO_DEST = new Map(FILES.map(([s, d]) => [normalize(s), d]));
function normalize(p) {
  return p.replace(/\\/g, '/');
}

function deriveTitle(body) {
  const m = body.match(/^#\s+(.+?)\s*$/m);
  if (!m) return null;
  // strip markdown emphasis/inline code/links from the H1 for a clean title
  return m[1]
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/\*([^*]*)\*/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim();
}

function splitFrontmatter(raw) {
  if (raw.startsWith('---\n')) {
    const end = raw.indexOf('\n---', 4);
    if (end !== -1) {
      const fmEnd = raw.indexOf('\n', end + 1);
      const fm = raw.slice(4, end);
      const body = raw.slice(fmEnd + 1);
      return { fm, body, hasFm: true };
    }
  }
  return { fm: '', body: raw, hasFm: false };
}

function hasTitle(fm) {
  return /^title\s*:/m.test(fm);
}

function escapeYaml(s) {
  // quote if it contains characters that break a bare scalar
  if (/[:#"'\n]/.test(s) || /^[\s>|&*!%@`]/.test(s)) {
    return JSON.stringify(s);
  }
  return s;
}

// Rewrite a single link target (the URL inside parens) if it's an internal .md
// link. Returns the rewritten target, or null to leave unchanged.
function rewriteTarget(target, srcRelDir) {
  // ignore protocol/absolute/mailto/anchor-only
  if (/^[a-z]+:\/\//i.test(target)) return null;
  if (target.startsWith('mailto:')) return null;
  if (target.startsWith('#')) return null;
  if (target.startsWith('/')) return null;

  const hashIdx = target.indexOf('#');
  const pathPart = hashIdx === -1 ? target : target.slice(0, hashIdx);
  const hashPart = hashIdx === -1 ? '' : target.slice(hashIdx);

  if (!/\.md$/i.test(pathPart)) return null;

  // resolve relative to the source file's directory
  const resolvedSrc = normalize(path.posix.normalize(path.posix.join(srcRelDir, pathPart)));
  const dest = SRC_TO_DEST.get(resolvedSrc);
  if (!dest) {
    // Unknown target (e.g. file not synced). Leave as-is — link validator
    // will flag if it's broken; we log a warning.
    console.warn(`  [warn] link target not in sync set: ${target} (from ${srcRelDir || '.'})`);
    return null;
  }
  let route = routeFor(dest);
  return route + hashPart;
}

function rewriteLinks(body, srcRelDir) {
  // [text](target)  and  ![alt](target)
  return body.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g,
    (full, bang, text, target, title) => {
      const rewritten = rewriteTarget(target, srcRelDir);
      if (rewritten == null) return full;
      return `${bang}[${text}](${rewritten}${title || ''})`;
    });
}

// Convert GitHub-style alert blockquotes into Starlight aside directives.
// The source uses GH alerts (`> [!NOTE]`) because they render natively on
// GitHub; the site needs `:::note` directives to render styled asides.
const ALERT_TYPE = { NOTE: 'note', TIP: 'tip', IMPORTANT: 'note', WARNING: 'caution', CAUTION: 'caution' };
function alertsToAsides(body) {
  const lines = body.split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i);
    if (!m) { out.push(lines[i]); continue; }
    const type = ALERT_TYPE[m[1].toUpperCase()] || 'note';
    const titleExtra = m[2].trim();
    const content = [];
    let j = i + 1;
    while (j < lines.length && /^>/.test(lines[j])) {
      content.push(lines[j].replace(/^>\s?/, ''));
      j++;
    }
    while (content.length && content[0].trim() === '') content.shift();
    while (content.length && content[content.length - 1].trim() === '') content.pop();
    out.push(titleExtra ? `:::${type}[${titleExtra}]` : `:::${type}`);
    out.push(...content);
    out.push(':::');
    i = j - 1;
  }
  return out.join('\n');
}

async function sourceExists() {
  try {
    await fs.access(path.join(SOURCE, 'README.md'));
    return true;
  } catch {
    return false;
  }
}

// Files under DEST that are committed directly to this repo (not synced from
// the source). These are saved before the sync wipe and restored after so they
// survive a full clean-and-rebuild cycle.
const COMMITTED_DOCS = [
  'index.mdx',
];

async function main() {
  if (!(await sourceExists())) {
    console.log(`[sync] source not found at ${SOURCE} — skipping (using committed copy in ${path.relative(ROOT, DEST)}).`);
    return;
  }

  // Save committed docs before wiping the directory.
  const saved = new Map();
  for (const rel of COMMITTED_DOCS) {
    const p = path.join(DEST, rel);
    try {
      saved.set(rel, await fs.readFile(p, 'utf8'));
    } catch {
      // File may not exist yet on first run — that's fine.
    }
  }

  // clean docs dir
  await fs.rm(DEST, { recursive: true, force: true });
  await fs.mkdir(DEST, { recursive: true });

  let count = 0;
  for (const [srcRel, destRel] of FILES) {
    const srcPath = path.join(SOURCE, srcRel);
    const raw = await fs.readFile(srcPath, 'utf8');
    const { fm, body, hasFm } = splitFrontmatter(raw);
    const srcRelDir = path.posix.dirname(normalize(srcRel));

    let newBody = rewriteLinks(body, srcRelDir === '.' ? '' : srcRelDir);
    newBody = alertsToAsides(newBody);

    let newFm = fm;
    if (!hasTitle(fm)) {
      const title = deriveTitle(body) || path.basename(srcRel, '.md');
      const titleLine = `title: ${escapeYaml(title)}`;
      newFm = fm.trim().length ? `${titleLine}\n${fm.trim()}` : titleLine;
    }

    // Starlight renders the page title from frontmatter; strip the body's
    // leading H1 so the title doesn't render twice.
    newBody = newBody.replace(/^\s*#\s+.*(?:\r?\n)+/, '');

    const out = `---\n${newFm.trim()}\n---\n${newBody}`;
    const destPath = path.join(DEST, destRel);
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, out, 'utf8');
    count++;
  }

  for (const [srcRel, destRel] of IMAGES) {
    const srcPath = path.join(SOURCE, srcRel);
    const destPath = path.join(DEST, destRel);
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.copyFile(srcPath, destPath);
  }

  // Restore committed docs that were saved before the wipe.
  for (const [rel, content] of saved) {
    const p = path.join(DEST, rel);
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, content, 'utf8');
  }
  if (saved.size) {
    console.log(`  restored ${saved.size} committed doc(s): ${[...saved.keys()].join(', ')}`);
  }

  console.log(`synced ${count} docs + ${IMAGES.length} images into ${path.relative(ROOT, DEST)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
