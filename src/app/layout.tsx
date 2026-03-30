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
  title: "VVIP Escorts Mumbai | India's #1 Premium Companion Service 24/7",
  description:
    "VVIP Escorts Mumbai — India's most trusted premium companion service. 500+ verified profiles: VIP, Russian, Model, Independent & more. Available 24/7. Call +91 70 9158 5737",
  keywords:
    "vvip escorts mumbai, escorts in mumbai, mumbai escorts, premium call girls mumbai, vip escorts mumbai, verified escorts mumbai",
  authors: [{ name: "VVIP Escorts" }],
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
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
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
