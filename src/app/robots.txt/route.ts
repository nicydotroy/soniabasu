export const dynamic = 'force-dynamic';

const SITEMAP = 'https://soniabasu.vercel.app/sitemap.xml';

const txt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /images/

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Slurp
Allow: /

User-agent: Baiduspider
Allow: /

# AI / LLM training bots — blocked
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: OAI-SearchBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: YouBot
Disallow: /

User-agent: Timpibot
Disallow: /

User-agent: Omgilibot
Disallow: /

Sitemap: ${SITEMAP}
`;

export function GET() {
  return new Response(txt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
