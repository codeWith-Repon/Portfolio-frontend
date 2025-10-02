'use client';

import { assets } from '../../public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image
          src={assets.header_bg_image}
          alt='navbar background'
          className='w-full'
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 duration-300 ${
          isScroll
            ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
            : ''
        }`}
      >
        <Link href='/'>
          <Image
            src={assets.logo}
            alt='logo'
            className='w-28 cursor-pointer mr-14'
          />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 duration-300 ${
            isScroll
              ? ''
              : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'
          }`}
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  className={`font-ovo transition ${
                    isActive
                      ? ' text-rose-500 font-bold'
                      : 'text-gray-700 hover:text-red-400'
                  }`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='flex items-center gap-4'>
          <button className='cursor-pointer hidden'>
            <Image src={assets.moon_icon} alt='mode toggle' className='w-6' />
          </button>

          <Link
            href='#contact'
            className='hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-roboto'
          >
            Contact{' '}
            <Image src={assets.arrow_icon} alt='arrow' className='w-3' />
          </Link>

          <button
            className='block md:hidden ml-3'
            onClick={() => setIsOpen(true)}
          >
            <Image src={assets.menu_black} alt='menu' className='w-6' />
          </button>
        </div>

        {/* Mobile menu */}

        {isOpen && (
          <div
            className='fixed inset-0 bg-black/50 z-40 min-h-screen'
            onClick={() => setIsOpen(false)}
          />
        )}

        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover shadow-lg transition-all duration-500 ${
            isOpen ? 'right-0 translate-x-0' : '-right-64 translate-x-full'
          }`}
        >
          <div
            className='absolute right-6 top-6'
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={assets.close_black}
              alt='close'
              className='w-5 cursor-pointer'
            />
          </div>
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  className={`font-ovo transition ${
                    isActive
                      ? ' text-rose-500 font-bold'
                      : 'text-gray-700 hover:text-red-400'
                  }`}
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
