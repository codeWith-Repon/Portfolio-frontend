'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative border-t border-white/10 bg-background pt-16 pb-8 overflow-hidden'>
      {/* Background Glow Effect */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent'></div>

      <div className='container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-center section-animate'>
          {/* Brand/Copyright Section */}
          <div className='text-center md:text-left space-y-4'>
            <h2 className='text-xl font-bold font-roboto tracking-tight'>
              REPON<span className='text-accent'>.DEV</span>
            </h2>
            <p className='text-sm text-foreground/50 font-poppins'>
              © {new Date().getFullYear()} All rights reserved. <br />
              Built with Next.js & Tailwind CSS.
            </p>
          </div>

          {/* Social Links with Hover Glow */}
          <div className='flex items-center justify-center gap-6'>
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              {
                icon: Linkedin,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
              },
              { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full bg-white/5 border border-white/10 text-foreground/60 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group'
                aria-label={social.label}
              >
                <social.icon className='w-5 h-5' />
              </a>
            ))}
          </div>

          {/* Back to Top Section */}
          <div className='flex justify-center md:justify-end'>
            <button
              onClick={scrollToTop}
              className='group flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-accent transition-colors'
            >
              Back to top
              <ArrowUpCircle className='w-5 h-5 group-hover:-translate-y-1 transition-transform' />
            </button>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className='mt-12 pt-8 border-t border-white/5 text-center'>
          <p className='text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium'>
            Designed & Developed with Passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
