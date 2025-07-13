// components/AboutUsBrief.jsx
"use client";

import React from 'react';

export default function AboutUsBrief() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white to-gray-50 text-gray-900 py-10 px-6 overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-[#bfa055] opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Who <span className="text-[#bfa055]">We Are</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            At RCG Tech Solutions, we are more than just an IT solutions provider. We are your dedicated partners in innovation, committed to leveraging cutting-edge AI and robust technology to solve your most complex business challenges.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our mission is to empower businesses with intelligent, scalable, and secure solutions that drive efficiency, foster growth, and build a resilient future. We believe in a collaborative approach, ensuring every solution is meticulously tailored to your unique vision and objectives.
          </p>
          <a
            href="/about" // Link to your full About Us page
            className="inline-block px-8 py-3 mt-10 rounded-full font-semibold text-black bg-[#bfa055] shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Learn More About Us
          </a>
        </div>
        <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
      </section>
    </>
  );
}
