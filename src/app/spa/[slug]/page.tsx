import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locationSlugs } from "@/data/pages";
import { spaTherapists } from "@/data/spaServices";

interface Props {
  params: Promise<{ slug: string }>;
}

function titleCase(str: string): string {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = titleCase(slug);
  return {
    title: `Body Massage in ${name} | Spa & Relaxation Centre 24/7 | VVIP Spa`,
    description: `Premium body massage & spa services in ${name}. Swedish, Thai, deep tissue & full body massage by verified female therapists. 24/7 incall & outcall available. Book now!`,
    keywords: `body massage in ${slug}, spa in ${slug}, massage centre ${slug}, full body massage ${slug}, female to male massage ${slug}, spa services ${slug}`,
    alternates: { canonical: `https://vvip-escorts.com/spa/${slug}` },
    openGraph: {
      type: "website",
      url: `https://vvip-escorts.com/spa/${slug}`,
      title: `Body Massage in ${name} | VVIP Spa`,
      description: `Premium body massage & spa services in ${name} — 24/7 availability. Verified therapists, incall & outcall.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Body Massage in ${name} | VVIP Spa`,
      description: `Premium body massage & spa services in ${name} — 24/7 availability.`,
    },
  };
}

const faqItems = [
  {
    q: (loc: string) => `What body massage services are available in ${loc}?`,
    a: (loc: string) =>
      `VVIP Spa in ${loc} offers a comprehensive menu including Swedish full body massage, deep tissue therapy, Thai stretch massage, aromatherapy, hot stone therapy, Balinese massage, Nuru massage, body-to-body massage, Lomi Lomi, couple spa, happy ending massage, and foot reflexology. All treatments are performed by trained, verified female therapists.`,
  },
  {
    q: (loc: string) => `How do I book a massage in ${loc}?`,
    a: (loc: string) =>
      `Booking is instant and easy. Call or WhatsApp +91 70 9158 5737, choose your preferred therapy and therapist in ${loc}, select incall or outcall, and confirm your slot. Our team is available 24 hours, 7 days a week. Advance booking guarantees your preferred therapist and time slot.`,
  },
  {
    q: (_: string) => `Are the spa therapists verified and trained?`,
    a: (_: string) =>
      `Every therapist at VVIP Spa undergoes strict verification including ID check, real photo confirmation, and skill assessment before joining our roster. All therapists are trained in their stated massage modalities. We re-verify and assess all active therapists every 90 days to maintain the highest standards of quality and safety.`,
  },
  {
    q: (loc: string) => `Do you offer outcall massage services in ${loc}?`,
    a: (loc: string) =>
      `Yes. Our therapists visit your hotel room, private apartment, villa, or resort in ${loc} for outcall sessions. We serve all major 5-star hotels and private residences. Outcall services include a full setup — massage mat, aromatherapy oils, towels, and all required equipment — so you enjoy a premium spa experience without leaving your space.`,
  },
  {
    q: (_: string) => `What is the pricing for spa massage services?`,
    a: (_: string) =>
      `Our pricing is fully transparent — no hidden charges. Sessions start from ₹2,500 for a 60-minute Swedish massage, with premium therapies and longer durations available at higher rates. Call +91 70 9158 5737 for a complete rate card and personalised quote. No advance payment is required for first-time bookings.`,
  },
  {
    q: (_: string) => `Is the spa service completely discreet and private?`,
    a: (_: string) =>
      `Absolute discretion is our policy. All booking details, personal information, and session records are kept strictly confidential using encrypted systems. We operate a zero-disclosure principle — your identity is never revealed or shared under any circumstances. Client privacy is our foundational commitment.`,
  },
  {
    q: (_: string) => `Can I book a couple massage for two people?`,
    a: (_: string) =>
      `Yes. Our couple spa packages are highly popular and available for both incall and outcall. Two therapists arrive simultaneously, providing synchronised massage sessions for you and your partner. Couple packages include champagne bath options, aromatherapy, and full-body treatment combinations. Call for custom packages.`,
  },
  {
    q: (_: string) => `What massage oils and products are used?`,
    a: (_: string) =>
      `We use premium-grade, hypoallergenic massage oils sourced from certified suppliers — including lavender, eucalyptus, sandalwood, and rose for aromatherapy; warm stone-grade oils for hot stone therapy; and clinical-grade neutral oil for deep tissue and body-to-body treatments. All products are dermatologically safe and allergen-tested.`,
  },
  {
    q: (loc: string) => `How quickly can a therapist arrive in ${loc}?`,
    a: (loc: string) =>
      `In most areas of ${loc}, outcall therapists are available within 45–90 minutes of booking confirmation. Advance booking of 3–6 hours guarantees your preferred therapist. For same-day express bookings call directly at +91 70 9158 5737 for real-time availability and fastest dispatch.`,
  },
  {
    q: (_: string) => `Do you offer overnight or extended spa sessions?`,
    a: (_: string) =>
      `Yes. We offer 2-hour, 3-hour, overnight, and full-day spa packages tailored to your needs. Extended sessions include multiple therapies, rest intervals, and complimentary add-ons. Premium multi-day retreat arrangements are also available for corporate or private wellness events. Contact us to build a customised wellness package.`,
  },
  {
    q: (_: string) => `What makes VVIP Spa different from local massage centres?`,
    a: (_: string) =>
      `VVIP Spa has operated since 2018 with a strict zero-compromise policy on therapist quality, hygiene, and client privacy. We hold a 4.9-star average across 500+ independent client reviews. Unlike local parlours, every therapist is personally verified, all equipment is sterilised before every session, and our 24/7 support team ensures a seamless experience from booking to completion.`,
  },
  {
    q: (_: string) => `Which cities and areas do you cover?`,
    a: (_: string) =>
      `VVIP Spa covers 150+ cities and towns across India, including Mumbai, Delhi, Bangalore, Hyderabad, Pune, Goa, Chandigarh, Jaipur, Kochi, and all major metropolitan suburbs. For outstation and intercity requests with advance notice, we arrange travel-inclusive outcall packages. Call us to confirm same-day availability in your specific area.`,
  },
];

