import {useEffect, useState } from "react";
import React from "react";
import axios from '../../axios'
import InfoDropDown from "../../components/common/InfoDropDown";
import {
  GenderChoices, HoroscopeChoices, LocationChoices,
   PremieumChoices } from '../../libs/utils/Dropdown'
import { useNavigate } from 'react-router';



const General = () => {

  
  const [data, setData] = useState({"first_name":"", "last_name":"",
    "dob": null, "place_of_birth":"",
    "gender":null, "age":"",
    "religion":"", "caste":"",
    "languages":"", "horoscope":null,
    "about_me":"", "image":null
  })

  const navigate = useNavigate();

  const fetchData = async () => {   
    // api to call entries of bavas  
    let userId = localStorage.getItem("userId")
    
    try {
        const response = await axios.get(
          `accounts/users/${userId}/`);
        setData(response.data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);

      let userId = localStorage.getItem("userId")
  
      axios.patch(`accounts/users/${userId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/user/contact/')
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
    };

  const handleChange = (e)=>{

      const {name, value} = e.target
      setData(prestat=>({...prestat, [name]:value}))
      console.log(data);
  }

  
  useEffect(() => {
    fetchData();
}, []);



  return (
    <div className='flex h-[90%] bg-white py-[2rem] p-[5rem]' >
      
      <form onSubmit={handleSubmit} className="">

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="first_name" class="block text-md font-medium text-gray-700 mb-2">First name</label>
          <input type="text" id="first_name" name="first_name" onChange={handleChange} value={data.first_name} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>
        <div class="mb-4 w-full">
          <label for="last_name" class="block text-md font-medium text-gray-700 mb-2">Last name</label>
          <input type="text" id="last_name" name="last_name" onChange={handleChange} value={data.last_name} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="gender" class="block text-md font-medium text-gray-700 mb-2">Gender</label>
          <InfoDropDown data={data} setData={setData} dict={GenderChoices} field={'gender'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
          
        </div>
        <div class="mb-4 w-full">
          <label for="age" class="block text-md font-medium text-gray-700 mb-2"> Age</label>
          <input type="number" id="age" name="age" onChange={handleChange} value={data.age} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="dob" class="block text-md font-medium text-gray-700 mb-2">Date of Birth</label>
          <input type="date" id="dob" name="dob" onChange={handleChange} value={data.dob} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="place_of_birth" class="block text-md font-medium text-gray-700 mb-2">Place of Birth</label>
          <input type="text" id="place_of_birth" name="place_of_birth" onChange={handleChange} value={data.place_of_birth} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="horoscope" class="block text-md font-medium text-gray-700 mb-2">Horscope</label>
          <InfoDropDown data={data} setData={setData} dict={HoroscopeChoices} field={'horoscope'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="religion" class="block text-md font-medium text-gray-700 mb-2">Religion</label>
          <input type="text" id="religion" name="religion" onChange={handleChange} value={data.religion} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="caste" class="block text-md font-medium text-gray-700 mb-2">Caste</label>
          <input type="text" id="caste" name="caste" onChange={handleChange} value={data.caste} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="languages" class="block text-md font-medium text-gray-700 mb-2">language</label>
          <input type="text" id="languages" name="languages" onChange={handleChange} value={data.languages} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 w-full">
          <label for="image" class="block text-md font-medium text-gray-700 mb-2">Image</label>
          <input type="file" id="image" name="image" onChange={handleChange} class="block w-[30rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div class="mb-4 ">
          <label for="about_me" class="block text-md font-medium text-gray-700 mb-2">About Me</label>
          <textarea type="text" id="about_me" name="about_me"  onChange={handleChange} value={data.about_me} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>


      <button type="submit" class="w-[15rem] mt-3 h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default General