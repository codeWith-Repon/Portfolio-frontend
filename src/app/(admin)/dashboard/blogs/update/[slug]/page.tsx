/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { updateBlog } from '@/actions/Blog.actions';
import Loading from '@/components/Loading';
import RichTextEditor from '@/components/rich-text-editor';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = React.useState<any>({
    type: 'doc',
    content: [],
  });
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/posts/${params.slug}`,
          {
            cache: 'no-store',
          }
        );
        const { data } = await res.json();
        setTitle(data.title);
        setPost(data.content);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  const handleUpdate = async () => {
    setUpdateLoading(true);
    const formData = new FormData();

    const payload = {
      title,
      content: post,
      tags: ['programming'],
    };

    formData.append('data', JSON.stringify(payload));

    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No accessToken');
      }
      const result = await updateBlog(params.slug, token, formData);
      if (result.success) {
        toast.success('Blog updated successfully');
        router.push('/dashboard/blogs');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loading />
      </div>
    );
  }

  if (!post) {
    return <div>Blog not found</div>;
  }

  return (
    <main className='max-w-6xl mx-auto md:my-5 '>
      <h1 className='text-2xl font-bold mb-4'>Update Blog</h1>
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
        onClick={handleUpdate}
        disabled={title.trim().length > 5 && !updateLoading ? false : true}
      >
        {updateLoading ? 'Updating...' : 'Update Blog'}
      </button>
    </main>
  );
};

export default BlogDetails;
