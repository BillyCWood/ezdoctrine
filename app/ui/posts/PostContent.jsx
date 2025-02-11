import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostContent = ({ content }) => {
  /* TODO: sanitize content to prevent XSS */
  return (
    <div id='post-body' className='mt-10 dm-sans'>
        {
          /* 
          Keep this in case I decide to go back to rendering text instead of json
            {
                content.split('\\n').map(
                    (item, index) => (
                        <p key={index} className='mb-4 tracking-normal font-light text-lg'>{ item }</p>
                    )
                )
            } 
          */
        }
        {
          /* content?.map((child, index) => (
            <p key={index} className={`${child.type}`}>{child.children[0].text}</p>
          )) */
        }
      <RichText
        content={content}
        renderers={{p: ({ children }) => <p className='mb-4 tracking-normal font-light text-lg'>{children}</p>}} />
    </div>
  )
}

export default PostContent