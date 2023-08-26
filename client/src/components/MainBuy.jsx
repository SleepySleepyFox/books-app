import React from 'react'
import BuyItem from './BuyItem'
import io from 'socket.io-client';


export default function MainBuy() {
  const socket = io.connect('http://localhost:4000')

  socket.on("Item", data => console.log(data))
  return (
    <div className=''>
      <BuyItem/>
    </div>
  )
}
