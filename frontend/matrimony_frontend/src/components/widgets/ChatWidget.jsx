import React, { useState, useRef, useEffect } from 'react'
import { VscSend } from "react-icons/vsc";
import axios from '../../axios'

const ChatWidget = ({messageModal, setmessageModal, chats, setChats, client }) => {

  const [message, setMessage] = useState("")
  const messagesEndRef = useRef(null);

  let UserId = localStorage.getItem("userId")
  let UserClientId = localStorage.getItem("ClientId")

  const sender_id = UserClientId
  const receiver_id = client.user.client_id

    const toggleChat = () => {
        setmessageModal(!messageModal);
      };

      const sendChat = () => {

        let data = {
          sender:sender_id,
          receiver: receiver_id,
          message: message
        }

        axios.post('wedlock/chat/', data,{
          headers: { 'User-ID': UserId },
        })
        .then(response => {
          console.log('Post request successful:', response.data);
          console.log(response);
          setChats(prevState => ([...prevState, response.data]))
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
        setMessage("")
      };

  const handleKeyPress = (e)=>{
    if (e.key === 'Enter'){
      sendChat();
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);


  return (
    <div className="fixed bottom-4 right-4 z-50">
    
        {/* Chat widget */}
      {messageModal && (
        <div className="bg-white rounded-lg shadow-lg p-4 w-[35rem] h-[40rem]">
        
          {/* Close button */}
          
          <div className="flex justify-between">
          <h1 className='text-2xl font-extrabold'> {client.user.first_name}</h1>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Chat content */}
          <div className="my-1 bg-gray-100 flex-grow p-2 h-[32rem] overflow-auto">
          {chats.map((item, index)=>(
            <div className={`flex justify-start ${item.is_sender ? 'justify-end': 'justify-start'} mt-2`}>
              <div className={`max-w-xs mx-2 px-4 py-2 font-bold rounded-lg ${item.is_sender ? 'bg-pink-500 text-white' : 'bg-pink-100 '}`}>
                <p className="text-md">{item.message}</p>
              </div>
            </div>
          )
        )}
          <div ref={messagesEndRef} />
          </div >
          


          <div className="flex items-center relative py-3">
            <input onChange={(e)=> setMessage(e.target.value)} 
            value={message} type="text" 
            className='w-full border border-gray-300 rounded-md'
            onKeyDown={handleKeyPress}/>
            <VscSend onClick={sendChat} className='absolute right-3 text-gray-500' size={25}/>
          </div>
          
        </div>
  
      )}
      
    </div>
  )
}

export default ChatWidget