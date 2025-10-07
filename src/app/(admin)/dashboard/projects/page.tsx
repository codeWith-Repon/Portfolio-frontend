'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Projects = () => {
  const router = useRouter();
  return (
    <div className='max-w-7xl mx-auto mt-3'>
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
    </div>
  );
};

export default Projects;
