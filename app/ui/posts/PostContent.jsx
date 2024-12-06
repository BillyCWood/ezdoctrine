import React from 'react'

const PostContent = ({ content }) => {
  return (
    <div className='mt-10 dm-sans'>
        {
            content.split('\\n').map(
                (item, index) => (
                    <p key={index} className='mb-4 tracking-normal font-light text-lg'>{ item }</p>
                )
            )
        }
    </div>
  )
}

export default PostContent