"use client"

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}


import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image';


const ListItem: React.FC<ListItemProps> = ({ image, name, href}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  }

  return (
    <button className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 '>
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image className="object-cover" fill src={image} alt={Image}/>
      </div>
    </button>
  )
}

export default ListItem
