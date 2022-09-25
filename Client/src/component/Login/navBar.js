import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import "./CSS/Navbar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo}></img>
        <Link to="/signup" className='Login-btn'>SIGN UP</Link>
    </div>
  )
}

export default NavBar