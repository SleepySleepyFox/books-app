import React, { useEffect, useState } from 'react'
import BuyItem from './BuyItem'
import Cartitem from './CartItem'
import axios from 'axios'

export default function Cart({setActive}) {
const [cart, setCart] = useState([])

useState(() => {
  JSON.parse(localStorage.getItem('cart')) != null && setCart(JSON.parse(localStorage.getItem('cart')))
}, [localStorage.getItem('cart')])


const BuyItems = () => {
  localStorage.setItem('cart', JSON.stringify([]))
  axios.post("http://localhost:4000/BuyAll", {cart})
}

const display = cart.map(e => <div className=''>
    <Cartitem 
    tumbnail={e.tumbnail} 
    name={e.name}
    author={e.author}
    price={e.price}
    userid={e.userid}
    />
</div> )

  return ( 
    <div className='top-0 left-0 h-full fixed w-screen bg-slate-100' >
       <div className='p-1 font-bold' onClick={() => setActive(false)}>X</div>
       {display}
       {cart.length != 0 && <button className='bg-slate-400 px-10' onClick={() => {BuyItems()}}>Buy All</button>}
    </div>
  )
}
