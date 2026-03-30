import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Zarina Escorts Mumbai - Real Photos of Call Girls",
  description:
    "View our gallery of premium Mumbai escorts. 100% genuine and verified photos of our call girls. Real profiles, real beauty. Browse now.",
  alternates: { canonical: "https://hotzarina.in/gallery" },
};

const categories = [
  { icon: "👑", title: "VIP Escorts", desc: "High-profile VIP companions", href: "/vip-escorts" },
  { icon: "🌟", title: "Russian Models", desc: "Exotic European beauties", href: "/russian-escorts" },
  { icon: "💎", title: "Independent Escorts", desc: "Self-managed professionals", href: "/independent-escorts" },
  { icon: "👗", title: "Fashion Models", desc: "Runway-ready companions", href: "/model-escorts" },
  { icon: "🎓", title: "College Girls", desc: "Young & energetic", href: "/college-girls-escorts" },
  { icon: "⭐", title: "Celebrity Escorts", desc: "Glamorous companions", href: "/celebrity-escorts" },
];

export default function GalleryPage() {
  return (
    <>
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1>Gallery - Premium Mumbai Escorts Collection</h1>
            <p>Browse our verified escort profiles. All photos are 100% genuine and verified. Real beauty, real service.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-intro">
            <h2>Our Verified Escort Categories</h2>
            <p>Authentic photos of Mumbai&apos;s finest escorts. No fake profiles, no stolen pictures — guaranteed.</p>
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
                  <Link href={cat.href} className="gallery-btn">View Gallery</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-note">
            <h3>🔒 Privacy &amp; Discretion Guaranteed</h3>
            <p>
              All escort photos shared only upon direct request for privacy protection.
              We maintain 100% confidentiality for both our escorts and clients.
            </p>
            <div className="contact-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Request Photos - Call Now</a>
              <a href="https://wa.me/919038976363" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp for Photos</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
