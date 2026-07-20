/**
 * Remark plugin that lets the site publish this repo's own markdown
 * directly (via symlinks under src/content/docs/) instead of copying it
 * through a separate content-sync step. It reproduces the effects that copy
 * step used to bake in, applied at build time instead:
 *
 * - Relative `.md` links (incl. `../` forms and `#anchors`) are rewritten
 *   to extensionless, base-prefixed, root-relative Starlight routes.
 * - GitHub-style alert blockquotes (`> [!NOTE]` etc.) are converted to
 *   Starlight `:::note` aside directives (as real containerDirective mdast
 *   nodes, so Starlight's own aside renderer picks them up).
 * - The leading H1 is stripped unconditionally, whatever its text, because
 *   Starlight already renders the frontmatter title as the page H1 (same
 *   behaviour as the old sync script).
 *
 * Only applied to files that live under one of the directories symlinked
 * into src/content/docs/ (guides, anchors, templates, examples, skills,
 * product-playbook, AGENTS.md). The hand-written src/content/docs/index.mdx is
 * left untouched.
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { visit } from 'unist-util-visit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DOCS_DIR = path.join(REPO_ROOT, 'src', 'content', 'docs');

// The site is served under this base path (must match astro.config `base`).
// Markdown links are not auto-prefixed with base, so we bake it in here.
const BASE = '/ProductOS';

// Top-level entries under src/content/docs/ that are symlinks into the repo
// (as opposed to index.mdx, which is hand-written and untouched).
const PUBLISHED_ROOTS = [
  'guides/',
  'anchors/',
  'templates/',
  'examples/',
  'skills/',
  'product-playbook/',
  'AGENTS.md',
];

// Routes that differ from the default path-derived slug: the README/SKILL/
// STRATEGY special cases (a directory landing page, or a flattened skill
// file, needing a route that doesn't match its file path). Keys are
// repo-root-relative source paths (posix); values are the site route (no
// base prefix, no leading or trailing slash).
const ROUTE_OVERRIDES = {
  'examples/tempo/README.md': 'examples/tempo',
  'examples/tempo/strategy/README.md': 'examples/tempo/strategy',
  'examples/tempo/strategy/STRATEGY.md': 'examples/tempo/strategy/plan',
  'skills/amend-durable-doc/SKILL.md': 'skills/amend-durable-doc',
  'skills/create-job-spec/SKILL.md': 'skills/create-job-spec',
  'skills/create-product-spec/SKILL.md': 'skills/create-product-spec',
  'skills/create-rfc/SKILL.md': 'skills/create-rfc',
  'skills/create-strategy/SKILL.md': 'skills/create-strategy',
  'skills/feedback-to-jobs/SKILL.md': 'skills/feedback-to-jobs',
  'skills/feedback-to-jobs/references/rating-criteria.md': 'skills/feedback-to-jobs/rating-criteria',
  'skills/feedback-to-jobs/references/theme-structure.md': 'skills/feedback-to-jobs/theme-structure',
  'skills/review-doc/SKILL.md': 'skills/review-doc',
  'skills/uat-ux-debug/SKILL.md': 'skills/uat-ux-debug',
  'skills/README.md': 'skills',
  'product-playbook/README.md': 'product-playbook',
};

function normalize(p) {
  return p.replace(/\\/g, '/');
}

function isPublished(srcRel) {
  return PUBLISHED_ROOTS.some((root) => srcRel === root || srcRel.startsWith(root));
}

// source-repo-relative path (posix, with extension) -> site route
// (base-prefixed, root-relative, trailing slash).
function routeFor(srcRel) {
  const override = ROUTE_OVERRIDES[srcRel];
  const withoutExt = override ?? srcRel.replace(/\.mdx?$/i, '');
  const slug = withoutExt.toLowerCase();
  return `${BASE}/${slug}/`;
}

// Rewrite a single link target (the URL inside parens) if it's an internal
// relative .md/.mdx link. Returns the rewritten target, or null to leave
// unchanged.
function rewriteTarget(target, srcRelDir) {
  if (/^[a-z]+:\/\//i.test(target)) return null;
  if (target.startsWith('mailto:')) return null;
  if (target.startsWith('#')) return null;
  if (target.startsWith('/')) return null;

  const hashIdx = target.indexOf('#');
  const pathPart = hashIdx === -1 ? target : target.slice(0, hashIdx);
  const hashPart = hashIdx === -1 ? '' : target.slice(hashIdx);

  if (!/\.mdx?$/i.test(pathPart)) return null;

  const resolvedSrc = normalize(path.posix.normalize(path.posix.join(srcRelDir, pathPart)));

  if (!existsSync(path.join(REPO_ROOT, resolvedSrc))) {
    console.warn(`  [remark-productos-docs] link target not found: ${target} (from ${srcRelDir || '.'})`);
    return null;
  }

  return routeFor(resolvedSrc) + hashPart;
}

const ALERT_TYPE = { NOTE: 'note', TIP: 'tip', IMPORTANT: 'note', WARNING: 'caution', CAUTION: 'caution' };
// Matches the marker at the very start of the blockquote's first text node.
// Lazy continuation means the marker can be followed, on the same text node
// or the same paragraph, by the rest of the alert body (no blank line
// between `> [!NOTE]` and the following `> ...` lines), so we only anchor
// on the start and strip whatever whitespace/newline follows the marker.
const ALERT_RE = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i;

function alertsToAsides(tree) {
  visit(tree, 'blockquote', (node, index, parent) => {
    if (!parent || index === undefined) return;
    const first = node.children[0];
    if (!first || first.type !== 'paragraph') return;
    const firstChild = first.children[0];
    if (!firstChild || firstChild.type !== 'text') return;
    const m = firstChild.value.match(ALERT_RE);
    if (!m || m.index !== 0) return;

    const variant = ALERT_TYPE[m[1].toUpperCase()] || 'note';
    const leftover = firstChild.value.slice(m[0].length);

    let restChildren;
    if (leftover.length > 0) {
      // Marker consumed only part of the first text node; keep the rest of
      // that text (and the rest of the paragraph) as the alert's content.
      restChildren = [
        { ...first, children: [{ type: 'text', value: leftover }, ...first.children.slice(1)] },
        ...node.children.slice(1),
      ];
    } else if (first.children.length > 1) {
      // Marker was the whole first text node, but the paragraph continues
      // with more inline content right after it (e.g. `**bold**` on the
      // same line as the marker).
      restChildren = [{ ...first, children: first.children.slice(1) }, ...node.children.slice(1)];
    } else {
      // Marker was the entire first paragraph.
      restChildren = node.children.slice(1);
    }

    parent.children[index] = {
      type: 'containerDirective',
      name: variant,
      children: restChildren,
    };
  });
}

function stripDuplicateLeadingH1(tree) {
  const first = tree.children[0];
  if (first && first.type === 'heading' && first.depth === 1) {
    tree.children.shift();
  }
}

export default function remarkProductosDocs() {
  return (tree, file) => {
    const filePath = file.path ? path.resolve(file.path) : null;
    if (!filePath || !filePath.startsWith(DOCS_DIR + path.sep)) return;

    const srcRel = normalize(path.relative(DOCS_DIR, filePath));
    if (!isPublished(srcRel)) return;

    const srcRelDir = path.posix.dirname(srcRel);

    visit(tree, ['link', 'image'], (node) => {
      const rewritten = rewriteTarget(node.url, srcRelDir === '.' ? '' : srcRelDir);
      if (rewritten != null) node.url = rewritten;
    });

    alertsToAsides(tree);
    stripDuplicateLeadingH1(tree);
  };
}
