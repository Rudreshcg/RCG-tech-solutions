// src/app/blogs/[slug]/page.tsx
import BlogPostDetailClient from "../../components/blogs/BlogPostDetailClient";

// Define the PageProps interface with the correct type for params
interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <BlogPostDetailClient slug={params.slug} />;
}