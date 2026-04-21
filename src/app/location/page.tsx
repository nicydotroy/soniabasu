import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sonia Basu Locations Mumbai | Navi Mumbai, Thane & Pan-India Service",
  description:
    "Sonia Basu serves all Mumbai zones, Navi Mumbai, Thane and 150+ cities across India. Same-day incall & outcall available. Call +91 70 9158 5737 for your area.",
  alternates: { canonical: "https://soniabasu.com/location" },
};

const mumbaiAreas = [
  { name: "South Mumbai", href: "/escorts-in-south-mumbai", desc: "Colaba, Fort, Nariman Point, Marine Lines, Cuffe Parade" },
  { name: "BKC / Bandra", href: "/escorts-in-bandra", desc: "Bandra West, BKC, Khar, Santacruz — premium zone coverage" },
  { name: "Andheri", href: "/escorts-in-andheri", desc: "Andheri East & West, Jogeshwari, MIDC, SEEPZ" },
  { name: "Juhu", href: "/escorts-in-juhu", desc: "Juhu Beach, Vile Parle, Chakala — 5-star hotel coverage" },
  { name: "Powai / Hiranandani", href: "/escorts-in-powai", desc: "Powai, Chandivali, Saki Vihar — corporate enclave coverage" },
  { name: "Ghatkopar / Thane Road", href: "/escorts-in-ghatkopar", desc: "Ghatkopar, Mulund, Bhandup, LBS Marg" },
];

const outsideMumbai = [
  { name: "Navi Mumbai", href: "/escorts-in-navi-mumbai", desc: "Vashi, Kharghar, Belapur, Nerul, Airoli, Panvel" },
  { name: "Thane", href: "/escorts-in-thane", desc: "Thane City, Kopri, Majiwada, Ghodbunder Road" },
  { name: "Pune", href: "/escorts-in-pune", desc: "Koregaon Park, Kalyani Nagar, Hinjewadi, Camp" },
  { name: "Goa", href: "/escorts-in-goa", desc: "North Goa, Baga, Calangute, Panaji, South Goa" },
  { name: "Delhi", href: "/escorts-in-delhi", desc: "Connaught Place, Gurgaon, Noida, Greater Noida" },
  { name: "Bangalore", href: "/escorts-in-bangalore", desc: "Indiranagar, Koramangala, Whitefield, MG Road" },
];

export default function LocationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(26,21,6,0.82) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="Sonia Basu Mumbai Locations"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ 150+ Cities Across India
            </p>
            <h1>Sonia Basu — Mumbai & Pan-India Coverage</h1>
            <p style={{ color: "#e0d4b0", maxWidth: "560px", margin: "0 auto 1.5rem" }}>
              Serving all Mumbai zones, Navi Mumbai, Thane, and 150+ cities across India. Incall and outcall available same day.
            </p>
            <div className="hero-buttons">
              <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
                📞 Check Availability: +91 70 9158 5737
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai Zones */}
      <section className="location-section" style={{ background: "#0a0a05" }} aria-label="Mumbai Location Coverage">
        <div className="container">
          <h2>Mumbai Area Coverage</h2>
          <div className="locations-grid">
            {mumbaiAreas.map((loc) => (
              <div className="location-card" key={loc.href}>
                <h3><Link href={loc.href}>{loc.name}</Link></h3>
                <p>{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside Mumbai */}
      <section className="location-section" style={{ background: "#0f0e08", borderTop: "1px solid rgba(201,168,76,0.15)" }} aria-label="Pan-India Coverage">
        <div className="container">
          <h2>Navi Mumbai, Thane &amp; Pan-India</h2>
          <div className="locations-grid">
            {outsideMumbai.map((loc) => (
              <div className="location-card" key={loc.href}>
                <h3><Link href={loc.href}>{loc.name}</Link></h3>
                <p>{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#0d0d0d 0,#1a1506 100%)", padding: "3rem 0", borderTop: "1px solid rgba(201,168,76,0.3)", textAlign: "center" }}>
        <div className="container">
          <h2>Not Seeing Your City?</h2>
          <p style={{ color: "#c8b98a", marginBottom: "2rem" }}>We travel. Call our booking team and we&apos;ll confirm companion availability in your location within minutes.</p>
          <div className="contact-buttons">
            <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>📞 Call +91 70 9158 5737</a>
            <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
