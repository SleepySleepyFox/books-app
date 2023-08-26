import React, {useEffect, useState} from 'react'
import Header from './Header'
import MainBuy from './MainBuy'
import MainSell from './MainSell'
import jwt_decode from "jwt-decode"

export default function Main() {
    const [decoded, setDecoded] = useState({userStatus: null})

useEffect(() => {
    if(localStorage.getItem('token')){
        setDecoded(jwt_decode(localStorage.getItem("token")))
        console.log("Decoded: ", decoded)
    }
    }, [localStorage.getItem('token')])

  return (
    <div>
        <Header/>
        {decoded.userStatus === false && <MainBuy/>}
        {decoded.userStatus === true && <MainSell/>}
    </div>
  )
}
