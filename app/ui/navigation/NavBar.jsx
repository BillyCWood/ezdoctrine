import Link from 'next/link';
import Image from 'next/image';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import SearchBar from './SearchBar';

const NavBar = () => {


  return (
    <nav className='hidden lg:flex justify-between pr-16 bg-[#004aad] text-white dm-sans shadow-sm shadow-black z-10'>
        <div className='flex'>
          <SearchBar />
          <div className='h-[75px] overflow-hidden flex items-center'>
            <Link href={'/'}>
              <Image src={'/logo/EZD Logo.png'} width={200} height={1} alt='ez doctrine logo' className='' />
            </Link>
          </div>
        </div>

      <div className='flex items-center gap-x-3'>
        <Menu>
          <MenuButton className={'flex px-4 py-6 hover:text-black hover:bg-blue-100 transition-colors ease-in-out duration-200'}>About
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1 mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

          </MenuButton>
          
          
          <MenuItems anchor="bottom start" modal={false} transition className={'bg-slate-600 text-white dm-sans shadow-sm shadow-black transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'}>
            <MenuItem>
              <Link href={'/about/faith'} className="block py-1 px-2 data-[focus]:bg-blue-100 data-[focus]:text-black">Statement of Faith</Link>
            </MenuItem>
            <MenuItem>
              <Link href={'/about/mission'} className="block py-1 px-2 data-[focus]:bg-blue-100 data-[focus]:text-black">Our Mission</Link>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Link href={'/gospel'} className='px-4 py-6 hover:text-black hover:bg-blue-100 transition-colors ease-in-out duration-200'>The Gospel</Link>
      </div>


    </nav>
  )
}

export default NavBar