#!/usr/bin/env python3
"""Write the dynamic [slug] page and static pages."""
import os

BASE = "/Users/mydigital/Documents/vvip-escorts-nextjs/src/app"

# ─────────────────── [slug]/page.tsx ───────────────────
slug_page = r"""import type { Metadata } from "next";
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
    alternates: { canonical: `https://hotzarina.in/${slug}` },
    openGraph: {
      type: "website",
      url: `https://hotzarina.in/${slug}`,
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
    q: (loc: string) => `How to book escorts in ${loc}?`,
    a: (loc: string) =>
      `Booking escorts in ${loc} is simple! Call us at +91 90389 76363. Browse our verified profiles, select your preferred escort, confirm timing and location (incall/outcall), and make payment. We provide instant confirmation and 24/7 availability.`,
  },
  {
    q: (loc: string) => `Are escorts in ${loc} safe and verified?`,
    a: (_: string) =>
      `Yes! All our escorts are 100% verified with real photos, genuine profiles, and background checks. We ensure complete safety, discretion, and confidentiality.`,
  },
  {
    q: (loc: string) => `What types of escorts are available in ${loc}?`,
    a: (_: string) =>
      `We offer all types: VIP escorts, independent escorts, Russian escorts, model escorts, college girls, celebrity escorts, air hostess, housewife escorts, and more.`,
  },
  {
    q: (loc: string) => `What are the prices for escorts in ${loc}?`,
    a: (loc: string) =>
      `Our ${loc} escorts pricing ranges from budget-friendly to premium VIP options. Contact us for detailed pricing and special packages. No hidden charges.`,
  },
  {
    q: (loc: string) => `Which locations in ${loc} do you cover?`,
    a: (loc: string) =>
      `We cover all ${loc} areas with both incall and outcall services available 24/7. Same-day booking with express service for urgent requests.`,
  },
  {
    q: (_: string) => `Is your escorts service discreet and confidential?`,
    a: (_: string) =>
      `Absolutely! We maintain 100% discretion and confidentiality. Your personal information, booking details, and communications are completely private and secure.`,
  },
  {
    q: (_: string) => `Do you provide incall and outcall services?`,
    a: (_: string) =>
      `Yes! We offer both incall and outcall services. Our escorts can visit your hotel, home, or any private location (outcall), or you can visit their luxurious apartments (incall).`,
  },
  {
    q: (_: string) => `Are the photos of escorts real?`,
    a: (_: string) =>
      `Yes, all photos are 100% genuine and verified. What you see is exactly what you get. If any escort doesn&apos;t match their profile photos, we offer free replacement or full refund.`,
  },
  {
    q: (_: string) => `What payment methods do you accept?`,
    a: (_: string) =>
      `We accept cash, online bank transfers, UPI payments (PhonePe, Google Pay, Paytm), and digital wallets. Payment is typically collected at the time of service.`,
  },
  {
    q: (_: string) => `Can I book escorts for overnight or multiple days?`,
    a: (_: string) =>
      `Absolutely! We offer overnight bookings, weekend packages, and multi-day arrangements. Special discounted rates available for overnight and extended bookings.`,
  },
  {
    q: (_: string) => `How quickly can you deliver escorts?`,
    a: (_: string) =>
      `We offer same-day booking with delivery within 30-60 minutes depending on your location. Advance booking ensures better selection and guaranteed availability.`,
  },
  {
    q: (_: string) => `Do you offer couple escorts or group bookings?`,
    a: (_: string) =>
      `Yes! We provide couple escorts, group bookings for parties and events. Contact us with your requirements for customized group packages and special rates.`,
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
    name: page.schemaName ?? `Zarina Escorts ${locationName}`,
    image: "https://hotzarina.in/images/logo.webp",
    "@id": `https://hotzarina.in/${slug}`,
    url: `https://hotzarina.in/${slug}`,
    telephone: "+919038976363",
    priceRange: "₹₹₹",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in/" },
      {
        "@type": "ListItem",
        position: 2,
        name: page.heroTitle,
        item: `https://hotzarina.in/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
        }}
        aria-label={`Premium Escorts in ${locationName}`}
      >
        <div className="container">
          <div className="hero-content">
            <h1>{page.heroTitle}</h1>
            <p>{page.heroParagraph}</p>
            <div className="hero-buttons">
              <a
                href="tel:+919038976363"
                className="btn btn-primary"
                aria-label={`Call Zarina Escorts ${locationName}`}
              >
                📞 Call us at +91 90389 76363
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section
        className="intro-section"
        style={{
          background: "linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%)",
          padding: "40px 0",
        }}
      >
        <div className="container">
          <div
            className="intro-content"
            style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
          >
            <p
              style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}
              dangerouslySetInnerHTML={{ __html: page.intro }}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-instant" aria-label={`Contact Escorts in ${locationName}`}>
        <div className="container">
          <h2>Book {locationName} Escorts - Instant Contact 24/7</h2>
          <p>
            Our {locationName} call girls and VIP escorts are available 24/7 for
            incall and outcall services. Call now for verified profiles and
            discreet booking.
          </p>
          <div className="contact-buttons">
            <a
              href="tel:+919038976363"
              className="btn btn-call"
              aria-label={`Call ${locationName} Escorts Now`}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Escorts Grid */}
      <section className="escorts-section" aria-labelledby="escorts-heading">
        <div className="container">
          <h2 id="escorts-heading">{page.h2Escorts}</h2>
          <p className="section-subtitle">{page.subtitleEscorts}</p>
          <div className="escorts-grid">
            {escorts.map((escort) => (
              <div className="escort-card" key={escort.slug}>
                <Image
                  src={escort.image}
                  alt={`${escort.name} ${locationName} Escorts - Call Girl Age ${escort.age}`}
                  width={350}
                  height={350}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="escort-info">
                  <h3>
                    {escort.name} - {locationName} Escorts
                  </h3>
                  <div className="escort-details">
                    <span className="detail-item">
                      <i>👤</i> {escort.age} Years
                    </span>
                    <span className="detail-item">
                      <i>📍</i> {locationName}
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
                  <Link
                    href="/contact"
                    className="btn-contact"
                    aria-label={`Book ${escort.name} ${locationName} Escort`}
                  >
                    Book Now
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
            <h2>Frequently Asked Questions About {locationName} Escorts</h2>
            <p>
              Everything you need to know about our premium escorts service in{" "}
              {locationName}
            </p>
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
    </>
  );
}
"""

