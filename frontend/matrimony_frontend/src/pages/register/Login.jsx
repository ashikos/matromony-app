import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import axios from '../../axios'
import { useNavigate } from 'react-router';
import { UserTypes } from '../../libs/utils/Dropdown';


const Login = () => {

  const [creds, SetCreds] = useState(
    {'username':'', 'password':''})

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(creds);
  
      axios.post('accounts/login/', creds, {
        headers: {
            
        }
    })
        .then(response => {
          console.log('Post request successful:', response.data);
          console.log(response.data.id);
          const user_id = response.data.id
          const user_type = response.data.user_type
          let is_registered = response.data.is_registered
          localStorage.setItem("userId", user_id)
          localStorage.setItem("firstName", response.data.first_name)
          localStorage.setItem("userType", response.data.user_type)
          // localStorage.setItem("contactId", response.data.advanced_info.contact)
          localStorage.setItem("educationId", response.data.advanced_info.education)
          localStorage.setItem("professionId", response.data.advanced_info.profession)
          localStorage.setItem("familyId", response.data.advanced_info.family)
          localStorage.setItem("ClientId", response.data.advanced_info.client)
          localStorage.setItem("preferenceId", response.data.advanced_info.preference)
          localStorage.setItem('isEmploy', response.data.is_employ )

          if (user_type===UserTypes.Admin){
            navigate('/admin/')
          } else if (user_type===UserTypes.User){
            navigate(`${is_registered ? '/dashboard' : '/user/base/'}`)
          }
          
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
    };

  const handleChange = (e)=>{

      const {name, value} = e.target
      SetCreds(prestat=>({...prestat, [name]:value}))
      console.log(creds);
  }


  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
    <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
    <form onSubmit={handleSubmit}>
      <div class="mb-4">
        <label for="email" class="block text-md font-medium text-gray-700 mb-2">Email</label>
        <input type="email"  id="email" name="username" onChange={handleChange} class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-md font-medium text-gray-700 mb-2">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange} class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <input type="checkbox" id="remember" name="remember" onChange={handleChange} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label for="remember" class="ml-2 block text-md text-gray-900">Remember me</label>
        </div>
        <div class="text-md">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>
      <button type="submit" class="w-full bg-indigo-600 mb-3 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</button>
      <div className="text-center">
        <p className='text-gray-700'>not registered yet</p>
        <Link to="/register" >
          <span className='pl-2'>Signup</span>
        </Link> 
      </div>
    </form>
  </div>
</div>
  )
}

export default Login