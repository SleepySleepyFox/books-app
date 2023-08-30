import React, { useEffect, useState } from 'react'
import BuyItem from './BuyItem'
import io from 'socket.io-client';
import axios from "axios"
import Cart from './Cart';


export default function MainBuy() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  const socket = io.connect('http://localhost:4000')

  socket.on("Book", data => console.log(data))

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    axios.get('http://localhost:4000/buyItems')
      .then(res => setItems(res.data))
  }, [])

  const display = items.map(e => <BuyItem
    key = {e._id} 
    tumbnail={e.tumbnail} 
    name={e.name}
    author={e.author}
    price={e.price}
    setCart={setCart}
    cart={cart}
    userid={e.userid}
    /> )

  return (
    <div className='grid grid-cols-3 md:grid-cols-4 p-4 justify-items-center'>
      {display}
      
    </div>
  )
}
