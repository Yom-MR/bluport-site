import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StructuredData from "@/components/seo/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluport.us"),
  title: {
    default: "Bluport Logistics | Mission-Critical Equipment Transport",
    template: "%s | Bluport Logistics",
  },
  description:
    "Veteran-owned mission-critical logistics company providing specialized equipment transport, rapid-response capacity, dedicated support, and field-ready logistics for construction, equipment rental, utilities, infrastructure, and industrial operations.",
  keywords: [
    "Bluport Logistics",
    "equipment transport",
    "hotshot logistics",
    "mission-critical logistics",
    "veteran-owned logistics",
    "Houston logistics",
    "equipment rental transport",
    "utility logistics",
    "infrastructure logistics",
    "rapid response logistics",
  ],
  openGraph: {
    title: "Bluport Logistics | Mission-Critical Equipment Transport",
    description:
      "Veteran-owned mission-critical logistics company providing specialized equipment transport, rapid-response capacity, dedicated support, and field-ready logistics for construction, equipment rental, utilities, infrastructure, and industrial operations.",
    url: "https://bluport.us",
    siteName: "Bluport Logistics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluport Logistics | Mission-Critical Equipment Transport",
    description:
      "Veteran-owned mission-critical logistics company providing specialized equipment transport, rapid-response capacity, dedicated support, and field-ready logistics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <StructuredData />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
