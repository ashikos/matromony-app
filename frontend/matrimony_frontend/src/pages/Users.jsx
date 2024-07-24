import React from 'react'
import UserTable from '../components/common/UserTable'
import  Dropdowns  from '../components/common/Dropdown'
import  Search  from '../components/common/Search'
import Pagination from '../components/common/Pagination'
import {
   GenderChoices, HoroscopeChoices, LocationChoices,
    PremieumChoices } from '../libs/utils/Dropdown'


const Users = () => {

  const drpDownClass = "capitalize  w-[10vw] bg-white h-14"

  return (
    <div>
      <div className="px-10 py-5 flex gap-4">
        <Search />
        <Dropdowns dict={GenderChoices} css={drpDownClass} selection={"multiple"}/>
        <Dropdowns dict={HoroscopeChoices} css={drpDownClass} selection={"multiple"}/>
        <Dropdowns dict={LocationChoices} css={drpDownClass} selection={"multiple"}/>
        <Dropdowns dict={PremieumChoices} css={drpDownClass} selection={"multiple"}/>

      </div>
      <UserTable />
      <div className="items-center">
      <Pagination/>
    </div>
    </div>
  )
}

export default Users