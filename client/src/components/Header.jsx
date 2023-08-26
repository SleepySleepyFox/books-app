import React from 'react'

export default function Header() {
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
    </div>
  )
}