'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Cart from './Cart'
import { Menu, User } from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <div className="flex flex-col">


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



        <div className='flex items-center'>

          <div className='flex items-center gap-2'>
            <User />
            <Cart />
          </div>

          <div className='block sm:hidden pr-4' onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </div>
        </div>


      </div>




      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-beige sm:hidden w-full py-2 flex justify-center"
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

export default Header
