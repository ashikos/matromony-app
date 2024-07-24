import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import axios from '../../axios'
import { DistrictChoices, SmokeChoices, HeightChoices, WeightChoices } from "../../libs/utils/Dropdown";
import InfoDropDown from "../../components/common/InfoDropDown";
import ObjDropDown from "../../components/common/ObjDropDowns";



const Preference = () => {
  const [data, setData] = useState(
    {'location':'', 'religion':{'religion':'', 'caste':''},
      'family_type':'', 'expectations':'', 'height_range':null,
    'weight_range':null})

  const [religions, setReligion] = useState([])
  const [castes, setCastes] = useState([])

  const navigate = useNavigate();
  let preferenceId = localStorage.getItem("preferenceId")

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
  
    const fetchData = async () => {   
      // api to call entries of bavas  
      try {
          const response = await axios.get(
            `wedlock/preference/${preferenceId}/`);
          setData(response.data)
          console.log(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      axios.patch(`wedlock/preference/${preferenceId}/`, data)
        .then(response => {
          console.log('Post request successful:', response.data);
          navigate('/dashboard')
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
    fetchReligion();
  }, []);

  return (
    <div className='flex h-[90%] bg-white py-[2rem] p-[5rem] ' >
      
      <form onSubmit={handleSubmit} className="flex-col relative">

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="location" class="block text-md font-medium text-gray-700 mb-2">Preferred Location</label>
          <InfoDropDown data={data} setData={setData} dict={DistrictChoices} field={'location'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
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

        <div className="flex gap-24">
        <div class="mb-4 ">
          <label for="height_range" class="block text-md font-medium text-gray-700 mb-2">Height  <span className="text-gray-400 pl-3">  in cms</span></label>
          <InfoDropDown data={data} setData={setData} dict={HeightChoices} field={'height_range'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
        </div>
        <div class="mb-4 w-full">
          <label for="weight_range" class="block text-md font-medium text-gray-700 mb-2">Weight <span className="text-gray-400 pl-3">  in kgs</span></label>
          <InfoDropDown data={data} setData={setData} dict={WeightChoices} field={'weight_range'} css="block w-[30rem] flex justify-start h-[3rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" selection={"single"}/>
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

        <button type="submit" class="w-[15rem]  mt-[2rem] h-14 bg-indigo-600 mb-3 text-white text-2xl font-extrabold py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Upload</button>

    </form>
    </div>
  )
}

export default Preference