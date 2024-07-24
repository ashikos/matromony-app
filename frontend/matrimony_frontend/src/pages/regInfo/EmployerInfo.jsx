import {useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'

const EmployerInfo = () => {


       
  const [data, setData] = useState({"occupation":"",
    "company":"", "income":'',
    "location":"", "experience":'',
  })
  let professionId = localStorage.getItem("professionId")
  const navigate = useNavigate();

  const fetchData = async () => {   
    // api to call entries of bavas  
    try {
        const response = await axios.get(
          `accounts/profession/${professionId}/`);
        setData(response.data)
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.patch(`accounts/profession/${professionId}/`, data)
        .then(response => {
          console.log('patch request successful:', response.data);
          navigate('/user/relation/')
        })
        .catch(error => {
          console.error('Error making PATCH request:', error);
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
    <div className='flex h-[90%] bg-white py-[2rem] p-[5rem] ' >
      
      <form onSubmit={handleSubmit} className="flex-col relative">

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="occupation" class="block text-md font-medium text-gray-700 mb-2">occupation</label>
          <input required type="text" id="occupation" name="occupation" value={data.occupation} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>

        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="company" class="block text-md font-medium text-gray-700 mb-2">Company</label>
          <input required type="text" id="company" name="company" value={data.company} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>


        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="income" class="block text-md font-medium text-gray-700 mb-2">Income</label>
          <input required type="text" id="income" name="income" value={data.income} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
  
        </div>

        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="location" class="block text-md font-medium text-gray-700 mb-2">Location</label>
          <input required type="text" id="location" name="location" value={data.location}  onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="experience" class="block text-md font-medium text-gray-700 mb-2">Experience</label>
          <input required type="text" id="experience" name="experience" value={data.experience} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <button type="submit" class="w-[15rem]  mt-[2rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default EmployerInfo