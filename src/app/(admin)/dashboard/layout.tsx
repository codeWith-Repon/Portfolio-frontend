'use client';

import AdminSidebar from '@/components/Admin/AdminSidebar';
import Loading from '@/components/Loading';
import { useCurrentUser } from '@/hook';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const { user, loading: userLoading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => setLoading(false), 300);

    return () => clearTimeout(timeOut);
  }, [pathname]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!userLoading && (!user || !token)) {
      router.replace('/login');
    }
  }, [user, userLoading, router, pathname]);

  if (userLoading || loading)
    return (
      <div className='ml-[85px] md:ml-64 flex items-center justify-center min-h-screen'>
        <Loading />
      </div>
    );

  if (!user) {
    return null;
  }

  return (
    <>
      {loading && (
        <div className='ml-[85px] md:ml-64 flex items-center justify-center min-h-screen'>
          <Loading />
        </div>
      )}
      <div className='bg-gray-100 min-h-screen flex gap-4'>
        <div className='w-[85px] md:w-64'>
          <AdminSidebar />
        </div>
        <div className='mt-6 flex-1 pr-5'>{children}</div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
