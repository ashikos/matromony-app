import React from 'react'
import {Link, useLocation } from 'react-router-dom'

const MatriHeader = () => {
  let isEmploy = localStorage.getItem("isEmploy")

  let employPath = (isEmploy == true) ? 'employ' : 'jobseeker';

  return (
    <div className='bg-white flex justify-evenly border-b-2 pb-10 p-16 text-2xl'>
        <Link to={"general/" }  className="text-gray-500"><h1 className='font-extralight'> General info</h1></Link>
        {/* <Link to={`/family/${employPath}/`} className="text-gray-500"><h1> Family</h1></Link> */}
        <Link to={"family/"} className="text-gray-500"><h1> Family</h1></Link>
        <Link to={"preference/"} className="text-gray-500"><h1> Preferences</h1></Link>
    </div>
  )
}

export default MatriHeader