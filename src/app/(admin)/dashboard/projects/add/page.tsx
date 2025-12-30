'use client';

import { addProject } from '@/actions/Project.actions';
import ProjectForm from '@/components/Admin/ProjectForm';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const AddProject = () => {
  const router = useRouter();

  const handleAddProject = async (FormData: FormData) => {
    const token = localStorage.getItem('accessToken');
    const result = await addProject(FormData, token!);

    if (result.success) {
      toast.success('Project added successfully');
      router.push('/dashboard/projects');
    }
  };
  return (
    <div className='mt-10'>
      <ProjectForm onSubmit={handleAddProject} />
    </div>
  );
};

export default AddProject;
