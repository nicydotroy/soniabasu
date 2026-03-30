import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VVIP Escort Services Mumbai | VIP, Russian, Model, Independent 24/7",
  description:
    "Explore VVIP Escorts Mumbai's premium service menu: VIP high-profile escorts, Russian & European models, independent companions, college girls, air hostess, housewife escorts and more. All verified. Available 24/7.",
  alternates: { canonical: "https://vvip-escorts.com/services" },
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

export default function ServicesPage() {
  return (
    <>
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
      <section className="booking-process" style={{ background: "#0f0e08" }} aria-label="How to Book VVIP Escorts">
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
              <strong>VVIP Escorts Mumbai</strong> operates India&apos;s most comprehensive premium companion service platform, connecting discerning clients with verified, professional companions across Mumbai and 150+ cities nationwide. Our service menu is designed to cater to every preference — from VIP high-profile encounters to warm, mature companionship — with no compromise on safety, authenticity, or discretion.
            </p>
            <h3>Why Trust VVIP Escorts?</h3>
            <p>
              Our reputation is built on six years of zero-compromise service delivery. Every companion on our platform is verified through a three-stage process: government-issued ID authentication, real-time photo confirmation, and a personal interview. We re-verify all active profiles every 90 days to guarantee ongoing accuracy. This systematic approach has earned us an average client rating of 4.9 stars across 583 independent reviews.
            </p>
            <h3>Incall and Outcall Services Across Mumbai</h3>
            <p>
              Whether you prefer the privacy of an incall at a companion&apos;s curated personal residence, or the convenience of an outcall visit to your hotel, home, or event venue — VVIP Escorts accommodates your preference seamlessly. We serve all major Mumbai zones and surrounding areas, with same-day availability in most locations within 45–90 minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
