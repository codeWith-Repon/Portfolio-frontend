import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`,
    {
      cache: 'no-store',
    }
  );
  const { data } = await res.json();

  return {
    title:
      `${data.title} | Repon's Portfolio` ||
      'Projects | Repon – Web Development Portfolio',
    description:
      data.description ||
      'Explore Repon’s web development projects, built using React, Next.js, Node.js, and other modern technologies. See live demos and case studies of real-world applications.',
  };
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`,
    {
      cache: 'no-store',
    }
  );
  const { data } = await res.json();

  return (
    <div className='mt-22 max-w-6xl mx-auto px-5 flex flex-col gap-4'>
      <div className='h-[400px] mb-10'>
        <Image
          src={data.thumbnails[0]}
          alt={data.title}
          width={300}
          height={300}
          className='w-full h-full object-contain rounded-lg'
        />
      </div>
      <Link
        href={data.liveUrl}
        target='_blank'
        className='text-xl font-semibold text-gray-700 flex items-center gap-2'
      >
        Live Preview
        <Globe className='text-sky-500 group-hover:text-sky-600 transition-all duration-300' />
      </Link>
      <div className=''>
        <h1 className='text-3xl font-bold text-gray-700'>{data.title}</h1>
        <p className='mt-2 w-1/2 text-gray-600'>{data.description}</p>
      </div>

      {data.githubUrls && (
        <div className='mt-6'>
          <h1 className='text-2xl font-semibold text-gray-700 mb-3 flex items-center gap-2'>
            Git Repository
            <Github className='text-gray-600' />
          </h1>
          {data.githubUrls.frontend && data.githubUrls.backend ? (
            <div className='flex flex-col sm:flex-row gap-3'>
              <Link
                href={data.githubUrls.frontend}
                target='_blank'
                className='text-blue-600 hover:text-blue-800 underline flex items-center gap-2'
              >
                🖥️ Frontend
              </Link>

              <Link
                href={data.githubUrls.backend}
                target='_blank'
                className='text-blue-600 hover:text-blue-800 underline flex items-center gap-2'
              >
                ⚙️ Backend
              </Link>
            </div>
          ) : null}
        </div>
      )}
      <div className=''>
        <h2 className='text-2xl font-semibold text-gray-700 mb-3'>Features</h2>
        <ul className='space-y-2'>
          {data.features.map((feature: string, index: number) => (
            <li
              key={index}
              className='flex items-center gap-2 text-gray-700 text-sm bg-gray-50 p-2 rounded-md hover:bg-gray-100 transition w-1/2'
            >
              <span className='w-2 h-2 bg-green-500 rounded-full'></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold text-gray-700'>Technologies</h1>
        <ul className='flex flex-wrap gap-2'>
          {data.technologies.map((tech: string, index: number) => (
            <li
              key={index}
              className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition'
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-auto my-10 gap-5'>
        {data.thumbnails.map((thumbnail: string, index: number) => (
          <Image
            key={index}
            src={thumbnail}
            alt={data.title}
            width={300}
            height={300}
            className=' object-contain rounded-lg'
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
