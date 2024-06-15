import React from 'react'
import UserTable from '../components/common/UserTable'
import  Dropdowns  from '../components/common/Dropdown'
import  Search  from '../components/common/Search'
import Pagination from '../components/common/Pagination'
import {
   GenderChoices, HoroscopeChoices, LocationChoices,
    PremieumChoices } from '../libs/utils/Dropdown'


const Users = () => {

  

  return (
    <div>
      <div className="px-10 py-5 flex gap-4">
        <Search />
        <Dropdowns dict={GenderChoices}/>
        <Dropdowns dict={HoroscopeChoices}/>
        <Dropdowns dict={LocationChoices}/>
        <Dropdowns dict={PremieumChoices}/>

      </div>
      <UserTable />
      <div className="items-center">
      <Pagination/>
    </div>
    </div>
  )
}

export default Users