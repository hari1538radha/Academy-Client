import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import AcademyLogo from "../Login/Images/Academy.svg";
const DropdownNavbar = () => {
  return (
    <div>
        <div><img src={AcademyLogo}></img></div>
        <div><Dropdown/></div>
    </div>
  )
}

export default DropdownNavbar