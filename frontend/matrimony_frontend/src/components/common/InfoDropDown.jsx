import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


const InfoDropDown = (props) => {

  const [selectedValue, setSelectedValue] = useState('default');

  const handleSelection = (selectedKeys) => {
    const key = Array.from(selectedKeys).pop();
    setSelectedValue(key);
    props.setData((prestat) => ({ ...prestat, [props.field] : key }));
  };

  return (
    <Dropdown className="">
      <DropdownTrigger>
    
        <Button 
          variant="bordered" 
          className= {props.css}
          
        >
          {props.data[props.field] ? props.dict[props.data[props.field]] : props.dict.default}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Multiple selection example"
        disabledKeys={["default"]}
        variant="flat"
        closeOnSelect={true}
        disallowEmptySelection={false}
        selectionMode={props.selection}
        selectedKeys={'default'}
        onSelectionChange={(key) => handleSelection(key)}
        className="shadow-2xl"
      >
        {
            Object.entries(props.dict).map(([key, value])=>(
                <DropdownItem key={key}>{value}</DropdownItem>
            ))
        }
        
      </DropdownMenu>
    </Dropdown>
  );
}


export default InfoDropDown


