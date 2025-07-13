// components/CallToAction.jsx
"use client";

import React from 'react';

export default function CallToAction() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-10 px-6 overflow-hidden">
        {/* Subtle background patterns for visual interest */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#bfa055] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Ready to <span className="text-[#bfa055]">Innovate</span> Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's discuss how our intelligent IT and AI solutions can drive your growth and efficiency.
          </p>
          <a
            href="/contact" // Link to your contact page
            className="inline-block px-12 py-4 rounded-full font-bold text-black bg-[#bfa055] shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg md:text-xl"
          >
            Get a Free Consultation
          </a>
        </div>
        <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
      </section>
    </>
  );
}
