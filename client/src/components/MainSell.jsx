import React, {useEffect, useState} from 'react'
import SellItem from './SellItem';

export default function MainSell() {

  const [search,setSearch] = useState("Хроники Заводной Птицы");
  const [books, setBooks] = useState([])
  const [item, setItem] = useState()

  const handleSearch = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search.replace(/ /g, '_')}&key=AIzaSyDAmprmTeMEokjr6nusL66Y2GcUB0n5bGo`)
    .then(data => data.json())
    .then(res => setBooks(res.items))
  }
 console.log(books)
 const display = books.map(e => 
 <SellItem 
  name={e.volumeInfo.title} 
  author={e.volumeInfo.authors[0]} 
  thumbnail={e.volumeInfo.imageLinks.thumbnail}
  />)
  

  return (   
 <div>
     <div className='p-4 flex flex-col items-center'>
      <div className='flex justify-center border-black border-2 w-full md:w-[40%] rounded-md'>
        <input className='rounded-md w-full outline-none' type="text" name="" id="" onChange={(e) => setSearch(e.target.value)} />
        <img className=' h-5 ml-auto mr-2 self-center ' src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" onClick={() => handleSearch()}/>
      </div>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-4 p-4 justify-items-center'>
        {display}
    </div>
 </div>
  )
}
