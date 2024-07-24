import React, { useState } from 'react';
import axios from '../../axios';
import { AcceptChoices } from '../../libs/utils/Choices';

const InterestButton = ({ profile }) => {
  let UserId = parseInt(localStorage.getItem('UserId'), 100);
  
  // const [interested, setLiked] = useState(profile.interest);
  const [interestData, setInterestData] = useState(profile.interest);

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

  // const handleUnfollow = () => {
  //   let interestId = interestData.id;
  //   let data = { is_approved: null };
  //   try {
  //     axios
  //       .patch(`wedlock/interest/${interestId}/`, data, {
  //         headers: { 'User-ID': UserId },
  //       })
  //       .then((response) => {
  //         setInterestData(response.data);
  //         // setLiked(response.data);
  //       });
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };


  return (
    <>
    <button
      onClick={toggleLike}
      className={`${interestData?.requested ? 'bg-pink-500' : 'bg-pink-100'} ${profile.requests && profile.requests.is_approved === AcceptChoices.APPROVED ? 'hidden': ''  } border-1 border-pink-600 p-2 font-medium rounded-lg text-xl px-10`}
    >
      <span className={`${interestData?.requested ? 'text-white' : 'text-pink-600'} text-pink-500 font-semibold text-xl`}>
        {interestData?.requested ? 'Interested' : 'Sent Interest'}
      </span>
    </button>
    
    {/* <button
      onClick={handleUnfollow}
      className={`bg-pink-100 ${profile.interest && profile.interest.is_approved === AcceptChoices.APPROVED ? '': 'hidden'  } border-1 border-pink-600 p-2 font-medium rounded-lg text-xl px-10`}
    >
      <span className={`'text-pink-600 text-pink-500 font-semibold text-xl`}>
        Unfollow
      </span> 
    </button> */}

    </>
  );
};

export default InterestButton;
