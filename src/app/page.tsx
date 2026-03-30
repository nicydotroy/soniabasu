import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { escorts } from "@/data/escorts";

export const metadata: Metadata = {
  title: "VVIP Escorts Mumbai | India's #1 Premium Companion Service 24/7",
  description:
    "VVIP Escorts Mumbai — India's most trusted premium companion service since 2018. 500+ verified profiles, VIP escorts, Russian models, independent companions across all Mumbai locations. 100% discreet & safe. Call +91 90389 76363",
  alternates: { canonical: "https://hotzarina.in/" },
  openGraph: {
    type: "website",
    url: "https://hotzarina.in/",
    title: "VVIP Escorts Mumbai | India's #1 Premium Companion Service 24/7",
    description:
      "India's most trusted premium companion service. 500+ verified profiles. VIP, Russian, Model & Independent escorts across all Mumbai locations. Available 24/7.",
    images: [{ url: "https://hotzarina.in/images/escorts-in-mumbai-banner.webp" }],
  },
};

const faqItems = [
  {
    q: "How do I book a VVIP escort in Mumbai?",
    a: "Booking is fast and simple. Call or WhatsApp us at +91 90389 76363, browse our verified profiles, choose your preferred companion, confirm your location (incall or outcall), and receive instant confirmation. Our booking team is available 24 hours a day, 7 days a week.",
  },
  {
    q: "Are all escort profiles verified and genuine?",
    a: "Yes — every profile on VVIP Escorts undergoes a strict 3-step verification: photo ID check, real-time photo confirmation, and a background review. We guarantee no fake profiles, no bait-and-switch, and no stolen pictures. What you see is exactly who you meet.",
  },
  {
    q: "What types of companions does VVIP Escorts offer?",
    a: "We offer VIP & high-profile escorts, Russian and European models, independent escorts, fashion model escorts, college companions, celebrity look-alikes, air hostess companions, housewife escorts, and regional companions including Punjabi, Bengali, South Indian, Gujarati, and Marathi profiles.",
  },
  {
    q: "What areas of Mumbai do you serve?",
    a: "We cover all of Mumbai — Andheri, Bandra, Juhu, Colaba, Powai, Worli, Dadar, Lower Parel, Malad, Kandivali, Borivali, Santacruz, Ghatkopar, Thane, Navi Mumbai, and every major neighbourhood. Both incall and outcall services available across all zones 24/7.",
  },
  {
    q: "Is the service fully discreet and confidential?",
    a: "Absolute discretion is our foundation. Your booking details, personal information, and communication history are never shared or stored beyond the minimum required. We use encrypted communication channels and a zero-disclosure policy for all client interactions.",
  },
  {
    q: "What are the pricing options?",
    a: "Our pricing is transparent — no hidden charges. Rates vary by companion type, duration, and service. Budget-friendly options are available alongside premium VIP and luxury overnight packages. Contact us directly for a personalised quote.",
  },
  {
    q: "Do you offer both incall and outcall services?",
    a: "Yes. Our companions are available for incall (visit their private, curated location) and outcall (your hotel, residence, or any private venue). We serve 5-star hotels, business resorts, private apartments, and event venues across all Mumbai areas.",
  },
  {
    q: "Are photos on your website 100% real?",
    a: "Every image is verified in real time. We conduct regular photo-verification sessions to ensure authenticity. Our strict no-fake-photo policy protects both clients and companions, and is enforced before any profile goes live.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, UPI (PhonePe, Google Pay, Paytm), bank transfer, and digital wallets. Payment is collected directly at the time of service — no advance required for first-time bookings, ensuring your complete peace of mind.",
  },
  {
    q: "Can I book for overnight or multi-day arrangements?",
    a: "Absolutely. We offer overnight packages, weekend getaways, and multi-day arrangements. Extended bookings include priority companion selection, complimentary scheduling adjustments, and preferred rate packages.",
  },
  {
    q: "How quickly can a companion be arranged?",
    a: "In most Mumbai zones, same-day service is available within 45-90 minutes of booking confirmation. Advance booking of 4-6 hours guarantees your preferred companion and optimal scheduling.",
  },
  {
    q: "Do you serve clients outside Mumbai?",
    a: "Yes. VVIP Escorts operates across India — Delhi, Bangalore, Hyderabad, Pune, Goa, Chandigarh, and 150+ locations nationwide. Intercity and outstation travel arrangements are available for premium bookings.",
  },
];

