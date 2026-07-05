import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const docs = await getCollection('docs');

const pages = Object.fromEntries(docs.map((doc) => [doc.id, doc]));

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, doc) => ({
    title: doc.data.title ?? 'ProductOS',
    description: doc.data.description ?? 'A product operating system: anchors, Job Specs, guides, templates, and agent-executable skills.',
    bgGradient: [[20, 18, 70], [79, 70, 229]],
    border: { color: [199, 210, 254], width: 20 },
    padding: 60,
    font: {
      title: {
        color: [255, 255, 255],
        size: 64,
        weight: 'Bold',
        lineHeight: 1.3,
      },
      description: {
        color: [199, 210, 254],
        size: 32,
        lineHeight: 1.4,
      },
    },
    logo: {
      path: './public/favicon.svg',
    },
  }),
});
