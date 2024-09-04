import React from 'react'
import {Link, useLocation } from 'react-router-dom'



const Dsidebar = () => {
    return (
        <div className="h-screen bg-[#642a6e]  text-white w-full flex flex-col border-r border-pink-200" >
          <div className="py-5 text-center  font-extrabold text-4xl border-b border-pink-200">
            Buddy Pair
          </div>
          <ul className="flex-grow text-xl font-bold p-4 space-y-2 px-2 ">
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">Home</li></Link>
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">Recomandations</li></Link>
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">Requests</li></Link>
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">Friends</li></Link>
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">Saved</li></Link>
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">chats</li></Link>
          <Link to={""} className='text-white hover:text-[#642a6e]'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">notifications</li></Link>
          
          </ul>
          <div className="p-4 border-t border-white text-lg font-bold">
            <ul>
              <Link to={"plus"} className='text-white'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded">Unlock Plus</li></Link>
              <Link to={""} className='text-white'><li className="hover:bg-pink-300 hover:text-[#642a6e] cursor-pointer px-12 p-2 rounded"> Help</li></Link>
            </ul>
          </div>
        </div>
      );
}

export default Dsidebar