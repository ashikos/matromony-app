import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {Link, useLocation } from 'react-router-dom'


const UserHeader = () => {
    return (
            // <Navbar fluid rounded className="flex h-[10%] justify-evenly">
            //   <Navbar.Collapse className="flex justify-between">

            //     <Navbar.Link href="#">About</Navbar.Link>
            //     <Navbar.Link href="#">Services</Navbar.Link>
            //     <Navbar.Link href="#">Pricing</Navbar.Link>
            //     <Navbar.Link href="#">Contact</Navbar.Link>
            //   </Navbar.Collapse>
            // </Navbar>

            <>
                <div className="h-[10%] bg-white text-2xl text-gray-500 font-thin items-center flex justify-between px-[10rem] border-b-2">
                    <Link to={"/user/general/" }  className="text-gray-500"><h1 > General Info</h1></Link>
                    <Link to={"/user/contact/"} className="text-gray-500"><h1> Contact Info</h1></Link>
                    <Link to={"/user/education/"} className="text-gray-500"><h1> Education</h1></Link>
                    <Link to={"/user/profession/"} className="text-gray-500"><h1> Professional Info</h1></Link>
                    <Link to={"/user/family/"} className="text-gray-500"><h1> Family</h1></Link>
                    <Link to={"/user/life/"} className="text-gray-500"><h1> Life Style</h1></Link>
                    <Link to={"/user/preferences/"} className="text-gray-500"><h1> Preferences</h1></Link>
                </div>
            
            </>


          );
}

export default UserHeader