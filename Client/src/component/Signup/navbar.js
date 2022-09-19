import React from 'react'
import AcademyLogo from "../Academy_Login_Page/Images/Academy.svg"
import '../Signup/Navbar.css'

const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo}></img>
        <button className='Login-btn'>SIGNUP</button>
    </div>
  )
}

export default NavBar