// A list of every page, for search engines.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { href } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
  const paths = ['/', '/work/', ...work.map((w) => `/work/${w.id}/`), '/experience/', '/about/', '/contact/'];
  const urls = paths.map((p) => `  <url><loc>${new URL(href(p), site).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
