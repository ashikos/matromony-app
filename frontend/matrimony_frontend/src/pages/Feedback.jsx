import React from 'react'
import  DateRange  from '../components/common/DateRange'
import  Search  from '../components/common/Search'

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Feedback = () => {


  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='px-10 '> 
      <div className="py-5 flex gap-4">
        <Search />
        <DateRange />
      </div>
      <div className="">
      <div className="parent relative  w-[80%] p-5 bg-white shadow-xl rounded-2xl mt-5">

          <div className="box rounded-md bg-slate-200 m-4 h-[10vh]">box 1</div>
          <div className="box rounded-md bg-slate-200 m-4 h-[10vh]">box 2</div>
          <div className="box rounded-md bg-slate-200 m-4 h-[10vh]">box 3</div>
          <div className="box rounded-md bg-slate-200 m-4 h-[10vh]">box 4</div>
          <div className="box rounded-md bg-slate-200 m-4 h-[10vh]">box 1</div>
          
          

</div>
      </div>



<>
      <Button className='bg-gray-500' onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>






    </div>
  )
}

export default Feedback