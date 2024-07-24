import axios from '../../axios'
import React, { useState, useEffect } from 'react'
import LikeButton from '../../components/widgets/LikeButton'
import { DistrictChoices, HoroscopeChoices, BodyTypeChoices, 
    DietaryChoices,HeightChoices, SmokeChoices,DrinkingChoices,
    ComplexionChoices, 
    WeightChoices} from '../../libs/utils/Dropdown'
import IntrestButton from '../../components/widgets/IntrestButton';
import { IoIosSend } from "react-icons/io";
import ChatWidget from '../../components/widgets/ChatWidget';

const UserInfo =  ({client}) => {

    const [messageModal, setmessageModal] = useState(false);
    const [chats, setChats] = useState([])
    let UserClientId = localStorage.getItem("ClientId")
    let UserId = localStorage.getItem("userId")


    const manageMessageModal = async ()=>{

        try {
            const clientId = client.user.client_id;
            const response = await axios.get(`wedlock/chat/?user=${UserClientId}&friend=${clientId}`, 
                 {headers: {'User-ID': UserId}}    );
            setChats(response.data);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        setmessageModal(!messageModal)
    };
    
      

  return (
    
    <div className='flex max-h-[85vh] overflow-y-auto'>
        <div className=" ">
            <img className='w-[30rem] h-[30rem] object-cover ' src={client.user.image} alt="" />
            <div className="text-pink-600 py-3  flex justify-between">
                <IntrestButton profile={client.user}/>
                <LikeButton profile={client.user}/>
            </div>
            <div className="text-pink-600  flex justify-between">
            <button onClick={manageMessageModal} className={`bg-pink-100 border-1 flex items-center border-pink-600 p-2 font-medium rounded-lg text-xl px-10 space-x-2`}>
                <IoIosSend 
                className={`text-2xl text-pink-500`}
                size={20} />
                <span className={`text-pink-600 font-semibold text-xl`}> Message </span>
            </button>
            {/* modal for chat application */}
            <ChatWidget 
                messageModal={messageModal} 
                setmessageModal={setmessageModal}
                chats={chats}
                setChats={setChats}
                client={client}/>
            </div>
        </div>
        <div className="px-4 pr-32"> 
            <div className="text-pink-600 font-serif text-xl font-semibold">
                <h1 className='text-5xl'>{client.user.first_name} {client.user.last_name}</h1>
                <p className=' pt-2'> {client.user.age} Yrs</p>
            </div>

        <div className="w-full space-y-1  p-3 rounded-lg text-pink-600 font-serif mt-4 text-xl font-semibold">
            <h1 className='text-2xl'> Personal Info </h1>
            <div className="pl-5 flex flex-col gap-1">
            <p>Date of Birth:  {client.user.dob} </p>
            <p>Location: { DistrictChoices[client.user.district]}</p>
            <p>Religion: {client.religion.religion_name}</p>
            <p>Caste: {client.religion.caste_name}</p>
            <p>Horoscope: {HoroscopeChoices[client.horoscope]}</p>
            <p>Height: {client.height} cm</p> <p>weight: {client.weight} kg</p>
            <p>Body Type: {BodyTypeChoices[client.body_type]}</p> 
            <p>Complexion: {ComplexionChoices[client.complexion]}</p> 
            <p>Blood group: {client.blood_group}</p> 
            <p>Dietary: {DietaryChoices[client.dietary]}</p>
            <p>Smoking: {SmokeChoices[client.user.smoking]}</p>
            <p>Drinking: {DrinkingChoices[client.user.drinking]}</p>
            <p>Hobies: {client.user.hobbies}</p>
            </div>
        </div>


        <div className="w-full space-y-1  p-3 rounded-lg text-pink-600 font-serif mt-4 text-xl font-semibold">
            <h1 className='text-2xl'> Professional Info </h1>
            <div className="pl-5 flex flex-col gap-1">
                <p>Designation: {client.professional_info.occupation}</p>
                <p>Comapny: {client.professional_info.company}</p>
                <p>Experience: {client.professional_info.experience}</p>
            </div>
        </div>

        <div className="w-full space-y-1  p-3 rounded-lg text-pink-600 font-serif mt-4 text-xl font-semibold">
            <h1 className='text-2xl'> Family Info </h1>
            <div className="pl-5 flex flex-col gap-1">
                <p>Family Ttype: {client.family_info.family_type}</p>
                <p>Father's Name: {client.family_info.father_name}</p>
                <p>Occupation: {client.family_info.father_occupation}</p>
                <p>Mother's Name: {client.family_info.mother_name}</p>
                <p>Mother Occupation: {client.family_info.mother_occupation}</p>
                <p>Family Values: {client.family_info.family_values}</p>
            </div>
        </div>
        

        <div className="w-full space-y-1  p-3 rounded-lg text-pink-600 font-serif mt-4 text-xl font-semibold">
            <h1 className='text-2xl'> Preferences </h1>
            <div className="pl-5 flex flex-col gap-1">
                <p>Preferred Location: {DistrictChoices[client.preference_info.location]} </p>
                <p>Religion: {client.preference_info.religion.religion_name}</p>
                <p>Caste: {client.preference_info.religion.caste_name}</p>
                <p>Height: {HeightChoices[client.preference_info.height_range]}</p>
                <p>Weight : {WeightChoices[client.preference_info.weight_range]}</p>
                <p>Family Type : {client.preference_info.family_type}</p>
                <p>Expectations : {client.preference_info.expectations}</p>
            </div>
        </div>

        </div>


        



    </div>
  )
}

export default UserInfo