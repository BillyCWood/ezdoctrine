import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <img src={author.picture.url} width={50} height={50} className='rounded-full' />
      <h2 className='font-normal' >{ author.name }</h2>
    </div>
  )
}

export default Author