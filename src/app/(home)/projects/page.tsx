import ProjectCard from '@/components/ProjectCard';
import { IProject } from '@/types';
import React from 'react';

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
