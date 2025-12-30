'use client';

import { assets } from '../../../public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#featured-project', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // GSAP Entrance Animation
  useEffect(() => {
    gsap.from('.navbar-anim', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-border py-3'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* Logo - Navbar1 Style */}
        <Link
          href='/'
          className='font-display text-xl font-bold text-accent hover:text-accent/80 transition-colors'
        >
          Repon
        </Link>

        {/* Desktop Links - Merged previous logic with new HSL colors */}
        <ul className='hidden md:flex items-center gap-8'>
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={label} className='navbar-anim'>
                <Link
                  href={href}
                  className={`font-poppins text-sm transition-colors ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-secondary hover:text-foreground'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA & Mobile Toggle */}
        <div className='flex items-center gap-4 navbar-anim'>
          <Link
            href='/#contact'
            className='hidden lg:block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:glow-emerald transition-all active:scale-95'
          >
            Let&apos;s Talk
          </Link>

          <button
            className='block md:hidden p-2 text-foreground'
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={assets.menu_black}
              alt='menu'
              className='w-6 dark:invert'
            />
          </button>
        </div>

        {/* Mobile Menu Overlay - Previous Version logic */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
            isOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <ul
            className={`absolute right-0 top-0 bottom-0 w-64 bg-card p-10 flex flex-col gap-6 shadow-2xl transition-transform duration-500 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className='self-end mb-4' onClick={() => setIsOpen(false)}>
              <Image
                src={assets.close_black}
                alt='close'
                className='w-5 dark:invert'
              />
            </button>

            {links.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className='font-ovo text-lg text-foreground hover:text-primary'
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
