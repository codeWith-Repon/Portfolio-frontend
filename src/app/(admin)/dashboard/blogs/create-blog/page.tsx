import RichTextEditor from '@/components/rich-text-editor';
import React from 'react';

const CreateBlog = () => {
  return (
    <main className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Create a Blog</h1>
      <RichTextEditor />
    </main>
  );
};

export default CreateBlog;
