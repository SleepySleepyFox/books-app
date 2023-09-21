import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode"

export default function Messages({}) {
  const [orders, setOrders] = useState([])
  const [decoded, setDecoded] = useState(jwt_decode(localStorage.getItem("token")))

  useEffect(() =>{
    const id = decoded.userId
    axios.post('http://localhost:4000/orders', {userID: id})
      .then(data => setOrders(data.data))
  }, [])

  const handleOrder = (order_id) => {
    axios.post('http://localhost:4000/handleOrder', {id: order_id})
  }

  const display = orders.map(e => {
    return(
      <div className='flex text-start justify-between items-center px-4'>
        <div className='w-36'>
          <h1>{e.author}</h1>
          <p>{e.book}</p>
        </div>
        <div className='w-12 text-start'>
          <p>X {e.amount}</p>
        </div>
        <div className='w-12 text-start'>
          {e.buyer}
        </div>
        <div onClick={() => {handleOrder(e._id)}}>OK</div>
        {/* <div>{e._id}</div> */}
      </div>
    )
  })



  return (
    <div>
      <Link to={'/'}>
        <div className='ml-4'>X</div>
      </Link>
      <div>
        <div className='border-b-[1px] border-lime-700 flex justify-between px-4'>
          <p className='text-lime-700 w-36'>Book</p>
          <p className=' text-lime-700 w-12'>Amount</p>
          <p className='text-lime-700'>Ordered by</p>
          <p className='text-lime-700 hover:text-red-400'>Send</p>
        </div>
        {display}
      </div>
    </div>
  )
}
