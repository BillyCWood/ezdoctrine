//'use client'
//import { useState, useEffect } from 'react';
import { getFeaturedPosts } from './lib/GraphQL/queries';
import PostCard from './ui/posts/PostCard';
import PostsWidget from './ui/posts/PostsWidget';
import Image from 'next/image';


export default async function Home() {

  const featuredPosts = await getFeaturedPosts();
  
  return (
    <div className='w-full'>

      <div className='relative block w-full min-h-[40vh] -z-10 bg-black'>
        <Image src={'/images/bible-pen-notebook.jpg'} alt='bible-pen-notebook.jpg' fill style={{objectFit:'cover', objectPosition: 'center'}} priority className='-z-10 opacity-60' />
        <div className='flex flex-col w-full items-center pt-20 gap-y-3 container'>
          <p className='text-white dm-display text-4xl'>Hero Image Title</p>
          <p className='dm-sans text-white text-xl text-left'>Hero Image Text</p>
        </div>
      </div>
      <div className='container'>
        <p className='dm-display text-3xl mt-12'>Featured Articles</p>
        <div id='featured-posts'
          className='
          flex flex-col gap-y-10 my-8
          md:grid md:grid-cols-2 md:gap-6
          lg:grid-cols-3
          
          '> 
          {featuredPosts.map((post, index) => (<PostCard post={post.node} key={index} />))}
        </div>
        <PostsWidget />
      </div>
    </div>
  );
}