/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { renderToReactElement } from '@tiptap/static-renderer/pm/react';

const BlogContent = ({ content }: { content: any }) => {
  const reactNode = renderToReactElement({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-3',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-3',
          },
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: 'hover:bg-red-500 hover:text-white',
        },
      }),
    ],
    content: content,
  });

  return <div>{reactNode}</div>;
};

export default BlogContent;
