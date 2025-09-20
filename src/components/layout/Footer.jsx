import Image from 'next/image'
import React from 'react'

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
            Pure fragrances, made with care.<br/>
            Bringing peace and positivity to your home.
          </div>
        </div>

        <div className='w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-3'>
          <div>
            <h2 className='font-semibold'>Quick Links</h2>
            <ul className='mt-4'>
              <li>Order Now</li>
              <li>Track My Order</li>
              <li>Call Us</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>



      <div className='text-center bg-brown text-beige py-2 text-base'>
        &copy; 2025 SatvikSugandh. All rights Reserved
      </div>
    </div>
  )
}

export default Footer
