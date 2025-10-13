import RichTextEditor from '@/components/rich-text-editor';
import Image from 'next/image';
import React from 'react';

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`);
  const { data: blogData } = await res.json();

  return blogData.data.map((blog: { slug: string }) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`, {
    next: { revalidate: 3600 },
  });
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

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`, {
    next: { revalidate: 3600 },
  });
  const { data } = await res.json();

  return (
    <div className='max-w-4xl mx-auto mt-25 px-10 md:px-4 mb-14'>
      <h1 className='text-3xl font-bold text-center my-7'>{data.title}</h1>
      <div className=' sm:h-[400px] md:h-[500px] mb-5'>
        <Image
          src={data.thumbnail}
          alt={data.title}
          width={300}
          height={300}
          className='w-full h-full object-contain rounded-lg'
        />
      </div>
      <RichTextEditor content={data.content} editable={false} />
    </div>
  );
};

export default page;
