import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SignUp() {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [status, setStatus] = useState(true)

const handleSubmit = async (e) => {
    e.preventDefault()
    
    const register = axios.post('http://localhost:4000/register', {
      username: userName,
      password: password,
      userStatus: status,
    })

    const token = (await register).data
    localStorage.setItem('token', token)
    setUserName('')
    setPassword('')
    setStatus(true)
    location.reload()
}

  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='bg-slate-100 w-[400px] h-[600px] rounded-md flex flex-col p-12 gap-2 justify-center'>
        <h1 className='font-bold'>Register</h1>
        <input type="text" value={userName} placeholder='Username' className='p-2' onChange={(e) => {setUserName(e.target.value)}}/>
         <input type="password" value={password} placeholder='Password' className='p-2' onChange={(e) => {setPassword(e.target.value)}}/>
         <select name="" id="" value={status} className='w-fit p-1 outline-none' onChange={(e) => setStatus(e.target.value)}>
            <option value={true}>Sell</option>
            <option value={false}>Buy</option>
         </select>
         <button type='submit' className='bg-blue-500 p-2 text-white active:bg-blue-600'>Register</button>
         <small>or <Link to={'/auth'}>Log In</Link></small>
      </form>
      </div>
  )
}
