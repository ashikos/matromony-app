import {useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'

const Educational = () => {


       
  const [data, setData] = useState({"highest_education":"",
    "institution":"", "specialization":''
  })
  const navigate = useNavigate();
  let educationId = localStorage.getItem("educationId")

  const fetchData = async () => {   
    // api to call entries of bavas  

    // const user_id = response.data.id
    //       localStorage.setItem("userId", user_id)

    //       navigate('user/')
    try {
        const response = await axios.get(
          `accounts/education/${educationId}/`);
        setData(response.data)
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
  
      axios.patch(`accounts/education/${educationId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/user/profession/')
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
    <div className='flex h-[90%] bg-white py-[2rem] p-[5rem] ' >
      
      <form onSubmit={handleSubmit} className="flex-col relative">

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="highest_education" class="block text-md font-medium text-gray-700 mb-2">Highest Education</label>
          <input type="text" id="highest_education" name="highest_education" value={data.highest_education} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>

        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="institution" class="block text-md font-medium text-gray-700 mb-2">Institution/ University</label>
          <input type="text" id="institution" name="institution" value={data.institution}  onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>


        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="specialization" class="block text-md font-medium text-gray-700 mb-2">Specialization</label>
          <input type="text" id="specialization" name="specialization" value={data.specialization} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <button type="submit" class="absolute bottom-24 w-[15rem]  mt-[10rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default Educational