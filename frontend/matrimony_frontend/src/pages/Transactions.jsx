import React, {useState} from 'react'
import Pagination from '../components/common/Pagination'
import  DateRange  from '../components/common/DateRange'
import  Search  from '../components/common/Search'


import { Button, Modal, FloatingLabel, Datepicker as FlowBiteDate } from 'flowbite-react';

import { MdEdit, MdDelete, MdVerified } from "react-icons/md";
import { HiOutlineExclamationCircle } from 'react-icons/hi';


const Transactions = () => {


    const [editModal, setEditModal] = useState(false);
  const [delModal, setDelModal] = useState(false);

  const td_class = 'px-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white'
  return (
    <div>
      <div className="px-10 py-5 flex gap-4">
        <Search />
        <DateRange />
      </div>
      <div className="px-10 ">
        <div className="overflow-hidden rounded-2xl shadow-md ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
                <thead class="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                    <tr className=''>
                        <th scope="col" class="px-6 py-3"> NAME </th>
                        <th scope="col" class="px-6 py-3"> EMAIL </th>
                        <th scope="col" class="px-6 py-3"> DATE </th>
                        <th scope="col" class="px-6 py-3"> AMOUNT </th>
                        <th scope="col" class="px-6 py-3"> <span class="sr-only">Edit</span> </th>
                    </tr>
                </thead>
                <tbody>
                   
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Ajith </td>
                        <td class={td_class}> ajith@gmail.com </td>
                        <td class={td_class}> 12-04-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button onClick={()=>setEditModal(true)} className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)}  className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Fazmi </td>
                        <td class={td_class}> fazh@gmail.com </td>
                        <td class={td_class}> 17-07-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)} className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Ajay </td>
                        <td class={td_class}> aju@gmail.com </td>
                        <td class={td_class}> 21-01-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)} className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Ashi </td>
                        <td class={td_class}> ashi@gmail.com </td>
                        <td class={td_class}> 08-09-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)} className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Aachie </td>
                        <td class={td_class}> lett@gmail.com </td>
                        <td class={td_class}> 15-09-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)} className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Amal </td>
                        <td class={td_class}> amal@gmail.com </td>
                        <td class={td_class}> 12-04-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)} className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>
                    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 leading-0">
                        <td scope="row" class={td_class}> Sanu </td>
                        <td class={td_class}> sanu@gmail.com </td>
                        <td class={td_class}> 29-012-2024 </td>
                        <td class={td_class}> 699</td>
                        <td class="px-6 py-4 flex text-right justify-end">
                             <button className='hover:text-gray-900 rounded-sm p-1 hover:scale-125  duration-200'><MdEdit size={20}/> </button>
                             <button onClick={()=>setDelModal(true)} className='hover:text-red-600 rounded-sm p-1 ml-5 hover:scale-125  duration-200'><MdDelete size={20}/> </button>     
                        </td>
                    </tr>

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
                    

                </tbody>
            </table>




    
        </div>
        </div>
        <div className="items-center">
      <Pagination/>
    </div>
    </div>
  )
}

export default Transactions