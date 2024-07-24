import React, { useState } from 'react';
import axios from '../../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const LikeButton = ({profile}) => {
  let UserId = parseInt(localStorage.getItem('UserId'), 100);
  
  const [liked, setLiked] = useState(profile.likes ? true : false);
  const [likedData, setLikedData] = useState(profile.likes);

  const toggleLike = () => {
    
    if (likedData) {
      setLikedData(null);
      setLiked(null);
      callDelReq({ ...likedData, requested: !likedData.requested });
    } else {
      setLikedData({ requested: true });
      callPostReq();
    }
    setLiked(!liked);

  };

  const callDelReq = (updatedInterestData) => {
    let likedId = updatedInterestData.id;
    let data = { requested: updatedInterestData.requested };
    try {
      axios
        .delete(`wedlock/like/${likedId}/`, {
          headers: { 'User-ID': UserId },
        })
        .then((response) => {
          console.log(response.data);
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
          setLikedData(response.data);
          setLiked(response.data);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <button
      onClick={toggleLike}
      className={`flex items-center space-x-2 p-2 border rounded-lg bg-pink-100 focus:outline-none`}
    >
      <FontAwesomeIcon
        icon={likedData ? solidHeart : regularHeart}
        className={`text-2xl ${likedData ? 'text-pink-500' : 'text-pink-500'}`}
      />
      <span className={'text-pink-500 font-semibold text-xl'}>{likedData ? 'Saved' : 'Save'}</span>
    </button>
  );
};

export default LikeButton;