'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Cart from './Cart'
import { Menu } from "lucide-react";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='sticky top-0 bg-beige flex items-center justify-between px-2'>

      <div className="relative h-20 w-24">
        <Image
          src={'/images/logo.jpg'}
          alt='SatvikSugandh'
          fill
          className='object-cover'
        />
      </div>

      <div className='hidden sm:block'>
        <Navbar />
      </div>

      <div className={`absolute -bottom-10 left-0 bg-beige w-full py-2 ${menuOpen ? 'flex' : 'hidden'} justify-center`}>
        <Navbar />
      </div>

      <div>
        <Cart />
      </div>

      <div className='block sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={24} />
      </div>
    </div>
  )
}

export default Header
