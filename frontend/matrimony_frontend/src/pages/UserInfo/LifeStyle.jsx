import {useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'
import { SmokeChoices, DietaryChoices, DrinkingChoices,
   BodyTypeChoices, ComplexionChoices } from "../../libs/utils/Dropdown";
import InfoDropDown from "../../components/common/InfoDropDown";


const LifeStyle = () => {

    
       
  const [data, setData] = useState({"height":"",
    "weight":"", "body_type":null,
    "complexion":null, "blood_group":'',
    "dietary":null, "smoking":null,
    "drinking":null, "hobies":'',
  })

  const navigate = useNavigate();
  let lifeId = localStorage.getItem("lifeId")

  const fetchData = async () => {   
    // api to call entries of bavas  
    try {
        const response = await axios.get(
          `accounts/life/${lifeId}/`);
        setData(response.data)
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      let lifeId = localStorage.getItem("lifeId")
  
      axios.patch(`accounts/life/${lifeId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/user/preferences/')
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
          <label for="height" class="block text-md font-medium text-gray-700 mb-2">Height</label>
          <input type="text" id="height" value={data.height} name="height" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none" />
        </div>
        <div class="mb-4 w-full">
          <label for="weight" class="block text-md font-medium text-gray-700 mb-2">Weight</label>
          <input type="text" id="weight" value={data.weight} name="weight" onChange={handleChange} class="block w-[30rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="body_type" class="block text-md font-medium text-gray-700 mb-2">Body Type</label>
          <InfoDropDown data={data} setData={setData} dict={BodyTypeChoices} field={'body_type'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        <div class="mb-4 w-full">
          <label for="complexion" class="block text-md font-medium text-gray-700 mb-2">Complexion</label>
          <InfoDropDown data={data} setData={setData} dict={ComplexionChoices} field={'complexion'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        </div>

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="blood_group" class="block text-md font-medium text-gray-700 mb-2">Blood Group</label>
          <input type="text" id="blood_group" value={data.blood_group} name="blood_group" onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>


        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="dietary" class="block text-md font-medium text-gray-700 mb-2">Dietary</label>
          <InfoDropDown data={data} setData={setData} dict={DietaryChoices} field={'dietary'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
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

        <div className="flex-1 flex gap-24">
        <div class="mb-4 ">
          <label for="hobies" class="block text-md font-medium text-gray-700 mb-2">Hobies</label>
          <input type="text" id="hobies" value={data.hobies} name="hobies"  onChange={handleChange} class="block w-[30rem]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        </div>

        <button type="submit" class="absolute bottom-24 w-[15rem]  mt-[10rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default LifeStyle