import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideBar from '../components/layout/UserSideBar';
import UserHeader from '../components/layout/UserHeader';

const UserLayout = () => {
  return (
    <div className="w-screen h-screen flex">
        <UserSideBar/>
        <div className='w-full '>
          <UserHeader/>
        
          {<Outlet/>}
        </div>

            
          
            
        
    </div>
  )
}

export default UserLayout
