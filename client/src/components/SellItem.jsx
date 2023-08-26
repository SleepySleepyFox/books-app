import React from 'react'
import { Link } from 'react-router-dom'

export default function SellItem({name, author, thumbnail, price, setActive, active}) {



  return (
    <div className='flex flex-col justify-between w-full p-2'>
        <img className='m-auto' src={thumbnail} alt="" />
        <h1 className='text-center'>{name}</h1>
        <h3 className='text-center'>{author}</h3>
        <p>{price}</p>
        <button className='w-full bg-slate-300 hover:bg-slate-400 ease-in duration-300 align-bottom' onClick={() => setActive({active: true, author: author, thumbnail: thumbnail })}>Sell</button>
    </div>
  )
}
