'use client';
import Link from 'next/link';
import React from 'react';
import { assets } from '../../../public/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';

const dashboardItem = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: assets.dashboard,
  },
  {
    name: 'Projects',
    link: '/dashboard/projects',
    icon: assets.project_icon,
  },
  {
    name: 'Blogs',
    link: '/dashboard/blogs',
    icon: assets.blog_icon,
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className='bg-gray-50 w-[85px] md:w-64 h-screen flex flex-col fixed inset-0'>
      <div className='p-4 mt-4'>
        {dashboardItem.map((item) => {
          const isActive = pathname === item.link;
          return (
            <div
              key={item.name}
              className={`mb-2 flex items-center rounded-md px-3 py-2 transition ${
                isActive ? 'bg-gray-200 ' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <Link href={item.link} className='flex items-center'>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className='mr-3 cursor-pointer'
                />
                <span className='text-gray-700 hover:text-gray-900 hidden items-center md:flex'>
                  {item.name}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='mt-auto pb-5 px-3'>
        <button
          className='border px-4 py-2.5 rounded-sm w-full font-semibold
        bg-gray-300 text-gray-900 hover:bg-gray-200 transition duration-300 cursor-pointer flex items-center justify-between'
        >
          <span className='hidden md:flex'> Log Out</span>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
