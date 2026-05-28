export const dynamic = 'force-dynamic';

const SITEMAP = 'https://soniabasu.vercel.app/sitemap.xml';

// Allow search engines and answer engines (AEO / GEO). Blocking GPTBot,
// ClaudeBot, PerplexityBot etc. removes us from ChatGPT Search, Claude,
// Perplexity, Google AI Overviews (Google-Extended), Apple Intelligence
// (Applebot-Extended) and other generative surfaces.
const txt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# Traditional search crawlers
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

User-agent: YandexBot
Allow: /

User-agent: Applebot
Allow: /

# Answer engines / AI search surfaces (allowed for AEO + GEO visibility)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: CCBot
Allow: /

User-agent: YouBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Diffbot
Allow: /

User-agent: Timpibot
Allow: /

User-agent: Omgilibot
Allow: /

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
