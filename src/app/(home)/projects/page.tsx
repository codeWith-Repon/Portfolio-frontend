import ProjectCard from '@/components/ProjectCard';
import { IProject } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects | Repon – Web Development Portfolio',
  description:
    'Explore Repon’s web development projects, built using React, Next.js, Node.js, and other modern technologies. See live demos and case studies of real-world applications.',
};

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    cache: 'no-store',
  });

  const { data } = await res.json();

  return (
    <div className='w-full px-[12%] py-20'>
      <div className='grid grid-cols-auto  my-10 gap-5'>
        {data.map((project: IProject) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
