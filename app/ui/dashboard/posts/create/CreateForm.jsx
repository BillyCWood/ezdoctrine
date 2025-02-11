'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import Typography from '@tiptap/extension-typography';
import Blockquote from '@tiptap/extension-blockquote';
import Placeholder from '@tiptap/extension-placeholder';

import Toolbar from './Toolbar';

export default function CreateForm({categories}) {

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

    const handleSubmit = () => {
        //TipTap editor getHTML
        const jsonContent = editor.getJSON()
        console.log(jsonContent);
    }

    return(
        <form className='flex flex-col gap-y-6 dm-sans mt-10 max-w-screen-lg mx-auto items-center'>

            {/* Title */}
            <div className='flex flex-col'>
                <label htmlFor='title' className='mb-3'>Title</label>
                <input type='text' name='title' id='title' autoFocus required className='border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2' />
            </div>

            {/* Main Category */}
            <div className='flex flex-col'>
                <label htmlFor='main-category' className='mb-3 mt-5'>Main Category</label>
                <select required name='main-category' id='main-category' className='bg-white border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2'>
                    {categories?.map((category, index) => (
                        <option key={index} value={category.slug}>{category.name}</option>
                    ))}
                </select>
            </div>


            {/* Excerpt */}
            <div className='flex flex-col'>
                <label htmlFor='excerpt' className='mb-3 mt-5'>Excerpt</label>
                <input type='text' name='excerpt' id='excerpt' required className='border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2' />
            </div>

            {/* Content */}
            <div>
                <p className='mb-3 mt-5'>Content</p>
                <div>
                    <Toolbar editor={editor} />
                    <EditorContent editor={editor} />
                </div>
            </div>
            {/* <div className='flex flex-col'>
                <label htmlFor='content'>Content</label>
                <input type='text' name='content' id='content' required className='border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2' />
            </div> */}

            {/* Category Selection */}
            <div className='flex flex-col'>
                <p className='mb-3 mt-5'>Category Selection</p>
                <div className='grid grid-cols-3 gap-y-2 gap-x-5'>
                    {categories?.map((category, index) => (
                        <div key={index} className='flex gap-x-1'>
                            <input type='checkbox' name='categories' id={category.slug} value={{name:category.name, slug:category.slug}} className='checked:' />
                            <label htmlFor={category.slug} className='text-wrap'>{category.name}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className='flex gap-x-10'>
                <button type='submit' onClick={handleSubmit}>Save</button>
                <button type='submit'>Save &amp; Publish</button>
            </div>
        </form>
    );
}