import Navbar from '@/components/Navbar';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen scroll-smooth'>
      <Navbar />
      <main className='grow'>{children}</main>
    </div>
  );
};

export default PublicLayout;
