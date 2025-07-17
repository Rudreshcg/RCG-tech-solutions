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
        className="relative bg-gray-900 text-white py-16 px-6 overflow-hidden" // Dark background, white text, increased vertical padding
        id="why-choose-us"
      >
        {/* Subtle background pattern/shapes for visual interest - adjusted colors for dark mode */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#bfa055] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-700 opacity-15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div> {/* Changed to a darker blue for subtlety */}
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-700 opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 hidden md:block"></div> {/* Added another subtle blob for more depth */}


        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Why Partner with <span className="text-[#bfa055]">Us?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16"> {/* Lighter gray for readability on dark background */}
            We blend innovation with integrity, delivering bespoke IT and AI solutions that propel your business forward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-700" // Darker card background, subtle border
              >
                {/* Icon display */}
                <div className="mb-6">
                  <reason.icon className="h-14 w-14 text-[#bfa055] p-2 bg-[#bfa055]/20 rounded-full" /> {/* Icon background slightly more opaque */}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{reason.title}</h3> {/* White title for contrast */}
                <p className="text-gray-300 leading-relaxed">{reason.description}</p> {/* Lighter gray for description text */}
              </div>
            ))}
          </div>
        </div>
        <div className="w-24 h-1 mx-auto mt-16 bg-[#bfa055] rounded-full" /> {/* Adjusted margin-top */}
      </section>
    </>
  );
}