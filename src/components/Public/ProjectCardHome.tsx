import React from 'react';
import { IProject } from '@/types';
import ProjectCard from './ProjectCard';

const ProjectCardHome = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects?isFeatured=true`,
    {
      next: { revalidate: 86400 },  //24 h
    }
  );

  const { data: projectData } = await result.json();
  const topData = projectData.data.slice(0, 4);

  return (
    <div className='grid grid-cols-auto  my-10 gap-5'>
      {topData.map((project: IProject) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectCardHome;
