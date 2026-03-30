#!/usr/bin/env python3
"""Write the main Next.js app files."""
import os

BASE = "/Users/mydigital/Documents/vvip-escorts-nextjs/src/app"

# ─────────────────── layout.tsx ───────────────────
layout = r"""import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ClientScripts from "@/components/ClientScripts";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotzarina.in"),
  title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
  description:
    "Top Escorts in Mumbai - 100% Verified Call Girls Available 24/7. VIP Escorts, Russian Models, Independent Companions. Safe, Discreet Booking. Call Now +91 90389 76363",
  keywords:
    "escorts in mumbai, mumbai escorts, call girls in mumbai, mumbai call girls, vip escorts mumbai",
  authors: [{ name: "Zarina Escorts" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  other: { rating: "adult", "revisit-after": "1 days" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" type="image/webp" href="/images/favicon.webp" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <ClientScripts />
      </body>
    </html>
  );
}
"""

# ─────────────────── home page.tsx ───────────────────
home_page = r"""import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { escorts } from "@/data/escorts";

export const metadata: Metadata = {
  title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
  description:
    "Top Escorts in Mumbai - 100% Verified Call Girls Available 24/7. VIP Escorts, Russian Models, Independent Companions across Andheri, Bandra, Juhu, Powai. Safe, Discreet Booking. Call Now +91 90389 76363",
  alternates: { canonical: "https://hotzarina.in/" },
  openGraph: {
    type: "website",
    url: "https://hotzarina.in/",
    title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
    description:
      "Top Escorts in Mumbai - 100% Verified Call Girls Available 24/7. VIP Escorts, Russian Models, Independent Companions across Andheri, Bandra, Juhu, Powai.",
    images: [{ url: "https://hotzarina.in/images/hero-banner.webp" }],
  },
};

const faqItems = [
  {
    q: "How to book escorts in Mumbai?",
    a: "Booking escorts in Mumbai is simple! Call us at +91 90389 76363. Browse our verified profiles, select your preferred escort, confirm timing and location (incall/outcall), and make payment. We provide instant confirmation and 24/7 availability across all Mumbai locations.",
  },
  {
    q: "Are escorts in Mumbai safe and verified?",
    a: "Yes! All our Mumbai escorts are 100% verified with real photos, genuine profiles, and background checks. We ensure complete safety, discretion, and confidentiality. No fake profiles or bait-and-switch. Your privacy and security are our top priorities.",
  },
  {
    q: "What types of escorts are available in Mumbai?",
    a: "We offer all types: VIP escorts, independent escorts, Russian escorts, model escorts, college girls, celebrity escorts, air hostess, housewife escorts, and more. Regional options include North Indian, South Indian, Punjabi, Bengali, Marathi, Gujarati escorts.",
  },
  {
    q: "What are the prices for escorts in Mumbai?",
    a: "Our Mumbai escorts pricing ranges from budget-friendly to premium VIP options. Independent escorts start from affordable rates while VIP and celebrity escorts are premium. Prices vary based on escort type, duration, and services. No hidden charges.",
  },
  {
    q: "Which locations in Mumbai do you cover?",
    a: "We cover all Mumbai areas: Andheri, Bandra, Juhu, Colaba, Powai, Worli, Lower Parel, Mumbai Airport, Thane, Navi Mumbai, and more. Both incall and outcall services available 24/7.",
  },
  {
    q: "Is your escorts service discreet and confidential?",
    a: "Absolutely! We maintain 100% discretion and confidentiality. Your personal information, booking details, and communications are completely private and secure.",
  },
  {
    q: "Do you provide incall and outcall services?",
    a: "Yes! We offer both incall and outcall services. Our escorts can visit your hotel, home, or any private location (outcall), or you can visit their luxurious apartments (incall).",
  },
  {
    q: "Are the photos of escorts real?",
    a: "Yes, all photos are 100% genuine and verified. We maintain strict authenticity standards with no fake or stolen pictures. What you see is exactly what you get.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, online bank transfers, UPI payments (PhonePe, Google Pay, Paytm), and digital wallets. Payment is typically collected at the time of service.",
  },
  {
    q: "Can I book escorts for overnight or multiple days?",
    a: "Absolutely! We offer overnight bookings, weekend packages, and multi-day arrangements. Special discounted rates available for overnight and extended bookings.",
  },
  {
    q: "How quickly can you deliver escorts?",
    a: "We offer same-day booking with delivery within 30-60 minutes depending on your location. Advance booking (4-6 hours notice) ensures better selection.",
  },
  {
    q: "Do you offer couple escorts or group bookings?",
    a: "Yes! We provide couple escorts, group bookings for parties and events, and multiple escorts for bachelor parties. Contact us for customized group packages.",
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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zarina Escorts Mumbai",
  image: "https://hotzarina.in/images/logo.webp",
  "@id": "https://hotzarina.in",
  url: "https://hotzarina.in",
  telephone: "+919038976363",
  priceRange: "₹₹₹",
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
          background:
            "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
        }}
        aria-label="Premium Escorts in Mumbai"
      >
        <div className="container">
          <div className="hero-content">
            <h1>Escorts in Mumbai - Premium Call Girls Service Available 24/7</h1>
            <p>
              Welcome to Mumbai&apos;s #1 escorts service! Top-rated escorts in
              Mumbai with 100% verified profiles. VIP companions, independent
              escorts, Russian models, and college girls available across all
              Mumbai locations. Discreet, safe booking with instant confirmation.
            </p>
            <div className="hero-buttons">
              <a
                href="tel:+919038976363"
                className="btn btn-primary"
                aria-label="Call Zarina Escorts Mumbai"
              >
                📞 Call us at +91 90389 76363
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="contact-instant" aria-label="Escorts in Mumbai Introduction">
        <div className="container">
          <h2>Your Trusted Companion Service in Mumbai Since 2020</h2>
          <p>
            Looking for premium <strong>escorts in Mumbai</strong>? You&apos;ve
            found the right place! We are Mumbai&apos;s most trusted and authentic
            escort service, offering verified call girls, VIP companions, and
            independent escorts across all Mumbai locations. Our{" "}
            <strong>Mumbai escorts</strong> service has been serving discerning
            clients since 2020 with 100% genuine profiles, real photos, and
            professional service. Whether you&apos;re in South Mumbai, Western
            Suburbs, Central Mumbai, or Navi Mumbai — our{" "}
            <strong>call girls in Mumbai</strong> are available 24/7 for incall
            and outcall services.
          </p>
          <div className="contact-buttons">
            <a href="tel:+919038976363" className="btn btn-call" aria-label="Call Mumbai Escorts Now">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Escorts Grid */}
      <section className="escorts-section" aria-labelledby="escorts-heading">
        <div className="container">
          <h2 id="escorts-heading">
            Meet Our Verified Mumbai Companions - 100% Real Profiles &amp; Photos
          </h2>
          <p className="section-subtitle">
            Discover Mumbai&apos;s finest escorts service with verified call
            girls, VIP escorts, and independent companions. Our Mumbai escorts
            are available 24/7 for outcall and incall services across all major
            areas.
          </p>
          <div className="escorts-grid">
            {escorts.map((escort) => (
              <div className="escort-card" key={escort.slug}>
                <Image
                  src={escort.image}
                  alt={`${escort.name} Mumbai Escorts - Call Girl Age ${escort.age}`}
                  width={350}
                  height={350}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="escort-info">
                  <h3>{escort.name} - Mumbai Escorts</h3>
                  <div className="escort-details">
                    <span className="detail-item">
                      <i>👤</i> {escort.age} Years
                    </span>
                    <span className="detail-item">
                      <i>📍</i> Mumbai
                    </span>
                  </div>
                  <div className="escort-stats">
                    <div className="stat">
                      <strong>Height</strong>
                      <span>{escort.height}</span>
                    </div>
                    <div className="stat">
                      <strong>Figure</strong>
                      <span>{escort.figure}</span>
                    </div>
                    <div className="stat">
                      <strong>Size</strong>
                      <span>{escort.size}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-contact" aria-label={`Book ${escort.name}`}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-services-section" aria-label="Escort Services">
        <div className="container">
          <h2>Our Premium Escort Services in Mumbai</h2>
          <p className="section-subtitle">
            Choose from our wide range of escort services. All companions are
            verified, professional, and dedicated to your satisfaction.
          </p>
          <div className="escorts-grid">
            {serviceLinks.map((s) => (
              <div className="escort-card" key={s.href}>
                <div className="service-info" style={{ padding: "2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", margin: "1rem 0" }}>{s.icon}</div>
                  <h3>{s.label}</h3>
                  <Link href={s.href} className="btn-contact">
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="home-locations-section" aria-label="Mumbai Escort Locations">
        <div className="container">
          <h2>Escort Services Across All Mumbai Locations</h2>
          <p className="section-subtitle">
            We cover every corner of Mumbai with premium escort services.
          </p>
          <div className="escorts-grid">
            {locationLinks.map((loc) => (
              <div className="location-card" key={loc.href}>
                <div className="location-info">
                  <h3>{loc.label}</h3>
                  <Link href={loc.href} className="btn-location">
                    View Escorts
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions About Mumbai Escorts</h2>
            <p>Everything you need to know about our premium escorts service in Mumbai</p>
          </div>
          <div className="faq-grid">
            <div className="faq-column">
              {col1.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question">
                    <h3>{item.q}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
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
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"""

# Write files
files = {
    os.path.join(BASE, "layout.tsx"): layout,
    os.path.join(BASE, "page.tsx"): home_page,
}

for path, content in files.items():
    with open(path, "w") as f:
        f.write(content)
    print(f"Wrote {path}")

print("All done!")
