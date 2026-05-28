import { locationSlugs, categorySlugs } from '@/data/pages';

export const dynamic = 'force-dynamic';

const BASE = 'https://soniabasu.vercel.app';

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function url(loc: string, lastmod: string, priority: string, freq: string) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export function GET() {
  const mod = today();
  const entries: string[] = [
    url(`${BASE}/`,         mod, '1.0', 'daily'),
    url(`${BASE}/services`, mod, '0.9', 'weekly'),
    url(`${BASE}/location`, mod, '0.9', 'weekly'),
    url(`${BASE}/gallery`,  mod, '0.8', 'weekly'),
    url(`${BASE}/contact`,  mod, '0.8', 'weekly'),
    ...locationSlugs.map((s) => url(`${BASE}/escorts-in-${s}`, mod, '0.8', 'weekly')),
    ...categorySlugs.map((s) => url(`${BASE}/${s}`,            mod, '0.8', 'weekly')),
    ...locationSlugs.map((s) => url(`${BASE}/spa/${s}`,        mod, '0.7', 'weekly')),
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
