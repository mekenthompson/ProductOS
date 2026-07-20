// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator';
import remarkProductosDocs from './src/plugins/remark-productos-docs.mjs';

export default defineConfig({
  site: 'https://mekenthompson.github.io',
  base: '/ProductOS/',
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkProductosDocs],
  },
  // Old site slugs redirected to their new home. Astro prefixes `base` on
  // the SOURCE side only; destinations must be written with the /ProductOS/
  // base included or the meta-refresh targets 404 on GitHub Pages.
  redirects: {
    '/guides/product-specs/': '/ProductOS/guides/writing-an-rfc/',
    '/pm-playbook/headline-metric/': '/ProductOS/guides/headline-metric/',
    '/examples/tempo-overview/': '/ProductOS/examples/tempo/strategy/',
    '/examples/tempo-strategy/': '/ProductOS/examples/tempo/strategy/plan/',
    '/examples/tempo-product-spec/': '/ProductOS/examples/tempo/product-spec/',
    '/examples/tempo-job-spec/': '/ProductOS/examples/tempo/job-spec/',
    '/examples/tempo-job-links/': '/ProductOS/examples/tempo/job-links/',
    '/examples/tempo-rfc/': '/ProductOS/examples/tempo/rfc/',
    '/examples/tempo-decision-2026-01/': '/ProductOS/examples/tempo/strategy/decisions/2026-01-15-initial-h1-strategy/',
    '/examples/tempo-decision-2026-04/': '/ProductOS/examples/tempo/strategy/decisions/2026-04-22-gridline-integration-move/',
  },
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
        { icon: 'github', label: 'ProductOS on GitHub', href: 'https://github.com/mekenthompson/ProductOS' },
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
          label: 'PM Playbook',
          collapsed: false,
          items: [
            {
              label: 'Operating model',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/pm-playbook/' },
                { label: 'Product Playbook (six phases)', link: '/pm-playbook/product-playbook/' },
                { label: 'Product Handbook', link: '/pm-playbook/product-handbook/' },
                { label: 'Working Together', link: '/pm-playbook/working-together/' },
              ],
            },
            {
              label: 'Craft & judgement',
              collapsed: true,
              items: [
                { label: 'Craft', link: '/pm-playbook/craft/' },
                { label: 'Domain Entry', link: '/pm-playbook/domain-entry/' },
                { label: 'Calibration', link: '/pm-playbook/calibration/' },
                { label: 'Learning Accounts', link: '/pm-playbook/learning-accounts/' },
              ],
            },
            {
              label: 'Disciplines',
              collapsed: true,
              items: [
                { label: 'Decision Framework', link: '/pm-playbook/decision-framework/' },
                { label: 'Delivery Standards', link: '/pm-playbook/delivery-standards/' },
                { label: 'Release Phases', link: '/pm-playbook/release-phases/' },
                { label: 'Discovery', link: '/pm-playbook/discovery/' },
                { label: 'Product Analytics', link: '/pm-playbook/product-analytics/' },
                { label: 'Product Marketing', link: '/pm-playbook/product-marketing/' },
                { label: 'Handling Product Feedback', link: '/pm-playbook/customer-feedback/' },
                { label: 'RICE', link: '/pm-playbook/rice/' },
                { label: 'Personas', link: '/pm-playbook/personas/' },
                { label: 'Tools We Use', link: '/pm-playbook/tools-we-use/' },
              ],
            },
            {
              label: 'Templates',
              collapsed: true,
              items: [
                { label: 'Template: Customer Call', link: '/pm-playbook/templates/customer-call/' },
                { label: 'Template: Research', link: '/pm-playbook/templates/research/' },
                { label: 'Template: Ritual Review', link: '/pm-playbook/templates/ritual-review/' },
                { label: 'Template: Post-Launch Review', link: '/pm-playbook/templates/post-launch-review/' },
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
