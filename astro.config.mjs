// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator';
import remarkProductosDocs from './src/plugins/remark-productos-docs.mjs';
import { repository, site, base, baseNoSlash } from './src/site-config.mjs';

// Prefix the active base onto every redirect destination (sources get the
// base from Astro itself).
function withBase(redirects) {
  return Object.fromEntries(
    Object.entries(redirects).map(([from, to]) => [from, baseNoSlash + to])
  );
}

export default defineConfig({
  site,
  base,
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkProductosDocs],
  },
  // Old site slugs redirected to their new home. Astro prefixes `base` on
  // the SOURCE side only; destinations are written root-relative here and
  // get the active base prefixed below, so both hosting modes work.
  redirects: withBase({
    '/guides/product-specs/': '/guides/writing-an-rfc/',
    '/pm-playbook/headline-metric/': '/guides/headline-metric/',
    '/pm-playbook/domain-entry/': '/product-playbook/domain-expertise/',
    // pm-playbook/ renamed to product-playbook/ (the layer covers all four
    // product crafts, not just PM). One redirect per old page.
    '/pm-playbook/': '/product-playbook/',
    '/pm-playbook/product-playbook/': '/product-playbook/product-loop/',
    '/pm-playbook/product-handbook/': '/product-playbook/product-handbook/',
    '/pm-playbook/pm-handbook/': '/product-playbook/pm-handbook/',
    '/pm-playbook/working-together/': '/product-playbook/working-together/',
    '/pm-playbook/craft/': '/product-playbook/craft/',
    '/pm-playbook/domain-expertise/': '/product-playbook/domain-expertise/',
    '/pm-playbook/decision-framework/': '/product-playbook/decision-framework/',
    '/pm-playbook/delivery-standards/': '/product-playbook/delivery-standards/',
    '/pm-playbook/release-phases/': '/product-playbook/release-phases/',
    '/pm-playbook/discovery/': '/product-playbook/discovery/',
    '/pm-playbook/product-analytics/': '/product-playbook/product-analytics/',
    '/pm-playbook/product-marketing/': '/product-playbook/product-marketing/',
    '/pm-playbook/customer-feedback/': '/product-playbook/customer-feedback/',
    '/pm-playbook/rice/': '/product-playbook/rice/',
    '/pm-playbook/personas/': '/product-playbook/personas/',
    '/pm-playbook/tools-we-use/': '/product-playbook/tools-we-use/',
    '/pm-playbook/templates/customer-call/': '/product-playbook/templates/customer-call/',
    '/pm-playbook/templates/research/': '/product-playbook/templates/research/',
    '/pm-playbook/templates/ritual-review/': '/product-playbook/templates/ritual-review/',
    '/pm-playbook/templates/post-launch-review/': '/product-playbook/templates/post-launch-review/',
    '/examples/tempo-overview/': '/examples/tempo/strategy/',
    '/examples/tempo-strategy/': '/examples/tempo/strategy/plan/',
    '/examples/tempo-product-spec/': '/examples/tempo/product-spec/',
    '/examples/tempo-job-spec/': '/examples/tempo/job-spec/',
    '/examples/tempo-job-links/': '/examples/tempo/job-links/',
    '/examples/tempo-rfc/': '/examples/tempo/rfc/',
    '/examples/tempo-decision-2026-01/': '/examples/tempo/strategy/decisions/2026-01-15-initial-h1-strategy/',
    '/examples/tempo-decision-2026-04/': '/examples/tempo/strategy/decisions/2026-04-22-gridline-integration-move/',
  }),
  integrations: [
    sitemap(),
    starlight({
      title: 'ProductOS',
      description: 'ProductOS, a product operating system: anchors, Job Specs, guides, templates, and agent-executable skills.',
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
          errorOnInconsistentLocale: false,
        }),
      ],
      logo: {
        light: './public/img/wordmark-productos.svg',
        dark: './public/img/wordmark-productos-dark.svg',
        alt: 'ProductOS',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'ProductOS on GitHub', href: `https://github.com/${repository}` },
      ],
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: ['./src/styles/custom.css'],
      components: {
        Head: './src/components/Head.astro',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What is ProductOS', link: '/guides/what-is-productos/' },
            { label: 'The method: Agentic Delivery', link: '/guides/agentic-delivery/' },
            { label: 'Worked example', link: '/guides/worked-example/' },
          ],
        },
        {
          label: 'Go deeper',
          items: [
            { label: 'Jobs to be Done', link: '/guides/jtbd-guide/' },
            { label: 'The Anchor Signal', link: '/guides/headline-metric/' },
            { label: 'Product Analytics', link: '/guides/product-analytics/' },
            { label: 'Positioning and Messaging', link: '/guides/positioning-and-messaging/' },
            { label: 'Org as an API', link: '/guides/org-as-an-api/' },
            { label: 'Strategy as Code', link: '/guides/strategy-as-code/' },
            { label: 'Writing an RFC', link: '/guides/writing-an-rfc/' },
          ],
        },
        {
          label: 'The shapes',
          items: [
            {
              label: 'Anchors',
              collapsed: true,
              items: [
                { label: 'Anchors: Product Vision', link: '/anchors/product-vision/' },
                { label: 'Anchors: Product Principles', link: '/anchors/product-principles/' },
                { label: 'Anchors: Invariants', link: '/anchors/invariants/' },
                { label: 'Anchors: Measurement Chain', link: '/anchors/measurement-chain/' },
              ],
            },
            {
              label: 'Templates',
              collapsed: true,
              items: [
                { label: 'Product Spec', link: '/templates/product-spec/' },
                { label: 'Job Spec', link: '/templates/job-spec/' },
                { label: 'Job Links', link: '/templates/job-links/' },
                { label: 'RFC', link: '/templates/rfc/' },
                { label: 'Strategy', link: '/templates/strategy/' },
                { label: 'Copy Kit', link: '/templates/copy-kit/' },
                { label: 'Decision Record', link: '/templates/decision-record/' },
              ],
            },
          ],
        },
        { label: 'Examples', autogenerate: { directory: 'examples', collapsed: true } },
        {
          label: 'Product Playbook',
          collapsed: false,
          items: [
            {
              label: 'Operating model',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/product-playbook/' },
                { label: 'The Product Loop (six phases)', link: '/product-playbook/product-loop/' },
                { label: 'Product Handbook', link: '/product-playbook/product-handbook/' },
                { label: 'Working Together', link: '/product-playbook/working-together/' },
              ],
            },
            {
              label: 'Craft & judgement',
              collapsed: true,
              items: [
                { label: 'Craft', link: '/product-playbook/craft/' },
                { label: 'Domain Expertise', link: '/product-playbook/domain-expertise/' },
              ],
            },
            {
              label: 'Disciplines',
              collapsed: true,
              items: [
                { label: 'Decision Framework', link: '/product-playbook/decision-framework/' },
                { label: 'Delivery Standards', link: '/product-playbook/delivery-standards/' },
                { label: 'Release Phases', link: '/product-playbook/release-phases/' },
                { label: 'Discovery', link: '/product-playbook/discovery/' },
                { label: 'Product Analytics', link: '/product-playbook/product-analytics/' },
                { label: 'Product Marketing', link: '/product-playbook/product-marketing/' },
                { label: 'Handling Product Feedback', link: '/product-playbook/customer-feedback/' },
                { label: 'RICE', link: '/product-playbook/rice/' },
                { label: 'Personas', link: '/product-playbook/personas/' },
                { label: 'Tools We Use', link: '/product-playbook/tools-we-use/' },
              ],
            },
            {
              label: 'Templates',
              collapsed: true,
              items: [
                { label: 'Template: Customer Call', link: '/product-playbook/templates/customer-call/' },
                { label: 'Template: Research', link: '/product-playbook/templates/research/' },
                { label: 'Template: Ritual Review', link: '/product-playbook/templates/ritual-review/' },
                { label: 'Template: Post-Launch Review', link: '/product-playbook/templates/post-launch-review/' },
              ],
            },
          ],
        },
        {
          label: 'Adopt it',
          items: [
            { label: 'Adopting guide', link: '/guides/adopting/' },
            { label: 'Skills', collapsed: true, autogenerate: { directory: 'skills' } },
            { label: 'Operating contract (AGENTS.md)', link: '/agents/' },
          ],
        },
      ],
    }),
  ],
});
