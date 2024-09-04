import React from 'react';


const Stories = ({user}) => {
  return (
    <div className="flex space-x-4">
        <div key={user.id} className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-red-500 p-0.5"
          />
          <p className="text-xs text-center mt-1 w-16 truncate">{user.name}</p>
        </div>
    </div>
  );
};

export default Stories;
