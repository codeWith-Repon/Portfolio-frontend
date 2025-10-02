import AdminSidebar from '@/components/Admin/AdminSidebar';
import React from 'react';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-100 min-h-screen flex gap-4'>
      <AdminSidebar />
      <div className='mt-6 flex-1 pr-5'>{children}</div>
    </div>
  );
};

export default AdminDashboardLayout;
