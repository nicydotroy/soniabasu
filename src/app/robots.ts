import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 1,
      },
      { userAgent: 'Googlebot',         allow: '/',    crawlDelay: 1 },
      { userAgent: 'Googlebot-Image',   allow: '/images/' },
      { userAgent: 'Bingbot',           allow: '/',    crawlDelay: 1 },
      { userAgent: 'DuckDuckBot',       allow: '/' },
      { userAgent: 'Slurp',             allow: '/' },
      { userAgent: 'Baiduspider',       allow: '/' },
      // LLM / AI training bots — blocked
      { userAgent: 'GPTBot',            disallow: '/' },
      { userAgent: 'ChatGPT-User',      disallow: '/' },
      { userAgent: 'OAI-SearchBot',     disallow: '/' },
      { userAgent: 'Claude-Web',        disallow: '/' },
      { userAgent: 'anthropic-ai',      disallow: '/' },
      { userAgent: 'ClaudeBot',         disallow: '/' },
      { userAgent: 'Google-Extended',   disallow: '/' },
      { userAgent: 'CCBot',             disallow: '/' },
      { userAgent: 'PerplexityBot',     disallow: '/' },
      { userAgent: 'Bytespider',        disallow: '/' },
      { userAgent: 'FacebookBot',       disallow: '/' },
      { userAgent: 'Diffbot',           disallow: '/' },
      { userAgent: 'cohere-ai',         disallow: '/' },
      { userAgent: 'Applebot-Extended', disallow: '/' },
      { userAgent: 'YouBot',            disallow: '/' },
      { userAgent: 'Timpibot',          disallow: '/' },
      { userAgent: 'Omgilibot',         disallow: '/' },
    ],
    sitemap: 'https://soniabasu.vercel.app/sitemap.xml',
  };
}
