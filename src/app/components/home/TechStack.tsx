"use client";

import { useState } from "react";
import Image from "next/image";

// Technology stack grouped by category
const techStack = [
  { name: "HTML & CSS", src: "/images/techstack/htmlCssIcon.svg", category: "Language" },
  { name: "JavaScript", src: "/images/techstack/javascriptIcon.svg", category: "Language" },
  { name: "TypeScript", src: "/images/techstack/typeScriptIcon.svg", category: "Language" },
  { name: "Python", src: "/images/techstack/pythonIcon.svg", category: "Language" },
  { name: "Node.js", src: "/images/techstack/nodeJsIcon.svg", category: "Language" },
  { name: "React", src: "/images/techstack/reactIcon.svg", category: "Language" },
  { name: "Next.js", src: "/images/techstack/nextJsIcon.svg", category: "Language" },
  { name: "Tailwind CSS", src: "/images/techstack/tailwindIcon.svg", category: "Language" },
  { name: "Vite.js", src: "/images/techstack/viteJsIcon.svg", category: "Language" },
  { name: "MySQL", src: "/images/techstack/mySqlIcon.svg", category: "Database" },
  { name: "PostgreSQL", src: "/images/techstack/postgreSqlIcon.svg", category: "Database" },
  { name: "MongoDB", src: "/images/techstack/mongoDBIcon.svg", category: "Database" },
  { name: "DynamoDB", src: "/images/techstack/dynamoDBIcon.svg", category: "Database" },
  { name: "SQLite", src: "/images/techstack/sqliteIcon.svg", category: "Database" },
  { name: "SQL", src: "/images/techstack/sqlIcon.svg", category: "Database" },
  { name: "AWS", src: "/images/techstack/awsIcon.svg", category: "Cloud" }, // Corrected 'Category' to 'category'
];

// Original categories as requested
const categories = ["All", "Language", "Database", "Cloud"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStack =
    activeCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 to-white text-gray-900 py-10 px-6 overflow-hidden" id="tech-stack">
        {/* Subtle background patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#bfa055] opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Our <span className="text-[#bfa055]">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            We build powerful, scalable, and future-ready solutions using industry-leading tools and platforms.
          </p>

          {/* Filter Buttons - Reverted to original gold button style */}
          <div className="flex flex-wrap justify-center gap-4 mb-10"> {/* Kept original gap and mb */}
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border transition ${
                  activeCategory === cat
                    ? "bg-[#bfa055] text-black" // Gold background, black text
                    : "border-gray-400 text-gray-700 hover:bg-gray-200" // Original hover style
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Logos Grid - Retained the beautiful circular icon style from the last iteration */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-start justify-center pt-8">
            {filteredStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105"
              >
                {/* Circular background for icons with shadow */}
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-2 border border-gray-100">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-tight">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-24 h-1 mx-auto mt-10 bg-[#bfa055] rounded-full" />
      </section>
    </>
  );
}