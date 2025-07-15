// src/app/blogs/[slug]/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// --- Blog Posts Data (same as in your main blog page) ---
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch in 2025",
    excerpt: "Artificial Intelligence continues to reshape industries. Discover the key trends, from hyper-personalization to ethical AI, that will define business in the coming year.",
    date: "July 10, 2025",
    author: "RCG Insights Team",
    image: "/images/blog_ai_future.jpg",
    slug: "the-future-of-ai-in-business",
    readTime: "8 min read",
    content: `
      <h2>The AI Revolution is Just Beginning</h2>
      <p>Artificial Intelligence has moved from science fiction to business reality, transforming how companies operate, make decisions, and interact with customers. As we look toward 2025, several key trends are emerging that will define the next phase of AI adoption in business.</p>
      
      <h3>1. Hyper-Personalization at Scale</h3>
      <p>Companies are leveraging AI to deliver unprecedented levels of personalization. From product recommendations to customer service interactions, AI systems are becoming more sophisticated at understanding individual preferences and behaviors.</p>
      
      <h3>2. Ethical AI and Responsible Innovation</h3>
      <p>As AI becomes more prevalent, businesses are focusing on ethical considerations. This includes ensuring fairness in AI algorithms, protecting user privacy, and maintaining transparency in automated decision-making processes.</p>
      
      <h3>3. AI-Powered Decision Making</h3>
      <p>Organizations are increasingly relying on AI to support strategic decision-making. Advanced analytics and machine learning models are helping businesses predict market trends, optimize operations, and identify new opportunities.</p>
      
      <h3>The Road Ahead</h3>
      <p>The future of AI in business is bright, but it requires careful planning and implementation. Companies that embrace these trends while maintaining a focus on ethics and user experience will be best positioned for success.</p>
    `
  },
  {
    id: 2,
    title: "Cloud Migration Strategies: A Step-by-Step Guide for Enterprises",
    excerpt: "Moving to the cloud can be complex. This guide breaks down essential strategies for a seamless, secure, and cost-effective migration, ensuring minimal disruption.",
    date: "June 28, 2025",
    author: "Cloud Experts",
    image: "/images/blog_cloud_migration.jpg",
    slug: "cloud-migration-strategies",
    readTime: "12 min read",
    content: `
      <h2>Why Cloud Migration Matters</h2>
      <p>Cloud migration has become essential for modern businesses seeking scalability, cost-efficiency, and innovation. This comprehensive guide will walk you through the key strategies for successful enterprise cloud adoption.</p>
      
      <h3>Phase 1: Assessment and Planning</h3>
      <p>Before migrating to the cloud, conduct a thorough assessment of your current infrastructure, applications, and business requirements. This phase includes:</p>
      <ul>
        <li>Inventory of existing systems and applications</li>
        <li>Analysis of current costs and performance metrics</li>
        <li>Identification of migration priorities and dependencies</li>
        <li>Selection of appropriate cloud services and providers</li>
      </ul>
      
      <h3>Phase 2: Migration Strategy Selection</h3>
      <p>Choose the right migration approach based on your specific needs:</p>
      <ul>
        <li><strong>Lift and Shift:</strong> Moving applications as-is to the cloud</li>
        <li><strong>Replatforming:</strong> Making minor optimizations during migration</li>
        <li><strong>Refactoring:</strong> Redesigning applications for cloud-native architecture</li>
      </ul>
      
      <h3>Phase 3: Implementation and Testing</h3>
      <p>Execute your migration plan with careful attention to security, performance, and business continuity. Implement robust testing procedures to ensure everything works as expected.</p>
    `
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of Remote Work: Best Practices",
    excerpt: "As remote work becomes the norm, cybersecurity threats evolve. Learn crucial best practices to protect your data, networks, and employees from modern cyber risks.",
    date: "June 15, 2025",
    author: "Security Analysts",
    image: "/images/blog_cybersecurity.jpg",
    slug: "cybersecurity-remote-work-best-practices",
    readTime: "10 min read",
    content: `
      <h2>The New Cybersecurity Landscape</h2>
      <p>Remote work has fundamentally changed how we approach cybersecurity. With employees accessing company resources from various locations and devices, traditional perimeter-based security models are no longer sufficient.</p>
      
      <h3>Key Security Challenges in Remote Work</h3>
      <p>Remote work introduces several security challenges that organizations must address:</p>
      <ul>
        <li>Unsecured home networks and personal devices</li>
        <li>Increased phishing and social engineering attacks</li>
        <li>Difficulty in monitoring and controlling access</li>
        <li>Data loss and unauthorized access risks</li>
      </ul>
      
      <h3>Essential Security Measures</h3>
      <p>Implement these critical security practices to protect your remote workforce:</p>
      <ul>
        <li><strong>Multi-Factor Authentication (MFA):</strong> Add extra layers of security beyond passwords</li>
        <li><strong>VPN Solutions:</strong> Secure encrypted connections for remote access</li>
        <li><strong>Regular Security Training:</strong> Keep employees informed about latest threats</li>
        <li><strong>Endpoint Protection:</strong> Secure all devices accessing company resources</li>
      </ul>
      
      <h3>Building a Security-First Culture</h3>
      <p>Creating a culture of security awareness is crucial for long-term success. Regular training, clear policies, and ongoing communication help ensure that security remains a priority for all team members.</p>
    `
  },
  {
    id: 4,
    title: "Custom Software vs. Off-the-Shelf: Making the Right Choice",
    excerpt: "Deciding between custom-built software and ready-made solutions? We explore the pros and cons to help you make an informed decision that aligns with your business goals.",
    date: "May 30, 2025",
    author: "Dev Team",
    image: "/images/blog_custom_software.jpg",
    slug: "custom-software-vs-off-the-shelf",
    readTime: "9 min read",
    content: `
      <h2>The Software Decision Dilemma</h2>
      <p>Every business faces the critical decision of whether to build custom software or purchase off-the-shelf solutions. This choice can significantly impact your operations, budget, and long-term success.</p>
      
      <h3>Off-the-Shelf Solutions: Pros and Cons</h3>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Lower initial cost and faster deployment</li>
        <li>Proven functionality and reliability</li>
        <li>Regular updates and support</li>
        <li>Established user community and documentation</li>
      </ul>
      
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li>Limited customization options</li>
        <li>Ongoing licensing costs</li>
        <li>Dependence on vendor roadmap</li>
        <li>May not fit unique business processes</li>
      </ul>
      
      <h3>Custom Software: Pros and Cons</h3>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Perfect fit for your specific needs</li>
        <li>Full control over features and functionality</li>
        <li>Competitive advantage through unique capabilities</li>
        <li>No licensing fees or vendor lock-in</li>
      </ul>
      
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li>Higher development costs and time</li>
        <li>Ongoing maintenance responsibility</li>
        <li>Development and deployment risks</li>
        <li>Requires internal technical expertise</li>
      </ul>
      
      <h3>Making the Right Choice</h3>
      <p>Consider factors like budget, timeline, unique requirements, and long-term strategy when making this decision. Often, a hybrid approach combining both custom and off-the-shelf solutions provides the best balance.</p>
    `
  },
  {
    id: 5,
    title: "Leveraging Big Data for Predictive Business Outcomes",
    excerpt: "Big Data is more than just volume; it's about insights. Discover how to process and analyze vast datasets to predict market trends, customer behavior, and operational efficiencies.",
    date: "May 18, 2025",
    author: "Data Scientists",
    image: "/images/blog_big_data.jpg",
    slug: "leveraging-big-data-for-predictive-outcomes",
    readTime: "11 min read",
    content: `
      <h2>The Power of Predictive Analytics</h2>
      <p>Big Data has evolved from a buzzword to a critical business asset. When properly leveraged, vast datasets can provide unprecedented insights into customer behavior, market trends, and operational efficiencies.</p>
      
      <h3>Understanding Big Data Components</h3>
      <p>Big Data is characterized by the "5 Vs":</p>
      <ul>
        <li><strong>Volume:</strong> Massive amounts of data generated daily</li>
        <li><strong>Velocity:</strong> High speed of data generation and processing</li>
        <li><strong>Variety:</strong> Different types and formats of data</li>
        <li><strong>Veracity:</strong> Quality and accuracy of data</li>
        <li><strong>Value:</strong> Meaningful insights derived from data</li>
      </ul>
      
      <h3>Predictive Analytics Applications</h3>
      <p>Organizations are using predictive analytics in various ways:</p>
      <ul>
        <li><strong>Customer Behavior Prediction:</strong> Anticipating purchasing patterns and preferences</li>
        <li><strong>Market Trend Forecasting:</strong> Identifying emerging opportunities and threats</li>
        <li><strong>Operational Optimization:</strong> Improving efficiency and reducing costs</li>
        <li><strong>Risk Management:</strong> Identifying potential issues before they occur</li>
      </ul>
      
      <h3>Implementation Best Practices</h3>
      <p>To successfully implement predictive analytics:</p>
      <ul>
        <li>Start with clear business objectives</li>
        <li>Ensure data quality and governance</li>
        <li>Invest in the right tools and technologies</li>
        <li>Build skilled data teams</li>
        <li>Foster a data-driven culture</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "DevOps for Startups: Accelerating Your Development Cycle",
    excerpt: "For startups, speed and efficiency are critical. Learn how integrating DevOps practices can streamline your development, deployment, and operational processes for rapid growth.",
    date: "April 25, 2025",
    author: "DevOps Team",
    image: "/images/blog_devops.jpg",
    slug: "devops-for-startups",
    readTime: "7 min read",
    content: `
      <h2>Why DevOps Matters for Startups</h2>
      <p>Startups face unique challenges: limited resources, tight deadlines, and the need to iterate quickly. DevOps practices can help startups overcome these challenges by streamlining development processes and improving collaboration.</p>
      
      <h3>Core DevOps Principles for Startups</h3>
      <p>Focus on these key principles to maximize impact:</p>
      <ul>
        <li><strong>Automation:</strong> Automate repetitive tasks to save time and reduce errors</li>
        <li><strong>Continuous Integration:</strong> Integrate code changes frequently and automatically</li>
        <li><strong>Continuous Deployment:</strong> Deploy code changes quickly and reliably</li>
        <li><strong>Monitoring:</strong> Monitor applications and infrastructure proactively</li>
        <li><strong>Collaboration:</strong> Break down silos between development and operations</li>
      </ul>
      
      <h3>Essential DevOps Tools for Startups</h3>
      <p>Start with these cost-effective tools:</p>
      <ul>
        <li><strong>Version Control:</strong> Git and GitHub/GitLab</li>
        <li><strong>CI/CD:</strong> GitHub Actions, GitLab CI, or Jenkins</li>
        <li><strong>Containerization:</strong> Docker and Kubernetes</li>
        <li><strong>Cloud Platforms:</strong> AWS, Google Cloud, or Azure</li>
        <li><strong>Monitoring:</strong> Prometheus, Grafana, or cloud-native solutions</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Begin your DevOps journey by:</p>
      <ul>
        <li>Implementing version control for all code</li>
        <li>Setting up basic CI/CD pipelines</li>
        <li>Automating testing and deployment</li>
        <li>Establishing monitoring and alerting</li>
        <li>Creating a culture of continuous improvement</li>
      </ul>
    `
  },
];

interface BlogDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = await params;
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, return 404
  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="mb-4">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-[#bfa055] hover:text-[#a8863f] transition-colors duration-300"
            >
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
            <span>By {post.author}</span>
            <span className="hidden sm:inline">•</span>
            <span>{post.date}</span>
            <span className="hidden sm:inline">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.7',
              color: '#374151'
            }}
          />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                Published on {post.date} by {post.author}
              </div>
              <div className="flex gap-4">
                <Link 
                  href="/blogs"
                  className="px-6 py-2 rounded-full font-semibold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Related <span className="text-[#bfa055]">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedPost.date} • {relatedPost.readTime}
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${relatedPost.slug}`}
                      className="inline-block px-6 py-2 rounded-full font-semibold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Stay Updated with Our <span className="text-[#bfa055]">Latest Insights</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get exclusive articles and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bfa055]"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}