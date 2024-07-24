import React from "react";
import { useState } from "react";
import axios from '../../axios'
import { useNavigate } from 'react-router';

const Relationship = () => {

  const [data, setData] = useState({"is_long_term":"", "is_registered":true})
  let firstName = localStorage.getItem("firstName")

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(data);
    let userId = localStorage.getItem("userId")

    axios.patch(`accounts/users/${userId}/`, data)
      .then(response => {
        console.log('Post request successful:', response.data);
        if (response.data.is_short_term==='true'){
          console.log('navigating to dating app', data.is_short_term);
          navigate('/dating')
        }else{
          console.log('navigating to matrimony app', data.is_short_term);
          navigate('/matrimony')
        }
        
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
  };


  return (
    <div className='h-[90%] bg-white  px-[5rem]'>
      <div className="pb-5">
        <h1 className="text-4xl text-gray-500"> {firstName}.. what relation do you wish to continue</h1>
      </div>
      <form onSubmit={()=>setData(!true)} className="flex-col relative">

<div className="flex gap-24">
<button onClick={handleClick} type="submit" class="w-[30rem]  mt-[2rem] border border-gray-500 h-20  mb-3 text-black text-2xl  py-3 rounded-md hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-indigo-500">Short term Relationship - Dating app</button>

</div>

<div className="flex gap-24">
<button onClick={handleClick} type="submit" class="w-[30rem]  mt-[2rem] border border-gray-500 h-20  mb-3 text-black text-2xl  py-3 rounded-md hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-indigo-500">Long term Relationship - Matrimony app</button>

</div>





</form>
    </div>
  )
}

export default Relationship