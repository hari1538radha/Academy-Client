import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import  "./mainNavbar.css"

const navbar = () => {
  return (
    <div className='navbar'>
         <img className='AcademyLogo' src={AcademyLogo}></img>

         <div className='navlinks'>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Blog</a>
            <a href='#'>Academy</a>
            <a href='#'>Events</a>
            <a href='#'>Careers</a>
            <a href='#'>Develop</a>
         </div>
         <button className='Logout-btn'>Log out</button>
         </div>
  )
}

export default navbar