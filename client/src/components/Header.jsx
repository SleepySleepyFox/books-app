import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({status, setActive}) {
  
  console.log(status)
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


        <h2 className='ml-auto'>UserName</h2>
        {!status.userStatus && <Link to={'/cart'} onClick={() => setActive(true)}><img className='w-4 ml-2' src="https://img.icons8.com/pastel-glyph/64/shopping-cart--v2.png" alt="shopping-cart--v2"/></Link>}
    </div>
  )
}