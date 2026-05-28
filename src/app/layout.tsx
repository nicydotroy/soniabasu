import type { Metadata, Viewport } from "next";
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

const SITE = "https://soniabasu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Sonia Basu Mumbai | India's #1 Premium Companion Service 24/7",
  description:
    "Sonia Basu Mumbai — India's most trusted premium companion service. 500+ verified profiles: VIP, Russian, Model, Independent & more. Available 24/7. Call +91 70 9158 5737",
  keywords:
    "sonia basu mumbai, escorts in mumbai, mumbai escorts, premium call girls mumbai, vip escorts mumbai, verified escorts mumbai",
  authors: [{ name: "Sonia Basu", url: SITE }],
  creator: "Sonia Basu",
  publisher: "Sonia Basu Mumbai",
  applicationName: "Sonia Basu",
  category: "Lifestyle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "AwSvxSKBpplepi5VPfjlo566owNOcKzGrTDtImJEPrI",
  },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    rating: "adult",
    "revisit-after": "1 days",
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
    "DC.title": "Sonia Basu Mumbai",
  },
  alternates: {
    canonical: SITE,
    types: { "application/rss+xml": `${SITE}/sitemap.xml` },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a05",
  colorScheme: "dark",
};

// Sitewide structured data: Organization (with full sameAs entity graph
// for GEO/Knowledge Graph signals), WebSite with SearchAction (sitelinks
// search box) and a Person entity for the founder. These render on every
// page, so search & answer engines always have a stable entity to attach
// brand mentions to.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}#organization`,
  name: "Sonia Basu Mumbai",
  alternateName: ["Sonia Basu", "Soniabasu"],
  url: SITE,
  logo: { "@type": "ImageObject", url: `${SITE}/images/logo.png`, width: 512, height: 512 },
  image: `${SITE}/images/escorts-in-mumbai-banner.webp`,
  description:
    "India's premier luxury companion service since 2018. Verified VIP escorts, Russian models, independent companions across Mumbai & 150+ cities.",
  foundingDate: "2018",
  slogan: "Premium. Verified. Discreet.",
  telephone: "+917091585737",
  email: "info@soniabasu.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Goa" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+917091585737",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
      contactOption: ["TollFree"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  sameAs: [
    "https://wa.me/917091585737",
    "https://soniabasu.in",
    "https://saumyabasu.in",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}#website`,
  url: SITE,
  name: "Sonia Basu Mumbai",
  description: "India's premier luxury companion service.",
  publisher: { "@id": `${SITE}#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE}/?s={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}#person-sonia-basu`,
  name: "Sonia Basu",
  jobTitle: "Founder",
  worksFor: { "@id": `${SITE}#organization` },
  url: SITE,
  image: `${SITE}/images/logo.png`,
  description:
    "Founder of Sonia Basu Mumbai — India's most trusted premium companion service, established in 2018.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Sonia Basu" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
