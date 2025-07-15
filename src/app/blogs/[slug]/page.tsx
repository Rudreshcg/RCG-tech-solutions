// components/BlogPostDetail.jsx
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// --- Dummy Data for Full Blog Post Content ---
// In a real application, this data would come from an API, CMS, or markdown files.
const fullBlogContent = [
  {
    slug: "the-future-of-ai-in-business",
    title: "The Future of AI in Business: Trends to Watch in 2025",
    author: "RCG Insights Team",
    date: "July 10, 2025",
    image: "/images/blog_ai_future.jpg",
    content: `
      <p>Artificial Intelligence is no longer just a futuristic concept; it's a fundamental driver of business transformation. As we move further into 2025, several key trends are emerging that will redefine how enterprises operate, innovate, and interact with their customers.</p>
      
      <h3>Hyper-Personalization at Scale</h3>
      <p>One of the most significant shifts is the move towards hyper-personalization. AI algorithms are becoming incredibly adept at analyzing vast amounts of customer data to deliver highly tailored experiences, from personalized product recommendations to customized marketing messages. This level of precision not only enhances customer satisfaction but also drives higher conversion rates and brand loyalty.</p>
      
      <h3>Ethical AI and Trust</h3>
      <p>As AI becomes more pervasive, the focus on ethical AI development and deployment is intensifying. Businesses are increasingly prioritizing transparency, fairness, and accountability in their AI systems. Building trust with consumers and stakeholders through responsible AI practices will be crucial for long-term success and adoption.</p>
      
      <h3>AI-Powered Automation Beyond RPA</h3>
      <p>While Robotic Process Automation (RPA) has been a significant step, AI is now enabling more intelligent and adaptive automation. This includes cognitive automation that can understand context, learn from interactions, and handle more complex, unstructured tasks, freeing up human talent for strategic initiatives.</p>
      
      <h3>Edge AI for Real-time Decisions</h3>
      <p>The proliferation of IoT devices is driving the need for AI processing closer to the data source – at the "edge." Edge AI enables real-time decision-making, reduces latency, and enhances data privacy, making it invaluable for applications in manufacturing, healthcare, and smart cities.</p>
      
      <h3>AI as a Service (AIaaS)</h3>
      <p>The accessibility of AI is expanding rapidly through AI-as-a-Service models. This allows businesses of all sizes to integrate sophisticated AI capabilities into their operations without needing extensive in-house AI expertise or infrastructure, democratizing access to powerful tools.</p>
      
      <p>At RCG Tech Solutions, we are at the forefront of these trends, helping businesses navigate the complexities of AI adoption and leverage its full potential. Contact us to explore how intelligent AI solutions can future-proof your enterprise.</p>
    `,
  },
  {
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies: A Step-by-Step Guide for Enterprises",
    author: "Cloud Experts",
    date: "June 28, 2025",
    image: "/images/blog_cloud_migration.jpg",
    content: `
      <p>Migrating your enterprise to the cloud is a strategic move that can unlock unparalleled scalability, flexibility, and cost efficiency. However, a successful migration requires meticulous planning and execution. Here’s a step-by-step guide to help you navigate the process.</p>

      <h3>1. Assess and Plan</h3>
      <p>Before moving anything, conduct a thorough assessment of your existing IT infrastructure, applications, and data. Identify dependencies, performance requirements, and security considerations. Develop a comprehensive migration strategy that outlines your goals, timelines, and the specific cloud model (IaaS, PaaS, SaaS) and provider (AWS, Azure, GCP) that best fits your needs.</p>

      <h3>2. Choose Your Migration Strategy</h3>
      <p>There are several common migration strategies, often referred to as the "6 Rs": Rehost (lift-and-shift), Refactor, Revise, Rebuild, Replace, and Retire. The best strategy depends on your application's architecture, business criticality, and budget. Often, a hybrid approach combining multiple strategies is most effective.</p>

      <h3>3. Prepare Your Environment</h3>
      <p>Set up your cloud environment with the necessary networking, security configurations, identity and access management (IAM) policies, and monitoring tools. Ensure your teams are trained on cloud operations and best practices.</p>

      <h3>4. Migrate Applications and Data</h3>
      <p>Execute the migration plan in phases, starting with less critical applications. Use automated tools where possible to minimize manual effort and errors. For data, consider strategies like online data transfer, offline data transfer, or hybrid cloud storage solutions.</p>

      <h3>5. Optimize and Validate</h3>
      <p>Once migrated, rigorously test your applications for performance, security, and functionality in the cloud environment. Continuously monitor resource utilization and costs, optimizing configurations to ensure you are getting the most value from your cloud investment.</p>

      <h3>6. Secure and Govern</h3>
      <p>Implement robust cloud security measures, including encryption, access controls, and regular security audits. Establish governance policies to manage cloud resources, ensure compliance, and maintain operational efficiency.</p>

      <p>Cloud migration is a journey, not a destination. With careful planning and the right expertise, RCG Tech Solutions can help your enterprise achieve a seamless and successful transition to the cloud, unlocking new levels of agility and innovation.</p>
    `,
  },
  // Add full content for other blog posts here following the same structure
  // For brevity, only two detailed posts are included.
  // You would add:
  // { slug: "cybersecurity-remote-work-best-practices", title: "...", content: "..." },
  // { slug: "custom-software-vs-off-the-shelf", title: "...", content: "..." },
  // { slug: "leveraging-big-data-for-predictive-outcomes", title: "...", content: "..." },
  // { slug: "devops-for-startups", title: "...", content: "..." },
];

export default function BlogPostDetail({ params }) {
  // In Next.js App Router, params.slug would contain the slug from the URL
  // In Next.js Pages Router, you'd use useRouter and router.query.slug
  const slug = params?.slug; // Assuming App Router structure for example

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      // Simulate fetching data
      const foundPost = fullBlogContent.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        setLoading(false);
      } else {
        setError("Blog post not found.");
        setLoading(false);
      }
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 text-gray-900">
        <p className="text-xl">Loading blog post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 text-gray-900">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 text-gray-900">
        <p className="text-xl">No post selected.</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-white to-gray-50 text-gray-900 py-16 md:py-24 px-6 overflow-hidden">
        {/* Hero for individual blog post */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-xl shadow-lg mb-12">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            quality={80}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10 flex items-end p-6 md:p-10">
            <div className="text-white relative z-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-white/80 mt-2">
                By {post.author} on {post.date}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
          {/* Blog Post Content */}
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <a
              href="/blogs" // Link back to the main blog page
              className="inline-block px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out text-lg shadow-md"
              aria-label="Back to Blog"
            >
              ← Back to All Articles
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
