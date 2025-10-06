import BlogContent from '@/lib/tiptapToHtml';
import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`);
  const { data } = await res.json();

  return (
    <div className='max-w-6xl mx-auto mt-25'>
      <BlogContent content={data.content} />
    </div>
  );
};

export default page;
