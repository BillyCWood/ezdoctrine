'use client'

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import Typography from '@tiptap/extension-typography';
import Blockquote from '@tiptap/extension-blockquote';
import Placeholder from '@tiptap/extension-placeholder';

import Toolbar from './Toolbar';

export default function TextEditor({ ref }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Typography,
            Blockquote,
            Placeholder.configure({
                placeholder: 'equip his people for works of service, so that the body of Christ may be built up ...',
            })
        ],
        content: ``,
        immediatelyRender: false,
    })

    return (
        <div>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}