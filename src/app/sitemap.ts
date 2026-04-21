import { MetadataRoute } from 'next';
import { locationSlugs, categorySlugs } from '@/data/pages';

const BASE_URL = 'https://soniabasu.vercel.app';
const LASTMOD = '2026-04-21';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,        lastModified: LASTMOD, changeFrequency: 'daily',  priority: 1.0 },
    { url: `${BASE_URL}/services`,  lastModified: LASTMOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/location`,  lastModified: LASTMOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/gallery`,   lastModified: LASTMOD, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,   lastModified: LASTMOD, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/escorts-in-${slug}`,
    lastModified: LASTMOD,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: LASTMOD,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const spaPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/spa/${slug}`,
    lastModified: LASTMOD,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...categoryPages, ...spaPages];
}