const locationLinks = [
  { href: "/escorts-in-andheri", label: "Andheri" },
  { href: "/escorts-in-bandra", label: "Bandra" },
  { href: "/escorts-in-juhu", label: "Juhu" },
  { href: "/escorts-in-colaba", label: "Colaba" },
  { href: "/escorts-in-powai", label: "Powai" },
  { href: "/escorts-in-worli", label: "Worli" },
  { href: "/escorts-in-lower-parel", label: "Lower Parel" },
  { href: "/escorts-in-thane", label: "Thane" },
  { href: "/escorts-in-navi-mumbai", label: "Navi Mumbai" },
  { href: "/escorts-in-dadar", label: "Dadar" },
  { href: "/escorts-in-malad", label: "Malad" },
  { href: "/escorts-in-kandivali", label: "Kandivali" },
];

const serviceLinks = [
  { href: "/vip-escorts", label: "VIP Escorts", icon: "👑" },
  { href: "/russian-escorts", label: "Russian Escorts", icon: "🌟" },
  { href: "/independent-escorts", label: "Independent Escorts", icon: "💎" },
  { href: "/model-escorts", label: "Model Escorts", icon: "👗" },
  { href: "/college-girls-escorts", label: "College Girls", icon: "🎓" },
  { href: "/celebrity-escorts", label: "Celebrity Escorts", icon: "⭐" },
  { href: "/air-hostess-escorts", label: "Air Hostess", icon: "✈️" },
  { href: "/high-profile-escorts", label: "High Profile", icon: "💼" },
];

