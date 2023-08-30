import React, {useEffect, useState} from 'react'

export default function BuyItem({tumbnail, author, name, price, setCart, cart, userid}) {
  const [count, setCount] = useState(1)
  const [overallPrice, setOverallPrice] = useState()
  
  useEffect(() => {
    setOverallPrice(Number(price) * count)
  }, [count])
  return (
    <div className='flex flex-col justify-between w-full p-2'>
        <img className='m-auto' src={tumbnail} alt="" />
        <h1 className='text-center'>{name}</h1>
        <h3 className='text-center'>{author}</h3>
        <p className='text-center'>{price}$</p>
        <div className='flex w-full justify-between'>
          <div className='cursor-default' onClick={() => count != 0 && setCount(e => e - 1)}>-</div>
          {count}
          <div className='cursor-default' onClick={() => setCount(e => e + 1)}>+</div>
        </div>
        <button className='w-full bg-slate-300 hover:bg-slate-400 ease-in duration-300 align-bottom' onClick={(e) => setCart(e => [...e, {tumbnail, author, name, price: overallPrice, userid}])}>Add to cart</button>
    </div>
  )
}
