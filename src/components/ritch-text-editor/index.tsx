'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'min-h-[200px] border rounded-md bg-gray-50 py-2 px-3',
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default RichTextEditor;
