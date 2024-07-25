import React from 'react'
import {Link, useLocation } from 'react-router-dom'
import sidebar_bg from '../../assets/bgs/sidebar_bg.jpg'



const Sidebar = () => {
    return (
        <div className="h-screen  text-pink-700 w-full flex flex-col border-r border-pink-200"  style={{
          backgroundImage: `url(${sidebar_bg})`}}>
          <div className="py-5 text-center  font-extrabold text-4xl border-b border-pink-200">
            M4 Matrimony
          </div>
          <ul className="flex-grow text-xl font-bold p-4 space-y-2 px-2 ">
          <Link to={""} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">Home</li></Link>
          <Link to={""} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">Recomandations</li></Link>
          <Link to={"requests"} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">Requests</li></Link>
          <Link to={"friends"} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">Friends</li></Link>
          <Link to={"saved"} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">Saved</li></Link>
          <Link to={"chats"} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">chats</li></Link>
          <Link to={""} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">notifications</li></Link>
          
          </ul>
          <div className="p-4 border-t border-pink-700 text-lg font-bold">
            <ul>
              <Link to={"plus"} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded">Unlock Plus</li></Link>
              <Link to={""} className='text-pink-600'><li className="hover:bg-pink-300 cursor-pointer px-12 p-2 rounded"> Help</li></Link>
            </ul>
          </div>

            





        </div>
      );
}

export default Sidebar