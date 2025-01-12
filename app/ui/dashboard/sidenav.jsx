import React from 'react'
import NavLinks from '../../ui/dashboard/nav-links'
import Link from 'next/link'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';

const Sidenav = () => {
  return (
    <div className='bg-gray-100 h-full flex flex-col justify-between'>
      <NavLinks />
      <Link href='/api/auth/logout' className='flex gap-2 p-3 md:py-2 md:px-3 items-center bg-gray-100 text-sm font-medium hover:bg-sky-100 hover:text-blue-600'>
        <ArrowLeftStartOnRectangleIcon className='w-6' />
        Logout
      </Link>
    </div>
  )
}

export default Sidenav