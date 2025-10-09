'use client';

import LoginForm from '@/components/Auth/LoginForm';
import Loading from '@/components/Loading';
import { useCurrentUser } from '@/hook';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const LoginPageClient = () => {
  const router = useRouter();
  const { user, loading } = useCurrentUser();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPageClient;
