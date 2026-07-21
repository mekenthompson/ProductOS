import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('The Astro site URL is required to generate robots.txt');

  const baseUrl = new URL(import.meta.env.BASE_URL, site);
  const sitemapUrl = new URL('sitemap-index.xml', baseUrl);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