# ─────────────────── contact/page.tsx ───────────────────
contact_page = r"""import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Zarina Escorts Mumbai 24/7 | Call Now",
  description:
    "Contact Zarina Escorts Mumbai for premium call girls service available 24/7. Call +91 90389 76363 or WhatsApp us for instant booking.",
  alternates: { canonical: "https://hotzarina.in/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
        }}
        aria-label="Contact Us"
      >
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us - Get in Touch 24/7</h1>
            <p>
              Have questions or need assistance? We&apos;re here to help you
              anytime. Reach out to us via phone or fill out our contact form for
              a quick response.
            </p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">
                📞 Call us at +91 90389 76363
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Form */}
            <div className="contact-form-side">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we&apos;ll get back to you within 15 minutes</p>
              </div>
              <form className="contact-form-modern" id="contactForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name"><span className="icon">👤</span> Your Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your full name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone"><span className="icon">📱</span> Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email"><span className="icon">📧</span> Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city"><span className="icon">📍</span> City *</label>
                    <select id="city" name="city" required>
                      <option value="">Select your city</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="chennai">Chennai</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="pune">Pune</option>
                      <option value="thane">Thane</option>
                      <option value="navi-mumbai">Navi Mumbai</option>
                      <option value="other">Other City</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service"><span className="icon">⭐</span> Service Type</label>
                    <select id="service" name="service">
                      <option value="">Select service type</option>
                      <option value="vip">VIP Escorts</option>
                      <option value="independent">Independent Escorts</option>
                      <option value="russian">Russian Escorts</option>
                      <option value="model">Model Escorts</option>
                      <option value="college">College Girls</option>
                      <option value="celebrity">Celebrity Escorts</option>
                      <option value="event">Event Companionship</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="message"><span className="icon">💬</span> Your Message *</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Tell us about your requirements..." />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      I agree to the <a href="#">privacy policy</a> and <a href="#">terms of service</a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-submit-modern">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">✉️</span>
                </button>
                <div className="form-footer">
                  <p><span className="icon">🔒</span> Your information is 100% secure and confidential</p>
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="contact-info-side">
              <div className="contact-info-header">
                <h2>Get in Touch</h2>
                <p>We&apos;re available 24/7 to assist you</p>
              </div>
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h3>Phone Support</h3>
                  <a href="tel:+919038976363" className="contact-link">+91 90389 76363</a>
                  <p>Available 24/7 for immediate assistance</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <a href="mailto:sanjanadotsingh@gmail.com" className="contact-link">
                    sanjanadotsingh@gmail.com
                  </a>
                  <p>We&apos;ll respond within 24 hours</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Our Location</h3>
                  <p><strong>Mumbai, Maharashtra, India</strong></p>
                  <p>Serving across 25+ major cities nationwide</p>
                </div>
              </div>
              <div className="working-hours">
                <h3>⏰ Working Hours</h3>
                <ul>
                  <li><span>Monday - Sunday:</span> <span>24/7 Available</span></li>
                  <li><span>Response Time:</span> <span>Under 15 minutes</span></li>
                  <li><span>Booking:</span> <span>Same-day available</span></li>
                </ul>
              </div>
              <div className="why-contact-us">
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  {["100% Verified Profiles","24/7 Customer Support","Discreet & Confidential","Quick Response Time","Transparent Pricing","Safe & Secure Service"].map((b) => (
                    <li key={b}><span className="check-icon">✓</span> {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Rental */}
      <section
        style={{
          background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
          padding: "60px 0",
          margin: "40px 0",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", color: "white", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>🏢</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: 700 }}>
              Website Pages Available for Rent
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "30px", opacity: 0.95 }}>
              Looking to expand your online presence? We offer premium website pages for rent with
              established traffic and SEO rankings. Perfect for businesses looking to boost their
              digital footprint instantly.
            </p>
            <a href="tel:+919038976363" className="btn btn-primary">
              📞 Inquire Now - +91 90389 76363
            </a>
          </div>
        </div>
      </section>

      <Script id="contact-form-script" strategy="afterInteractive">{`
        var f = document.getElementById('contactForm');
        if (f) {
          f.addEventListener('submit', function(e) {
            e.preventDefault();
            var msg = 'Hello! I am interested in your services.\\n\\nName: ' +
              (document.getElementById('name').value || '') +
              '\\nPhone: ' + (document.getElementById('phone').value || '') +
              '\\nCity: ' + (document.getElementById('city').value || '') +
              '\\nService: ' + (document.getElementById('service').value || '') +
              '\\n\\nMessage:\\n' + (document.getElementById('message').value || '');
            window.open('https://wa.me/919038976363?text=' + encodeURIComponent(msg), '_blank');
            f.reset();
          });
        }
      `}</Script>
    </>
  );
}
"""

