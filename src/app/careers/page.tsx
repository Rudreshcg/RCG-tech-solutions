// components/CareersPage.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import {
  BriefcaseIcon, // For job openings
  UsersIcon,      // For team/culture
  HeartIcon,      // For well-being/passion
  AcademicCapIcon, // For learning/growth
  ChartBarIcon,   // For impact/innovation
  CurrencyDollarIcon, // For compensation
  LightBulbIcon, // For innovation
  RocketLaunchIcon, // For growth opportunities
  CalendarDaysIcon, // For work-life balance
} from "@heroicons/react/24/outline"; // Using outline icons for a lighter feel

// import GoldDivider from './GoldDivider'; // Assuming GoldDivider.jsx is in the same 'components' directory

// --- Data for Job Openings ---
const jobOpenings = [
  {
    id: 1,
    title: "AI/ML Engineer",
    location: "Remote / Bengaluru, India",
    type: "Full-time",
    description: "Design, develop, and deploy advanced machine learning models and AI-driven solutions for complex business problems. Requires strong Python, TensorFlow/PyTorch skills.",
    link: "#apply-form"
  },
  {
    id: 2,
    title: "Full-stack Developer (Python/Node.js & React/Next.js)",
    location: "Remote / Bengaluru, India",
    type: "Full-time",
    description: "Build robust and scalable web applications using modern JavaScript and Python frameworks. Expertise in React, Next.js, Node.js or Python, and database integration (PostgreSQL/MongoDB) is essential.",
    link: "#apply-form"
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    location: "Remote / Bengaluru, India",
    type: "Full-time",
    description: "Lead the design and implementation of secure, high-performance cloud infrastructures on AWS, Azure, or GCP. Requires deep understanding of cloud services and DevOps practices.",
    link: "#apply-form"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    location: "Remote / Bengaluru, India",
    type: "Full-time",
    description: "Create intuitive, engaging, and visually appealing user interfaces and experiences for our web and mobile applications. Strong portfolio and proficiency in design tools required.",
    link: "#apply-form"
  },
  {
    id: 5,
    title: "Backend Developer (Python or Node.js)",
    location: "Remote / Bengaluru, India",
    type: "Full-time",
    description: "Develop and maintain scalable backend systems and RESTful APIs. Strong proficiency in Python (FastAPI/Django) or Node.js (Express/NestJS), with experience in databases like PostgreSQL or MongoDB.",
    link: "#apply-form"
  },
];


// --- Data for Benefits ---
const companyBenefits = [
  {
    title: "Competitive Compensation",
    description: "Attractive salaries and performance-based bonuses that recognize your valuable contributions.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Continuous Learning",
    description: "Access to online courses, certifications, and workshops to keep your skills sharp and grow your career.",
    icon: AcademicCapIcon,
  },
  {
    title: "Flexible Work Environment",
    description: "Embrace remote-first options and flexible hours that support your work-life balance.",
    icon: CalendarDaysIcon,
  },
  {
    title: "Impactful Projects",
    description: "Work on cutting-edge AI and IT solutions that solve real-world problems and make a difference.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Collaborative Culture",
    description: "Join a supportive and innovative team where your ideas are valued and collaboration thrives.",
    icon: UsersIcon,
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health benefits, wellness programs, and a focus on employee well-being.",
    icon: HeartIcon,
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Careers Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"> {/* Changed min-h-[60vh] md:min-h-[70vh] to min-h-screen */}
        <Image
          src="/images/careers.jpg" // Placeholder: Replace with a relevant career-themed image
          alt="Careers at RCG Tech Solutions"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105"
        />
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darker overlay */}

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Join Our <span className="text-[#bfa055]">Innovative Team</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Shape the future of AI and IT with RCG Tech Solutions. We're looking for passionate minds to build groundbreaking solutions.
          </p>
          <a
            href="#current-openings"
            className="inline-block px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-lg mt-4"
            aria-label="View Current Job Openings"
          >
            Explore Openings
          </a>
        </div>
      </section>

      {/* Culture & Philosophy Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Our <span className="text-[#bfa055]">Culture</span> & Values
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            At RCG Tech Solutions, we foster an environment where innovation thrives, collaboration is key, and every voice is heard. We believe in empowering our team members to push boundaries, learn continuously, and make a tangible impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <LightBulbIcon className="h-10 w-10 text-[#bfa055] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation at Core</h3>
              <p className="text-gray-600">We encourage creative thinking and bold ideas to solve complex problems and build future-ready solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <UsersIcon className="h-10 w-10 text-[#bfa055] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Spirit</h3>
              <p className="text-gray-600">Our strength lies in teamwork. We foster open communication and mutual respect to achieve shared goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <AcademicCapIcon className="h-10 w-10 text-[#bfa055] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Mindset</h3>
              <p className="text-gray-600">We invest in our people's development, offering continuous learning opportunities and clear career paths.</p>
            </div>
          </div>
          <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
        </div>
      </section>
      

      {/* Current Job Openings Section */}
      <section id="current-openings" className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Current <span className="text-[#bfa055]">Openings</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore exciting opportunities to contribute to cutting-edge projects and grow your career with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.length > 0 ? (
              jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-700"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-[#bfa055] mb-2">{job.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {job.location} | {job.type}
                    </p>
                    <p className="text-gray-300 mb-4 flex-grow">{job.description}</p>
                  </div>
                  <a
                    href={job.link}
                    className="inline-block self-start px-6 py-2 rounded-full font-semibold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out text-base mt-4"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply Now
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-xl col-span-full">No openings currently. Check back soon!</p>
            )}
          </div>
          <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
        </div>
      </section>
      

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Why You'll <span className="text-[#bfa055]">Love Working Here</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12">
            We believe in nurturing talent and providing an environment where you can thrive both professionally and personally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-100"
              >
                <div className="mb-4 flex items-center justify-center h-16 w-16 bg-[#bfa055]/10 rounded-full">
                  <benefit.icon className="h-8 w-8 text-[#bfa055]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="w-24 h-1 mx-auto mt-15 bg-[#bfa055] rounded-full" />
        </div>
      </section>
      

      {/* Final Call to Action for Application */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Make an <span className="text-[#bfa055]">Impact?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            If you're passionate about technology and eager to contribute to a dynamic team, we encourage you to apply!
          </p>
          <a
            href="#current-openings" // Scrolls back to the job openings section
            className="inline-block px-10 py-4 rounded-full font-bold text-black bg-[#bfa055] shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg"
            aria-label="Apply to RCG Tech Solutions"
          >
            See All Open Positions
          </a>
        </div>
      </section>
    </>
  );
}
