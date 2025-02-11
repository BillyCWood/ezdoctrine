import {
    Bold,
    Italic,
    Underline,
    Quote,
    List,
    ListOrdered,
    Sheet,
    Subscript,
    Heading1,
    Heading2,
    Heading3,
} from 'lucide-react';

export default function Toolbar({ editor, content }) {
    if (!editor) {
        return null;
    }
    return(
        <div className='flex justify-start gap-x-2 border-x-[1px] border-t-[1px] min-h-10 p-2 border-slate-400 rounded-t-sm'>
            
            <div id='headings' className='flex gap-x-2 px-2'>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("heading", { level: 1 }) ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                    >

                    <Heading1 className='w-5 h-5' />
                </button>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("heading", { level: 2 }) ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                    >

                    <Heading2 className='w-5 h-5' />
                </button>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("heading", { level: 3 }) ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                    >

                    <Heading3 className='w-5 h-5' />
                </button>
            </div>
            
            <div id='font-selectors' className='flex gap-x-2 border-l-[1px] border-slate-400 px-2'>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBold().run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("bold") ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                    >

                    <Bold className='w-5 h-5' />
                </button>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleItalic().run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("italic") ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                    >

                    <Italic className='w-5 h-5' />
                </button>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleUnderline().run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("underline") ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                    >

                    <Underline className='w-5 h-5' />
                </button>
            </div>

            <div id='blocks-lists' className='flex gap-x-2 border-l-[1px] border-slate-400 px-2'>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBlockquote().run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("blockquote") ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                >
                    <Quote className='w-5 h-5' />
                </button>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBulletList().run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("bulletList") ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                >
                    <List className='w-5 h-5' />
                </button>
                <button
                    onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleOrderedList().run();}}
                    className={`p-1 rounded-md transition-color duration-200 ${editor.isActive("orderedList") ? 'bg-slate-200' : 'hover:bg-slate-200'}`}
                >
                    <ListOrdered className='w-5 h-5' />
                </button>

            </div>
            
        </div>
    );
}