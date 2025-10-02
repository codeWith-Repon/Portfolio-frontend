import Link from 'next/link';
import React from 'react';
import { assets } from '../../../public/assets';
import Image from 'next/image';

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
  return (
    <div className='bg-gray-50 w-64 h-screen flex flex-col'>
      <div className='p-4 mt-4'>
        {dashboardItem.map((item) => (
          <div key={item.name} className='mb-2 flex items-center'>
            <Image
              src={item.icon}
              alt={item.name}
              width={22}
              height={22}
              className='mr-3 cursor-pointer'
            />
            <Link
              href={item.link}
              className='text-gray-700 hover:text-gray-900 flex items-center'
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className='mt-auto pb-5 px-3'>
        <button
          className='border px-4 py-2.5 rounded-sm w-full font-semibold
        bg-gray-300 text-gray-900 hover:bg-gray-200 transition duration-300 cursor-pointer'
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
