import BlogPostDetailClient from "../../components/blogs/BlogPostDetailClient";

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPostDetailClient slug={params.slug} />;
}


