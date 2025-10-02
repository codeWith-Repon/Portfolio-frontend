import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Work from '@/components/Work';
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
