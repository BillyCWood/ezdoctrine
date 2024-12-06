import React from 'react'
import NavLinks from '@/app/ui/dashboard/nav-links'

const Sidenav = () => {
  return (
    <div className='bg-gray-100 h-full w-full'>
      <div className='flex grow flex-row md:flex-col'>
        <NavLinks />
      </div>
    </div>
  )
}

export default Sidenav