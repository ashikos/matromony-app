import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'

const ContactInfo = () => {

   
  const [data, setData] = useState({"phone":"", "current_address": '', 
    "permanent_address":"", "district":'', "pincode":"",
  })
  let contactId = localStorage.getItem("contactId")
  const navigate = useNavigate();

  const fetchData = async () => {   
    // api to call entries of bavas  
    try {
        const response = await axios.get(
          `accounts/contact/${contactId}/`);
        setData(response.data)
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log(data);
  
      axios.patch(`accounts/contact/${contactId}/`, data)
        .then(response => {
          console.log('patch request successful:', response.data);
          navigate('/user/education/')
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

        <div className="flex  gap-24">
        <div class="mb-4 ">
          <label for="phone" class="block text-md font-medium text-gray-700 mb-2">Phone</label>
          <input type="text" id="phone" name="phone" onChange={handleChange} value={data.phone} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="current_address" class="block text-md font-medium text-gray-700 mb-2">Current Address</label>
          <textarea type="text" id="current_address" name="current_address"  onChange={handleChange} value={data.current_address} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="permanent_address" class="block text-md font-medium text-gray-700 mb-2">Permanent Address</label>
          <textarea type="text" id="permanent_address" name="permanent_address"  onChange={handleChange} value={data.permanent_address} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="district" class="block text-md font-medium text-gray-700 mb-2">District</label>
          <input type="text" id="district" name="district" onChange={handleChange} value={data.district} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4  w-full">
          <label for="pincode" class="block text-md font-medium text-gray-700 mb-2">Pincode</label>
          <input type="text" id="pincode" name="pincode" onChange={handleChange} value={data.pincode} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <button type="submit" class="w-[15rem] mt-[10rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default ContactInfo