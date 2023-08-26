import React, { useState } from 'react'

export default function SignUp() {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [status, setStatus] = useState()

const handleSubmit = () => {

}

  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='bg-slate-100 w-[400px] h-[600px] rounded-md flex flex-col p-12 gap-2 justify-center'>
        <h1 className='font-bold'>Register</h1>
        <input type="text" placeholder='Username' className='p-2' onChange={(e) => {setUserName(e.target.value)}}/>
         <input type="password" placeholder='Password' className='p-2' onChange={(e) => {setPassword(e.target.value)}}/>
         <button type='submit' className='bg-blue-500 p-2 text-white active:bg-blue-600'>Register</button>
      </form>
      </div>
  )
}
