import Footer from '@/components/Public/Footer';
import Navbar from '@/components/Public/Navbar';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Repon | Home',
  description: 'This is my portfolio website built with Next.js',
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen scroll-smooth'>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
