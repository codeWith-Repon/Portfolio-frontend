import About from '@/components/Public/About';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About | Repon – Full-Stack Developer & Tech Enthusiast',
  description:
    'Learn more about Repon — a passionate Full-Stack Developer specializing in modern web technologies like React, Next.js, Node.js, and MongoDB. Discover his journey, skills, and what drives his love for coding and problem-solving.',
};

const AboutPage = () => {
  return (
    <div className='mt-20 md:mt-30 lg:mt-0 flex items-center justify-center min-h-screen'>
      <About />
    </div>
  );
};

export default AboutPage;
