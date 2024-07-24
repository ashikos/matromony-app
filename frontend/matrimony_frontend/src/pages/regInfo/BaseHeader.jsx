import React from 'react'
import {Link, useLocation } from 'react-router-dom'

const BaseHeader = () => {
  let isEmploy = localStorage.getItem("isEmploy")

  let employPath = (isEmploy == true) ? 'employ' : 'jobseeker';

  return (
    <div className='bg-white flex justify-evenly border-b-2 pb-10 p-16 text-2xl'>
        <Link to={"/user/base/" }  className="text-gray-500"><h1 className='font-extralight'> Basic Info</h1></Link>
        <Link to={`/user/${employPath}/`} className="text-gray-500"><h1> Professiona Info</h1></Link>
        <Link to={"/user/relation/"} className="text-gray-500"><h1> Relationship</h1></Link>
    </div>
  )
}

export default BaseHeader