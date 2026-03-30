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
    alternates: { canonical: `https://vvip-escorts.com/${slug}` },
    openGraph: {
      type: "website",
      url: `https://vvip-escorts.com/${slug}`,
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
    image: "https://vvip-escorts.com/images/logo.webp",
    "@id": `https://vvip-escorts.com/${slug}`,
    url: `https://vvip-escorts.com/${slug}`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vvip-escorts.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: page.heroTitle,
        item: `https://vvip-escorts.com/${slug}`,
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
