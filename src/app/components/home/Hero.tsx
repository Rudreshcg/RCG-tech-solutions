"use client";

import React from 'react'; // Import React explicitly if not already

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Background Image with subtle scale for depth */}
      <img
        src="/images/hero_image.jpg"
        alt="AI Robot"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105" // Added scale-105 for subtle depth
      />

      {/* Darker Overlay for better text contrast, with a subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 z-10" /> {/* Darker, more nuanced gradient overlay */}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center lg:items-start lg:text-left"> {/* Centered content on small, left-aligned on large */}
        {/* Text Content */}
        <div className="w-full lg:w-3/4 xl:w-2/3 space-y-6"> {/* Adjusted width for content block */}
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg"> {/* Larger, bolder, shadow, tighter tracking */}
            Ignite Your Future with <span className="text-[#bfa055]">Intelligent AI Solutions.</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 max-w-2xl mx-auto lg:mx-0"> {/* Adjusted size, better contrast */}
            We craft bespoke AI and IT strategies that **transform challenges into growth opportunities.**
          </h2>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto lg:mx-0 leading-relaxed"> {/* Adjusted size, max-width, relaxed leading */}
            Leverage cutting-edge AI and automation to drive smarter decisions, optimize operations, and unlock unprecedented potential. Our solutions adapt, learn, and evolve, ensuring your business is always future-ready.
          </p>

          {/* CTA Button */}
          <div className="pt-4"> {/* Added padding top for spacing */}
            <a
              href="/contact"
              className="inline-block px-10 py-4 mt-2 rounded-full font-bold bg-[#bfa055] text-black shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out" // More padding, bolder, distinct shadow, scale hover
            >
              Start Your AI Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}