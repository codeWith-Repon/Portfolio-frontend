/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createBlog } from '@/actions/Blog.actions';
import RichTextEditor from '@/components/rich-text-editor';
import { useCurrentUser } from '@/hook';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const CreateBlog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = React.useState<any>({
    type: 'doc',
    content: [],
  });
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [title, setTitle] = useState('');
  const { user } = useCurrentUser();

  const handleCreate = async () => {
    setLoading(true);
    const formData = new FormData();

    const payload = {
      title,
      content: post,
      tags: ['programming'],
      authorId: user.id,
    };

    formData.append('data', JSON.stringify(payload));

    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const result = await createBlog(formData);
      if (result.success) {
        toast.success('Blog created successfully');
        router.push('/dashboard/blogs');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.error('❌ Blog create failed', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='max-w-6xl mx-auto md:my-5 '>
      <h1 className='text-2xl font-bold mb-4'>Create a Blog</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title' className='text-xl '>
            Title
          </label>
          <input
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter blog title...'
            className='border p-4 rounded'
          />
        </div>

        <div className=' flex flex-col gap-2'>
          <h1 className='text-xl'>Content</h1>
          <RichTextEditor
            content={post}
            onChange={setPost}
            onImageSelect={(file: File) => setSelectedFile(file)}
          />
        </div>
      </div>

      <button
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={() => handleCreate()}
        disabled={title.trim().length > 5 && !loading ? false : true}
      >
        {loading ? 'Creating...' : 'Create Blog'}
      </button>
    </main>
  );
};

export default CreateBlog;
