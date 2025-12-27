'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { assets } from '../../../public/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TechStack = () => {
  const techs = [
    { icon: assets.js, name: 'JavaScript' },
    { icon: assets.ts, name: 'TypeScript' },
    { icon: assets.git, name: 'Git' },
    { icon: assets.react, name: 'React.js' },
    { icon: assets.nextjs, name: 'Next.js' },
    { icon: assets.nodejs, name: 'Node.js' },
    { icon: assets.mongodb, name: 'MongoDB' },
    { icon: assets.tailwind, name: 'Tailwind' },
  ];

  return (
    <section
      id='tech-stack'
      className='section-animate py-15 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background Decorative Element */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='stack-title text-center mb-16'>
          <h2 className='font-roboto font-bold text-4xl sm:text-5xl text-foreground mb-4'>
            Technologies & Tools
          </h2>
          <p className='text-secondary font-poppins max-w-2xl mx-auto'>
            The modern tech stack I am mastering to build scalable,
            high-performance Full-Stack solutions.
          </p>
        </div>

        {/* Explicit Responsive Grid - NO grid-cols-auto */}
        <div className='stack-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {techs.map((tech, index) => (
            <div
              key={index}
              className='gsap-stack-card p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group cursor-default'
            >
              <div className='relative w-12 h-12 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className='object-contain transition-all duration-500'
                />
              </div>
              <h3 className='font-poppins font-semibold text-foreground text-center text-sm sm:text-base'>
                {tech.name}
              </h3>

              {/* Subtle Glow on Hover */}
              <div className='absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
