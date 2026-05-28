import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://soniabasu.vercel.app";
const PAGE_URL = `${SITE}/services`;
const PAGE_MODIFIED = "2026-05-28";

export const metadata: Metadata = {
  title: "VVIP Escort Services Mumbai | VIP, Russian, Model, Independent 24/7",
  description:
    "Explore Sonia Basu Mumbai's premium service menu: VIP high-profile escorts, Russian & European models, independent companions, college girls, air hostess, housewife escorts and more. All verified. Available 24/7.",
  alternates: { canonical: PAGE_URL },
  other: { "article:modified_time": PAGE_MODIFIED },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "VVIP Escort Services Mumbai | VIP, Russian, Model, Independent 24/7",
    description:
      "Explore Sonia Basu Mumbai's premium service menu — VIP, Russian, Model, Independent, College, Air Hostess and more. All verified. 24/7.",
    siteName: "Sonia Basu Mumbai",
    locale: "en_IN",
    images: [{ url: `${SITE}/images/escorts-in-mumbai-banner.webp` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VVIP Escort Services Mumbai",
    description: "VIP, Russian, Model, Independent, College, Air Hostess companions — verified, 24/7.",
    images: [`${SITE}/images/escorts-in-mumbai-banner.webp`],
  },
};

const services = [
  {
    icon: "👑",
    title: "VIP & High-Profile Escorts",
    href: "/vip-escorts",
    desc: "Our VIP companions are sophisticated, educated, and immaculately presented. Ideal for corporate dinners, black-tie events, luxury travel, or private evenings — every interaction is refined, discreet, and memorable.",
    features: ["Curated high-profile profiles", "5-star hotel & resort visits", "Corporate events & galas", "Overnight & multi-day packages"],
  },
  {
    icon: "🌟",
    title: "Russian & European Models",
    href: "/russian-escorts",
    desc: "Authentic Russian and European companions bring exotic beauty and international elegance to Mumbai. Multilingual, well-travelled, and professionally trained in social etiquette.",
    features: ["Verified European profiles", "Fluent English & Hindi", "International social etiquette", "Incall & outcall available"],
  },
  {
    icon: "💎",
    title: "Independent Escorts",
    href: "/independent-escorts",
    desc: "Self-managed, professional companions who set their own standards. Independent escorts offer complete authenticity, real photos, and a personal connection that agency companions rarely provide.",
    features: ["Self-verified & self-managed", "Real photos guaranteed", "Flexible scheduling", "Direct communication"],
  },
  {
    icon: "👗",
    title: "Model & Fashion Escorts",
    href: "/model-escorts",
    desc: "Professional fashion and runway models available as companions. Stunning looks, impeccable style, and the social confidence to shine at any event or private setting.",
    features: ["Runway & print model profiles", "Red-carpet presentation", "Event companionship", "Portfolio photos available"],
  },
  {
    icon: "🎓",
    title: "College Companions",
    href: "/college-girls-escorts",
    desc: "Young, energetic, and intelligent companions aged 18—24. Fun, spontaneous, and open-minded — perfect for clients seeking youthful freshness and genuine connection.",
    features: ["Age 18–24 verified", "Energetic & open-minded", "Student & graduate profiles", "Budget & premium tiers"],
  },
  {
    icon: "⭐",
    title: "Celebrity & Glamour Escorts",
    href: "/celebrity-escorts",
    desc: "Glamorous celebrity look-alike and Bollywood-inspired companions. For clients who demand the extraordinary — commanding presence, extraordinary beauty, unforgettable experiences.",
    features: ["Bollywood & celebrity aesthetics", "Glamour-trained profiles", "Premier event appearances", "Strictly premium tier"],
  },
  {
    icon: "✈️",
    title: "Air Hostess Escorts",
    href: "/air-hostess-escorts",
    desc: "Polished, travel-ready companions with the professionalism and poise of aviation professionals. Immaculate presentation, soft-spoken authority, and outstanding service commitment.",
    features: ["Aviation-trained demeanour", "Uniform outfit available", "Multilingual communication", "Airport & hotel visits"],
  },
  {
    icon: "🏡",
    title: "Mature & Housewife Escorts",
    href: "/house-wife-escorts",
    desc: "Warm, experienced, and nurturing companions with genuine emotional intelligence. Mature escorts bring depth, patience, and authentic intimacy to every encounter.",
    features: ["Mature profiles 28–40", "Warm & emotionally intelligent", "Experienced companions", "Home & hotel visits"],
  },
];

const bookingSteps = [
  { num: "01", title: "Browse Verified Profiles", desc: "Explore our curated gallery of 500+ verified companions. Filter by type, region, or preference to find your ideal companion." },
  { num: "02", title: "Call or WhatsApp", desc: "Reach our booking team at +91 70 9158 5737. We confirm availability, timing, and answer all questions with complete discretion." },
  { num: "03", title: "Confirm Your Booking", desc: "Share your preferred location (incall or outcall), date, time, and service duration. Receive written confirmation instantly." },
  { num: "04", title: "Enjoy the Experience", desc: "Your companion arrives on time, presented impeccably. Payment is collected at the time of service — no advance required." },
];

const servicesFaq = [
  { q: "What companion categories does Sonia Basu offer?", a: "Eight categories: VIP & high-profile escorts, Russian & European models, independent escorts, fashion & runway models, college companions aged 18–24, celebrity look-alikes, air hostess escorts, and mature / housewife escorts. All photo-verified every 90 days." },
  { q: "How do I book a service?", a: "Call or WhatsApp +91 70 9158 5737, pick a category, confirm incall or outcall and your slot. Same-day booking is available in 45–90 minutes across Mumbai." },
  { q: "Is advance payment required?", a: "No advance payment is required for first-time bookings. Payment is collected at the time of service, in cash or via UPI / bank transfer." },
  { q: "Are incall and outcall both available?", a: "Yes. Incall at a curated private residence or outcall at your hotel, home or event venue across Mumbai, Navi Mumbai, Thane and 150+ Indian cities." },
];

const servicesWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "VVIP Escort Services Mumbai",
  isPartOf: { "@id": `${SITE}#website` },
  about: { "@id": `${SITE}#organization` },
  primaryImageOfPage: `${SITE}/images/escorts-in-mumbai-banner.webp`,
  inLanguage: "en-IN",
  datePublished: "2018-01-01",
  dateModified: PAGE_MODIFIED,
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".aeo-tldr", "h2", "h3"] },
};

const servicesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
  ],
};

const servicesService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Sonia Basu Premium Companion Services",
  serviceType: "Premium companion booking",
  provider: { "@id": `${SITE}#organization` },
  areaServed: { "@type": "Country", name: "India" },
  url: PAGE_URL,
  description: "Eight premium companion categories — VIP, Russian, independent, model, college, celebrity, air hostess and housewife — verified, 24/7 incall & outcall.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Companion Categories",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VIP & High-Profile Escorts", url: `${SITE}/vip-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Russian & European Models", url: `${SITE}/russian-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Independent Escorts", url: `${SITE}/independent-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Model & Fashion Escorts", url: `${SITE}/model-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "College Companions", url: `${SITE}/college-girls-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Celebrity & Glamour Escorts", url: `${SITE}/celebrity-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Hostess Escorts", url: `${SITE}/air-hostess-escorts` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mature & Housewife Escorts", url: `${SITE}/house-wife-escorts` } },
    ],
  },
};

const servicesHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to book a VVIP companion",
  totalTime: "PT5M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "0" },
  step: [
    { "@type": "HowToStep", position: 1, name: "Browse verified profiles", text: "Explore 500+ verified profiles. Filter by category, region or preference." },
    { "@type": "HowToStep", position: 2, name: "Call or WhatsApp +91 70 9158 5737", text: "Confirm availability, timing and any preferences with the 24/7 booking team." },
    { "@type": "HowToStep", position: 3, name: "Confirm your booking", text: "Share location (incall or outcall), date, time and duration. Receive instant written confirmation." },
    { "@type": "HowToStep", position: 4, name: "Enjoy the experience", text: "Companion arrives on time. Payment is collected at the time of service — no advance required." },
  ],
};

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: servicesFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }} />

      {/* Hero */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(26,21,6,0.82) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="VVIP Escort Services Mumbai"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ Premium Companion Services
            </p>
            <h1>VVIP Escort Services Mumbai</h1>
            <p style={{ color: "#e0d4b0", maxWidth: "560px", margin: "0 auto 1.5rem" }}>
              A curated menu of India&apos;s finest companion services. Every category verified, screened, and held to the VVIP standard.
            </p>
            <div className="hero-buttons">
              <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
                📞 Call: +91 70 9158 5737
              </a>
              <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Direct-Answer TL;DR */}
      <section
        className="aeo-answer"
        aria-label="Quick answer about Sonia Basu services"
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
            Sonia Basu Mumbai offers <strong>eight verified companion categories</strong>: VIP &amp; high-profile, Russian &amp; European models, independent escorts, fashion models, college companions (18–24), celebrity look-alikes, air hostess escorts and mature / housewife companions. Every profile is photo-verified every 90 days. Bookable 24/7 by phone or WhatsApp on <a href="tel:+917091585737" style={{ color: "var(--primary-color)", whiteSpace: "nowrap" }}>+91 70 9158 5737</a>. Incall &amp; outcall in Mumbai and 150+ Indian cities. <strong>No advance payment</strong> for first-time bookings.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section" style={{ background: "#0a0a05" }} aria-label="Companion Service Categories">
        <div className="container">
          <div className="services-intro">
            <h2>Our Companion Service Categories</h2>
            <p>Every companion is 100% verified with genuine photos, background screening, and in-person authentication. No exceptions.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.href}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => <li key={f}>✦ {f}</li>)}
                </ul>
                <Link href={s.href} className="btn-contact" aria-label={`View ${s.title}`}>View Service</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="booking-process" style={{ background: "#0f0e08" }} aria-label="How to Book Sonia Basu">
        <div className="container">
          <h2>How to Book Your VVIP Companion</h2>
          <div className="process-steps">
            {bookingSteps.map((step) => (
              <div className="step" key={step.num}>
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="cta-section">
            <h3>Ready to Experience the VVIP Difference?</h3>
            <div className="contact-buttons">
              <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>📞 Call Now</a>
              <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="content-section" style={{ background: "#0a0a05" }} aria-label="About VVIP Escort Services">
        <div className="container">
          <h2>Premium Escort Services in Mumbai — The VVIP Standard</h2>
          <div className="content-wrapper">
            <p>
              <strong>Sonia Basu Mumbai</strong> operates India&apos;s most comprehensive premium companion service platform, connecting discerning clients with verified, professional companions across Mumbai and 150+ cities nationwide. Our service menu is designed to cater to every preference — from VIP high-profile encounters to warm, mature companionship — with no compromise on safety, authenticity, or discretion.
            </p>
            <h3>Why Trust Sonia Basu?</h3>
            <p>
              Our reputation is built on six years of zero-compromise service delivery. Every companion on our platform is verified through a three-stage process: government-issued ID authentication, real-time photo confirmation, and a personal interview. We re-verify all active profiles every 90 days to guarantee ongoing accuracy. This systematic approach has earned us an average client rating of 4.9 stars across 583 independent reviews.
            </p>
            <h3>Incall and Outcall Services Across Mumbai</h3>
            <p>
              Whether you prefer the privacy of an incall at a companion&apos;s curated personal residence, or the convenience of an outcall visit to your hotel, home, or event venue — Sonia Basu accommodates your preference seamlessly. We serve all major Mumbai zones and surrounding areas, with same-day availability in most locations within 45–90 minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
