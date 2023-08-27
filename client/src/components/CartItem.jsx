import React from 'react'

export default function Cartitem({tumbnail, author, name, price, setCart}) {
  return (
    <div className='flex justify-start w-full p-2'>
        <img className='m-0 h-32' src={tumbnail} alt="" />
        <div>
        <h1 className='text-center'>{name}</h1>
        <h3 className='text-center'>{author}</h3>
        <p className='text-center'>{price}$</p>
        </div>
    </div>
  )
}