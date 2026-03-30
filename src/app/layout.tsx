import type { Metadata } from "next";
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
