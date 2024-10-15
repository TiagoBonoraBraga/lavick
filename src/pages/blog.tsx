// /pages/index.tsx
import Link from 'next/link';
import { posts } from '../api/posts.mocks';

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              <h3 >Ler mais</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