export default async function SpaSlugPage({ params }: Props) {
  const { slug } = await params;
  const locationName = titleCase(slug);
  const half = Math.ceil(faqItems.length / 2);
  const col1 = faqItems.slice(0, half);
  const col2 = faqItems.slice(half);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: `VVIP Spa ${locationName}`,
    image: "https://vvip-escorts.com/images/logo.png",
    "@id": `https://vvip-escorts.com/spa/${slug}`,
    url: `https://vvip-escorts.com/spa/${slug}`,
    telephone: "+917091585737",
    priceRange: "₹₹₹",
    description: `Premium body massage and spa services in ${locationName}. Verified female therapists, 24/7 availability, incall and outcall.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationName,
      addressLocality: locationName,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vvip-escorts.com/" },
      { "@type": "ListItem", position: 2, name: "Spa Services", item: "https://vvip-escorts.com/spa" },
      { "@type": "ListItem", position: 3, name: `Body Massage in ${locationName}`, item: `https://vvip-escorts.com/spa/${slug}` },
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
          background:
            "linear-gradient(135deg, rgba(10,10,5,0.90) 0%, rgba(26,21,6,0.85) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label={`Body Massage & Spa Services in ${locationName}`}
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ India&apos;s Premium Spa &amp; Massage Service
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)", lineHeight: 1.2, marginBottom: "1.2rem", fontWeight: 700 }}>
              Body Massage &amp; Spa in {locationName}<br />
              <span style={{ color: "var(--primary-color)" }}>Verified. Relaxing. Discreet.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 2rem", lineHeight: 1.8, color: "#e0d4b0" }}>
              Premium full body massage services in {locationName} by trained, verified female therapists. Swedish, Thai, deep tissue, Nuru & more — 24/7 incall and outcall available.
            </p>
            <div className="hero-buttons">
              <a
                href="tel:+917091585737"
                className="btn btn-primary"
                aria-label={`Book Spa in ${locationName}`}
                style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}
              >
                📞 Book Now: +91 70 9158 5737
              </a>
              <a
                href="https://wa.me/917091585737"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp VVIP Spa ${locationName}`}
                style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
              >
                💬 WhatsApp Us
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>100+</strong><span>Expert Therapists</span></div>
              <div className="hero-stat"><strong>4.9★</strong><span>Client Rating</span></div>
              <div className="hero-stat"><strong>24/7</strong><span>Available</span></div>
              <div className="hero-stat"><strong>150+</strong><span>Cities Covered</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Intro */}
      <section
        className="contact-instant"
        aria-label={`About VVIP Spa ${locationName}`}
        style={{ background: "#0f0e08", borderBottom: "1px solid rgba(201,168,76,0.2)" }}
      >
        <div className="container">
          <h2>Why {locationName}&apos;s Clients Choose VVIP Spa</h2>
          <p style={{ maxWidth: "780px", margin: "0 auto 1.5rem", lineHeight: 1.9, color: "#c8b98a" }}>
            Since 2018, <strong>VVIP Spa</strong> has delivered five-star massage and wellness experiences across India. Our {locationName} therapists are personally verified, professionally trained, and available around the clock for incall and outcall sessions. With a 4.9-star average across 500+ independent reviews and transparent pricing — no advance payment required — we set the benchmark other spa services measure themselves against.
          </p>
          <div className="contact-buttons">
            <a href="tel:+917091585737" className="btn btn-call" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
              📞 Book a Session Now
            </a>
          </div>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="escorts-section" aria-labelledby="therapists-heading" style={{ background: "#0a0a05" }}>
        <div className="container">
          <h2 id="therapists-heading">Meet Our Verified Therapists in {locationName}</h2>
          <p className="section-subtitle">
            Trained, certified, and personally verified female therapists available in {locationName} for incall &amp; outcall sessions — 24 hours a day.
          </p>
          <div className="escorts-grid">
            {spaTherapists.map((therapist) => (
              <div className="escort-card" key={therapist.slug}>
                <Image
                  src={therapist.image}
                  alt={`${therapist.name} — Spa Therapist ${locationName}, ${therapist.specialty}`}
                  width={350}
                  height={350}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="escort-info">
                  <h3>{therapist.name}</h3>
                  <div className="escort-details">
                    <span className="detail-item"><i>💆</i> {therapist.specialty}</span>
                    <span className="detail-item"><i>📍</i> {locationName}</span>
                  </div>
                  <div className="escort-stats">
                    <div className="stat"><strong>Age</strong><span>{therapist.age} yrs</span></div>
                    <div className="stat"><strong>Exp</strong><span>{therapist.experience}</span></div>
                  </div>
                  <Link href="/contact" className="btn-contact" aria-label={`Book ${therapist.name} — Spa in ${locationName}`}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Content Section */}
      <section className="content-section" aria-label={`About Spa Services in ${locationName}`} style={{ background: "#0f0e08" }}>
        <div className="container">
          <h2>VVIP Spa {locationName} — Premium Body Massage &amp; Wellness Services</h2>
          <div className="content-wrapper">
            <p>
              <strong>VVIP Spa {locationName}</strong> is part of India&apos;s most trusted premium massage and wellness network, operating since 2018 with an uncompromising standard for therapist quality, hygiene, and client discretion. Our {locationName} roster includes trained specialists in Swedish massage, Thai bodywork, deep tissue therapy, aromatherapy, hot stone, Nuru, body-to-body, Balinese, and more — every therapist personally verified and re-assessed every 90 days.
            </p>
            <h3>Trained &amp; Verified Therapists in {locationName}</h3>
            <p>
              Safety and quality begin with our therapists. Each specialist undergoes a rigorous multi-step vetting process: identity verification, qualification review, skills assessment, and real-time photo confirmation before their profile goes live. We maintain active quality monitoring throughout their time on our platform. Clients in {locationName} receive genuine, current therapist profiles — no fake photos, no bait-and-switch experiences.
            </p>
            <h3>Incall &amp; Outcall Spa in {locationName}</h3>
            <p>
              Choose from two service modes. Our incall option — at curated, hygiene-certified private studios in {locationName} — provides a serene, fully equipped environment designed for deep relaxation. Our outcall service brings the spa to you: hotel suite, private apartment, or premium resort. All equipment, premium oils, towels, and setup materials are brought by the therapist. We serve all major hospitality properties and private residences across {locationName}.
            </p>
            <h3>Our Signature Massage Treatments</h3>
            <p>
              Every treatment at VVIP Spa is delivered with premium-grade, hypoallergenic oils and sterilised equipment. From the gentle, flowing strokes of the Swedish full-body massage for stress relief, to the targeted pressure-point work of deep tissue therapy for chronic muscle tension; from the full-stretch Thai massage for flexibility to the sensory Nuru and body-to-body experiences — our menu is curated for discerning {locationName} clients seeking genuine, results-driven wellness.
            </p>
            <h3>Transparent Pricing — No Hidden Charges</h3>
            <p>
              All VVIP Spa rates are disclosed upfront with zero hidden fees. No advance payment is required for first-time bookings. Sessions start from ₹2,500 for a 60-minute Swedish massage, with couples packages, extended sessions, and multi-therapy packages available at premium rates. Call or WhatsApp <a href="tel:+917091585737" style={{ color: "var(--primary-color)" }}>+91 70 9158 5737</a> for a full rate card and personalised recommendation tailored to your needs in {locationName}.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-label={`FAQ — Spa & Massage in ${locationName}`} style={{ background: "#0a0a05" }}>
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions — Spa &amp; Massage in {locationName}</h2>
            <p>Everything you need to know before booking your massage session in {locationName}</p>
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
      <section
        style={{
          background: "linear-gradient(135deg,#0d0d0d 0,#1a1506 100%)",
          padding: "3rem 0",
          borderTop: "1px solid rgba(201,168,76,0.3)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2>Book Your Spa Session in {locationName} Today</h2>
          <p style={{ color: "#c8b98a", marginBottom: "2rem" }}>
            Same-day availability · 100+ verified therapists · Complete privacy guaranteed
          </p>
          <div className="contact-buttons">
            <a
              href="tel:+917091585737"
              className="btn btn-primary"
              style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}
            >
              📞 Call +91 70 9158 5737
            </a>
            <a
              href="https://wa.me/917091585737"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
