"use client"

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { useUser } from '@/hooks/useUser';
import { FaUserAlt } from 'react-icons/fa';

import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Button from './Button';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useAuthModal from '@/hooks/useAuthModal';

const Header: React.FC<HeaderProps> = ({ children, className }) => {

  const supabaseClient = useSupabaseClient()
  const { user } = useUser()

  const authmodal = useAuthModal();

  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.refresh();

    if (error) {
      toast.error(error.message);
    } 
    else {
      toast.success('Logged out!')
    }
  };

  return (
    <div className={twMerge("h-fit bg-gradient-to-b from-red-800 p-6")}>
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition' onClick={() => router.back()}>
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition' onClick={() => router.forward()}>
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center' >
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <HiHome size={20} className='text-black' />
          </button>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <BiSearch size={20} className='text-black' />
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
          {user ? (
            <div className='flex gap-x-4 items-center'>
              <Button onClick={handleLogout} className='bg-white px-6 py-2' >Logout</Button>
              <Button onClick={()=>router.push('/account')} className='bg-white'><FaUserAlt/></Button>
            </div>
          ) : (
            <>
              <div>
                <Button onClick={authmodal.onOpen} className='bg-transparent text-neutral-300 font-medium' >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button onClick={authmodal.onOpen} className='bg-white px-6 py-2' >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Header
