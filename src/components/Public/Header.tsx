'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { assets } from '../../../public/assets';
import gsap from 'gsap';
import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation for Text
      gsap.from('.gsap-hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Floating Animation for the Profile Image Card
      gsap.to('.gsap-hero-image', {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id='home'
      className='section-animate min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-20'
    >
      {/* Background Glow - Using your HSL Accent color */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none' />

      <div className='max-w-7xl mx-auto relative z-10 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left: Text Content (The Narrative) */}
          <div className='text-left'>
            <h3 className='gsap-hero-text flex items-center gap-2 text-xl md:text-2xl mb-4 font-ovo text-primary'>
              Hi! I&apos;m Repon Ahmed{' '}
              <Image src={assets.hand_icon} alt='waving hand' className='w-6' />
            </h3>

            <h1 className='gsap-hero-text font-roboto font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6'>
              Full-Stack
              <br />
              <span className='text-primary'>Web Developer</span>
            </h1>

            <p className='gsap-hero-text text-lg sm:text-xl text-secondary max-w-2xl mb-10 leading-relaxed font-poppins'>
              I craft beautiful, performant digital experiences using Next.js,
              Tailwind, and GSAP that solve real problems and drive meaningful
              results.
            </p>

            <div className='gsap-hero-text flex flex-col sm:flex-row gap-4'>
              <Link
                href='/projects'
                className='px-10 py-4 rounded-full bg-primary text-foreground font-poppins font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
              >
                Explore Work{' '}
                <Image src={assets.right_arrow_white} alt='' className='w-4' />
              </Link>

              <a
                href='/sample-resume.pdf'
                download
                className='px-10 py-4 rounded-full border border-border text-foreground font-poppins font-bold text-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
              >
                My Resume <DownloadIcon />
              </a>
            </div>
          </div>

          {/* Right: Developer Image (The Visual) */}
          <div className='gsap-hero-image relative flex justify-center lg:justify-end'>
            <div className='relative w-full aspect-square max-w-md'>
              {/* Animated Rings */}
              <div className='absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse' />

              <div className='relative w-full h-full rounded-3xl border border-border bg-card/40 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-2xl'>
                <Image
                  src={assets.user_image}
                  alt='Repon Ahmed'
                  className='w-full h-full object-cover scale-110 transition-all duration-700'
                />
              </div>

              {/* Decorative Tech Badges */}
              <div className='absolute -top-4 -right-4 p-4 bg-card border border-border rounded-2xl shadow-xl'>
                <span className='text-2xl'>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
