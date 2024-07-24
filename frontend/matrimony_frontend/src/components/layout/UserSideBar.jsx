import React from 'react'
import {Link, useLocation } from 'react-router-dom'
import { GiSelfLove } from "react-icons/gi";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, USER_SIDEBAR_LINKS } from '../../libs/utils/stepper';
import classNames from 'classnames';

const linkClasses = 'flex py-3 gap-4 px-3 hover:bg-neutral-200  hover:no-underline hover:text-neutral-900 hover:scale-105  duration-500 rounded-lg'



const UserSideBar = () => {

  const {pathname} = useLocation()
  return (
    
    <div className='bg-neutral-900 shadow-2xl h-full px-10 py-4 flex flex-col text-white '>
      <div className="px-3 py-4 flex gap-4 items-center">
        <GiSelfLove size={40}/> <span className='text-4xl font-extrabold'> Matrimony</span>
      </div>
      <div className="flex-1 flex flex-col gap-0.5 mt-10">
        {USER_SIDEBAR_LINKS.map( (item) =>(
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

export default UserSideBar



// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
//       <div className="p-4">
//         <h2 className="text-xl font-bold">Sidebar</h2>
//       </div>
      // <nav className="flex-1">
      //   <ul>
      //     <li>
      //       <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
      //     </li>
      //     <li className="relative group">
      //       <button className="block py-2 px-4 text-sm hover:bg-gray-700 w-full text-left">
      //         Dietary Choices
      //         <svg
      //           className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 group-hover:text-white transition-colors duration-300"
      //           fill="currentColor"
      //           viewBox="0 0 20 20"
      //         >
      //           <path
      //             fillRule="evenodd"
      //             d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
      //           />
      //         </svg>
      //       </button>
      //       <div className="dropdown-content bg-gray-700 absolute hidden group-hover:block w-full">
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Omnivore</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Vegetarian</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Vegan</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Pescatarian</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Flexitarian</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Paleo</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Keto</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Gluten-Free</a>
      //         <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Dairy-Free</a>
      //       </div>
      //     </li>
      //   </ul>
      // </nav>
//     </div>
//   );
// };

// export default Sidebar;