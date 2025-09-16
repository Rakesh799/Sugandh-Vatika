import { ShoppingCart } from 'lucide-react'
import React from 'react'

function Cart() {
  return (
    <div className='relative pr-4 cursor-pointer'>
      <ShoppingCart />
      <div className="absolute -top-4 right-2">
        0
      </div>
    </div>
  )
}

export default Cart
