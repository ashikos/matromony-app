import React from 'react'
import { Outlet } from 'react-router-dom'
import BaseHeader from './BaseHeader'
import {Link, useLocation } from 'react-router-dom'
import UserHeader from '../../components/layout/UserHeader'
import MatriHeader from './MatriHeader'


const BaseLayout = () => {

  const {pathname} = useLocation()
  console.log(pathname);
  let parts = pathname.split('/').filter(Boolean); // Filter out empty strings
  let path = parts[0];
  console.log(path);
  let content;
  if (path === 'matrimony') {
    content = <MatriHeader />;
  } else if (path === 'user') {
    content = <BaseHeader />;
  }

  return (
    <div className='h-full bg-white w-screen'>
      {content}
        
          <div className="p-5 text-xl px-[10rem]">
            {<Outlet/>}
          </div>
    </div>
  )
}

export default BaseLayout