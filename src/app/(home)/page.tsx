import About from '@/components/Public/About';
import Contact from '@/components/Public/Contact';
import Header from '@/components/Public/Header';
import Work from '@/components/Public/Work';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default page;
