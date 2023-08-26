import React from 'react'

export default function SellItem({name, author, thumbnail}) {
  return (
    <div>
        <img src={thumbnail} alt="" />
        <h1>{name}</h1>
        <h3>{author}</h3>
    </div>
  )
}
