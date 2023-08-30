import axios from 'axios';
import React, {useState} from 'react'
import io from 'socket.io-client';

export default function Modal({active, setActive}) {

    const [price, setPrice] = useState()

    const handleDataSend = () => {
        // axios.post('http://localhost:4000/sell', {
        //     tumbnail: active.thumbnail,
        //     author: active.author,
        //     name: active.name,
        //     price: price 
        // })


        const socket = io.connect('http://localhost:4000')
        socket.emit("Data", {
            tumbnail: active.thumbnail,
            author: active.author,
            name: active.name,
            price: price,
            userId: active.userID
        })
    }
  return (
    <div 
    className='top-0 h-full fixed w-screen bg-slate-100' >
        <div onClick={() => setActive(e => !e)} className='p-1 font-bold'>X</div>
        <div className='h-full w-full flex justify-center items-center z-10'>
            <div>
                <img src={active.thumbnail} alt="" />
                <h1>{active.author}</h1>
            </div>
            <div className='flex flex-col gap-1 ml-4'>
                {active.name}
                <input type="text" placeholder=' Price in $' onChange={(e) => setPrice(e.target.value)}/>
                <button className='bg-slate-400' onClick={() => handleDataSend()}>On Sale</button>
            </div>
        </div>
    </div>
  )
}
