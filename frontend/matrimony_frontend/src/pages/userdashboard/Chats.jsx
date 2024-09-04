import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import ChatWidget from '../../components/widgets/ChatWidget';

const Chats = () => {

    const [messageModal, setmessageModal] = useState(false);
    const [chats, setChats] = useState([])
    let UserClientId = localStorage.getItem("ClientId")
    let UserId = localStorage.getItem("userId")
    const [data, setData] = useState([])
    const [friend, setfriend] = useState("")

    const fetchData = async () => {   
    // api to call entries of users recomndations  
    try {
        const response = await axios.get(
            `/wedlock/friends/${UserId}/`,
            {headers: {'User-ID': UserId}} );
        setData(response.data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
    useEffect(() => {
        fetchData();
    }, []);

    const manageMessageModal = async (item)=>{
      

        try {
          console.log(121212121212, item.client_id);
            const clientId = item.client_id;
            const response = await axios.get(`wedlock/chat/?user=${UserClientId}&friend=${clientId}`, 
                 {headers: {'User-ID': UserId}}    );
            setChats(response.data);
            console.log(222222222, response.data);;
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally{
            setfriend(item)
          }
        setmessageModal(!messageModal)
    };
  return (
    <div className="h-screen w-full flex flex-col  px-10">
       <div className="w-full flex gap-8 px-10 py-6 border-b border-pink-300">
            <input type="text" className='focus:border-pink-300 focus:ring-0 border border-pink-300 rounded-lg bg-pink-100' placeholder='Search with name or id'/>
       </div>

       <div className="overflow-auto py-10">
       {data.map((item, index) => (
                <div className="">
                  <div key={index}
                 onClick={()=>manageMessageModal(item)} className="overflow-auto p-2 cursor-pointer">
                        <div className=" flex items-center bg-pink-300 px-2 py-2 rounded-[8rem]">
                        <img className='w-14 h-14 rounded-full object-cover border-3 border-pink-600 ' src={item.image} alt="" />
                        <p className='px-8 text-pink-600 font font-bold text-[2rem] '> {item.first_name} {item.last_name} </p>
                        </div>
                        
                </div>
                </div>
                
        ))}
        <ChatWidget 
                  messageModal={messageModal} 
                  setmessageModal={setmessageModal}
                  chats={chats}
                  setChats={setChats}
                  client={friend}/>
       </div>    
        
    </div>
  )
}

export default Chats