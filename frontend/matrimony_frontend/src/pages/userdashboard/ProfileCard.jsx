import React, { useState, useEffect } from 'react'
import axios from '../../axios'; 
import LikeButton from '../../components/widgets/LikeButton'
import UserInfoModal from '../../components/common/modals/UserInfoModal';
import UserInfo from './UserInfo';
import IntrestButton from '../../components/widgets/IntrestButton';
import AcceptDiv from '../../components/widgets/AcceptDiv';


const ProfileCard = ({ profile }) => {

  let UserId = localStorage.getItem("userId")

  const [client, setClient] = useState({})
  const [showModal, setShowModal] = useState(false);

  const UserInfoData = async () => {   
    try {
        const profileId = profile.client_id;
        const response = await axios.get(`wedlock/client/${profileId}/`, 
             {headers: {'User-ID': UserId}}    );
        setClient(response.data);
        console.log(1,client);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

useEffect(() => {
  if (Object.keys(client).length !== 0) {
    setShowModal(!showModal);
  }
}, [client]);

  const HandleViewProfile = (()=>{
    UserInfoData()
  });


  return (
    <div className="flex p-2 border-2 border-pink-300 rounded-3xl">
      <div>
        <img className='w-[22rem] h-[22rem] object-cover mb-3 rounded-3xl' src={profile.image} alt="" />
      </div>
      <div className="p-5 px-8 w-full">
        <div className="text-pink-600 font-serif flex justify-between">
          <h1 className='text-5xl'>{profile.first_name} {profile.last_name} {profile.id} </h1>
          <button onClick={HandleViewProfile}>View profile</button>

          <UserInfoModal show={showModal} onClose={HandleViewProfile}>
            <UserInfo client={client}/>
          </UserInfoModal>

        </div>
        <div className="w-full space-y-1 border border-pink-600 p-3 rounded-lg text-pink-600 font-serif mt-8 text-xl font-semibold">
          <p>Age: {profile.age} </p>
          <p>client id: {profile.client_id} </p>
          <p>Location: Thrissur</p>
          <p>Designation: Software Engineer</p>
          <p>Religion: Christian</p>
          <p>Email: {profile.email}</p> 
        </div>
        <div className="">
          {profile.requests &&(

            <div className="pt-2">
              <AcceptDiv profile={profile}/>
            </div>

          )}
        </div>
        <div className="text-pink-600 py-3 flex justify-between">
          <IntrestButton profile={profile}/>
          <LikeButton profile={profile}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
