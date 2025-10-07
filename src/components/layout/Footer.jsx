import Image from 'next/image'
import React from 'react'
import { PhoneCall, Mail } from "lucide-react";

function Footer() {
  return (
    <div className=''>
      <div className='w-full flex flex-col lg:flex-row bg-beige p-2 lg:p-10'>

        <div className='w-full lg:w-[30%]'>
          <div className="relative h-20 w-24">
            <Image
              src={'/images/logo.jpg'}
              alt='SatvikSugandh'
              fill
              className='object-cover'
            />
          </div>
          <div className='py-4'>
            Pure fragrances, made with care.<br />
            Bringing peace and positivity to your home.
          </div>
          <div>
            Bidyadharpur, Gualigarada, Puri, Odisha, India, 765432
          </div>
        </div>

        <div className='w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-3 sm:justify-items-center gap-4'>
          <div>
            <h2 className='font-semibold'>Quick Links</h2>
            <ul className='mt-4'>
              <li>Order Now</li>
              <li>Go to Cart</li>
              <li>Track My Order</li>
              <li>Call Us</li>
              <li>Feedback</li>
              <li>Register Complaint</li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold'>About Company</h2>
            <ul className='mt-4'>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold'>Quick Contact</h2>
            <ul className='mt-4'>
              <li className='flex gap-1 items-center cursor-pointer'>
                <PhoneCall size={20} />
                +91-987-654-3210
              </li>
              <li className='flex gap-1 items-center cursor-pointer'>
                <Mail size={20} />
                satviksugandh@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className='flex justify-center items-center bg-beige gap-2 py-4'>
        <div className="h-11 w-11 rounded-full border flex justify-center items-center cursor-pointer relative">
          <Image
            src={'/images/social-icons/fb.svg'}
            alt='Fb'
            fill
            className='object-contain p-2'
          />
        </div>
        <div className="h-11 w-11 rounded-full border flex justify-center items-center cursor-pointer relative">
          <Image
            src={'/images/social-icons/x.svg'}
            alt='X'
            fill
            className='object-contain p-[10px]'
          />
        </div>
        <div className="h-11 w-11 rounded-full border flex justify-center items-center cursor-pointer relative">
          <Image
            src={'/images/social-icons/insta.svg'}
            alt='In'
            fill
            className='object-contain p-2'
          />
        </div>
        <div className="h-11 w-11 rounded-full border flex justify-center items-center cursor-pointer relative">
          <Image
          src={'/images/social-icons/yt.svg'}
          alt='Yt'
          fill
          className='object-contain p-2'
          />
        </div>
        <div className="h-11 w-11 rounded-full border flex justify-center items-center cursor-pointer relative">
          <Image
          src={'/images/social-icons/linkedin.svg'}
          alt='Li'
          fill
          className='object-contain p-2'
          />
        </div>
      </div>

      <div className='text-center bg-brown text-beige py-2 text-base'>
        &copy; 2025 SatvikSugandh. All rights Reserved
      </div>
    </div>
  )
}

export default Footer
