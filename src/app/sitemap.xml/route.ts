import { locationSlugs, categorySlugs } from '@/data/pages';

export const dynamic = 'force-dynamic';

const BASE = 'https://soniabasu.vercel.app';
const MOD = '2026-04-21';

function url(loc: string, priority: string, freq: string) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${MOD}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export function GET() {
  const entries: string[] = [
    url(`${BASE}/`,        '1.0', 'daily'),
    url(`${BASE}/services`, '0.9', 'weekly'),
    url(`${BASE}/location`, '0.9', 'weekly'),
    url(`${BASE}/gallery`,  '0.8', 'weekly'),
    url(`${BASE}/contact`,  '0.8', 'weekly'),
    ...locationSlugs.map((s) => url(`${BASE}/escorts-in-${s}`, '0.8', 'weekly')),
    ...categorySlugs.map((s) => url(`${BASE}/${s}`,            '0.8', 'weekly')),
    ...locationSlugs.map((s) => url(`${BASE}/spa/${s}`,        '0.7', 'weekly')),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
