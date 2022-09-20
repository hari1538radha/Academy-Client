import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import "./CSS/Navbar.css"

const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo}></img>
        <button className='Login-btn'>SIGN UP</button>
    </div>
  )
}

export default NavBar