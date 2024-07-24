import React, { useState } from 'react'



const Recomandations = () => {

  const [message, setMessage] = useState("this is first message")
  const isSender = true

  return (
    
      <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-xs mx-2 px-4 py-2 rounded-lg ${isSender ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          <p className="text-sm">{message}</p>
        </div>
      </div>
  )
}

export default Recomandations