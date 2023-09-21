import React, { useEffect, useState } from 'react'
import BuyItem from './BuyItem'
import io from 'socket.io-client';
import axios from "axios"
import Cart from './Cart';


export default function MainBuy({BuyerID, BuyerName}) {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  console.log('id', BuyerID)

  const socket = io.connect('http://localhost:4000')

  useEffect(() => {
    // localStorage.setItem('cart', JSON.stringify([]))

    socket.on("Data", data => {
      setItems(e => [...e, data.fullDocument])
    })
  }, [cart])

  useEffect(() => {
    axios.get('http://localhost:4000/buyItems')
      .then(res => setItems(res.data))

      socket.on("Data", data =>{
        console.log(data)
      })
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
    BuyerID={BuyerID}
    BuyerName={BuyerName}
    /> )

  return (
    <div className='grid grid-cols-3 md:grid-cols-6 p-4 justify-items-center'>
      {display}
      
    </div>
  )
}
