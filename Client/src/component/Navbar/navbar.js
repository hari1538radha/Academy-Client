import React from 'react'
import AcademyLogo from "../Login/Images/Academy.svg"
import "./mainNavbar.css"
import navlinklogo from "../Login/Images/responsivenavlink.svg"

const navbar = () => {
  return (
    <div className='navbarcontainer'>
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
      <img className='navlinklogo' src={navlinklogo}></img>
    </div>

  )
}

export default navbar