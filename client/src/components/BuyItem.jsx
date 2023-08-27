import React from 'react'

export default function BuyItem({tumbnail, author, name, price, setCart}) {
  return (
    <div className='flex flex-col justify-between w-full p-2'>
        <img className='m-auto' src={tumbnail} alt="" />
        <h1 className='text-center'>{name}</h1>
        <h3 className='text-center'>{author}</h3>
        <p className='text-center'>{price}$</p>
        <button className='w-full bg-slate-300 hover:bg-slate-400 ease-in duration-300 align-bottom' onClick={(e) => setCart(e => [...e, {tumbnail, author, name, price}])}>Add to cart</button>
    </div>
  )
}
