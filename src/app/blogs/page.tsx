// components/BlogPage.jsx
"use client";

import React from 'react';
import Image from 'next/image';

// --- Dummy Data for Blog Posts (with slugs) ---
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch in 2025",
    excerpt: "Artificial Intelligence continues to reshape industries. Discover the key trends, from hyper-personalization to ethical AI, that will define business in the coming year.",
    date: "July 10, 2025",
    author: "RCG Insights Team",
    image: "/images/blog_ai_future.jpg", // Placeholder image
    slug: "the-future-of-ai-in-business", // Unique slug for dynamic routing
  },
  {
    id: 2,
    title: "Cloud Migration Strategies: A Step-by-Step Guide for Enterprises",
    excerpt: "Moving to the cloud can be complex. This guide breaks down essential strategies for a seamless, secure, and cost-effective migration, ensuring minimal disruption.",
    date: "June 28, 2025",
    author: "Cloud Experts",
    image: "/images/blog_cloud_migration.jpg", // Placeholder image
    slug: "cloud-migration-strategies",
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of Remote Work: Best Practices",
    excerpt: "As remote work becomes the norm, cybersecurity threats evolve. Learn crucial best practices to protect your data, networks, and employees from modern cyber risks.",
    date: "June 15, 2025",
    author: "Security Analysts",
    image: "/images/blog_cybersecurity.jpg", // Placeholder image
    slug: "cybersecurity-remote-work-best-practices",
  },
  {
    id: 4,
    title: "Custom Software vs. Off-the-Shelf: Making the Right Choice",
    excerpt: "Deciding between custom-built software and ready-made solutions? We explore the pros and cons to help you make an informed decision that aligns with your business goals.",
    date: "May 30, 2025",
    author: "Dev Team",
    image: "/images/blog_custom_software.jpg", // Placeholder image
    slug: "custom-software-vs-off-the-shelf",
  },
  {
    id: 5,
    title: "Leveraging Big Data for Predictive Business Outcomes",
    excerpt: "Big Data is more than just volume; it's about insights. Discover how to process and analyze vast datasets to predict market trends, customer behavior, and operational efficiencies.",
    date: "May 18, 2025",
    author: "Data Scientists",
    image: "/images/blog_big_data.jpg", // Placeholder image
    slug: "leveraging-big-data-for-predictive-outcomes",
  },
  {
    id: 6,
    title: "DevOps for Startups: Accelerating Your Development Cycle",
    excerpt: "For startups, speed and efficiency are critical. Learn how integrating DevOps practices can streamline your development, deployment, and operational processes for rapid growth.",
    date: "April 25, 2025",
    author: "DevOps Team",
    image: "/images/blog_devops.jpg", // Placeholder image
    slug: "devops-for-startups",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Blog Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/images/blog_hero_bg.jpg" // Placeholder: Replace with a relevant blog/insights themed image
          alt="RCG Tech Solutions Blog"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105"
        />
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darker overlay */}

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Our Latest <span className="text-[#bfa055]">Insights</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert articles, industry trends, and deep dives into AI, IT, and digital transformation.
          </p>
        </div>
      </section>
      {/* <GoldDivider /> */}

      {/* Blog Posts Grid Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Recent <span className="text-[#bfa055]">Articles</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100"
                >
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110" // Image zoom on hover
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      By {post.author} on {post.date}
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/blogs/${post.slug}`} // Dynamic link to blog detail page
                      className="inline-block self-start px-6 py-2 rounded-full font-semibold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out text-sm mt-auto"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-xl col-span-full text-center">No blog posts available yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
      {/* <GoldDivider /> */}

      {/* Optional: Newsletter Signup CTA */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Stay Updated with Our <span className="text-[#bfa055]">Latest Insights</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Subscribe to our newsletter for exclusive articles, industry news, and expert analysis delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bfa055]"
              aria-label="Enter your email for newsletter subscription"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out text-lg shadow-md flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
