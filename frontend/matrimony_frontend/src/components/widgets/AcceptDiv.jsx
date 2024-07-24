import React, { useState } from 'react';
import axios from '../../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { AcceptChoices } from '../../libs/utils/Choices';

const AcceptDiv = ({profile}) => {
  let UserId = parseInt(localStorage.getItem('UserId'), 100);
  
  // const [accept, setAccept] = useState(profile.requests ? true : false);
  const [acceptData, setAcceptData] = useState(profile.requests);
  const [status, setStatus] = useState(profile.requests.is_approved);

  const toggleLike = (e, value) => {
    
    console.log("valueis ",value);
    if (acceptData) {
      callPatchReq({ ...acceptData, is_approved: value });
    }
 

  };

  const callPatchReq = (updatedInterestData) => {
    let interestId = updatedInterestData.id;
    let data = { is_approved: updatedInterestData.is_approved };
    try {
      axios
        .patch(`wedlock/interest/${interestId}/`, data, {
          headers: { 'User-ID': UserId },
        })
        .then((response) => {
          setAcceptData(response.data);
          console.log('status is ', response.data.is_approved);
          setStatus(response.data.is_approved);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const callPostReq = () => {
    let ClientID = parseInt(localStorage.getItem('ClientId'), 10);
    let data = {
      owner: ClientID,
      receiver: profile.client_id,
    };
    try {
      axios
        .post('wedlock/like/', data, {
          headers: { 'User-ID': UserId },
        })
        .then((response) => {
          setAcceptData(response.data);       
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <>
      <div className={`flex space-x-5 ${status === AcceptChoices.REQUESTED ? '':'hidden'}`}>
        <h1 className='text-pink-500 font-semibold text-xl p-2 '> {profile.first_name} sent you friend request</h1>
          <button
        onClick={(e)=>toggleLike(e, AcceptChoices.APPROVED)}
        className={`flex  items-center space-x-2 p-2 px-8 border border-pink-600 rounded-lg bg-pink-100 focus:outline-none`}
      >                   
        
        <span  className={'text-pink-500 font-semibold text-xl'}>Accept</span>
      </button>

      <button
        onClick={(e)=>toggleLike(e, AcceptChoices.REJECTED)}
        className={`flex  items-center space-x-2 p-2 px-8 border border-pink-600 rounded-lg bg-pink-100 focus:outline-none`}
      >
        
        <span className={'text-pink-500 font-semibold text-xl'}>Reject</span>
      </button>
      
      </div>

      <div className={`flex space-x-5 ${status === AcceptChoices.APPROVED ? '':'hidden'}`}>
      <h1 className='text-pink-500 font-semibold text-xl p-2 '>You and {profile.first_name} are friends now</h1>
      
      </div>

      <div className={`flex space-x-5 ${status === AcceptChoices.REJECTED ? '':'hidden'}`}>
      <h1 className='text-pink-500 font-semibold text-xl p-2 '>You rejected {profile.first_name}</h1>
      
      </div>

    </>
    
    
  );
};

export default AcceptDiv;