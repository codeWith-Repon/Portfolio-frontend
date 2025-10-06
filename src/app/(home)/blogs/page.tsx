import BlogCard from '@/components/Public/BlogCard';
import { IBlog } from '@/types';
import React from 'react';

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
    cache: 'no-store',
  });
  const { data: blogData } = await res.json();


  return (
    <div className='mt-25 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {blogData.map((blog: IBlog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPage;
