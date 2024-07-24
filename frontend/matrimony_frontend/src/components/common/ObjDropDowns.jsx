import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


const ObjDropDown = (props) => {

  console.log(props.name);
  console.log(props.selected);
  console.log(props.options);

  return (
    <div className="">
      <select name={props.name} value={props.selected} className={props.css} onChange={(e)=>props.handleSelect(e)}>
        {props.options.map(option => (
          <option  key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};


export default ObjDropDown


