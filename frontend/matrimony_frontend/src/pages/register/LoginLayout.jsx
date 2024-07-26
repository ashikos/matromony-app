import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import loginjpg from './../../assets/login/login.jpg'
import { GiSelfLove } from "react-icons/gi";

const Login = () => {
  return (
    <div className="w-screen h-screen flex  bg-slate-100">
        <div className="w-[55%] bg-white h-screen ">
          <div className="flex justify-center pt-[8rem]">
            <img src={loginjpg}  alt="" className='w-[65%] h-[50%]' />
          </div>
          <div className="flex justify-center pt-10">
            <GiSelfLove size={30} className='text-gray-400 mr-3'/> <span className='text-3xl text-gray-400'> App Where you find all your needs</span>
          </div>
        </div>
        
        <div className="w-[45%] h-screen">
        <Link to="/dashboard" ><p className='text-gray-700 p-3 font-extrabold'>demo</p> </Link> 
         
          {<Outlet/>}
            
        </div>
    </div>
  )
}

export default Login