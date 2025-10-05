/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createBlog } from '@/actions/Blog.actions';
import RichTextEditor from '@/components/rich-text-editor';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const CreateBlog = () => {
  const router = useRouter();
  const [post, setPost] = React.useState<any>({
    type: 'doc',
    content: [],
  });
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  let title = '';

  if (post.content.length > 0) {
    const firstNode = post.content[0];
    const innerContent = firstNode?.content;

    if (firstNode.type === 'heading' || firstNode.type === 'paragraph') {
      if (innerContent?.length > 0) {
        title = innerContent[0]?.text || '';
      }
    } else {
      const secondNode = post.content[1];
      const innerContent = secondNode?.content;

      if (secondNode.type === 'heading' || secondNode.type === 'paragraph') {
        if (innerContent?.length > 0) {
          title = innerContent[0]?.text || '';
        }
      }
    }
  }

  const handleCreate = async () => {
    const formData = new FormData();

    const payload = {
      title,
      content: post,
      tags: ['programming'],
      authorId: 1,
    };

    formData.append('data', JSON.stringify(payload));

    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const result = await createBlog(formData);
      console.log('✅ Blog created:', result);
      if (result.success) {
        toast.success('Blog created successfully');
        router.push('/dashboard/blogs');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.error('❌ Blog create failed', err);
    }
  };

  return (
    <main className='max-w-6xl mx-auto md:mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Create a Blog</h1>
      <RichTextEditor
        content={post}
        onChange={setPost}
        onImageSelect={(file: File) => setSelectedFile(file)}
      />
      <button
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'
        onClick={() => handleCreate()}
      >
        Create Blog
      </button>
    </main>
  );
};

export default CreateBlog;
