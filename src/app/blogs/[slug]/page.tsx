import { Metadata } from "next";
import BlogPostDetailClient from "../../components/blogs/BlogPostDetailClient";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Blog`,
  };
}

export default function Page({ params }: PageProps) {
  return <BlogPostDetailClient slug={params.slug} />;
}
