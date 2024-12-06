'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResponsiveNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between bg-[#004aad] text-white border-b-[1px] border-white w-screen lg:hidden'>
        <div className='h-[75px] overflow-hidden'>
          <Link href={'/'}>
            <Image src={'/logo/EZD Logo.png'} width={150} height={1} alt='ez doctrine logo' className='-translate-y-1/4' />
          </Link>
        </div>
        <button className='px-6 mr-6' onClick={()=> { setIsOpen(!isOpen) }}>
          <div className='flex flex-col gap-y-[6px]'>
            <span className={`block border-b-[1px] border-white w-6 transition ease-in-out duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : 'rotate-180'}`} />
            <span className={`block border-b-[1px] border-white w-6 transition-opacity ease-in-out duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block border-b-[1px] border-white w-6 transition ease-in-out duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : 'rotate-180'}`} />
          </div>
        </button>
    </nav>
  )
}

export default ResponsiveNav;