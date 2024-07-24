import React, { useState } from 'react'

import { Button, Modal, FloatingLabel, Datepicker as FlowBiteDate } from 'flowbite-react';

import { MdEdit, MdDelete, MdVerified } from "react-icons/md";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import UserInfo from './modals/UserInfoModal';


const UserTable = () => {

  const [editModal, setEditModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [addModal, setAddModal] = useState(false);


    const td_class = 'px-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white'
  return (
        <div className="px-10 ">
        <div className="overflow-hidden rounded-2xl shadow-md ">
       
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
                <thead class="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                    <tr className=''>
                        <th scope="col" class="px-6 py-3"> NAME </th>
                        <th scope="col" class="px-6 py-3"> EMAIL </th>
                        <th scope="col" class="px-6 py-3"> PLACE </th>
                        <th scope="col" class="px-6 py-3"> AGE </th>
                        <th scope="col" class="px-6 py-3"> PREMIEUM </th>
                        <th scope="col" class="px-6  text-right"> <button onClick={()=>setAddModal(true)}  className='px-8 py-2 rounded-md bg-white text-black'>Add</button> </th>
                    </tr>
        
                </thead>
                <tbody>
                   
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                    

                        <td scope="row" className={td_class}>
                            <div className="flex items-center">
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Name Image" className="w-9 h-9 rounded-full mr-2" />
                            Ajith
                            </div>
                        </td>
                        <td class={td_class}>  ajith@gmail.com </td>
                        <td class={td_class}> Thrissur </td>
                        <td class={td_class}> 29</td>
                        <td class={td_class}> <MdVerified size={20}/></td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)}  className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" className={td_class}>
                            <div className="flex items-center">
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Name Image" className="w-9 h-9 rounded-full mr-2" />
                            Fazmi
                            </div>
                        </td>
                        <td class={td_class}> fazmi@gmail.com </td>
                        <td class={td_class}> edavilang </td>
                        <td class={td_class}> 24</td>
                        <td class={td_class}> <MdVerified size={20}/></td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button   className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                     <td scope="row" className={td_class}>
                            <div className="flex items-center">
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Name Image" className="w-9 h-9 rounded-full mr-2" />
                            Mathew
                            </div>
                        </td>
                        <td class={td_class}> mat@gmail.com </td>
                        <td class={td_class}> Eranakulam </td>
                        <td class={td_class}> 25</td>
                        <td class={td_class}> </td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button  className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" className={td_class}>
                            <div className="flex items-center">
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Name Image" className="w-9 h-9 rounded-full mr-2" />
                            Ajay
                            </div>
                        </td>
                        <td class={td_class}> aju@gmail.com </td>
                        <td class={td_class}> Muriyad </td>
                        <td class={td_class}> 32</td>
                        <td class={td_class}> <MdVerified size={20}/></td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button  className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" className={td_class}>
                            <div className="flex items-center">
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Name Image" className="w-9 h-9 rounded-full mr-2" />
                            Lettan
                            </div>
                        </td>
                        <td class={td_class}> fazmi@gmail.com </td>
                        <td class={td_class}> edavilang </td>
                        <td class={td_class}> 24</td>
                        <td class={td_class}></td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button   className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>

                  
                </tbody>
            </table>
                
            <Modal show={addModal} size="2xl" onClose={()=>setAddModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Add here</h3>
            <div className='flex items-center justify-start gap-4 font-sans text-3xl'>
              <div className="mb-2 block w-[50%] ">
            
              <FloatingLabel 
               
                required variant="outlined" label="firstname" />
              </div>
              <div className="mb-2 block w-[50%]">
              <FloatingLabel 
               label="email" 
                required variant="outlined" />
              </div>
            </div>
            <div className='flex items-center justify-start gap-4 font-sans text-3xl'>
              <div className="mb-2 block w-[50%] ">
            
              <FloatingLabel 
               
                required variant="outlined" label="place" />
              </div>
              <div className="mb-2 block w-[50%]">
              <FloatingLabel 
               label="age" 
                required variant="outlined" />
              </div>
            </div>
           
            
            <div className="w-full flex gap-4">
              <Button onClick={()=>setAddModal(false)} className='w-[30%] h-14 bg-gray-900'>Save</Button>
              <Button className='w-[30%] h-14 bg-slate-400' onClick={()=>setAddModal(false)}>Cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>    
                
                
                
                <Modal show={delModal} size="md" onClose={() => setDelModal(false)} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this entry?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button color="failure" >
                          Yes, I'm sure
                        </Button>
                        <Button color="gray" >
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>


                {/* UserInfo Modal */}
                <UserInfo />

            


    
        </div>
        </div>

  )
}

export default UserTable