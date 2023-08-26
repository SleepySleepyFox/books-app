import React from 'react'

export default function SellItem({name, author, thumbnail}) {
  return (
    <div >
        <img className='m-auto' src={thumbnail} alt="" />
        <h1 className='text-center'>{name}</h1>
        <h3 className='text-center'>{author}</h3>
    </div>
  )
}
