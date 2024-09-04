import React from 'react';

function Dating() {
  const profiles = [
    { name: 'Sithara Nair', location: 'Developer, Hyderabad', online: false, imgSrc: 'https://images.pexels.com/photos/27355293/pexels-photo-27355293/free-photo-of-portrait-of-an-african-man-wearing-cap.jpeg' },
    { name: 'Sithara Nair', location: 'Developer, Hyderabad', online: false, imgSrc: 'https://images.pexels.com/photos/27355293/pexels-photo-27355293/free-photo-of-portrait-of-an-african-man-wearing-cap.jpeg' },
    { name: 'Sithara Nair', location: 'Developer, Hyderabad', online: false, imgSrc: 'https://images.pexels.com/photos/27355293/pexels-photo-27355293/free-photo-of-portrait-of-an-african-man-wearing-cap.jpeg' },
    { name: 'Sithara Nair', location: 'Developer, Hyderabad', online: false, imgSrc: 'https://images.pexels.com/photos/27355293/pexels-photo-27355293/free-photo-of-portrait-of-an-african-man-wearing-cap.jpeg' },
    { name: 'Sithara Nair', location: 'Developer, Hyderabad', online: false, imgSrc: 'https://images.pexels.com/photos/27355293/pexels-photo-27355293/free-photo-of-portrait-of-an-african-man-wearing-cap.jpeg' },
    { name: 'Sithara Nair', location: 'Developer, Hyderabad', online: false, imgSrc: 'https://images.pexels.com/photos/27355293/pexels-photo-27355293/free-photo-of-portrait-of-an-african-man-wearing-cap.jpeg' },
    
  
  ];

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-[url('https://img.freepik.com/free-vector/festive-blurred-lights_53876-89104.jpg?w=1380&t=st=1723024111~exp=1723024711~hmac=37b5e0220ebd60d21aa95a48ee95f2ef1035ca9aa3485777737d466866c7bc5b')] bg-cover bg-center ">
      <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
        <div className="text-2xl">☰</div>
        <div className="text-2xl font-bold text-purple-600">BuddyPair</div>
        <div className="text-2xl">👤</div>
      </header>

      <div className="flex flex-col w-full overflow-y-auto">
      <div className="flex mx-auto mt-4 space-x-2">
        <button className="py-2 px-4 bg-purple-200 rounded-full">Location</button>
        <button className="py-2 px-4 bg-gray-200 rounded-full">Designation</button>
        <button className="py-2 px-4 bg-gray-200 rounded-full">Qualification</button>
      </div>

      <div className="gap-4 mt-4 px-4 w-full md:grid grid-cols-2 md:px-52">
        {profiles.map((profile, index) => (
          <div className="max-w-[40rem] relative bg-white rounded-lg overflow-hidden shadow-md" key={index}>
            <img src={profile.imgSrc} alt={profile.name} className="w-full h-56 object-cover" />
            {profile.online && <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Online</div>}
            <div className="p-4">
              <div className="text-lg font-semibold">{profile.name}</div>
              <div className="text-gray-600">{profile.location}</div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <footer className="flex justify-around w-full py-4 bg-white shadow-inner mt-auto">
        <button className="text-2xl">😁</button>
        <button className="text-2xl">🔍</button>
        <button className="text-2xl">🏠</button>
        <button className="text-2xl">⭐</button>
        <button className="text-2xl">💬</button>
      </footer>
    </div>
  );
}

export default Dating;