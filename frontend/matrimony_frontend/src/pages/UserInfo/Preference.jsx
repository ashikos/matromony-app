import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'

const Preference = () => {
  const [data, setData] = useState(
    {'location':'', 'caste':''},
    {'family_type':'', 'expectations':''})

    const navigate = useNavigate();
    let preferenceId = localStorage.getItem("preferenceId")

    const fetchData = async () => {   
      // api to call entries of bavas  
      try {
          const response = await axios.get(
            `accounts/preference/${preferenceId}/`);
          setData(response.data)
          console.log(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      axios.patch(`accounts/preference/${preferenceId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/user/general/')
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
          <label for="location" class="block text-md font-medium text-gray-700 mb-2">Preferred Location</label>
          <input type="text" id="location" value={data.location} name="location" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>

        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="caste" class="block text-md font-medium text-gray-700 mb-2">Caste</label>
          <input type="text" id="caste" value={data.caste} name="caste" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>


        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="family_type"  class="block text-md font-medium text-gray-700 mb-2">Family Type</label>
          <input type="text" id="family_type" value={data.family_type} name="family_type" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="expectations"  class="block text-md font-medium text-gray-700 mb-2">Expectations</label>
          <textarea type="text" id="expectations" value={data.expectations} name="expectations"  onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <button type="submit" class="absolute bottom-24 w-[15rem]  mt-[10rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default Preference