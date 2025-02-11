import React from 'react'

const Categories = ({ categories }) => {
  return (
    <div className='mt-32 mb-16 flex max-lg:flex-col justify-center dm-sans font-light'>
      <p className='dm-text text-lg'>Categories:</p>
      <div className='lg:ml-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-6 mt-3'>

        {
          categories?.map(
            (category, i) => (
              <p key={i} className='text-[#004aad]'>{category.name}</p>
            )
          )
        }
      </div>
    </div>
    
  )
}

export default Categories