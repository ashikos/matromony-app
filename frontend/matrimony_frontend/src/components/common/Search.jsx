import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative ">
              <FaSearch size={20} className='absolute ml-2 top-[50%] -translate-y-1/2 text-neutral-400' />
              <input  className='border shadow-md  h-14 w-[24rem] px-2 pl-9 rounded-xl border-gray-300 focus:outline-none ' type="text" placeholder='search...'  />

    </div>   
  
)
}

export default Search