// components/AboutUsBrief.jsx
import React from 'react';
import Image from 'next/image'; // Import the Image component

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RCG Tech Solutions - Our Story & Mission",
  description: "Learn about RCG Tech Solutions, our mission, vision, and values. Discover our journey as a leading provider of AI and IT solutions for businesses worldwide.",
  keywords: [
    "about RCG Tech Solutions", "company mission", "IT company story", "AI company vision", "business values", "technology partner",
    "our history", "digital innovation company", "expert IT consultants" // Added more specific keywords
  ],
  openGraph: {
    title: "About Us | RCG Tech Solutions - Our Story & Mission",
    description: "Learn about RCG Tech Solutions, our mission, vision, and values. Discover our journey as a leading provider of AI and IT solutions for businesses worldwide.",
    url: "https://rcgtechsolutions.rudresh.in/about",
    siteName: "RCG Tech Solutions",
    images: [
      {
        url: "/images/RCG-tech-solution-black-gold.png", // Ensure this path is correct
        width: 1200,
        height: 630,
        alt: "RCG Tech Solutions Logo"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | RCG Tech Solutions - Our Story & Mission",
    description: "Learn about RCG Tech Solutions, our mission, vision, and values. Discover our journey as a leading provider of AI and IT solutions for businesses worldwide.",
    images: [
      "/images/RCG-tech-solution-black-gold.png" // Ensure this path is correct
    ]
  },
  alternates: {
    canonical: "https://rcgtechsolutions.rudresh.in/about"
  }
};

export default function AboutUsBrief() {
  return (
    <>
      {/* Hero Section for About Us Page */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/images/aboutus.jpg" // Use your about us image here
          alt="Team collaboration and innovation at RCG Tech Solutions"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105"
        />
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darker overlay */}

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Our Story. Our <span className="text-[#bfa055]">Commitment.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the passion, vision, and expertise that drive RCG Tech Solutions to empower businesses with intelligent IT and AI innovations.
          </p>
          <a
            href="#our-journey" // Link to the 'Our Journey' section below
            className="inline-block px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-lg mt-4"
            aria-label="Learn more about RCG Tech Solutions"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Main About Us Content Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 text-gray-900 py-24 px-6 overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-[#bfa055] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Main Heading for the content section - Changed to H2 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Who <span className="text-[#bfa055]">We Are</span>
          </h2>

          {/* Introduction Section */}
          <div className="mb-16 space-y-6 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At RCG Tech Solutions, we are more than just an IT solutions provider. We are your dedicated partners in innovation, committed to leveraging cutting-edge AI and robust technology to solve your most complex business challenges.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our mission is to empower businesses with intelligent, scalable, and secure solutions that drive efficiency, foster growth, and build a resilient future. We believe in a collaborative approach, ensuring every solution is meticulously tailored to your unique vision and objectives.
            </p>
          </div>

          {/* Our Journey/History Section */}
          <div id="our-journey" className="mb-16 text-left max-w-4xl mx-auto"> {/* Added ID for direct linking from hero */}
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our <span className="text-[#bfa055]">Journey</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
              Founded in 2021, RCG Tech Solutions began with a clear vision: to bridge the gap between complex technology and practical business needs. What started as a small team of passionate innovators has grown into a leading provider of intelligent IT and AI solutions, driven by a relentless pursuit of excellence and client success.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Over the years, we've evolved alongside the rapidly changing technological landscape, consistently adopting new methodologies and tools to deliver unparalleled value. Our journey is marked by successful partnerships, transformative projects, and a steadfast commitment to our clients' long-term prosperity.
            </p>
          </div>

          {/* Mission, Vision, Values Section */}
          <div className="mb-16 text-left max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our <span className="text-[#bfa055]">Core Philosophy</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Mission */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-2xl font-semibold mb-3 text-[#bfa055]">Mission</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  To empower businesses worldwide with transformative AI and IT solutions that drive unprecedented efficiency, foster sustainable growth, and secure a competitive edge in the digital era.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-2xl font-semibold mb-3 text-[#bfa055]">Vision</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  To be the trusted partner for businesses seeking to harness the full potential of artificial intelligence and advanced technology, creating a future where innovation is accessible and impactful for all.
                </p>
              </div>
              {/* Values */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-2xl font-semibold mb-3 text-[#bfa055]">Values</h4>
                <ul className="list-disc list-inside text-left text-base text-gray-700 space-y-1">
                  <li>Innovation</li>
                  <li>Integrity</li>
                  <li>Client-Centricity</li>
                  <li>Excellence</li>
                  <li>Collaboration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="mb-16 text-left max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our <span className="text-[#bfa055]">Approach</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
              We believe that true innovation stems from deep understanding. Our approach begins with listening intently to your unique challenges and aspirations. We then craft bespoke strategies, leveraging our deep expertise in AI, cloud, and software development to build solutions that are not just technologically advanced, but also perfectly aligned with your business objectives.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We're not just vendors; we're long-term partners invested in your success. Our agile development process ensures transparency, flexibility, and continuous improvement, delivering solutions that evolve with your business needs and market demands.
            </p>
          </div>

          {/* Final Call to Action */}
          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Let's connect and explore how RCG Tech Solutions can help you achieve your strategic goals.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-full font-bold text-black bg-[#bfa055] shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg md:text-xl"
            >
              Contact Our Team
            </a>
          </div>

        </div>
      </section>
    </>
  );
}