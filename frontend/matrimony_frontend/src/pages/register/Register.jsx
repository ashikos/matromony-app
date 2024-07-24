import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'; 
import { useNavigate } from 'react-router';


const Register = () => {

  const [creds, SetCreds] = useState(
    {"email":"", 'first_name':'', 'last_name':'', 'password':''})
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(creds);
  
      axios.post('accounts/signup/', creds)
        .then(response => {
          console.log('Post request successful:', response.data);

          if (response.status === 200){
            navigate('/')
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
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
    <form onSubmit={handleSubmit }>
      <div class="mb-4">
        <label for="firstName" class="block text-md font-medium text-gray-700 mb-2">First Name</label>
        <input onChange={handleChange} type="text" id="first_name" name="first_name" class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-4">
        <label for="lastName" class="block text-md font-medium text-gray-700 mb-2">Last Name</label>
        <input onChange={handleChange} type="text" id="last_Name" name="last_name" class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-md font-medium text-gray-700 mb-2">Email</label>
        <input onChange={handleChange} type="email" id="email" name="email" class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-md font-medium text-gray-700 mb-2">Password</label>
        <input onChange={handleChange} type="password" id="password" name="password" class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-6">
        <label for="confirmPassword" class="block text-md font-medium text-gray-700 mb-2">Confirm Password</label>
        <input type="password" id="confirmPassword" class="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <button type="submit" class="w-full bg-indigo-600 mb-3 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Register</button>
      <div className="flex">
        <p>already a member </p>
        <Link to="/login" >
            <span className='pl-2'>login</span>
          </Link> 
      </div>
    </form>
  </div>
</div>
  )
}

export default Register