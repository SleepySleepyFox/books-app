import React, { useEffect, useState } from 'react'
import BuyItem from './BuyItem'
import Cartitem from './CartItem'

export default function Cart({setActive}) {
const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
console.log('cart: ', cart)

const display = cart.map(e => <div className=''>
    <Cartitem 
    tumbnail={e.tumbnail} 
    name={e.name}
    author={e.author}
    price={e.price}
    />
</div> )

  return (
    
    <div className='top-0 left-0 h-full fixed w-screen bg-slate-100' >
       <div className='p-1 font-bold' onClick={() => setActive(false)}>X</div>
       {display}
       <button className='bg-slate-400 px-10'>Buy All</button>
    </div>
  )
}
