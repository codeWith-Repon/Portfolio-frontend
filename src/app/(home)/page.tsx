import About from '@/components/Public/About';
import Contact from '@/components/Public/Contact';
import FeaturedProjects from '@/components/Public/FeaturedProjects';
import Header from '@/components/Public/Header';
import TechStack from '@/components/Public/TechStack';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header />
      <TechStack />
      <FeaturedProjects />
      <About />
      <Contact />
    </div>
  );
};

export default page;
