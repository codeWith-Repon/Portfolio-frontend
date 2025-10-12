import RichTextEditor from '@/components/rich-text-editor';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`);
  const { data } = await res.json();

  return {
    title: `${data.title} | Repon's Blog`,
    description:
      data.description ||
      'Read this insightful article from Repon’s tech blog.',
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`);
  const { data } = await res.json();

  return (
    <div className='max-w-6xl mx-auto mt-25'>
      <RichTextEditor content={data.content} editable={false} />
    </div>
  );
};

export default page;
