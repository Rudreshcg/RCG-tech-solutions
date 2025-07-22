// components/ServicesPage.jsx
import React from 'react';
import Image from 'next/image';
import {
  LightBulbIcon,
  CloudIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ServerStackIcon, // Added for potential infrastructure service
  GlobeAltIcon, // Added for potential digital transformation
} from "@heroicons/react/24/outline";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | RCG Tech Solutions - AI, Cloud, Software & Security",
  description: "Explore the full range of IT, AI, cloud, software development, and cybersecurity services offered by RCG Tech Solutions. Tailored solutions for your business needs.",
  keywords: [
    "IT services", "AI solutions", "cloud migration", "software development", "cybersecurity", "managed services", "business technology"
  ],
  openGraph: {
    title: "Services | RCG Tech Solutions - AI, Cloud, Software & Security",
    description: "Explore the full range of IT, AI, cloud, software development, and cybersecurity services offered by RCG Tech Solutions. Tailored solutions for your business needs.",
    url: "https://rcgtechsolutions.rudresh.in/services",
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
    title: "Services | RCG Tech Solutions - AI, Cloud, Software & Security",
    description: "Explore the full range of IT, AI, cloud, software development, and cybersecurity services offered by RCG Tech Solutions. Tailored solutions for your business needs.",
    images: [
      "/images/RCG-tech-solution-black-gold.png"
    ]
  },
  alternates: {
    canonical: "https://rcgtechsolutions.rudresh.in/services"
  }
};

const detailedServices = [
  {
    title: "Intelligent AI & Machine Learning Solutions",
    description:
      "Unlock the power of data with custom-built AI and ML models. From predictive analytics and natural language processing to intelligent automation and computer vision, we design and deploy solutions that learn, adapt, and drive smarter business decisions, giving you a significant competitive edge.",
    icon: LightBulbIcon,
    features: [
      "Custom AI Model Development",
      "Predictive Analytics & Forecasting",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Intelligent Automation & RPA",
      "AI-driven Personalization"
    ]
  },
  {
    title: "Scalable Cloud Architecture & Migration",
    description:
      "Future-proof your infrastructure with robust and scalable cloud solutions. We specialize in designing, deploying, and managing secure, cost-efficient, and highly available environments on leading platforms like AWS, Azure, and Google Cloud, ensuring seamless migration and optimal performance.",
    icon: CloudIcon,
    features: [
      "Cloud Strategy & Consulting",
      "AWS, Azure, GCP Implementations",
      "Cloud Migration & Modernization",
      "Serverless Architecture",
      "DevOps & CI/CD Pipelines",
      "Cloud Security & Compliance"
    ]
  },
  {
    title: "Bespoke Software Development & Engineering",
    description:
      "Transform your ideas into powerful, custom applications. Our expert team crafts innovative web, mobile, and enterprise-grade software meticulously tailored to your unique workflows and business objectives, ensuring maximum efficiency, user engagement, and long-term scalability.",
    icon: CodeBracketIcon,
    features: [
      "Web Application Development (React, Next.js, Angular, Vue)",
      "Mobile App Development (iOS, Android, React Native, Flutter)",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "UI/UX Design & Prototyping",
      "Legacy System Modernization"
    ]
  },
  {
    title: "Robust Cybersecurity & Data Compliance",
    description:
      "Protect your digital assets and maintain trust with comprehensive cybersecurity strategies. We implement advanced security protocols, secure authentication, robust encryption, and ensure adherence to industry-specific compliance standards, safeguarding your data from evolving threats.",
    icon: ShieldCheckIcon,
    features: [
      "Security Audits & Vulnerability Assessments",
      "Threat Detection & Incident Response",
      "Identity & Access Management (IAM)",
      "Data Encryption & Privacy",
      "Compliance (GDPR, HIPAA, ISO 27001)",
      "Network Security & Firewalls"
    ]
  },
  {
    title: "IT Infrastructure & Managed Services",
    description:
      "Optimize your IT operations with reliable infrastructure and proactive managed services. We ensure your systems are efficient, secure, and always available, allowing you to focus on your core business while we handle the complexities of your IT environment.",
    icon: ServerStackIcon,
    features: [
      "Network Design & Implementation",
      "Server Management & Virtualization",
      "Data Backup & Disaster Recovery",
      "IT Support & Helpdesk",
      "System Monitoring & Maintenance",
      "Hardware & Software Procurement"
    ]
  },
  {
    title: "Digital Transformation Consulting",
    description:
      "Navigate the digital landscape with strategic guidance. We help businesses embrace new technologies and methodologies to streamline operations, enhance customer experiences, and foster a culture of innovation, driving sustainable growth and competitive advantage.",
    icon: GlobeAltIcon,
    features: [
      "Digital Strategy Development",
      "Process Automation & Optimization",
      "Technology Roadmap Creation",
      "Change Management & Adoption",
      "Data-Driven Decision Making",
      "Innovation Workshops"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section for Services Page */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/images/services.jpg" // Use your service image here
          alt="Comprehensive IT and AI Services by RCG Tech Solutions"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105"
        />
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darker overlay */}

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Innovate, Optimize, <span className="text-[#bfa055]">Secure Your Digital Future</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI, Cloud, Software Development, and Cybersecurity solutions tailored to your business needs.
          </p>
          <a
            href="#our-services-list" // Link to the detailed services section below
            className="inline-block px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-lg mt-4"
            aria-label="Explore Our Services"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Main Services Content Section */}
      <section id="our-services-list" className="relative bg-gradient-to-br from-white to-gray-50 text-gray-900 py-24 px-6 overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bfa055] opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"> {/* Changed h1 to h2 for SEO hierarchy */}
              Our Comprehensive <span className="text-[#bfa055]">Solutions</span> {/* Slightly rephrased for variety */}
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              At RCG Tech Solutions, we offer a full spectrum of intelligent IT and AI services designed to propel your business forward. Discover how we can help you innovate, optimize, and secure your digital future with tailored strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-6 flex items-center justify-center h-20 w-20 bg-[#bfa055]/10 rounded-full">
                    <service.icon className="h-10 w-10 text-[#bfa055]" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {service.features && service.features.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Offerings:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Connect with our experts to discuss your unique needs and discover how our tailored solutions can drive your business's success.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-full font-bold text-black bg-[#bfa055] shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg md:text-xl"
            >
              Request a Consultation
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
