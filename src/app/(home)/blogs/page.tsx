import BlogCard from '@/components/Public/BlogCard';
import { IBlog } from '@/types';
import React from 'react';

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
    cache: 'no-store',
  });
  const { data: blogData } = await res.json();

  return (
    <div className='w-full px-[12%]  grid grid-cols-auto  my-25 gap-5 '>
      {blogData.map((blog: IBlog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPage;
