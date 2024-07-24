import {useEffect, useState } from "react";
import React from "react";
import axios from '../../axios'
import { Link, } from 'react-router-dom'


const UserSidebar = () => {

  let userId = localStorage.getItem("userId")
  const [userData, setUserdata] = useState({})

  const fetchUserData = async () => {   
    // api to call fetch user data  
    try {
        const response = await axios.get(
          `accounts/users/${userId}/`);
          localStorage.setItem("ClientId", response.data.client_id)
          setUserdata(response.data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  useEffect(() => {
    fetchUserData();
  }, []);


    return (
        <div className="h-screen bg-pink-200  text-gray-700 w-full flex flex-col">
          <div className='py-3 px-5 flex-grow'>
            <div className="flex justify-between text-red-500">
                <h1 className='text-[18px]'>profile</h1>
                <Link to="/user" className="text-red-500"> <button className='text-[18px] font-semibold'> edit profile</button></Link>
                
            </div>
            <div className="w-full text-pink-600 py-8 text-center space-y-1 ">
                <img className='w-52 h-52 rounded-full object-cover border-3 border-pink-600 mx-auto mb-4' src={userData.image} alt="" />
                <h1 className='font-semibold text-2xl '> {userData.first_name} {userData.last_name} </h1>
                <h2 className='font-semibold text-lg'>Age: {userData.age}</h2>
                <h2 className='font-semibold text-lg'>id: {userData.id}</h2>
                <h2 className='font-semibold text-lg'>Client id: {userData.client_id}</h2>
            </div>
          </div>
          
          
          <div className="p-4 border-t border-pink-700">
          <button className="w-full bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
          
        </div>
    )
}

export default UserSidebar