import React from 'react'

export default function Modal({active, setActive}) {
  return (
    <div 
    className='top-0 h-full fixed w-screen bg-slate-100' onClick={() => setActive(false)}>
        <div className='h-full w-full flex justify-center items-center'>
            <div>{active.author}</div>
        </div>
    </div>
  )
}
