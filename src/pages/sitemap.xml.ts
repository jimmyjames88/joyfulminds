import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { canonicalUrl } from '../utils/seo';

export const prerender = true;

const paths = [
  '/',
  '/about',
  '/contact',
  ...services.map(({ slug }) => `/services/${slug}`),
  '/services/team-workshops',
];

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('The canonical site URL must be configured.');
  const urls = paths.map((path) =>
    `  <url><loc>${canonicalUrl(path, site).href.replace(/&/g, '&amp;')}</loc></url>`
  ).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
