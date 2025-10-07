'use client';

import Loading from '@/components/Loading';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/projects`,
          {
            cache: 'no-cache',
          }
        );
        const { data } = await res.json();
        setProjects(data);
      } catch (error) {
        console.log('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto mt-3 space-y-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <button
          onClick={() => router.push('/dashboard/projects/add')}
          type='button'
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'
        >
          Add Project
        </button>
      </div>

      <div className='flex flex-col gap-2'>
        {projects.map((item) => (
          <Link key={item.slug} href={`/projects/${item.slug}`}>
            <div className='flex items-center justify-between border p-3 rounded-md'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>{item.title}</h1>
                <p className='text-gray-600'>{item.description}</p>
              </div>
              <Image
                src={item.thumbnails[0]}
                alt={item.title}
                width={200}
                height={200}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
