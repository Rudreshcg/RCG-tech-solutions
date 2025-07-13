"use client";
import {
  LightBulbIcon,
  CloudIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"; // Using outline icons for a lighter look

const services = [
  {
    title: "Intelligent AI & ML Solutions",
    description:
      "Leverage custom AI models that learn, evolve, and automate to enhance decision-making, personalize user experiences, and optimize operations.",
    icon: LightBulbIcon,
  },
  {
    title: "Scalable Cloud Architecture",
    description:
      "Build future-proof infrastructure on leading platforms like AWS, Azure, and GCP, ensuring secure, cost-efficient, and resilient cloud environments.",
    icon: CloudIcon,
  },
  {
    title: "Bespoke Software Development",
    description:
      "Craft innovative web, mobile, and enterprise-grade applications meticulously tailored to your unique workflows and business objectives for maximum efficiency.",
    icon: CodeBracketIcon,
  },
  {
    title: "Robust Cybersecurity & Compliance",
    description:
      "Fortify your digital assets with advanced security protocols, including secure authentication, robust encryption, and adherence to industry-specific compliance standards.",
    icon: ShieldCheckIcon,
  },
];

export default function Solutions() {
  return (
    <>
      <section
        className="relative bg-gradient-to-br from-gray-50 to-white text-gray-900 py-24 px-6 overflow-hidden"
        id="solutions"
      >
        {/* Subtle background patterns */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 opacity-10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#bfa055] opacity-5 rounded-full blur-3xl translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-extrabold mb-4 leading-tight">
              Our Core <span className="text-[#bfa055]">Solutions</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"> {/* Added md:text-xl */}
              We engineer intelligent, secure, and scalable technology solutions that directly drive your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
              >
                {/* Icon with a styled background */}
                <div className="mb-6 flex items-center justify-center h-16 w-16 bg-[#bfa055]/10 rounded-full">
                  <service.icon className="h-9 w-9 text-[#bfa055]" />
                </div>
                {/* Responsive Title: text-xl on small, md:text-2xl on medium and up */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                {/* Responsive Description: text-sm on small, md:text-base on medium and up */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
      </section>
    </>
  );
}