import React, { useState, useEffect } from 'react'
import axios from '../../axios'; 
import { HoroscopeChoices } from '../../libs/utils/Dropdown'
import InfoDropDown from '../../components/common/InfoDropDown'
import ProfileCard from './ProfileCard';



const Friends = () => {

    let userId = localStorage.getItem("userId")
    const [horoscope, setHoroscope] = useState('')
    const [data, setData] = useState([])

    const fetchData = async () => {   
    // api to call entries of users recomndations  
    try {
        const response = await axios.get(
            `/wedlock/friends/${userId}/`,
            {headers: {'User-ID': userId}} );
            // `/accounts/users/`);
        setData(response.data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="h-screen w-full flex flex-col  px-10">
       <div className="w-full flex gap-8 px-10 py-6 border-b border-pink-300">
            <input type="text" className='focus:border-pink-300 focus:ring-0 border border-pink-300 rounded-lg bg-pink-100' placeholder='Search with name or id'/>
            <input type="text" className='focus:border-pink-300 focus:ring-0 border border-pink-300 rounded-lg bg-pink-100 ' placeholder='Search with name or id'/>
            <InfoDropDown data={horoscope} setData={setHoroscope}  dict={HoroscopeChoices} field={'horoscope'} css="focus:border-pink-300 focus:ring-0 border border-pink-300 w-[15rem] text-start rounded-lg bg-pink-100" selection={"single"}/>
       </div>

       <div className="overflow-auto flex-grow p-10 space-y-5">
           
       {data.map((item, index) => (
          <ProfileCard key={index} profile={item}/>
        ))}
       
       </div>
    </div>
  )
}

export default Friends