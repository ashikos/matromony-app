import React from 'react'
import { Link, } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from '../../axios'; 

import tick from './../../assets/plus/accept.svg'
import failed from './../../assets/plus/failed.svg'


const Success = () => {

    let userId = localStorage.getItem("userId")
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const success = queryParams.get('success') === 'true';
    const tier = queryParams.get('tier');

    let payData = success ? paymentDict.success : paymentDict.failed


    const handlePremieum = (tier)=>{
        const data = {'tier': tier}
        axios.patch(`accounts/users/${userId}/`, data)
        .then(response => {
         console.log(response.data);
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        }).finally(
        );
    }

    handlePremieum(success ? tier : 101)


  return (
    <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/f6/48/05/f64805209889072c3cc34c78894b9438.jpg')] bg-cover bg-center opacity-90"></div>
        <div className="relative flex flex-col items-center space-y-2 z-10">
            <img className='h-80' src={payData.image} alt="" />
            <p className='text-2xl text-pink-700 font-extrabold'>{payData.title}</p>
            <p className='text-xl text-pink-700 font-thin'>{payData.descr}</p>
            <Link to="/dashboard" className="text-red-500">Back to home</Link>
        </div>
    </div>
  )
}

const paymentDict = {
    success:{
            image: tick,
            title:  "Your Payment is Successfull",
            descr: "Thankyou for Choosing Premieum Tier!",
        },
    failed:{
        image: failed,
        title:  "Oh no! Your Payment failed",
        descr: "Thankyou for Choosing Premieum Tier!",
    },
}


export default Success