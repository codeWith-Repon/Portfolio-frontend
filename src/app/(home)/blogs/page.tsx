import BlogCard from '@/components/Public/BlogCard';
import { IBlog } from '@/types';
import React from 'react';

export const metadata = {
  title: 'Blog | Repon – Web Development, Programming & Tech Insights',
  description:
    'Read Repon’s latest blogs on web development, JavaScript, React, Next.js, Node.js, and modern programming practices. Explore coding tutorials, tips, and insights from real-world development experience.',
};

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
    next: { revalidate: 60 },
  });
  const { data: blogData } = await res.json();

  return (
    <div className='w-full px-[12%]  grid grid-cols-auto  my-25 gap-5 '>
      {blogData &&
        blogData.data.map((blog: IBlog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
    </div>
  );
};

export default BlogsPage;
