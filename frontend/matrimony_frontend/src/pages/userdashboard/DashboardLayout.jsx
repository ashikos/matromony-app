import React from 'react'
import Sidebar from './Sidebar';
import UserSidebar from './UserSidebar';
import UserList from './UserList';
import { Outlet } from 'react-router-dom'
import dash_bg from '../../assets/bgs/dash_bg.jpeg'

const DashboardLayout = () => {
  return (

    <div className='flex justify-evenly w-full h-screen bg-pink-100' >
    <div className="w-[18rem] bg-gray-200">
      <Sidebar />
    </div>
    <div className="flex-1 p-4">
      <Outlet />
    </div>
    <div className="w-[20rem] bg-gray-200">
      <UserSidebar />
    </div>
  </div>
  );
}

export default DashboardLayout