import React from 'react'

const Categories = ({ categories }) => {
  return (
    <div className='mt-32 mb-16 flex max-lg:flex-col justify-center dm-sans font-light'>
      <h1 className='dm-text text-lg'>Categories</h1>
      <div className='lg:ml-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-6 mt-3'>

        {
          categories.map(
            (category, i) => (
              <h3 key={i} className='text-[#004aad]'>{category.name}</h3>
            )
          )
        }
      </div>
    </div>
    
  )
}

export default Categories