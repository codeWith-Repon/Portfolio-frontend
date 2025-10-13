'use client';

import { getProjectBySlug, updateProject } from '@/actions/Project.actions';
import ProjectForm from '@/components/Admin/ProjectForm';
import Loading from '@/components/Loading';
import { IProject } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const UpdateProject = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = useState<IProject | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const result = await getProjectBySlug(slug);
        setProject(result.data);
      } catch (error) {
        console.log('Error fetching project:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  const handleEditProject = async (formData: FormData) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast('You are not logged in');
        router.push('/login');
        return;
      }
      const result = await updateProject(slug, token, formData);
      console.log(result, 'updated result');

      if (result.success) {
        toast.success('Project added successfully');
        router.push('/dashboard/projects');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  if (isLoading)
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loading />
      </div>
    );

  return (
    <div>
      <ProjectForm
        initialData={project}
        onSubmit={handleEditProject}
        isEditing
      />
    </div>
  );
};

export default UpdateProject;
