import {useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'

const Family = () => {


       
  const [data, setData] = useState({"family_type":"",
    'father_name':'', 'mother_name':'',
    "father_occupation":"", "mother_occupation":'',
    "no_of_siblings":"", "family_values":'',
  })

  const navigate = useNavigate();
  let familyId = localStorage.getItem("familyId")

  const fetchData = async () => {   
    // api to call entries of bavas  
    try {
        const response = await axios.get(
          `wedlock/family/${familyId}/`);
        setData(response.data)
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      let familyId = localStorage.getItem("familyId")
  
      axios.patch(`wedlock/family/${familyId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/matrimony/preference/')
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
          <label for="family_type" class="block text-md font-medium text-gray-700 mb-2">Family Ttype</label>
          <input type="text" id="family_type" name="family_type" value={data.family_type} onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>

        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="father_name" class="block text-md font-medium text-gray-700 mb-2">Father's Name</label>
          <input type="text" id="father_name" value={data.father_name} name="father_name" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 ">
          <label for="father_occupation" class="block text-md font-medium text-gray-700 mb-2">Occupation</label>
          <input type="text" id="father_occupation" value={data.father_occupation} name="father_occupation" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>


        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="mother_name" class="block text-md font-medium text-gray-700 mb-2">Mother's Name </label>
          <input type="text" id="mother_name" value={data.mother_name} name="mother_name" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4 ">
          <label for="mother_occupation" class="block text-md font-medium text-gray-700 mb-2">Mother Occupation</label>
          <input type="text" id="mother_occupation" value={data.mother_occupation} name="mother_occupation" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="family_values" class="block text-md font-medium text-gray-700 mb-2">Family Values</label>
          <input type="text" id="family_values" value={data.family_values} name="family_values"  onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <button type="submit" class="w-[15rem]  mt-[2rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default Family