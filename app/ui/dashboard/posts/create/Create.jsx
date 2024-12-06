import { getCategories } from '@/app/lib/GraphQL/queries'
import React from 'react'

export default async function Create() {

    const categories = await getCategories();

    async function createPost(formData){
        'use server';

        const rawFormData = {
            title: formData.get('title'),
            mainCategory: formData.get('main-category'),
            slug: formData.get('main-category') + '/' + formData.get('title').toLowerCase().replaceAll(' ', '-'),
            excerpt: formData.get('excerpt'),
            content: formData.get('content'),
            categories: formData.getAll('categories'),

        }

        console.log(rawFormData);
    }


  return (
    <form action={createPost} className='flex flex-col gap-y-6 dm-sans mt-10'>

        {/* Title */}
        <div className='flex flex-col'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' autoFocus required className='border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2' />
        </div>

        {/* Main Category */}
        <div className='flex flex-col'>
            <label htmlFor='main-category'>Main Category</label>
            <select required name='main-category' id='main-category' className='bg-white border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2'>
                {categories.map((category, index) => (
                    <option key={index} value={category.slug}>{category.name}</option>
                ))}
            </select>
        </div>


        {/* Excerpt */}
        <div className='flex flex-col'>
            <label htmlFor='excerpt'>Excerpt</label>
            <input type='text' name='excerpt' id='excerpt' required className='border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2' />
        </div>

        {/* Content */}
        <div className='flex flex-col'>
            <label htmlFor='content'>Content</label>
            <input type='text' name='content' id='content' required className='border-[1px] border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm w-96 h-8 pl-2' />
        </div>

        {/* Category Selection */}
        <div className='flex flex-col'>
            <p>Category Selection</p>
            <div className='grid grid-cols-3 gap-y-2'>
                {categories.map((category, index) => (
                    <div key={index} className='flex gap-x-1'>
                        <input type='checkbox' name='categories' id={category.slug} value={{name:category.name, slug:category.slug}} className='checked:' />
                        <label htmlFor={category.slug}>{category.name}</label>
                    </div>
                ))}
            </div>
        </div>

        {/* Buttons */}
        <div>
            <button type='submit'>Save</button>
        </div>
    </form>
  )
}
