import { useState, useEffect } from 'react'
import SignUp from './components/SignUp'
import { BrowserRouter, Navigate, Route, Router, Routes, redirect } from 'react-router-dom'
import Main from './components/Main'
import MainBuy from './components/MainBuy'
import MainSell from './components/MainSell'
import Header from './components/Header'
import LogIn from './components/LogIn'
import Cart from './components/Cart'

function App() {
  const [loggedin, setLoggedIn] = useState(null)
  const [active, setActive] = useState(false)
  console.log("Token: ",loggedin)

  useEffect(() => {
    setLoggedIn(localStorage.getItem('token'))
  }, [localStorage.getItem('token')])

  // setLoggedIn(null)

  // <div className=''>
  //     <SignUp/>
  //   </div>

  return (
    <BrowserRouter>
      <Routes>
        {loggedin != null ? <Route element={<Navigate to={'/'}/>} path='/auth'/> : <Route element={ <Navigate to={'/auth'}/>} path='/'/>} 
        {loggedin != null ? <Route element={<Navigate to={'/'}/>} path='/register'/> : <Route element={ <Navigate to={'/register'}/>} path='/'/>}
        {active ? <Route element={<Navigate to={'/cart'}/>} path='/'/> : <Route element={ <Navigate to={'/'}/>} path='/cart'/>}
  

      <Route element={<Main setActive={setActive}/>} path='/'/>
      {<Route element={<SignUp/>} path='/register'/>}
      <Route element={<LogIn/>} path='/auth'/> 
      <Route element={<Cart setActive={setActive}/>} path='/cart'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
