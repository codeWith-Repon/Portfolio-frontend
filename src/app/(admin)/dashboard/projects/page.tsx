'use client';

import { deleteProject } from '@/actions/Project.actions';
import Loading from '@/components/Loading';
import { IProject } from '@/types';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
        cache: 'no-cache',
      });
      const { data: projects } = await res.json();
      setProjects(projects.data);
    } catch (error) {
      console.log('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
    setLoading(false);
  }, []);

  const handleDelete = async (slug: string) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      toast('You are not logged in');
      router.push('/login');
      return;
    }

    try {
      setDeleting(true);
      const res = await deleteProject(slug, token);
      if (res.success) {
        fetchProjects();
        toast.success('Blog deleted successfully');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setDeleting(false);
    }
  };

  const handleEdit = (slug: string) => {
    router.push(`/dashboard/projects/update/${slug}`);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto mt-3 space-y-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <button
          onClick={() => router.push('/dashboard/projects/add')}
          type='button'
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'
        >
          Add Project
        </button>
      </div>

      <div className='flex flex-col gap-2'>
        {projects &&
          projects.map((item) => (
            <div
              key={item.slug}
              className='border p-3 rounded-md border-gray-600'
            >
              <Link href={`/projects/${item.slug}`}>
                <div className='flex items-center justify-between pb-1'>
                  <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold text-gray-800'>
                      {item.title}
                    </h1>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                  <Image
                    src={item.thumbnails[0]}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                </div>
              </Link>
              <div className='flex gap-3 items-center text-gray-600'>
                <button
                  onClick={() => handleDelete(item.slug)}
                  className='text-red-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={deleting}
                >
                  <Trash2 />
                </button>
                <button
                  onClick={() => handleEdit(item.slug)}
                  className='text-green-500 cursor-pointer disabled:opacity-50'
                  disabled={deleting}
                >
                  <Edit />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
