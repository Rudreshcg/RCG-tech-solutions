// components/Footer.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Link href="/home" style={{ textDecoration: "none" }}>
            <Image
              src="/images/RCG-tech-solution-white.png"
              alt="RCG Tech Solutions Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            RCG Tech Solutions is your partner in innovation, crafting intelligent IT and AI solutions to propel your business forward.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#bfa055] transition-colors duration-200">Home</a></li>
            <li><a href="/services" className="hover:text-[#bfa055] transition-colors duration-200">Services</a></li>
            <li><a href="/about" className="hover:text-[#bfa055] transition-colors duration-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#bfa055] transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@rcgtechsolutions.rudresh.in" className="hover:text-[#bfa055] transition-colors duration-200">
                info@rcgtechsolutions.rudresh.in
              </a>
            </li>
            <li>
              <a href="tel:+15551234567" className="hover:text-[#bfa055] transition-colors duration-200">
                +91 9663383747
              </a>
            </li>
            <li>
              <p className="text-sm">123 Tech Drive, Innovation City, IT 90210</p>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media (Optional, only visible on larger screens) */}
        <div className="text-center md:text-left lg:block hidden"> {/* Hidden on small/medium, block on large */}
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#bfa055] transition-colors duration-200">
              {/* Facebook Icon SVG */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.75c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#bfa055] transition-colors duration-200">
              {/* Twitter Icon SVG */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.964L6.05 21.75H3.637l7.35-8.402L2.25 2.25h3.308l5.976 7.616L18.244 2.25Zm-4.12 17.523L11.713 9.49H3.99L10.057 21.75h2.542Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#bfa055] transition-colors duration-200">
              {/* LinkedIn Icon SVG */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.118-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.687v6.548z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {currentYear} RCG Tech Solutions. All rights reserved.</p>
        <p className="mt-2">Innovating for a smarter tomorrow.</p>
      </div>
    </footer>
  );
}
