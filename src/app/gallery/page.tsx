import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://soniabasu.vercel.app";
const PAGE_URL = `${SITE}/gallery`;
const PAGE_MODIFIED = "2026-05-28";

export const metadata: Metadata = {
  title: "Sonia Basu Gallery Mumbai | Verified Companion Profiles",
  description:
    "Browse Sonia Basu Mumbai's verified companion gallery. 500+ genuine profiles across VIP, Russian, Model, Independent and specialist categories. All photos real-time verified. No fake profiles.",
  alternates: { canonical: PAGE_URL },
  other: { "article:modified_time": PAGE_MODIFIED },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Sonia Basu Gallery Mumbai | Verified Companion Profiles",
    description: "500+ photo-verified companion profiles across all premium categories.",
    siteName: "Sonia Basu Mumbai",
    locale: "en_IN",
    images: [{ url: `${SITE}/images/escorts-in-mumbai-banner.webp` }],
  },
};

const categories = [
  { icon: "👑", title: "VIP & High-Profile", desc: "Sophisticated, educated, and immaculately presented companions for elite clientele.", href: "/vip-escorts" },
  { icon: "🌟", title: "Russian & European Models", desc: "Authentic European beauty with multilingual communication and international etiquette.", href: "/russian-escorts" },
  { icon: "💎", title: "Independent Escorts", desc: "Self-managed, genuine companions with direct communication and personal authenticity.", href: "/independent-escorts" },
  { icon: "👗", title: "Fashion & Model Escorts", desc: "Runway-trained, professionally styled companions for events and private engagements.", href: "/model-escorts" },
  { icon: "🎓", title: "College Companions", desc: "Young, vibrant, and open-minded companions aged 18–24 across Mumbai.", href: "/college-girls-escorts" },
  { icon: "⭐", title: "Celebrity & Glamour", desc: "Bollywood-inspired glamour companions for premium and extraordinary experiences.", href: "/celebrity-escorts" },
];

const galleryCollection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#collection`,
  url: PAGE_URL,
  name: "Sonia Basu Verified Companion Gallery",
  isPartOf: { "@id": `${SITE}#website` },
  about: { "@id": `${SITE}#organization` },
  inLanguage: "en-IN",
  datePublished: "2018-01-01",
  dateModified: PAGE_MODIFIED,
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".aeo-tldr", "h2", "h3"] },
  mainEntity: {
    "@type": "ItemList",
    name: "Verified Companion Categories",
    numberOfItems: categories.length,
    itemListElement: categories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${SITE}${c.href}`,
    })),
  },
};

const galleryBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Gallery", item: PAGE_URL },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumb) }} />

      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(26,21,6,0.82) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="Sonia Basu Mumbai Gallery"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ 500+ Verified Profiles
            </p>
            <h1>Sonia Basu Gallery — Mumbai</h1>
            <p style={{ color: "#e0d4b0", maxWidth: "540px", margin: "0 auto 1.5rem" }}>
              Browse our verified companion categories. Every photo is real, current, and authenticated. No fake profiles. No surprises.
            </p>
            <div className="hero-buttons">
              <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
                📞 Request Profiles: +91 70 9158 5737
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Direct-Answer TL;DR */}
      <section
        className="aeo-answer"
        aria-label="Quick answer about the Sonia Basu gallery"
        style={{
          background: "linear-gradient(180deg,#0a0a05 0%,#0f0e08 100%)",
          padding: "2.25rem 0",
          borderBottom: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        <div className="container" style={{ maxWidth: "880px" }}>
          <p
            className="aeo-tldr"
            style={{ fontSize: "1.08rem", lineHeight: 1.85, color: "#e8dcb4", textAlign: "center", margin: 0 }}
          >
            The Sonia Basu gallery features <strong>500+ photo-verified companion profiles</strong> across six premium categories — VIP, Russian / European, independent, fashion model, college and celebrity. Every image is <strong>real-time verified</strong> with no fake or recycled photos. For privacy, detailed profile photos are shared <em>on request</em> via WhatsApp on <a href="tel:+917091585737" style={{ color: "var(--primary-color)", whiteSpace: "nowrap" }}>+91 70 9158 5737</a> — this keeps companions safe and ensures only serious clients reach out.
          </p>
        </div>
      </section>

      <section className="gallery-section" style={{ background: "#0a0a05" }} aria-label="Companion Category Gallery">
        <div className="container">
          <div className="gallery-intro">
            <h2>Browse Our Verified Companion Categories</h2>
            <p>All profiles are authenticated in real time. What you see is exactly who you meet — guaranteed by the VVIP verification standard.</p>
          </div>
          <div className="gallery-grid">
            {categories.map((cat) => (
              <div className="gallery-item" key={cat.href}>
                <div className="gallery-image">
                  <div className="placeholder-image">
                    <span>{cat.icon}</span>
                    <p>{cat.title}</p>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <Link href={cat.href} className="gallery-btn" aria-label={`View ${cat.title} Gallery`}>View Profiles</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-note">
            <h3>✦ Privacy-First Photo Policy</h3>
            <p>
              To protect the privacy and safety of all our companions, full profile photos are shared exclusively upon direct request. This policy ensures only serious, verified clients make contact — maintaining the trust and security that Sonia Basu was built on.
            </p>
            <div className="contact-buttons">
              <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>📞 Request Profiles — Call Now</a>
              <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>💬 WhatsApp for Profiles</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
