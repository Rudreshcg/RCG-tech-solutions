// src/app/blogs/[slug]/page.tsx
import { Metadata } from 'next'; // Import Metadata type
import BlogPostDetailClient from "../../components/blogs/BlogPostDetailClient";

// You don't need to define PageProps separately if you rely on Next.js's
// implicit typing for the `Page` component's props.
// However, to explicitly type it for clarity and strictness:
interface PageProps {
  params: {
    slug: string;
  };
}

// Optional: If you intend to use generateMetadata, define its type explicitly.
// This is often where the "Promise" type inference can occur if not handled.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = fullBlogContent.find((p) => p.slug === params.slug);

  return {
    title: post ? post.title : 'Blog Post Not Found',
    description: post ? post.content.substring(0, 150).replace(/<[^>]*>/g, '') + '...' : 'Details about a blog post.',
  };
}

export default function Page({ params }: PageProps) {
  return <BlogPostDetailClient slug={params.slug} />;
}


const fullBlogContent = [
  {
    slug: "the-future-of-ai-in-business",
    title: "The Future of AI in Business: Trends to Watch in 2025",
    author: "RCG Insights Team",
    date: "July 10, 2025",
    image: "/images/blog_ai_future.jpg",
    content: `...`,
  },
  {
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies: A Step-by-Step Guide for Enterprises",
    author: "Cloud Experts",
    date: "June 28, 2025",
    image: "/images/blog_cloud_migration.jpg",
    content: `...`,
  },
];