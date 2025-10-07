import React from 'react';
import { IProject } from '@/types';
import Link from 'next/link';
import { Globe } from 'lucide-react';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      key={project.slug}
      className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-gray-300 '
      style={{ backgroundImage: `url(${project.thumbnails[0]})` }}
    >
      <div
        className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                   -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                   duration-500 group-hover:bottom-7'
      >
        <div>
          <h2 className='font-semibold text-gray-700'>{project.title}</h2>
        </div>

        <Globe className='group-hover:text-sky-600 text-sky-500 transition-all duration-300' />
      </div>
    </Link>
  );
};

export default ProjectCard;