# ─────────────────── services/page.tsx ───────────────────
services_page = r"""import type { Metadata } from "next";
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
"""

# ─────────────────── gallery/page.tsx ───────────────────
gallery_page = r"""import type { Metadata } from "next";
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
"""

# ─────────────────── location/page.tsx ───────────────────
location_page = r"""import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escorts Locations - All India Coverage | Zarina Escorts Mumbai",
  description:
    "Premium escort services across 150+ locations in India. Mumbai, Delhi, Bangalore, Hyderabad, Pune and all major cities. 24/7 available.",
  alternates: { canonical: "https://hotzarina.in/location" },
};

const mumbaiLocations = [
  ["Andheri","escorts-in-andheri"],["Bandra","escorts-in-bandra"],["Juhu","escorts-in-juhu"],
  ["Colaba","escorts-in-colaba"],["Powai","escorts-in-powai"],["Worli","escorts-in-worli"],
  ["Lower Parel","escorts-in-lower-parel"],["Dadar","escorts-in-dadar"],["Malad","escorts-in-malad"],
  ["Kandivali","escorts-in-kandivali"],["Borivali","escorts-in-borivali"],["Santacruz","escorts-in-santacruz"],
  ["Vile Parle","escorts-in-vile-parle"],["Jogeshwari","escorts-in-jogeshwari"],["Goregaon","escorts-in-goregaon"],
  ["Kurla","escorts-in-kurla"],["Ghatkopar","escorts-in-ghatkopar"],["Mulund","escorts-in-mulund"],
  ["Bhandup","escorts-in-bhandup"],["Kanjurmarg","escorts-in-kanjurmarg"],["Vikhroli","escorts-in-vikhroli"],
  ["Vidyavihar","escorts-in-vidyavihar"],["Chembur","escorts-in-chembur"],["Govandi","escorts-in-govandi"],
  ["Mankhurd","escorts-in-mankhurd"],["Wadala","escorts-in-wadala"],["Sion","escorts-in-sion"],
  ["Matunga","escorts-in-matunga"],["Parel","escorts-in-parel"],["Mahim","escorts-in-mahim"],
  ["Mahalaxmi","escorts-in-mahalaxmi"],["Lower Parel","escorts-in-lower-parel"],["Worli","escorts-in-worli"],
  ["Prabhadevi","escorts-in-prabhadevi"],["Nariman Point","escorts-in-nariman-point"],
  ["Marine Lines","escorts-in-marine-lines"],["Churchgate","escorts-in-churchgate"],
  ["CST","escorts-in-cst"],["Fort","escorts-in-fort"],["Colaba","escorts-in-colaba"],
  ["Byculla","escorts-in-byculla"],["Grant Road","escorts-in-grant-road"],
  ["Mumbai Central","escorts-in-mumbai-central"],["Charni Road","escorts-in-charni-road"],
  ["Chinchpokli","escorts-in-chinchpokli"],["Masjid Bandar","escorts-in-masjid-bandar"],
  ["Lokhandwala","escorts-in-lokhandwala"],["Versova","escorts-in-versova"],
  ["Khar","escorts-in-khar"],["Khar Road","escorts-in-khar-road"],
  ["Mumbai Airport","escorts-in-mumbai-airport"],["Sakinaka","escorts-in-sakinaka"],
];

const naviMumbaiLocations = [
  ["Vashi","escorts-in-vashi"],["Nerul","escorts-in-nerul"],["Aircoli","escorts-in-airoli"],
  ["Belapur","escorts-in-belapur"],["Kharghar","escorts-in-kharghar"],["Panvel","escorts-in-panvel"],
  ["Ulwe","escorts-in-ulwe"],["Rabale","escorts-in-rabale"],["Ghansoli","escorts-in-ghansoli"],
  ["Kopar Khairane","escorts-in-kopar-khairane"],["Sanpada","escorts-in-sanpada"],
  ["Juinagar","escorts-in-juinagar"],["Kalamboli","escorts-in-kalamboli"],["Kamothe","escorts-in-kamothe"],
  ["Seawood","escorts-in-seawood"],["Navi Mumbai","escorts-in-navi-mumbai"],
];

const thaneLocations = [
  ["Thane","escorts-in-thane"],["Kalyan","escorts-in-kalyan"],["Dombivli","escorts-in-dombivli"],
  ["Ulhasnagar","escorts-in-ulhasnagar"],["Bhiwandi","escorts-in-bhiwandi"],["Ambernath","escorts-in-ambernath"],
  ["Badlapur","escorts-in-badlapur"],["Titwala","escorts-in-titwala"],["Thakurli","escorts-in-thakurli"],
  ["Diva","escorts-in-diva"],["Mumbra","escorts-in-mumbra"],["Kalwa","escorts-in-kalwa"],
  ["Ambivali","escorts-in-ambivali"],["Asangaon","escorts-in-asangaon"],["Mira Road","escorts-in-mira-road"],
  ["Bhayandar","escorts-in-bhayandar"],["Nalasopara","escorts-in-nalasopara"],
  ["Virar","escorts-in-virar"],["Vasai","escorts-in-vasai"],["Naigaon","escorts-in-naigaon"],
  ["Saphale","escorts-in-saphale"],["Boisar","escorts-in-boisar"],["Palghar","escorts-in-palghar"],
  ["Karjat","escorts-in-karjat"],["Khopoli","escorts-in-khopoli"],["Neral","escorts-in-neral"],
  ["Kasara","escorts-in-kasara"],["Baba","escorts-in-baba"],["Nahur","escorts-in-nahur"],
  ["Rabale","escorts-in-rabale"],["Ghansoli","escorts-in-ghansoli"],
];

const majorCities = [
  ["Delhi","escorts-in-delhi"],["Bangalore","escorts-in-bangalore"],["Hyderabad","escorts-in-hyderabad"],
  ["Chennai","escorts-in-chennai"],["Kolkata","escorts-in-kolkata"],["Pune","escorts-in-pune"],
  ["Ahmedabad","escorts-in-ahmedabad"],["Surat","escorts-in-surat"],["Jaipur","escorts-in-jaipur"],
  ["Lucknow","escorts-in-lucknow"],["Chandigarh","escorts-in-chandigarh"],["Goa","escorts-in-goa"],
  ["Noida","escorts-in-noida"],["Gurgaon","escorts-in-gurgaon"],["Indore","escorts-in-indore"],
  ["Bhopal","escorts-in-bhopal"],["Nashik","escorts-in-nashik"],["Nagpur","escorts-in-nagpur"],
  ["Vadodara","escorts-in-ahmedabad"],["Rajkot","escorts-in-rajkot"],
  ["Ludhiana","escorts-in-ludhiana"],["Jalandhar","escorts-in-jalandhar"],
  ["Dehradun","escorts-in-dehradun"],["Agra","escorts-in-agra"],["Kanpur","escorts-in-kanpur"],
  ["Varanasi","escorts-in-varanasi"],["Patna","escorts-in-patna"],["Ranchi","escorts-in-ranchi"],
  ["Guwahati","escorts-in-guwahati"],["Kochi","escorts-in-kochi"],["Coimbatore","escorts-in-coimbatore"],
  ["Mangalore","escorts-in-mangalore"],["Mysore","escorts-in-mysore"],["Siliguri","escorts-in-siliguri"],
  ["Bhubaneswar","escorts-in-bhubaneswar"],["Visakhapatnam","escorts-in-visakhapatnam"],
  ["Vijayawada","escorts-in-vijayawada"],["Jodhpur","escorts-in-jodhpur"],
  ["Udaipur","escorts-in-udaipur"],["Gwalior","escorts-in-gwalior"],
];

function LocationGrid({ title, locations }: { title: string; locations: string[][] }) {
  return (
    <div className="location-card" style={{ padding: "2rem" }}>
      <h3 style={{ color: "var(--primary-color)", marginBottom: "1.5rem" }}>{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {locations.map(([name, slug]) => (
          <Link
            key={slug}
            href={`/${slug}`}
            style={{
              background: "var(--primary-color)",
              color: "white",
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function LocationPage() {
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
            <h1>Escorts Services Across India - 150+ Locations</h1>
            <p>Premium escort services available across all major cities and locations in India. Available 24/7.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="container">
          <div className="locations-intro">
            <h2>Our Coverage Locations</h2>
            <p>We provide premium escort services across 150+ locations in India</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <LocationGrid title="🏙️ Mumbai Locations" locations={mumbaiLocations} />
            <LocationGrid title="🌊 Navi Mumbai Locations" locations={naviMumbaiLocations} />
            <LocationGrid title="🚂 Thane & Suburbs" locations={thaneLocations} />
            <LocationGrid title="🌍 Major Cities Across India" locations={majorCities} />
          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">
          <h2>Our India-Wide Coverage</h2>
          <p>Premium escort services available 24/7 across India</p>
          <div className="coverage-stats">
            {[["150+","Locations Covered"],["5000+","Verified Escorts"],["24/7","Service Available"],["100%","Discreet Service"]].map(([num, label]) => (
              <div className="stat-item" key={label}>
                <h3>{num}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
"""

# Create slug directory and write slug page
slug_dir = os.path.join(BASE, "[slug]")
os.makedirs(slug_dir, exist_ok=True)

files = {
    os.path.join(slug_dir, "page.tsx"): slug_page,
    os.path.join(BASE, "contact", "page.tsx"): contact_page,
    os.path.join(BASE, "services", "page.tsx"): services_page,
    os.path.join(BASE, "gallery", "page.tsx"): gallery_page,
    os.path.join(BASE, "location", "page.tsx"): location_page,
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)
    print(f"Wrote {path}")

print("All done!")
