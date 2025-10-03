"use client"

import RichTextEditor from '@/components/rich-text-editor';
import React from 'react';

const CreateBlog = () => {
  const [post, setPost] = React.useState('');
  console.log(post);
  return (
    <main className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Create a Blog</h1>
      <RichTextEditor content={post} onChange={setPost} />
    </main>
  );
};

export default CreateBlog;
