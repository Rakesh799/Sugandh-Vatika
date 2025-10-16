import { ShoppingCart } from 'lucide-react'
import React from 'react'

function Cart() {
  return (
    <div className='relative pr-4 cursor-pointer'>
      <ShoppingCart />
      <div className="absolute -top-2 right-4 text-xs">
        3
      </div>
    </div>
  )
}

export default Cart
