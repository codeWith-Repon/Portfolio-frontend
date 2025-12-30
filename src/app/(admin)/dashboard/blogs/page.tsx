'use client';
import { deleteBlog } from '@/actions/Blog.actions';
import { IBlog } from '@/types';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Blogs = () => {
  const [blogData, setBlogData] = useState<IBlog[]>([]);
  const router = useRouter();

  const fetchBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
      cache: 'no-cache',
    });

    if (!res.ok) {
      toast.error('Failed to fetch blogs');
    }
    const { data } = await res.json();

    setBlogData(data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = (slug: string) => {
    router.push(`/dashboard/blogs/update/${slug}`);
  };

  const handleDelete = async (slug: string) => {
    const token = localStorage.getItem('accessToken');
    try {
      const result = await deleteBlog(slug, token!);

      if (result.success) {
        toast.success('Blog deleted successfully');
        fetchBlogs();
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

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
        {blogData &&
          blogData.map((blog: IBlog) => (
            <div className='border p-3 rounded-md' key={blog.slug}>
              <div className=''>
                <Link
                  href={`/blogs/${blog.slug}`}
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
              <div className='flex gap-3 items-center text-gray-600'>
                <button
                  className='text-red-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={() => handleDelete(blog.slug)}
                >
                  <Trash2 className='w-6 h-6' />
                </button>
                <button
                  onClick={() => handleEdit(blog.slug)}
                  className='text-green-500 cursor-pointer disabled:opacity-50'
                >
                  <Edit className='w-6 h-6' />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
