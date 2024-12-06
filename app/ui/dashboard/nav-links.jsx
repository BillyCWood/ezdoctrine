'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  UserCircleIcon,
  HomeIcon,
  DocumentPlusIcon,
  PencilSquareIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Create a Post', href: '/dashboard/posts/create', icon: DocumentPlusIcon},
  { name: 'Drafts', href: '/dashboard/posts/drafts', icon: PencilSquareIcon },
  { name: 'Published Posts', href: '/dashboard/posts/published', icon: DocumentTextIcon },
];


const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link 
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}

export default NavLinks