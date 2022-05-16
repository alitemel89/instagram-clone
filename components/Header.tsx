import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
  LogoutIcon,
  LoginIcon,
} from '@heroicons/react/outline'

import { HomeIcon, MenuIcon } from '@heroicons/react/solid'
import { useAuth } from '../context/AuthContext'
import Link from 'next/link'

const Header = () => {
  const { currentUser, logout } = useAuth()

  const [userPhotoUrl, setUserPhotoUrl] = useState<string>(
    'https://secure.gravatar.com/avatar/d6fd6bff19d7f0ad4024f3811474fe92?s=180&d=mm&r=g'
  )

  useEffect(() => {
    if (currentUser != null) {
      const { photoURL } = currentUser
      setUserPhotoUrl(photoURL)
    }
  }, [currentUser])

  console.log(currentUser)

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left */}
        <div className="relative hidden w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle  Search Input Field*/}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 
            bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />

          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse
            items-center justify-center rounded-full bg-red-500 text-xs text-white"
            >
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          {currentUser ? (
            <div className='flex items-center space-x-4'>
              <img
                src={userPhotoUrl}
                alt="profile pic"
                className="h-10 cursor-pointer rounded-full"
              />
              <LogoutIcon onClick={() => logout()} className="navBtn" />
            </div>
          ) : (
            <div>
              <Link href="/auth/signin">Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
