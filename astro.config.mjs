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
  // Old site slugs redirected to their new home. Astro applies `base`
  // automatically to both sides of each entry, so these paths are written
  // base-relative, matching the sidebar links below.
  redirects: {
    '/guides/product-specs/': '/guides/writing-an-rfc/',
    '/pm-playbook/headline-metric/': '/guides/headline-metric/',
    '/examples/tempo-overview/': '/examples/tempo/strategy/',
    '/examples/tempo-strategy/': '/examples/tempo/strategy/plan/',
    '/examples/tempo-product-spec/': '/examples/tempo/product-spec/',
    '/examples/tempo-job-spec/': '/examples/tempo/job-spec/',
    '/examples/tempo-job-links/': '/examples/tempo/job-links/',
    '/examples/tempo-rfc/': '/examples/tempo/rfc/',
    '/examples/tempo-decision-2026-01/': '/examples/tempo/strategy/decisions/2026-01-15-initial-h1-strategy/',
    '/examples/tempo-decision-2026-04/': '/examples/tempo/strategy/decisions/2026-04-22-gridline-integration-move/',
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
        src: './public/favicon.svg',
        alt: 'ProductOS',
      },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'switchroom', href: 'https://github.com/switchroom/switchroom' },
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
            { label: 'ProductOS', link: '/' },
            { label: 'Adopt ProductOS', link: '/guides/adopting/' },
            { label: 'The method: Agentic Delivery', link: '/guides/agentic-delivery/' },
            { label: 'Worked example: a job through the loop', link: '/guides/worked-example/' },
            { label: 'Operating contract (AGENTS)', link: '/agents/' },
          ],
        },
        {
          label: 'Method (guides)',
          items: [
            { label: 'JTBD Guide', link: '/guides/jtbd-guide/' },
            { label: 'The Anchor Signal', link: '/guides/headline-metric/' },
            { label: 'Writing an RFC', link: '/guides/writing-an-rfc/' },
            { label: 'Org as an API', link: '/guides/org-as-an-api/' },
            { label: 'Strategy as Code', link: '/guides/strategy-as-code/' },
          ],
        },
        {
          label: 'Anchors',
          items: [
            { label: 'Product Vision', link: '/anchors/product-vision/' },
            { label: 'Product Principles', link: '/anchors/product-principles/' },
            { label: 'Invariants', link: '/anchors/invariants/' },
          ],
        },
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
                { label: 'PM Handbook', link: '/pm-playbook/pm-handbook/' },
                { label: 'Working Together', link: '/pm-playbook/working-together/' },
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
          label: 'Templates',
          items: [
            { label: 'Product Spec', link: '/templates/product-spec/' },
            { label: 'Job Spec', link: '/templates/job-spec/' },
            { label: 'Job Links', link: '/templates/job-links/' },
            { label: 'RFC', link: '/templates/rfc/' },
            { label: 'Strategy', link: '/templates/strategy/' },
            { label: 'Decision Record', link: '/templates/decision-record/' },
          ],
        },
        { label: 'Examples', autogenerate: { directory: 'examples' } },
        { label: 'Skills', autogenerate: { directory: 'skills' } },
      ],
    }),
  ],
});
