/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createBlog } from '@/actions/Blog.actions';
import RichTextEditor from '@/components/rich-text-editor';
import React from 'react';

const CreateBlog = () => {
  const [post, setPost] = React.useState<any>({
    type: 'doc',
    content: [],
  });
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  let title = '';
  let content = [];

  if (post.content.length > 0) {
    const firstNode = post.content[0];
    const innerContent = firstNode?.content;

    if (innerContent?.length > 0) {
      title = innerContent[0]?.text || '';
    }
    content = post.content.slice(1);
  }

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', JSON.stringify(content));
    formData.append('tags', JSON.stringify(['Programming']));
    formData.append('authorId', '1');

    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    await createBlog(formData);
  };

  return (
    <main className='max-w-6xl mx-auto mt-10'>
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
