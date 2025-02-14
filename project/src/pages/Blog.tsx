import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types';
import { Calendar, User } from 'lucide-react';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          seller:users(*)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        return;
      }

      setPosts(data || []);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the latest trends and insights from our sellers
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {post.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{post.seller.full_name || 'Anonymous Seller'}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{post.content}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}