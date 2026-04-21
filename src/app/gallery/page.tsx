import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sonia Basu Gallery Mumbai | Verified Companion Profiles",
  description:
    "Browse Sonia Basu Mumbai's verified companion gallery. 500+ genuine profiles across VIP, Russian, Model, Independent and specialist categories. All photos real-time verified. No fake profiles.",
  alternates: { canonical: "https://soniabasu.vercel.app/gallery" },
};

const categories = [
  { icon: "👑", title: "VIP & High-Profile", desc: "Sophisticated, educated, and immaculately presented companions for elite clientele.", href: "/vip-escorts" },
  { icon: "🌟", title: "Russian & European Models", desc: "Authentic European beauty with multilingual communication and international etiquette.", href: "/russian-escorts" },
  { icon: "💎", title: "Independent Escorts", desc: "Self-managed, genuine companions with direct communication and personal authenticity.", href: "/independent-escorts" },
  { icon: "👗", title: "Fashion & Model Escorts", desc: "Runway-trained, professionally styled companions for events and private engagements.", href: "/model-escorts" },
  { icon: "🎓", title: "College Companions", desc: "Young, vibrant, and open-minded companions aged 18–24 across Mumbai.", href: "/college-girls-escorts" },
  { icon: "⭐", title: "Celebrity & Glamour", desc: "Bollywood-inspired glamour companions for premium and extraordinary experiences.", href: "/celebrity-escorts" },
];

export default function GalleryPage() {
  return (
    <>
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
