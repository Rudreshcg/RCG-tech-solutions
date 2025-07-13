// components/Contact.jsx
// "use client";

import React from 'react';
import Image from 'next/image'; // Import Image component for the logo
// GoldDivider is not used in this new form-like component as per the image,
// so it's removed from imports and the return statement.

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RCG Tech Solutions - Get in Touch",
  description: "Contact RCG Tech Solutions for expert IT, AI, and cloud consulting. Reach out to our team for project inquiries, support, or partnership opportunities.",
  keywords: [
    "contact RCG Tech Solutions", "IT consulting contact", "AI company contact", "business inquiry", "technology support"
  ],
  openGraph: {
    title: "Contact Us | RCG Tech Solutions - Get in Touch",
    description: "Contact RCG Tech Solutions for expert IT, AI, and cloud consulting. Reach out to our team for project inquiries, support, or partnership opportunities.",
    url: "https://rcgtechsolutions.rudresh.in/contact",
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
    title: "Contact Us | RCG Tech Solutions - Get in Touch",
    description: "Contact RCG Tech Solutions for expert IT, AI, and cloud consulting. Reach out to our team for project inquiries, support, or partnership opportunities.",
    images: [
      "/images/RCG-tech-solution-black-gold.png"
    ]
  },
  alternates: {
    canonical: "https://rcgtechsolutions.rudresh.in/contact"
  }
};

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 text-gray-900 py-16 md:py-24 px-6 overflow-hidden">
      {/* Subtle background patterns - keeping consistent with other components */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 opacity-10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#bfa055] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto relative z-10 p-4 sm:p-8 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Company Info and Logo - Updated Theme */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-xl lg:rounded-l-2xl lg:rounded-r-none flex flex-col justify-center items-center text-center lg:text-left lg:items-start space-y-6 lg:space-y-8 flex-shrink-0 text-white">
          {/* Company Logo */}
          <div className="mb-6">
            <Image
              src="/images/RCG-tech-solution-white.png" // Assuming your logo path
              alt="Company Logo"
              width={120} // Adjust width as needed
              height={120} // Adjust height as needed
              className="object-contain"
            />
          </div>
          
          {/* About Company Content */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-[#bfa055] leading-tight">
              Innovating for Your Success
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              At RCG Tech Solutions, we are dedicated to crafting cutting-edge IT and AI solutions that propel businesses forward. Our passion lies in transforming complex challenges into seamless opportunities for growth and efficiency.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              With a focus on innovation, reliability, and client-centric collaboration, we build intelligent systems designed to adapt, learn, and evolve with your unique needs, ensuring a future-proof foundation for your enterprise.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form - Gold Theme */}
        <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#bfa055]">Hi there!</h3> {/* Changed text-red-500 to text-[#bfa055] */}
            {/* Close button removed as per request */}
          </div>

          <p className="text-gray-600 mb-8 text-sm sm:text-base">Welcome back! please enter your details</p>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="sr-only">Name</label> {/* Screen reader only label */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#bfa055] focus:border-[#bfa055] text-gray-800 placeholder-gray-400" // Changed focus:ring-red-500 and focus:border-red-500 to gold
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11.25 18.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 7.5a4.5 4.5 0 0 1 4.5 4.5v.75c0 1.657 1.343 3 3 3h.75a.75.75 0 0 1 0 1.5H20.25a3 3 0 0 0-3-3v-.75A4.5 4.5 0 0 1 12 7.5ZM12 12a4.5 4.5 0 0 0-4.5 4.5v.75c0 1.657-1.343 3-3 3H3a.75.75 0 0 1 0-1.5h.75a3 3 0 0 0 3-3v-.75A4.5 4.5 0 0 0 12 12Z" />
                </svg>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#bfa055] focus:border-[#bfa055] text-gray-800 placeholder-gray-400" // Changed focus:ring-red-500 and focus:border-red-500 to gold
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#bfa055] focus:border-[#bfa055] text-gray-800 placeholder-gray-400" // Changed focus:ring-red-500 and focus:border-red-500 to gold
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.334l-.955-.114a2.25 2.25 0 0 1-1.632-.585l-5.01-4.787a1.125 1.125 0 0 0-1.742.093l-2.543 2.543a1.125 1.125 0 0 1-1.742-.093l-5.01-4.787a1.125 1.125 0 0 1-.585-1.632L2.25 8.25V6.75Z" />
                </svg>
              </div>
            </div>

            {/* How can we help? Textarea */}
            <div>
              <label htmlFor="message" className="sr-only">How can we help?</label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="A brief description here"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#bfa055] focus:border-[#bfa055] text-gray-800 placeholder-gray-400" // Changed focus:ring-red-500 and focus:border-red-500 to gold
                ></textarea>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9.75 9.75m0 0v5.25m0-5.25h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out text-lg shadow-md" // Changed bg-red-400 to gold, text-white to text-black, and hover color
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
