import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Header({status, setActive, userID}) {
  const [ordersCount, setOrdersCount] = useState([])
  
  useEffect(() =>{
    axios.post('http://localhost:4000/orders', {userID})
      .then(data => setOrdersCount(data.data))
  }, [])
  

  return (
    <div className='w-full pt-2 px-4 h-7 flex items-center'>

        <div className='flex items-center'>
            <img className='w-6 h-6' src="https://img.icons8.com/ios/50/book--v1.png" alt="book--v1"/>
            <h1 className='font-bold'>Bookshelf</h1>
        </div>

        <div onClick={() => {
            localStorage.removeItem('token')
            location.reload()
        }}>X</div>


       <div className='ml-auto flex items-center justify-center'> 
       <p>{status.username}</p>
        {!status.userStatus ? 
        <Link to={'/cart'} onClick={() => setActive(true)}><img className='w-4 h-4 ml-2' src="https://img.icons8.com/pastel-glyph/64/shopping-cart--v2.png" alt="shopping-cart--v2"/></Link> :
        <Link to={'/messages'}>
          <div className=''>
            <img className='w-6 h-6 ml-2' src="https://img.icons8.com/ios/50/filled-message.png" alt="secured-letter--v1"/>
            {ordersCount.length != 0 && <div className='absolute top-1 right-2 h-[16px] w-[16px] bg-red-400 rounded-[100%] text-white text-[10px] text-center'>{ordersCount.length}</div>}  
          </div>  
        </Link>}
       </div>
        
    </div>
  )
}