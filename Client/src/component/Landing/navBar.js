import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import '../Landing/Css/landingNav.css'

const NavBar = () => {
  return (
    <div className='Navbar'>
        <img className='AcademyLogo' src={AcademyLogo}></img>
   
        <a href=''>About</a>
        <a href=''>Contact</a>
        <a href=''>Blog</a>
        <a href=''>Academy</a>
        <a href=''>Events</a>
        <a href=''>Careers</a>
        <a href=''>Develop</a>
   
        

     
       

        <button className='Login-btn'>Login</button>
    </div>
  )
}

export default NavBar