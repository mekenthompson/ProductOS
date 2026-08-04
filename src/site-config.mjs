/**
 * Single source of truth for where the site is served.
 *
 * Two modes:
 *
 * - Default (forks, local builds): derived from GITHUB_REPOSITORY, so any
 *   fork hosts a working GitHub project page at
 *   https://<owner>.github.io/<repo>/ with no configuration.
 * - Custom domain (canonical deployment): set CUSTOM_DOMAIN (e.g.
 *   "theproductos.com") and the site is built for https://<domain>/ at the
 *   domain root. The deploy workflow sets this only for the canonical repo,
 *   so forks stay on the derived default.
 */
export const repository = process.env.GITHUB_REPOSITORY ?? 'mekenthompson/ProductOS';

const [owner, name = 'ProductOS'] = repository.split('/');

export const customDomain = process.env.CUSTOM_DOMAIN || '';

export const site = customDomain
  ? `https://${customDomain}`
  : `https://${owner.toLowerCase()}.github.io`;

export const base = customDomain ? '/' : `/${name}/`;

// base without the trailing slash: '' at the domain root, '/<repo>' otherwise.
// Useful for prefixing root-relative routes.
export const baseNoSlash = base.replace(/\/$/, '');
