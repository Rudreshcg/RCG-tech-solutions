"use client";

import { CheckCircleIcon, LightBulbIcon, UsersIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const reasons = [
  {
    title: "Unmatched Expertise",
    description:
      "Benefit from our seasoned team's deep knowledge in AI, cloud computing, and advanced IT solutions, meticulously crafted to your unique challenges.",
    icon: LightBulbIcon, // Using LightBulbIcon for innovation/expertise
  },
  {
    title: "Client-First Collaboration",
    description:
      "Your vision is our blueprint. We engage deeply, ensuring every solution aligns perfectly with your business goals and delivers measurable impact.",
    icon: UsersIcon, // Using UsersIcon for customer-centric approach
  },
  {
    title: "Future-Proof Innovation",
    description:
      "Stay ahead with our commitment to cutting-edge technologies. We integrate the latest AI, robust security, and scalable cloud infrastructure.",
    icon: CheckCircleIcon, // Keeping CheckCircleIcon for reliability/validation
  },
  {
    title: "Dedicated Long-Term Partnership",
    description:
      "Our support extends far beyond deployment. Expect proactive maintenance, continuous optimization, and a partner invested in your enduring success.",
    icon: ShieldCheckIcon, // Using ShieldCheckIcon for reliable support/security
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <section
        className="relative bg-gradient-to-br from-gray-50 to-white text-gray-900 py-10 px-6 overflow-hidden" // Added gradient background and overflow-hidden for subtle patterns
        id="why-choose-us"
      >
        {/* Subtle background pattern/shapes for visual interest */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#bfa055] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10"> {/* z-10 to keep content above patterns */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"> {/* Larger, bolder heading */}
            Why Partner with <span className="text-[#bfa055]">Us?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"> {/* Slightly larger text for subheading */}
            We blend innovation with integrity, delivering bespoke IT and AI solutions that propel your business forward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"> {/* Changed to 4 columns for desktop */}
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-100" // Added card styling, hover effects
              >
                {/* Icon display */}
                <div className="mb-6">
                  <reason.icon className="h-14 w-14 text-[#bfa055] p-2 bg-[#bfa055]/10 rounded-full" /> {/* Larger, styled icon */}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{reason.title}</h3> {/* Bolder title */}
                <p className="text-gray-700 leading-relaxed">{reason.description}</p> {/* Enhanced readability */}
              </div>
            ))}
          </div>
        </div>
        <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
      </section>
    </>
  );
}