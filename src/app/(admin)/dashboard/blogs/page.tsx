import { IBlog } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from 'sonner';

const Blogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    toast.error('Failed to fetch blogs');
  }
  const { data: blogData } = await res.json();
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold'>All Blogs</h1>
        <div className=''>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'>
            <Link href={'/dashboard/blogs/create-blog'}>Add New Blog</Link>
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        {blogData.map((blog: IBlog) => (
          <div key={blog.slug} className='border p-3 rounded-md'>
            <Link
              href={`/dashboard/blogs/${blog.slug}`}
              className='flex items-center justify-between'
            >
              <h2 className='text-base font-semibold text-gray-700'>
                {blog.title}
              </h2>
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={150}
                height={150}
                className='w-16 h-16 object-cover rounded-md'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
