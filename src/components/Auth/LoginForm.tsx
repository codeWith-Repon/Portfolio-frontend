'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { assets } from '../../../public/assets';
import { login } from '@/actions/Login.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: 'superadmin@gmail.com',
      password: '12345678',
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      setLoading(true);
      const result = await login(data);
      console.log(result, 'from client');
      if (result?.success) {
        router.push('/dashboard');
        toast.success('Successfully logged in');
      } else if (result?.message === 'Invalid credentials.') {
        toast.error('Invalid credentials.');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen flex-col justify-center  px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Image src={assets.logo} alt='logo' className='mx-auto h-10 w-auto' />
        <h2 className='mt-5 text-center text-2xl/9 font-bold tracking-tight'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm/6 font-medium text-gray-700'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                {...register('email', { required: 'Email is required' })}
                type='email'
                placeholder='Enter your email'
                className='block w-full rounded-md  px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 bg-transparent'
              />
              {errors.email && (
                <p className='text-sm text-red-500 mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm/6 font-medium text-gray-700'
            >
              Password
            </label>
            <div className='mt-2'>
              <input
                {...register('password', { required: 'Password is required' })}
                type='password'
                placeholder='Enter your password'
                className='block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
              />
              {errors.password && (
                <p className='text-sm text-red-500 mt-1'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer disabled:bg-indigo-500/60 disabled:cursor-not-allowed'
              disabled={loading}
            >
              {loading ? <span>Signing in...</span> : <span>Sign in</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
