import {useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'
import { DietaryChoices, BodyTypeChoices, ComplexionChoices, 
   HoroscopeChoices} from "../../libs/utils/Dropdown";
import InfoDropDown from "../../components/common/InfoDropDown";
import ObjDropDown from "../../components/common/ObjDropDowns";


const MatriInfo = () => {
   
  const [data, setData] = useState({"height":"",
    "weight":"", "body_type":null,
    "complexion":null, "blood_group":'',
    "dietary":null, "horoscope":null,
     'religion':{'religion':'', 'caste':''},
  })
  const [religions, setReligion] = useState([])
  const [castes, setCastes] = useState([])

  const navigate = useNavigate();
  let ClientId = localStorage.getItem("ClientId")

  const fetchData = async () => {   
    // api to call entries of bavas  
    try {
        const response = await axios.get(
          `wedlock/client/${ClientId}/`);
        setData(response.data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const fetchReligion = async () => {   
  // api to call entries of bavas  
  
  try {
      const rel_response = await axios.get(
        `wedlock/religion/`);
      const caste_response = await axios.get(
        `wedlock/caste/`);
      setReligion(rel_response.data)
      setCastes(caste_response.data)
  } catch (error) {
      console.error('Error fetching religion:', error);
  }
};
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      let ClientId = localStorage.getItem("ClientId")
  
      axios.patch(`wedlock/client/${ClientId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/matrimony/family/')
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
    };

  const handleChange = (e)=>{

      const {name, value} = e.target
      console.log(name, value);
      setData(prevState => ({
        ...prevState, [name]: isNaN(value) ? value : Number(value)
      }))
  }

  const handleReligion = async (e)=>{
    // console.log(e.target.value);
    let param_data = { 'religion':e.target.value}
    setData(prestat=>({...prestat, ['religion']: (prestat=>({...prestat, ['religion']: e.target.value}))}))
    try {
      const response = await axios.get('wedlock/caste/', {
        params: param_data,
      });
      setCastes(response.data);
    } catch (error) {
      console.error('Error fetching religion:', error);
    }
  }

  
  useEffect(() => {
    fetchData();
    fetchReligion();
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
          <label for="religion" class="block text-md font-medium text-gray-700 mb-2">Religion</label>
          <ObjDropDown options={religions} selected={data.religion.religion} name='religion'  handleSelect={handleReligion} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        <div class="mb-4 w-full">
          <label for="caste" class="block text-md font-medium text-gray-700 mb-2">Caste</label>
          <ObjDropDown options={castes} selected={data.religion.caste}  name='caste' handleSelect={handleChange} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        </div>

        <div className="flex-1 flex gap-24">
        <div class="mb-4 w-full">
          <label for="horoscope" class="block text-md font-medium text-gray-700 mb-2">Horoscope</label>
          <InfoDropDown data={data} setData={setData} dict={HoroscopeChoices} field={'horoscope'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
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

        <button type="submit" class="w-[15rem]  mt-[2rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default MatriInfo