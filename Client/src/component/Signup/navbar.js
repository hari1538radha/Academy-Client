import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import '../Signup/Navbar.css'
import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo} alt="logo"></img>
        <Link to="/" className='Login-btn'>Login</Link>
    </div>
  )
}

export default NavBar
