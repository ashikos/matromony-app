import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Dropdowns = (props) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([null]));

  const dict={
    "as":123
  }

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown className="">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className= {props.css}
          
        >
          {selectedValue ? selectedValue : props.dict.default}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection={false}
        selectionMode={props.selection}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="shadow-2xl"
      >
        {
            Object.entries(props.dict).map(([key, value])=>(
                <DropdownItem key={value}>{value}</DropdownItem>
            ))
        }
        
      </DropdownMenu>
    </Dropdown>
  );
}


export default Dropdowns


