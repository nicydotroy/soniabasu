import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escort Services Mumbai | VIP, Russian, Model, Independent | Zarina",
  description:
    "Explore premium escort services in Mumbai: VIP Escorts, Russian Models, Independent Escorts, College Girls, Celebrity Escorts, Air Hostess & more. 24/7 available.",
  alternates: { canonical: "https://hotzarina.in/services" },
};

const services = [
  {
    icon: "👑",
    title: "VIP Escorts",
    href: "/vip-escorts",
    desc: "Premium VIP escorts and high-profile companions in Mumbai. Exclusive, elegant, and sophisticated companionship for discerning clients.",
    features: ["High-profile companions", "Luxury hotel visits", "Corporate events", "Overnight available"],
  },
  {
    icon: "🌟",
    title: "Russian Escorts",
    href: "/russian-escorts",
    desc: "Beautiful Russian escorts and European models in Mumbai. Exotic beauty, blonde companions, and European elegance.",
    features: ["Authentic Russian beauty", "European models", "Multilingual", "Incall & outcall"],
  },
  {
    icon: "💎",
    title: "Independent Escorts",
    href: "/independent-escorts",
    desc: "Independent escorts and verified call girls in Mumbai. Self-managed, professional, and discreet companions.",
    features: ["Verified profiles", "Self-managed", "Flexible scheduling", "Real photos guaranteed"],
  },
  {
    icon: "👗",
    title: "Model Escorts",
    href: "/model-escorts",
    desc: "Professional model escorts and fashion models in Mumbai. Stunning looks, professional attitude.",
    features: ["Fashion models", "Professional attitude", "Photo shoots", "Event companionship"],
  },
  {
    icon: "🎓",
    title: "College Girls",
    href: "/college-girls-escorts",
    desc: "Young college girl escorts and companions in Mumbai. Fresh, energetic, and fun companions.",
    features: ["18-24 years", "Energetic & fun", "Student companions", "Affordable rates"],
  },
  {
    icon: "⭐",
    title: "Celebrity Escorts",
    href: "/celebrity-escorts",
    desc: "Celebrity escorts and Bollywood actress companions in Mumbai. Glamorous and high-profile companionship.",
    features: ["Bollywood look-alikes", "Glamorous companions", "Red carpet style", "Premium pricing"],
  },
  {
    icon: "✈️",
    title: "Air Hostess Escorts",
    href: "/air-hostess-escorts",
    desc: "Air hostess escorts and flight attendant companions in Mumbai. Professional, polished, and elegant.",
    features: ["Professional demeanor", "Travel-ready", "Uniform available", "Multilingual"],
  },
  {
    icon: "🏡",
    title: "Housewife Escorts",
    href: "/house-wife-escorts",
    desc: "Mature housewife escorts and unsatisfied bhabhi companions in Mumbai.",
    features: ["Mature companions", "Experienced", "Warm & caring", "Flexible timing"],
  },
];

const bookingSteps = [
  { num: "1", title: "Browse Profiles", desc: "View our verified escort profiles and choose your preferred companion." },
  { num: "2", title: "Contact Us", desc: "Call +91 90389 76363 or WhatsApp to confirm availability." },
  { num: "3", title: "Confirm Booking", desc: "Share your location, timing, and service preference." },
  { num: "4", title: "Enjoy Service", desc: "Your companion arrives and you enjoy a premium experience." },
];

export default function ServicesPage() {
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
            <h1>Premium Escort Services in Mumbai</h1>
            <p>Explore our wide range of premium escort services. All companions are verified, professional, and dedicated to your satisfaction.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-intro">
            <h2>Our Escort Services</h2>
            <p>Choose from our diverse range of premium escort services in Mumbai. All companions are 100% verified with real photos and professional service.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.href}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <Link href={s.href} className="btn-contact">View {s.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-process">
        <div className="container">
          <h2>How to Book Our Escorts</h2>
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
            <h3>Ready to Book? Contact Us Now!</h3>
            <div className="contact-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call Now</a>
              <a href="https://wa.me/919038976363" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
