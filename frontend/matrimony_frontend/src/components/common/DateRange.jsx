import React from "react";
import {DateRangePicker} from "@nextui-org/react";

const DateRange = () => {
  return (
    <div className="flex w-[30%]  flex-wrap md:flex-nowrap gap-4">
    <DateRangePicker
      label="Stay duration"
      visibleMonths={2}
      
    />
  </div> 
  )
}

export default DateRange