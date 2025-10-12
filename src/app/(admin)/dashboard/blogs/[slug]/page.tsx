import RichTextEditor from '@/components/rich-text-editor';
import React from 'react';

const blogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`, {
    cache: 'no-store',
  });
  const { data } = await res.json();

  console.log(data);
  return (
    <article className='prose mx-auto py-10'>
      <RichTextEditor content={data.content} />
    </article>
  );
};

export default blogDetails;
