import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'


const Layout = () => {
  return (
    <div className='flex flex-row h-full w-screen bg-slate-200'>
        <Sidebar />
        <div className='flex-1'>
          <Header/>
          <div className="relative">
            {<Outlet/>}
          </div>
          
        </div>
    </div>
  )
}

export default Layout