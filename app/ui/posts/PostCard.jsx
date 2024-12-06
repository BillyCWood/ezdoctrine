import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className='hover:shadow-xl focus:bg-slate-200 transition-all duration-200 ease-in-out bg-white text-black border-[1px] border-slate-300 min-h-64 min-w-64 max-w-96' >
        <div className='flex flex-col overflow-hidden p-4 w-full min-h-64'>
            <h1 className='font-[800] text-lg dm-display' >{post.title}</h1>
            <h3 className='font-[300] text-sm mb-2 dm-sans' >{moment(post.createdAt).format('MMM D, YYYY')}</h3>
            <p className='font-[400] dm-sans mb-auto'>{post.excerpt}</p>
            <h2 className='font-normal text-sm dm-sans' >{post.author.name}</h2>
        </div>
    </Link>
  )
}

export default PostCard;