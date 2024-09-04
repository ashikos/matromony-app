import React from 'react';

const UserCard = ({user }) => {
  return (
    <div className="max-w-[30rem] rounded-3xl mx-auto overflow-hidden shadow-lg bg-white flex justify-center">
      <div className="">
      {user.imageUrl && (
        <img className="w-full max-h-[30rem] object-cover" src={user.imageUrl} alt="Card Image" />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.title}</div>
        <p className="text-gray-700 text-base">
          {user.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#UI</span>
      </div>
      </div>
    </div>
  );
}

export default UserCard;