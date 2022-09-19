import React from 'react'
import AcademyLogo from "../Academy_Login_Page/Images/Academy.svg"
import "./CSS/Navbar.css"

const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo}></img>
        <button className='Login-btn'>Login</button>
    </div>
  )
}

export default NavBar