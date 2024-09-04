import React, { useState, useEffect } from 'react'
import Stories from '../widgets/Stories'
import UserCard from '../widgets/Usercard';

// import ProfileCard from './ProfileCard';



const Home = () => {

  const cardData = [
    {
      title: "Stephan",
      description: "Good listener, loves to talk to know others better.",
      imageUrl: "https://images.pexels.com/photos/25435942/pexels-photo-25435942/free-photo-of-portrait-of-young-brunette-man-with-beard-looking-away.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Isabella",
      description: "Creative thinker with a passion for design.",
      imageUrl: "https://images.pexels.com/photos/6546963/pexels-photo-6546963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Liam",
      description: "Tech enthusiast and problem solver.",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Olivia",
      description: "Avid reader and storyteller.",
      imageUrl: "https://images.pexels.com/photos/4270235/pexels-photo-4270235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Noah",
      description: "Fitness enthusiast who enjoys outdoor adventures.",
      imageUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Sophia",
      description: "Music lover with a talent for playing the piano.",
      imageUrl: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "James",
      description: "Loves coding and exploring new technologies.",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Emily",
      description: "Passionate about photography and capturing moments.",
      imageUrl: "https://images.pexels.com/photos/2801756/pexels-photo-2801756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Alexander",
      description: "Enjoys cooking and experimenting with new recipes.",
      imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Mia",
      description: "Yoga practitioner who values mindfulness and peace.",
      imageUrl: "https://images.pexels.com/photos/720357/pexels-photo-720357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];


    const users = [
        { id: 1, name: 'hridhyask...', avatar: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, name: 'shaayi___', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, name: 'ansifabdulla', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 4, name: 'adeebsabi...', avatar: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 5, name: 'afsal__kuttu', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 6, name: 'atal_e.b', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 7, name: '4n33sh', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 8, name: 'royraigal', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 9, name: 'afsal__kuttu', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 10, name: 'atal_e.b', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 11, name: '4n33sh', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 12, name: 'royraigal', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      ];



  return (
    <div className="h-screen w-full overflow-y-auto flex flex-col ">
      <div className="w-[60%] border border-red-400">
      <div className="w-full overflow-x-auto scrollbar-hide flex gap-8 px-10 py-6 border-b border-pink-300">
        {users.map(user=>(<Stories user={user}/>  ))}
       </div>

       <div className="overflow-auto flex-grow p-10 space-y-5">
           
       {/* {data.map((item, index) => (
          <ProfileCard key={index} profile={item}/>
        ))} */}
        {cardData.map(user=>(<UserCard user={user}/>  ))}
       
       </div>
      </div>
    </div>
  )
}




export default Home