import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPageData, getAllSlugs } from "@/data/pages";
import { escorts } from "@/data/escorts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageData(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `https://soniabasu.com/${slug}` },
    openGraph: {
      type: "website",
      url: `https://soniabasu.com/${slug}`,
      title: page.title,
      description: page.description,
      images: page.ogImage ? [{ url: page.ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: page.ogImage ? [page.ogImage] : [],
    },
  };
}

const faqItems = [
  {
    q: (loc: string) => `How do I book a VVIP escort in ${loc}?`,
    a: (loc: string) =>
      `Booking is fast and simple. Call or WhatsApp us at +91 70 9158 5737, browse our verified ${loc} profiles, choose your preferred companion, confirm your preferred location — incall or outcall — and receive instant confirmation. Our booking team is available 24 hours a day, 7 days a week with no waiting queues.`,
  },
  {
    q: (loc: string) => `Are all escort profiles in ${loc} verified and genuine?`,
    a: (_: string) =>
      `Absolutely. Every companion on Sonia Basu undergoes a strict 3-step verification: government-issued photo ID check, real-time photo confirmation, and a personal background review. We re-verify all active profiles every 90 days. No fake photos, no bait-and-switch — what you see is exactly who you meet.`,
  },
  {
    q: (loc: string) => `What types of companions are available in ${loc}?`,
    a: (_: string) =>
      `We offer VIP and high-profile escorts, Russian and European models, independent companions, fashion model escorts, college companions aged 18–24, celebrity look-alikes, air hostess companions, mature and housewife escorts, and regional profiles including Punjabi, Bengali, Gujarati, Marathi, and South Indian companions.`,
  },
  {
    q: (loc: string) => `What is the pricing for escorts in ${loc}?`,
    a: (loc: string) =>
      `Our pricing is fully transparent with no hidden charges. Rates in ${loc} vary by companion category, duration, and service type. Budget-friendly and premium-tier options are available. Contact us directly at +91 70 9158 5737 for a personalised quote — there is no obligation to book.`,
  },
  {
    q: (loc: string) => `Is your ${loc} companion service 100% discreet?`,
    a: (_: string) =>
      `Discretion is our foundation. Your booking details, personal information, and all communications are kept strictly private using encrypted channels. We operate a zero-disclosure policy — your identity is never shared, stored beyond the minimum required, or used for any purpose other than your booking.`,
  },
  {
    q: (_: string) => `Do you offer both incall and outcall services?`,
    a: (_: string) =>
      `Yes. Our companions are available for incall — at their private, curated residences — and outcall, visiting your hotel suite, private apartment, or event venue. We serve all major 5-star hotels, business resorts, and private locations. Just specify your preference when booking.`,
  },
  {
    q: (_: string) => `Are the companion photos 100% real and current?`,
    a: (_: string) =>
      `Every image on our platform is verified in real time. We conduct regular photo-verification sessions to ensure all profile photos are accurate, current, and match the companion. Our strict no-fake-photo policy is enforced before any profile goes live or is renewed.`,
  },
  {
    q: (_: string) => `What payment methods do you accept?`,
    a: (_: string) =>
      `We accept cash, UPI (PhonePe, Google Pay, Paytm), bank transfer, and digital wallets. Payment is collected directly at the time of service — no advance is required for first-time bookings. This policy is in place to ensure your complete peace of mind before you commit.`,
  },
  {
    q: (_: string) => `Can I book a companion for overnight or multiple days?`,
    a: (_: string) =>
      `Yes. We offer overnight packages, weekend getaways, and multi-day arrangements. Extended bookings include priority companion selection, complimentary scheduling adjustments, and preferred rate packages. Contact us to discuss your requirements and we will create a tailored arrangement.`,
  },
  {
    q: (loc: string) => `How quickly can a companion be arranged in ${loc}?`,
    a: (loc: string) =>
      `In most ${loc} areas, same-day service is available within 45–90 minutes of booking confirmation. Advance booking of 4–6 hours guarantees your preferred companion and optimal scheduling. For express same-day requests, call directly for the fastest response.`,
  },
  {
    q: (_: string) => `What makes Sonia Basu different from other services?`,
    a: (_: string) =>
      `Sonia Basu has operated since 2018 with a zero-compromise policy on verification, safety, and discretion. We hold a 4.9-star average rating across 583 independent reviews. Our team is available 24/7, no advance payment is required, and every companion is re-verified every 90 days — standards that no other platform in India consistently maintains.`,
  },
  {
    q: (_: string) => `Do you serve clients outside the main city areas?`,
    a: (_: string) =>
      `Yes. Sonia Basu serves 150+ cities across India including Delhi, Bangalore, Hyderabad, Pune, Goa, Chandigarh, Jaipur, and all major metropolitan areas. Intercity and outstation travel arrangements are also available for premium bookings. Call us to confirm availability in your specific area.`,
  },
];

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageData(slug);
  if (!page) notFound();

  const { locationName } = page;
  const half = Math.ceil(faqItems.length / 2);
  const col1 = faqItems.slice(0, half);
  const col2 = faqItems.slice(half);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: page.schemaName ?? `Sonia Basu ${locationName}`,
    image: "https://soniabasu.com/images/logo.png",
    "@id": `https://soniabasu.com/${slug}`,
    url: `https://soniabasu.com/${slug}`,
    telephone: "+917091585737",
    priceRange: "₹₹₹",
    description: page.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationName,
      addressLocality: locationName,
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: page.schemaLat ?? 19.076,
      longitude: page.schemaLng ?? 72.8777,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(page.schemaReviewCount ?? 200),
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://soniabasu.com/" },
      { "@type": "ListItem", position: 2, name: page.heroTitle, item: `https://soniabasu.com/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q(locationName),
      acceptedAnswer: { "@type": "Answer", text: item.a(locationName) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(26,21,6,0.82) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label={`Sonia Basu ${locationName} — Premium Companion Service`}
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ India&apos;s Leading Luxury Companion Service
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)", lineHeight: 1.2, marginBottom: "1.2rem", fontWeight: 700 }}>
              Sonia Basu {locationName}<br />
              <span style={{ color: "var(--primary-color)" }}>Premium. Verified. Discreet.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 2rem", lineHeight: 1.8, color: "#e0d4b0" }}>
              {page.heroParagraph}
            </p>
            <div className="hero-buttons">
              <a
                href="tel:+917091585737"
                className="btn btn-primary"
                aria-label={`Call Sonia Basu ${locationName}`}
                style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}
              >
                📞 Call Now: +91 70 9158 5737
              </a>
              <a
                href="https://wa.me/917091585737"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp Sonia Basu ${locationName}`}
                style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
              >
                💬 WhatsApp Us
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>500+</strong><span>Verified Profiles</span></div>
              <div className="hero-stat"><strong>4.9★</strong><span>Client Rating</span></div>
              <div className="hero-stat"><strong>24/7</strong><span>Available</span></div>
              <div className="hero-stat"><strong>150+</strong><span>Cities Covered</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Intro */}
      <section className="contact-instant" aria-label={`About Sonia Basu ${locationName}`} style={{ background: "#0f0e08", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="container">
          <h2>Why {locationName}&apos;s Discerning Clients Choose Sonia Basu</h2>
          <p style={{ maxWidth: "780px", margin: "0 auto 1.5rem", lineHeight: 1.9, color: "#c8b98a" }}
            dangerouslySetInnerHTML={{ __html: page.intro }} />
          <div className="contact-buttons">
            <a href="tel:+917091585737" className="btn btn-call" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
              📞 Book Now — Call or WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Companions Grid */}
      <section className="escorts-section" aria-labelledby="escorts-heading" style={{ background: "#0a0a05" }}>
        <div className="container">
          <h2 id="escorts-heading">{page.h2Escorts}</h2>
          <p className="section-subtitle">{page.subtitleEscorts}</p>
          <div className="escorts-grid">
            {escorts.map((escort) => (
              <div className="escort-card" key={escort.slug}>
                <Image
                  src={escort.image}
                  alt={`${escort.name} — VVIP Escort ${locationName}, Age ${escort.age}`}
                  width={350}
                  height={350}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="escort-info">
                  <h3>{escort.name}</h3>
                  <div className="escort-details">
                    <span className="detail-item"><i>👤</i> {escort.age} yrs</span>
                    <span className="detail-item"><i>📍</i> {locationName}</span>
                  </div>
                  <div className="escort-stats">
                    <div className="stat"><strong>Height</strong><span>{escort.height}</span></div>
                    <div className="stat"><strong>Figure</strong><span>{escort.figure}</span></div>
                    <div className="stat"><strong>Size</strong><span>{escort.size}</span></div>
                  </div>
                  <Link href="/contact" className="btn-contact" aria-label={`Book ${escort.name} — Sonia Basu ${locationName}`}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Content Section */}
      <section className="content-section" aria-label={`About Sonia Basu ${locationName}`} style={{ background: "#0f0e08" }}>
        <div className="container">
          <h2>Sonia Basu {locationName} — India&apos;s Premium Companion Service</h2>
          <div className="content-wrapper">
            <p>
              <strong>Sonia Basu {locationName}</strong> is part of India&apos;s most established premium companion network, operating since 2018 with an uncompromising commitment to quality, safety, and discretion. Our {locationName} roster includes verified VIP companions, Russian and European models, independent professionals, fashion models, and regional companions — all personally vetted and re-verified every 90 days.
            </p>
            <h3>Experience You Can Trust in {locationName}</h3>
            <p>
              With over six years serving India&apos;s most discerning clientele — corporate executives, business travellers, visiting dignitaries, and private individuals — we understand what premium companion service truly demands. Every interaction from first contact to post-booking follow-up is handled with the care, professionalism, and discretion that defines the VVIP standard. Our 4.9-star average rating across 583 independent reviews reflects this consistency.
            </p>
            <h3>Verified, Safe &amp; Authentic Profiles</h3>
            <p>
              Safety is non-negotiable. Our multi-step verification system ensures every companion undergoes photo ID authentication, real-time image confirmation, and personal screening before their profile goes live. Clients in {locationName} receive genuine, current profiles with no fake or recycled photos. Our dedicated verification team re-screens all active companions every 90 days without exception.
            </p>
            <h3>Incall &amp; Outcall Services in {locationName}</h3>
            <p>
              Whether you prefer the privacy of a curated incall residence or the convenience of an outcall visit to your hotel, home, or private venue — Sonia Basu accommodates seamlessly. We serve all major zones in and around {locationName}, with same-day availability in most areas within 45–90 minutes of booking confirmation.
            </p>
            <h3>Transparent Pricing — No Hidden Charges</h3>
            <p>
              Our pricing structure is straightforward and fully disclosed upfront. No advance payment is required for first-time bookings, and no hidden charges are ever added. Rates vary by companion category and duration — contact our team at <a href="tel:+917091585737" style={{ color: "var(--primary-color)" }}>+91 70 9158 5737</a> for a personalised, no-obligation quote tailored to your preferences in {locationName}.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-label={`FAQ — Escorts in ${locationName}`} style={{ background: "#0a0a05" }}>
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions — Escorts in {locationName}</h2>
            <p>Everything you need to know before booking your VVIP companion in {locationName}</p>
          </div>
          <div className="faq-grid">
            <div className="faq-column">
              {col1.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question">
                    <h3>{item.q(locationName)}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.a(locationName)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="faq-column">
              {col2.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question">
                    <h3>{item.q(locationName)}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.a(locationName)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ background: "linear-gradient(135deg,#0d0d0d 0,#1a1506 100%)", padding: "3rem 0", borderTop: "1px solid rgba(201,168,76,0.3)", textAlign: "center" }}>
        <div className="container">
          <h2>Book Your VVIP Companion in {locationName} Now</h2>
          <p style={{ color: "#c8b98a", marginBottom: "2rem" }}>Same-day availability · 500+ verified profiles · Complete discretion guaranteed</p>
          <div className="contact-buttons">
            <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>📞 Call +91 70 9158 5737</a>
            <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>💬 WhatsApp Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