const trustPoints = [
  { icon: "✅", title: "100% Verified Profiles", desc: "Every companion undergoes real-time photo ID and background verification before listing." },
  { icon: "🔒", title: "Complete Discretion", desc: "Zero-disclosure policy. Your bookings and conversations remain strictly private and encrypted." },
  { icon: "⭐", title: "4.9★ Average Rating", desc: "Consistently rated among India's top companion services by 500+ satisfied clients." },
  { icon: "⏱️", title: "24/7 Availability", desc: "Our booking team and companions are available around the clock, every day of the year." },
  { icon: "📍", title: "All Mumbai Zones", desc: "Coverage across 50+ Mumbai localities, Navi Mumbai, Thane, and 150+ cities nationwide." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. Clear rates disclosed upfront. No advance payment required for first-time clients." },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VVIP Escorts Mumbai",
  image: "https://hotzarina.in/images/logo.png",
  "@id": "https://hotzarina.in",
  url: "https://hotzarina.in",
  telephone: "+919038976363",
  priceRange: "₹₹₹",
  description: "India's premier luxury companion service offering verified VIP escorts, Russian models, and independent companions across Mumbai and 150+ cities.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "583",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function HomePage() {
  const half = Math.ceil(faqItems.length / 2);
  const col1 = faqItems.slice(0, half);
  const col2 = faqItems.slice(half);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(26,21,6,0.82) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="VVIP Escorts Mumbai — India's #1 Premium Companion Service"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ India&apos;s Leading Luxury Companion Service
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.2, marginBottom: "1.2rem", fontWeight: 700 }}>
              VVIP Escorts Mumbai<br />
              <span style={{ color: "var(--primary-color)" }}>Premium. Verified. Discreet.</span>
            </h1>
            <p style={{ fontSize: "1.15rem", maxWidth: "620px", margin: "0 auto 2rem", lineHeight: 1.8, color: "#e0d4b0" }}>
              Mumbai&apos;s most trusted companion service since 2018. Over 500 verified profiles — VIP escorts, Russian models, independent companions — available 24/7 across all Mumbai locations.
            </p>
            <div className="hero-buttons">
              <a
                href="tel:+919038976363"
                className="btn btn-primary"
                aria-label="Call VVIP Escorts Mumbai"
                style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}
              >
                📞 Call Now: +91 90389 76363
              </a>
              <a
                href="https://wa.me/919038976363"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp VVIP Escorts"
                style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
              >
                💬 WhatsApp Us
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>500+</strong>
                <span>Verified Profiles</span>
              </div>
              <div className="hero-stat">
                <strong>4.9★</strong>
                <span>Client Rating</span>
              </div>
              <div className="hero-stat">
                <strong>24/7</strong>
                <span>Available</span>
              </div>
              <div className="hero-stat">
                <strong>150+</strong>
                <span>Cities Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust Intro */}
      <section className="contact-instant" aria-label="About VVIP Escorts Mumbai" style={{ background: "#0f0e08", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="container">
          <h2>Why Mumbai&apos;s Discerning Clients Choose VVIP Escorts</h2>
          <p style={{ maxWidth: "780px", margin: "0 auto 2rem", lineHeight: 1.9, color: "#c8b98a" }}>
            Since 2018, <strong style={{ color: "var(--primary-color)" }}>VVIP Escorts Mumbai</strong> has redefined the premium companion experience in India. We combine rigorous verification standards, absolute discretion, and a curated selection of companions to deliver an unmatched, luxury-class service. Every profile is personally vetted. Every booking is handled with total confidentiality. From a solitary evening in South Mumbai to a weekend getaway in Goa — our companions adapt to your lifestyle and your expectations.
          </p>
          <div className="contact-buttons">
            <a href="tel:+919038976363" className="btn btn-call" aria-label="Call VVIP Escorts Mumbai Now" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
              📞 Book Now — Call or WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Companions Grid */}
      <section className="escorts-section" aria-labelledby="escorts-heading" style={{ background: "#0a0a05" }}>
        <div className="container">
          <h2 id="escorts-heading">Meet Our Verified Mumbai Companions</h2>
          <p className="section-subtitle">
            Every profile is genuine, every photo is current, and every companion is personally vetted. Real women. Real service. No surprises.
          </p>
          <div className="escorts-grid">
            {escorts.map((escort) => (
              <div className="escort-card" key={escort.slug}>
                <Image
                  src={escort.image}
                  alt={`${escort.name} — VVIP Escort Mumbai, Age ${escort.age}`}
                  width={350}
                  height={350}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="escort-info">
                  <h3>{escort.name}</h3>
                  <div className="escort-details">
                    <span className="detail-item"><i>👤</i> {escort.age} yrs</span>
                    <span className="detail-item"><i>📍</i> Mumbai</span>
                  </div>
                  <div className="escort-stats">
                    <div className="stat"><strong>Height</strong><span>{escort.height}</span></div>
                    <div className="stat"><strong>Figure</strong><span>{escort.figure}</span></div>
                    <div className="stat"><strong>Size</strong><span>{escort.size}</span></div>
                  </div>
                  <Link href="/contact" className="btn-contact" aria-label={`Book ${escort.name} — VVIP Escorts Mumbai`}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section" aria-label="Why Choose VVIP Escorts" style={{ background: "#0f0e08" }}>
        <div className="container">
          <h2>The VVIP Difference — What Sets Us Apart</h2>
          <div className="about-grid">
            {trustPoints.map((point, i) => (
              <div className="about-item" key={i}>
                <h3>{point.icon} {point.title}</h3>
                <p>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="home-services-section" aria-label="Escort Service Categories" style={{ background: "#0a0a05" }}>
        <div className="container">
          <h2>Our Premium Escort Services in Mumbai</h2>
          <p className="section-subtitle">
            From VIP and high-profile to regional and niche companions — every category is verified, professional, and curated for your satisfaction.
          </p>
          <div className="escorts-grid">
            {serviceLinks.map((s) => (
              <div className="escort-card" key={s.href} style={{ textAlign: "center" }}>
                <div className="escort-info" style={{ padding: "2.5rem 1.5rem" }}>
                  <div style={{ fontSize: "3rem", margin: "0.5rem 0 1rem" }}>{s.icon}</div>
                  <h3 style={{ marginBottom: "1rem" }}>{s.label}</h3>
                  <Link href={s.href} className="btn-contact" aria-label={`View ${s.label} in Mumbai`}>Explore</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="home-locations-section" aria-label="Mumbai Escort Locations" style={{ background: "#0f0e08" }}>
        <div className="container">
          <h2>Available Across All Mumbai Locations</h2>
          <p className="section-subtitle">
            Same-day service in every major Mumbai neighbourhood. Discreet, prompt, and professional wherever you are.
          </p>
          <div className="escorts-grid">
            {locationLinks.map((loc) => (
              <div className="location-card" key={loc.href}>
                <div className="location-info">
                  <h3>{loc.label}</h3>
                  <Link href={loc.href} className="btn-location" aria-label={`Escorts in ${loc.label}`}>View Escorts</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="content-section" aria-label="About VVIP Escorts Mumbai" style={{ background: "#0a0a05" }}>
        <div className="container">
          <h2>VVIP Escorts Mumbai — India&apos;s Premier Companion Service</h2>
          <div className="content-wrapper">
            <p>
              <strong>VVIP Escorts Mumbai</strong> is India&apos;s most established premium companion service, operating since 2018 with an uncompromising commitment to quality, safety, and discretion. Our network includes over 500 active, verified companions spanning VIP escorts, Russian and European models, independent professionals, fashion models, and regional companions across all Indian profiles.
            </p>
            <h3>Experience You Can Trust</h3>
            <p>
              With over six years of experience serving Mumbai&apos;s most discerning clientele — corporate executives, visiting dignitaries, business travellers, and private individuals — we understand what premium service truly means. Every interaction from first contact to post-booking follow-up is handled with the care, professionalism, and discretion that defines the VVIP standard.
            </p>
            <h3>Verified, Safe &amp; Authentic</h3>
            <p>
              Safety is non-negotiable. Our multi-step verification system ensures every companion listed on our platform has undergone photo ID authentication, real-time image confirmation, and personal screening. Clients receive genuine profiles with no fake or recycled photos. Our dedicated safety team conducts regular re-verification to maintain the highest standards across all listings.
            </p>
            <h3>Serving All of Mumbai &amp; Beyond</h3>
            <p>
              Whether you are in Andheri, Bandra, Juhu, Colaba, Powai, Lower Parel, or any neighbourhood in Greater Mumbai — our <strong>Mumbai escorts</strong> service reaches you within 45–90 minutes. We also serve Navi Mumbai, Thane, and all major satellite cities. For clients travelling across India, our companion network spans Delhi, Bangalore, Hyderabad, Goa, Pune, Chandigarh, and 150+ locations nationally.
            </p>
            <h3>Luxury Incall &amp; Outcall Services</h3>
            <p>
              Our companions are available for both <strong>incall</strong> — at their private, curated residences — and <strong>outcall</strong> — visiting your hotel suite, private residence, or event venue. We regularly serve clients at Mumbai&apos;s finest five-star hotels including The Taj, Oberoi, Four Seasons, Trident, and JW Marriott, ensuring a seamless premium experience from arrival to departure.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-label="Frequently Asked Questions" style={{ background: "#0f0e08" }}>
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before booking your VVIP companion in Mumbai</p>
          </div>
          <div className="faq-grid">
            <div className="faq-column">
              {col1.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question">
                    <h3>{item.q}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
            <div className="faq-column">
              {col2.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question">
                    <h3>{item.q}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-cta">
            <h3>Still Have Questions?</h3>
            <p>Our team is available 24/7. Reach us instantly via call or WhatsApp.</p>
            <div className="faq-cta-buttons">
              <a href="tel:+919038976363" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>📞 Call Now</a>
              <a href="https://wa.me/919038976363" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
