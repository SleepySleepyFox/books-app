import React, { useEffect, useState } from 'react'
import BuyItem from './BuyItem'
import io from 'socket.io-client';
import axios from "axios"
import Cart from './Cart';


export default function MainBuy() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    axios.get('http://localhost:4000/buyItems')
      .then(res => setItems(res.data))
  }, [])
  console.log(items)

  const display = items.map(e => <BuyItem 
    tumbnail={e.tumbnail} 
    name={e.name}
    author={e.author}
    price={e.price}
    setCart={setCart}
    /> )

  return (
    <div className='grid grid-cols-3 md:grid-cols-4 p-4 justify-items-center'>
      {display}
      
    </div>
  )
}
