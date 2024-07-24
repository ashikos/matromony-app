import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from '../axios'


const UserView = () => {


  const [creds, SetCreds] = useState(
    {'username':'', 'password':''})




    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(creds);
  
      axios.post('accounts/login/', creds)
        .then(response => {
          console.log('Post request successful:', response.data);
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
    <div className='flex h-[90%] bg-white py-[2rem] p-[5rem]' >
      
      <form onSubmit={handleSubmit} className="">

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="first_name" class="block text-md font-medium text-gray-700 mb-2">First name</label>
          <input type="text" id="first_name" name="first_name" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>
        <div class="mb-4 w-full">
          <label for="last_name" class="block text-md font-medium text-gray-700 mb-2">Last name</label>
          <input type="text" id="last_name" name="last_name" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="gender" class="block text-md font-medium text-gray-700 mb-2">Gender</label>
          <input type="text" id="gender" name="gender" disabled onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="age" class="block text-md font-medium text-gray-700 mb-2"> Age</label>
          <input type="text" id="age" name="age" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="dob" class="block text-md font-medium text-gray-700 mb-2">Date of Birth</label>
          <input type="text" id="dob" name="dob" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="place_of_birth" class="block text-md font-medium text-gray-700 mb-2">Place of Birth</label>
          <input type="text" id="place_of_birth" name="place_of_birth" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="height" class="block text-md font-medium text-gray-700 mb-2">height <span>  in fts</span></label>
          <input type="text" id="height" name="height" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="weight" class="block text-md font-medium text-gray-700 mb-2">Weight in Kgs</label>
          <input type="text" id="weight" name="weight" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="body_type" class="block text-md font-medium text-gray-700 mb-2">Body Type</label>
          <input type="text" id="body_type" name="body_type" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="complexion" class="block text-md font-medium text-gray-700 mb-2">Complexion</label>
          <input type="text" id="complexion" name="complexion" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="horoscope" class="block text-md font-medium text-gray-700 mb-2">Horscope</label>
          <input type="text" id="horoscope" name="horoscope" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="blood_group" class="block text-md font-medium text-gray-700 mb-2">Blood type</label>
          <input type="text" id="blood_group" name="blood_group" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="religion" class="block text-md font-medium text-gray-700 mb-2">Religion</label>
          <input type="text" id="religion" name="religion" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="caste" class="block text-md font-medium text-gray-700 mb-2">Caste</label>
          <input type="text" id="caste" name="caste" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="languages" class="block text-md font-medium text-gray-700 mb-2">language</label>
          <input type="text" id="languages" name="languages" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="image" class="block text-md font-medium text-gray-700 mb-2">Image</label>
          <input type="text" id="image" name="image" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div class="mb-4 ">
          <label for="languages" class="block text-md font-medium text-gray-700 mb-2">language</label>
          <textarea type="text" id="languages" name="languages" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
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
  )
}

export default UserView