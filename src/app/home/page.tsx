import Solutions from "../components/home/Solutions"
import Hero from "../components/home/Hero"
import WhyChooseUs from "../components/home/WhyChooseUs"
import TechStack from "../components/home/TechStack"
import CallToAction from '../components/home/CallToAction'; // Import the new CTA component
import AboutUsBrief from '../components/home/AboutUsBrief';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | RCG Tech Solutions - AI, Cloud & IT Services",
  description: "Welcome to RCG Tech Solutions. We provide cutting-edge AI, cloud, and IT services to help your business innovate, grow, and stay secure. Discover our expertise and solutions.",
  keywords: [
    "IT solutions", "AI services", "cloud computing", "business technology", "software development", "RCG Tech Solutions", "digital transformation"
  ],
  openGraph: {
    title: "Home | RCG Tech Solutions - AI, Cloud & IT Services",
    description: "Welcome to RCG Tech Solutions. We provide cutting-edge AI, cloud, and IT services to help your business innovate, grow, and stay secure.",
    url: "https://rcgtechsolutions.rudresh.in/home",
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
    title: "Home | RCG Tech Solutions - AI, Cloud & IT Services",
    description: "Welcome to RCG Tech Solutions. We provide cutting-edge AI, cloud, and IT services to help your business innovate, grow, and stay secure.",
    images: [
      "/images/RCG-tech-solution-black-gold.png"
    ]
  },
  alternates: {
    canonical: "https://rcgtechsolutions.rudresh.in/home"
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhyChooseUs/>
      <TechStack/>
      <AboutUsBrief /> {/* A brief intro before a final CTA */}
      <CallToAction /> {/* A strong final call to action */}
    </>
  );
}

