import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import '../Signup/Navbar.css'

const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo}></img>
        <button className='Login-btn'>Login</button>
    </div>
  )
}

export default NavBar