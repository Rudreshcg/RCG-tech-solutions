import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RCG Tech Solutions | AI & IT Services Company",
    template: "%s | RCG Tech Solutions"
  },
  description: "RCG Tech Solutions delivers innovative AI, cloud, and IT services to help businesses grow, optimize, and secure their digital future. Partner with us for custom solutions and expert consulting.",
  keywords: [
    "IT solutions", "AI services", "cloud computing", "software development", "cybersecurity", "digital transformation", "RCG Tech Solutions", "business technology", "managed services", "machine learning", "custom software"
  ],
  openGraph: {
    title: "RCG Tech Solutions | AI & IT Services Company",
    description: "Innovative AI, cloud, and IT solutions for business growth and security. Discover our services and expertise.",
    url: "https://rcgtechsolutions.rudresh.in/",
    siteName: "RCG Tech Solutions",
    images: [
      {
        url: "/images/RCG-tech-solution-black-gold.png",
        width: 1200,
        height: 630,
        alt: "RCG Tech Solutions Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RCG Tech Solutions | AI & IT Services Company",
    description: "Innovative AI, cloud, and IT solutions for business growth and security. Discover our services and expertise.",
    images: [
      "/images/RCG-tech-solution-black-gold.png"
    ]
  },
  metadataBase: new URL("https://rcgtechsolutions.rudresh.in/")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
