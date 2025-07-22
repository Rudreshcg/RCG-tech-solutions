// components/Footer.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link"; // Ensure Link is imported

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Column 1: Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Link href="/" passHref> {/* Changed to "/" for home, added passHref */}
            <Image
              src="/images/RCG-tech-solution-white.png"
              alt="RCG Tech Solutions Logo - White" // More descriptive alt text
              width={120} // Slightly increased size for prominence
              height={120} // Slightly increased size for prominence
              priority
              className="object-contain" // Ensure image scales correctly
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            RCG Tech Solutions is your partner in innovation, crafting intelligent IT and AI solutions to propel your business forward.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-[#bfa055] pb-2 inline-block">Quick Links</h3> {/* Added border for emphasis */}
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#bfa055] transition-colors duration-200">Home</Link></li>
            <li><Link href="/services" className="hover:text-[#bfa055] transition-colors duration-200">Services</Link></li>
            <li><Link href="/about" className="hover:text-[#bfa055] transition-colors duration-200">About Us</Link></li>
            <li><Link href="/blogs" className="hover:text-[#bfa055] transition-colors duration-200">Blogs</Link></li> {/* New link */}
            <li><Link href="/careers" className="hover:text-[#bfa055] transition-colors duration-200">Careers</Link></li> {/* New link */}
            <li><Link href="/contact" className="hover:text-[#bfa055] transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-[#bfa055] pb-2 inline-block">Connect With Us</h3> {/* Changed heading slightly */}
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@rcgtechsolutions.rudresh.in" className="hover:text-[#bfa055] transition-colors duration-200 flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@rcgtechsolutions.rudresh.in</span>
              </a>
            </li>
            <li>
              <a href="tel:+919663383747" className="hover:text-[#bfa055] transition-colors duration-200 flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 9663383747</span>
              </a>
            </li>
            <li>
              <p className="text-sm flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Tech Drive, Innovation City, IT 90210</span>
              </p>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-[#bfa055] pb-2 inline-block">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#bfa055] transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true"> {/* Increased size */}
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.75c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#bfa055] transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true"> {/* Increased size */}
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.964L6.05 21.75H3.637l7.35-8.402L2.25 2.25h3.308l5.976 7.616L18.244 2.25Zm-4.12 17.523L11.713 9.49H3.99L10.057 21.75h2.542Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#bfa055] transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true"> {/* Increased size */}
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.118-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.687v6.548z" clipRule="evenodd" />
              </svg>
            </a>
            {/* You could add more social links here (e.g., Instagram, YouTube) */}
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