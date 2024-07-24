import {useEffect, useState } from "react";
import React from "react";
import axios from '../../axios'
import InfoDropDown from "../../components/common/InfoDropDown";
import {
  GenderChoices, DistrictChoices, ProfessionChoice, SmokeChoices, DrinkingChoices,
   PremieumChoices } from '../../libs/utils/Dropdown'
import { useNavigate } from 'react-router';

const BasicInfo = () => {
  
  const [data, setData] = useState({"first_name":"", "last_name":"",
    "dob": null, "place_of_birth":"",
    "gender":null, "age":"",
    "smoking":null, 'drinking':null, 'phone':'', 'address':'',
    'district':'','pincode':'',"languages":"", 'is_employ':null, 'image':null
  })
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(true);

  const navigate = useNavigate();
  let firstName = localStorage.getItem("firstName")
  let userId = localStorage.getItem("userId")

  const fetchData = async () => {   
    // api to call entries of bavas  
    
    
    try {
        const response = await axios.get(
          `accounts/users/${userId}/`);
        setImage(response.data.image)
        delete response.data.image
        setData(response.data)
        console.log(121212121);
        
        localStorage.setItem('shortTerm', response.data.is_short_term )
        localStorage.setItem('isEmploy', response.data.is_employ )
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally{
      console.log('new data', data)
    }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      console.log(2222, data);

      let userId = localStorage.getItem("userId")
      setLoading(true)
      axios.patch(`accounts/users/${userId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          console.log(typeof data.is_employ);
          if (data.is_employ==='true') {
            console.log('employ logged', data.is_employ);
            navigate('/user/employ/');
        } else {
            console.log('jobseeker logged');
            navigate('/user/jobseeker/');
        }
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        }).finally(
          setLoading(false)
        );
    };

  const handleChange = (e)=>{

      const {name, value} = e.target
      setData(prestat=>({...prestat, [name]:value}))
      console.log(data);
  }

  const handleFileChange = (e)=>{

    const formData = new FormData(); 
    formData.append("image", e.target.files[0]);

    axios.patch(`accounts/users/${userId}/`, formData)
        .then(response => {
          // Handle success response
          console.log('File uploaded successfully');
        })
        .catch(error => {
          // Handle error
          console.error('Error uploading file:', error);
        })
        .finally(() => {
          fetchData();
        });
    
}

  
  useEffect(() => {
    fetchData();
}, []);



  return (
    <div className='h-[90%] bg-white  px-[5rem]' >

      <div className="pb-5">
        <h1 className="text-4xl text-gray-500">Hi {firstName}.. We’d Love to Get to Know You Better</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="">

        <div className="flex gap-24 py-5">
        <div class="mb-4 ">
          <label for="first_name" class="block text-md font-medium text-gray-700 mb-2">First name</label>
          <input required type="text" id="first_name" name="first_name" onChange={handleChange} value={data.first_name} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
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
        <div class="mb-4 ">
          <label for="languages" class="block text-md font-medium text-gray-700 mb-2">language</label>
          <input type="text" id="languages" name="languages" onChange={handleChange} value={data.languages} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="smoking" class="block text-md font-medium text-gray-700 mb-2">Smoking</label>
          <InfoDropDown data={data} setData={setData} dict={SmokeChoices} field={'smoking'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        <div class="mb-4 w-full">
          <label for="drinking" class="block text-md font-medium text-gray-700 mb-2">Drinking</label>
          <InfoDropDown data={data} setData={setData} dict={DrinkingChoices} field={'drinking'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        </div>

        <div className="flex  gap-24">
        <div class="mb-4 ">
          <label for="phone" class="block text-md font-medium text-gray-700 mb-2">Phone</label>
          <input type="text" id="phone" name="phone" onChange={handleChange} value={data.phone} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="address" class="block text-md font-medium text-gray-700 mb-2">Address</label>
          <textarea type="text" id="address" name="address"  onChange={handleChange} value={data.address} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>


        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="district" class="block text-md font-medium text-gray-700 mb-2">District</label>
          <InfoDropDown data={data} setData={setData} dict={DistrictChoices} field={'district'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        <div class="mb-4  w-full">
          <label for="pincode" class="block text-md font-medium text-gray-700 mb-2">Pincode</label>
          <input type="text" id="pincode" name="pincode" onChange={handleChange} value={data.pincode} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 w-full px-0">
          <label for="image" class="block text-md font-medium text-gray-700 mb-2">Image</label>
          <input type="file" id="image" name="image"  onChange={handleFileChange} class="block w-[30rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4  w-full">
          <label for="is_employ" class="block text-md font-medium text-gray-700 mb-2">Are you a Employ/Empolyer or Job seeker </label>
          <InfoDropDown data={data} setData={setData} dict={ProfessionChoice} field={'is_employ'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        
        </div>


      <button type="submit" class="w-[15rem] mt-3 h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default BasicInfo