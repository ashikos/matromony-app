import UserTable from '../components/common/UserTable';

import transaction_bg  from './../assets/admin-dashboard/transaction_bg.png'
import premieum_bg  from './../assets/admin-dashboard/premieum_bg.png'
import feedback_bg  from './../assets/admin-dashboard/feedback_bg.png'
import user_bg  from './../assets/admin-dashboard/user_bg.png'
import users  from './../assets/admin-dashboard/users.svg'
import diamond  from './../assets/admin-dashboard/diamond.svg'
import review  from './../assets/admin-dashboard/review.svg'
import bank  from './../assets/admin-dashboard/bank.svg'
import couple  from './../assets/admin-dashboard/couple.svg'
import matched  from './../assets/admin-dashboard/matched.svg'
import Pagination from '../components/common/Pagination';

const Dashboard = () => {


    return (

    <div>
      <div className="container flex gap-6 justify-between p-5 px-10"> 
      <div className="box relative p-5 bg-white w-[30%] h-[30vh] rounded-xl shadow-md" style={{backgroundImage: `url(${user_bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <img src={users} alt="" className='w-[30%] h-[30%]' />
        <p className='text-gray-800 text-xl mt-3 font-semibold'>Total users</p>
        <p className='text-gray-800 text-5xl mt-6 font-semibold'>19899</p><br />
        <a className='absolute bottom-5' href="">view more</a>
      </div>
      <div className="box bg-white p-5 relative  w-[30%] h-[30vh] rounded-xl shadow-md" style={{backgroundImage: `url(${premieum_bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img src={diamond} alt="" className='w-[30%] h-[30%]' />
        <p className='text-gray-800 text-xl mt-3 font-semibold'>Premieum users</p>
        <p className='text-gray-800 text-5xl mt-6 font-semibold'>2047</p><br />
        <a className='absolute bottom-5' href="">view more</a>
      </div>
      <div className="box bg-white p-5 relative  w-[30%] h-[30vh] rounded-xl shadow-md" style={{backgroundImage: `url(${transaction_bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img src={bank} alt="" className='w-[30%] h-[30%]' />
        <p className='text-gray-800 text-xl mt-3 font-semibold'>Transactions</p>
        <p className='text-gray-800 text-4xl mt-6 font-semibold'>$ 7645832</p><br />
        <a className='absolute bottom-5' href="">view more</a>
      </div>  
      <div className="box bg-white p-5 relative  w-[30%] h-[30vh] rounded-xl shadow-md" style={{backgroundImage: `url(${matched})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img src={couple} alt="" className='w-[30%] h-[30%]' />
        <p className='text-gray-800 text-xl mt-3 font-semibold'>Matched profiles</p>
        <p className='text-gray-800 text-5xl mt-6 font-semibold'>1736</p><br />
        <a className='absolute bottom-5' href="">view more</a>
      </div>   
      <div className="box bg-white p-5 relative  w-[30%] h-[30vh] rounded-xl shadow-md" style={{backgroundImage: `url(${feedback_bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img src={review} alt="" className='w-[30%] h-[30%]' />
        <p className='text-gray-800 text-xl mt-3 font-semibold'>Feedback</p>
        <p className='text-gray-800 text-5xl mt-6 font-semibold'>106</p><br />
        <a className='absolute bottom-5' href="">view more</a>
      </div>   
       
    </div>
    <div className="flex justify-between m-2 px-10">
                <p className='font-extrabold text-xl '> Newly Joined users</p>
                <a className='mr-4 text-black' href="">view more</a>
    </div>
    <UserTable />
    <div className="items-center">
      <Pagination/>
    </div>
    
    </div>
  );
};

export default Dashboard;
