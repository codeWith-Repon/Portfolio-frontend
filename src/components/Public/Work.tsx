import Image from 'next/image';
import React from 'react';
import { assets } from '../../../public/assets';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>My portfolio</h4>
      <h2 className='text-center text-5xl'>
        A showcase of my recent work, personal projects.
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className=''>
        <ProjectCard />
      </div>
      <Link
        href='/projects'
        className='w-max flex items-center justify-center gap-2 
           text-gray-700 border-[0.5px] border-gray-700 
           rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 '
      >
        Show more{' '}
        <Image
          src={assets.right_arrow_bold}
          alt='Right arrow'
          className='w-4'
        />
      </Link>
    </div>
  );
};

export default Work;
