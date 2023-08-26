import React from 'react'

export default function BuyItem({tumbnail, author, name, price}) {
  return (
    <div>
        <img src={tumbnail} alt="" />
        <h1>{name}</h1>
        <h3>{author}</h3>
        <p>{price}</p>
    </div>
  )
}
