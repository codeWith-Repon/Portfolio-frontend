import { IBlog } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className='border border-gray-200 rounded-lg overflow-hidden'>
      <Link
        href={`/blogs/${blog.slug}`}
        className='max-w-sm rounded-lg shadow-sm '
      >
        <Image
          className='rounded-t-lg object-cover '
          src={blog.thumbnail}
          width={400}
          height={200}
          alt=''
        />

        <div className='py-5 px-2'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-700 '>
            {blog.title}
          </h5>
          <Link
            href={`/blogs/${blog.slug}`}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
