'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProject } from '@/actions/Project.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader } from 'lucide-react';

const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  description: z.string().min(10, 'Description is too short'),
  technologies: z.string(),
  features: z.string().optional(),
  liveUrl: z.string().url('Must be a valid URL'),
  githubFrontend: z.string().url('Invalid URL').optional(),
  githubBackend: z.string().url('Invalid URL').optional(),
  isFeatured: z.boolean().catch(false),
  thumbnails: z
    .any()
    .refine(
      (files) => files && files.length > 0,
      'At least one thumbnail image is required'
    ),
});

export default function AddProjectForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues:
      process.env.NODE_ENV === 'development'
        ? {
            title: 'Next.js Portfolio Website',
            description:
              'A modern developer portfolio built using Next.js, Tailwind CSS, and TypeScript. Fully responsive and SEO optimized.',
            technologies: 'Next.js, TailwindCSS, TypeScript, Prisma',
            features: 'Dark Mode, SEO Optimization, Responsive Design',
            liveUrl: 'https://portfolio-demo.vercel.app',
            githubFrontend: 'https://github.com/yourname/portfolio-frontend',
            githubBackend: 'https://github.com/yourname/portfolio-backend',
            isFeatured: false,
          }
        : undefined,
  });

  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('liveUrl', data.liveUrl);
      formData.append('isFeatured', String(data.isFeatured));

      data.technologies
        .split(',')
        .map((tech) => tech.trim())
        .forEach((t) => formData.append('technologies', t));

      data.features
        ?.split(',')
        .map((feature) => feature.trim())
        .forEach((f) => formData.append('features', f));

      const githubUrls = {
        frontend: data.githubFrontend || '',
        backend: data.githubBackend || '',
      };

      formData.append('githubUrls[frontend]', githubUrls.frontend);
      formData.append('githubUrls[backend]', githubUrls.backend);

      if (data.thumbnails && data.thumbnails.length > 0) {
        Array.from(data.thumbnails).forEach((file) => {
          formData.append('files', file as File);
        });
      }

      const result = await addProject(formData);
      if (result.success) {
        toast.success('Project added successfully');
        router.push('/dashboard/projects');
      }
      console.log(result);
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-2xl mx-auto p-6 space-y-4 bg-white rounded-xl shadow-md'
    >
      <h2 className='text-2xl font-bold'>Add New Project</h2>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Project Title</label>
        <input
          {...register('title')}
          placeholder='Project Title'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
        {errors.title && (
          <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Project Description</label>
        <textarea
          {...register('description')}
          placeholder='Description'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
        {errors.description && (
          <p className='text-red-500 text-sm mt-1'>
            {errors.description.message}
          </p>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Technologies</label>
        <input
          {...register('technologies')}
          placeholder='Technologies (comma separated)'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
        {errors.technologies && (
          <p className='text-red-500 text-sm mt-1'>
            {errors.technologies.message}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'> Features</label>
        <input
          {...register('features')}
          placeholder='Features (comma separated)'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Live URL</label>
        <input
          {...register('liveUrl')}
          placeholder='Live URL'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
        {errors.liveUrl && (
          <p className='text-red-500 text-sm mt-1'>{errors.liveUrl.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Github Frontend Url</label>
        <input
          {...register('githubFrontend')}
          placeholder='Github Frontend URL'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Github Backend Url</label>
        <input
          {...register('githubBackend')}
          placeholder='Github Backend URL'
          className='w-full border border-gray-200 px-3 py-2 rounded-md'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-700'>Thumbnails</label>
        <input
          type='file'
          multiple
          accept='image/*'
          {...register('thumbnails')}
          className='block w-full text-gray-700 border border-gray-300 rounded-md p-2 cursor-pointer bg-gray-50 hover:bg-gray-100'
        />
        {errors.thumbnails && (
          <p className='text-red-500 text-sm mt-1'>
            {errors.thumbnails.message as string}
          </p>
        )}
      </div>

      <label className='flex items-center gap-2'>
        <input type='checkbox' {...register('isFeatured')} name='isFeatured' />
        Featured
      </label>

      <button
        type='submit'
        disabled={isLoading}
        className={`bg-blue-600 text-white  py-2 rounded hover:bg-blue-700 cursor-pointer ${
          isLoading ? 'opacity-50 cursor-not-allowed flex px-2 gap-1' : 'px-6'
        }`}
      >
        {isLoading && <Loader className='animate-spin' />}
        {isLoading ? 'Submitting...' : 'Submit Project'}
      </button>
    </form>
  );
}
