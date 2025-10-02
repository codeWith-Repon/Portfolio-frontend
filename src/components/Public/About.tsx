import Image from 'next/image';
import React from 'react';
import { assets } from '../../../public/assets';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src={assets.user_image}
            alt='user'
            className='w-full rounded-3xl'
          />
        </div>
        <div className='flex-1'>
          <div className='mb-10 max-w-2xl flex flex-col gap-1.5 space-x-0'>
            <p>
              Hi, I’m Repon Ahmed, a passionate Full-Stack Web Developer with a
              strong drive for creating impactful and scalable digital
              solutions.
            </p>
            <p>
              I enjoy solving complex problems, designing scalable system
              architectures, and crafting seamless UI/UX experiences that bring
              ideas to life. My expertise spans across both frontend and backend
              development, allowing me to bridge the gap between design and
              functionality.
            </p>

            <p>
              Currently, I’m exploring advanced concepts in Backend Architecture
              and System Design, while also diving deeper into modern frameworks
              and emerging technologies.
            </p>

            <p>
              Beyond coding, I’m a tech explorer—always curious to learn,
              experiment, and adapt with the ever-evolving world of technology.
            </p>
          </div>

          {/* <h4 className='my-6 text-gray-700 font-Ovo '>Tech Stack</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default About;
