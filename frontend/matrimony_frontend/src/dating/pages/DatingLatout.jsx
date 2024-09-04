import { Outlet } from 'react-router-dom'
import Dsidebar from '../components/Dsidebar';

const DatingLatout = () => {
  return (
    <div className="flex justify-evenly w-full h-screen bg-[url('https://i.pinimg.com/originals/ec/b8/1b/ecb81bce76f838ff41df121347b4444e.jpg')] bg-cover bg-center" >
    <div className="w-[18rem] bg-[#9d46ab]">
      <Dsidebar />
    </div>
    <div className="flex-1 p-4">
      <Outlet />
    </div>
    {/* <div className="w-[20rem] bg-gray-200">
      <UserSidebar />
    </div> */}
  </div>
  )
}

export default DatingLatout