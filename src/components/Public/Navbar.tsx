'use client';

import { assets } from '../../../public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
    }
  }, [pathname, searchParams]);


  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-border '>
      <nav className='backdrop-blur-md bg-black/50 py-3 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between '>
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
              const isActive =
                href === `${pathname}${hash}`
              return (
                <li key={label}>
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
          <div className='flex items-center gap-4'>
            <Link
              href='/#contact'
              className='hidden md:block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:glow-emerald transition-all active:scale-95'
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
        </div>
      </nav>

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
              <Link
                href={href}
                className='font-ovo text-lg text-foreground hover:text-primary'
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
