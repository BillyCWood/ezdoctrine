'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

import {
  UserCircleIcon,
  HomeIcon,
  DocumentPlusIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Create a Post', href: '/dashboard/posts/create', icon: DocumentPlusIcon},
  { name: 'Drafts', href: '/dashboard/posts/drafts', icon: PencilSquareIcon },
  { name: 'Published Posts', href: '/dashboard/posts/published', icon: DocumentTextIcon },
  { name: 'Logout', href: '/api/auth/logout', icon: ArrowLeftStartOnRectangleIcon },
];


const NavLinks = () => {

  const [isOpen, setIsOpen] = useState(false);


  const pathname = usePathname();
  return (
    <aside className='max-lg:absolute max-lg:w-full max-lg:bg-white max-lg:z-10'>

      <div className='flex lg:hidden h-10 justify-between items-center pl-4 pr-9 border-b-[1px] border-black'>
        <p>EZ Doctrine Authors</p>
        <div className={`flex py-5 px-2 hover:cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} onClick={() => setIsOpen(!isOpen)}>
          <span className='w-4 border-b-2 border-black rotate-45 translate-x-[2px]' />
          <span className='w-4 border-b-2 border-black -rotate-45 -translate-x-1' />
        </div>
      </div>

      <div className={`${isOpen ? '' : 'max-lg:hidden'}`}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link 
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
              'lg:hidden': link.name === 'Logout',
            },
          )}
          >
            <LinkIcon className="w-6" />
            <p className="block">{link.name}</p>
          </Link>
        )
      })}
      </div>
    </aside>
  )
}

export default NavLinks