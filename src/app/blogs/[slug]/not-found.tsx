// src/app/blogs/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the blog post you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/blogs"
            className="inline-block px-8 py-3 rounded-full font-semibold text-black bg-[#bfa055] hover:bg-[#a8863f] transition duration-300 ease-in-out"
          >
            Back to Blog
          </Link>
          
          <div className="pt-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Or go back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}