'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import { IProject } from '@/types';
import Image from 'next/image';

interface IProjectFormProps {
  initialData?: IProject;
  onSubmit: (formData: FormData) => Promise<void>;
  isEditing?: boolean;
}
export default function ProjectForm({
  initialData,
  onSubmit,
  isEditing = false,
}: IProjectFormProps) {
  const projectSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long'),
    description: z.string().min(10, 'Description is too short'),
    technologies: z.string().refine((val) => val.split(',').length >= 2, {
      message: 'At least two technologies are required',
    }),
    features: z.string().refine((val) => val.split(',').length >= 2, {
      message: 'At least two features are required',
    }),
    liveUrl: z.string().url('Must be a valid URL'),
    githubFrontend: z.string().url('Invalid URL').optional(),
    githubBackend: z.string().url('Invalid URL').optional(),
    isFeatured: z.boolean().catch(false),
    thumbnails: isEditing
      ? z.any().optional()
      : z
          .any()
          .refine(
            (files) => files && files.length > 0,
            'At least one thumbnail image is required'
          ),
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          description: initialData.description,
          technologies: initialData.technologies?.join(', ') || '',
          features: initialData.features?.join(', ') || '',
          liveUrl: initialData.liveUrl,
          githubFrontend: initialData.githubUrls?.frontend || '',
          githubBackend: initialData.githubUrls?.backend || '',
          isFeatured: initialData.isFeatured,
          thumbnails: [],
        }
      : {
          title: '',
          description: '',
          technologies: '',
          features: '',
          liveUrl: '',
          githubFrontend: '',
          githubBackend: '',
          isFeatured: false,
          thumbnails: [],
        },
  });

  const handleFormSubmit = async (data: z.infer<typeof projectSchema>) => {
    setIsLoading(true);
    console.log(data, 'before ');
    try {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('liveUrl', data.liveUrl);
      formData.append('isFeatured', String(data.isFeatured));

      if (data.technologies)
        data.technologies
          .split(',')
          .map((tech) => tech.trim())
          .forEach((t) => formData.append('technologies', t));

      if (data.features)
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

      await onSubmit(formData);
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
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
        {errors.features && (
          <p className='text-red-500 text-sm mt-1'>{errors.features.message}</p>
        )}
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
        <div className=' flex gap-2 items-center'>
          {isEditing &&
            initialData?.thumbnails.map((thumbnail) => (
              <div className='flex' key={thumbnail}>
                <Image
                  src={thumbnail}
                  alt='thumbnail'
                  width={200}
                  height={200}
                  className=' size-32 object-cover rounded-lg'
                />
              </div>
            ))}
        </div>
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
        {isLoading ? (
          <>
            <Loader className='animate-spin' />
            {isEditing ? 'Updating...' : 'Submitting...'}
          </>
        ) : isEditing ? (
          'Update Project'
        ) : (
          'Submit Project'
        )}
      </button>
    </form>
  );
}
