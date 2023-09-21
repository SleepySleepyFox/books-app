import React, {useEffect, useState} from 'react'
import Header from './Header'
import MainBuy from './MainBuy'
import MainSell from './MainSell'
import jwt_decode from "jwt-decode"

export default function Main({setActive}) {
    const [decoded, setDecoded] = useState(jwt_decode(localStorage.getItem("token")))

  return (
    <div>
        <Header status = {decoded} setActive={setActive} userID={decoded.userId}/>
        {decoded.userStatus === false && <MainBuy BuyerName={decoded.username} BuyerID={decoded.userId}/>}
        {decoded.userStatus === true && <MainSell userID={decoded.userId}/>}
    </div>
  )
}
