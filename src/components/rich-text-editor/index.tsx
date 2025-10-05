'use client';

import MenuBar from '@/components/rich-text-editor/menu-bar';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';

interface RichTextEditorProps {
  content: JSONContent;
  onChange: (content: JSONContent) => void;
  onImageSelect?: (file: File) => void;
}

const RichTextEditor = ({
  content,
  onChange,
  onImageSelect,
}: RichTextEditorProps) => {
  const editor = useEditor({
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
      Placeholder.configure({
        placeholder: 'write something...',
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
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'h-[400px] md:h-[700px] overflow-y-auto border rounded-md bg-gray-50 py-2 px-3',
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getJSON());
      onChange(editor.getJSON());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} onImageSelect={onImageSelect} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
