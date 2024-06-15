import React from 'react'
import {Link, useLocation } from 'react-router-dom'
import { GiSelfLove } from "react-icons/gi";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../libs/utils/stepper';
import classNames from 'classnames';

const linkClasses = 'flex py-3 gap-4 px-3 hover:bg-neutral-200  hover:no-underline hover:text-neutral-900 hover:scale-105  duration-500 rounded-lg'


const Sidebar = () => {

  const {pathname} = useLocation()

  return (
    <div className='bg-neutral-900 shadow-2xl  w-[20%] pl-5 py-4 flex flex-col text-white '>
      <div className="px-3 py-4 flex gap-4 items-center">
        <GiSelfLove size={40}/> <span className='text-4xl font-extrabold'> M4 Matrimony</span>
      </div>
      <div className="flex-1 flex flex-col gap-0.5 mt-10">
        {DASHBOARD_SIDEBAR_LINKS.map( (item) =>(
          <Link key={item.key} className={classNames(pathname===item.path ? 'bg-neutral-200 text-black':'text-white text-xl ' , linkClasses)} to={item.path} >
            <span>{item.icon}</span>{item.label} 
          </Link>
        ))
        }
      </div>
      <div className="">
      {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
        <Link key={item.key} className={classNames(pathname===item.path ? 'text-neutral-900':'text-white' , linkClasses)} to={item.path}>
          <span>{item.icon}</span>{item.label} 
          
        </Link>
      ))}
        
      </div>
    </div>
  )
}

export default Sidebar