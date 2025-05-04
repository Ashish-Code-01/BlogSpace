import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar';
import BlogCard from '../components/BlogCard';

// Import blog post data
const blogPosts = [
  require('../components/blogPostJSON/how-to-learn-javascript.json'),
  require('../components/blogPostJSON/react-fundamentals-guide.json'),
  require('../components/blogPostJSON/mastering-css-grid.json'),
  require('../components/blogPostJSON/typescript-essentials.json')
];

function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to BlogSpace
          </h1>
          <p className="text-xl text-gray-600">
            Your one-stop solution for all coding needs
          </p>
        </div>

        <SearchBar />

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Popular Blogs
          </h2>
          <Suspense fallback={
            <div className="text-center text-gray-600">Loading blog posts...</div>
          }>
            <BlogGrid />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
