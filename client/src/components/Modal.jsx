import axios from 'axios';
import React, {useState} from 'react'
import io from 'socket.io-client';

export default function Modal({active, setActive}) {

    const [price, setPrice] = useState()

    const handleDataSend = async () => {
        await axios.post('http://localhost:4000/sell', {
            tumbnail: active.thumbnail,
            author: active.author,
            name: active.name,
            price: price,
            userId: active.userID
        })
        

        // const socket = io.connect('http://localhost:4000')
        // socket.emit("Data", {
        //     tumbnail: active.thumbnail,
        //     author: active.author,
        //     name: active.name,
        //     price: price,
        //     userId: active.userID
        // })
    }
  return (
    <div 
    className={`top-0 h-full fixed w-screen`}>
        <div className='h-full flex justify-center items-center'>
            <div className='bg-slate-100 w-fit px-12 p-2 rounded-md'>
                <div onClick={() => setActive(e => !e)} className=' w-fit font-bold cursor-default opacity-70 hover:opacity-100 hover:ease-out hover:text-red-600 duration-300'>X</div>
                <div className='h-full w-full flex justify-center items-center z-10'>
                    <div>
                        <img src={active.thumbnail} alt="" />
                        <h1 className='text-center'>{active.author}</h1>
                    </div>
                    <div className='flex flex-col gap-1 ml-4'>
                        {active.name}
                        <input type="text" placeholder=' Price in $' onChange={(e) => setPrice(e.target.value)}/>
                        <button className='bg-blue-600 text-white' onClick={() => handleDataSend()}>On Sale</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
