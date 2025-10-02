import Image from 'next/image';
import React from 'react';
import { assets } from '../../../public/assets';

export const workData = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: '/work-1.png',
  },
  {
    title: 'Geo based app',
    description: 'Mobile App',
    bgImage: '/work-2.png',
  },
  {
    title: 'Photography site',
    description: 'Web Design',
    bgImage: '/work-3.png',
  },
  {
    title: 'UI/UX designing',
    description: 'UI/UX Design',
    bgImage: '/work-4.png',
  },
];

const ProjectCard = () => {
  return (
    <div className='grid grid-cols-auto  my-10 gap-5'>
      {workData.map((project, index) => (
        <div
          key={index}
          className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
          style={{ backgroundImage: `url(${project.bgImage})` }}
        >
          <div
            className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                   -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                   duration-500 group-hover:bottom-7'
          >
            <div>
              <h2 className='font-semibold'>{project.title}</h2>
              <p className='text-sm text-gray-700'>{project.description}</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <Image src={assets.send_icon} alt='send icon' className='w-5' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
