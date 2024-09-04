import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import axios from '../../axios';
import { AcceptChoices } from '../../libs/utils/Choices';

const InterestButton = ({ profile }) => {
  let UserId = parseInt(localStorage.getItem('UserId'), 100);
  const tierString = localStorage.getItem('tier');
  const tier = tierString ? parseInt(tierString, 10) : 0;

  const navigate = useNavigate();
  
  const [interestData, setInterestData] = useState(profile.interest);

  const handleClick = (tier)=>{

    console.log(11111, tier);
    
    if (tier===101){
      navigate('/dashboard/plus')
    }else{
      toggleLike()
    }
  }

  const toggleLike = () => {
    
    if (interestData) {
      setInterestData((prevSet) => ({ ...prevSet, requested: !interestData.requested }));
      callPatchReq({ ...interestData, requested: !interestData.requested });
    } else {
      setInterestData({ requested: true });
      callPostReq();
    }
    // setLiked((prevLiked) => ({ ...prevLiked, requested: !prevLiked?.requested }));

  };

  const callPatchReq = (updatedInterestData) => {
    let interestId = updatedInterestData.id;
    let data = { requested: updatedInterestData.requested };
    try {
      axios
        .patch(`wedlock/interest/${interestId}/`, data, {
          headers: { 'User-ID': UserId },
        })
        .then((response) => {
          setInterestData(response.data);
          // setLiked(response.data);
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
      requested: true,
    };
    try {
      axios
        .post('wedlock/interest/', data, {
          headers: { 'User-ID': UserId },
        })
        .then((response) => {
          setInterestData(response.data);
          // setLiked(response.data);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
    <button
      onClick={()=>handleClick(tier)}
      className={`${interestData?.requested ? 'bg-pink-500' : 'bg-pink-100'} ${profile.requests && profile.requests.is_approved === AcceptChoices.APPROVED ? 'hidden': ''  } border-1 border-pink-600 p-2 font-medium rounded-lg text-xl px-10`}
    >
      <span className={`${interestData?.requested ? 'text-white' : 'text-pink-600'} text-pink-500 font-semibold text-xl`}>
        {interestData?.requested ? 'Interested' : 'Sent Interest'}
      </span>
    </button>

    </>
  );
};

export default InterestButton;
