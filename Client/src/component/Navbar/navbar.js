import { Link } from "react-router-dom"
import AcademyLogo from "../Login/Images/Academy.svg"
import navlinklogo from "../Login/Images/responsivenavlink.svg"
import "./mainNavbar.css"
const navbar = () => {
  return (
    <div className='navbarcontainer'>
      <div className='navbar'>
      <Link to="/landing">
        <img className="AcademyLogo" src={AcademyLogo}></img>
      </Link>
        
        <div className='navlinks'>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Blog</a>
          <a href='#'>Academy</a>
          <a href='#'>Events</a>
          <a href='#'>Careers</a>
          <a href='#'>Develop</a>
        </div>
        
        <Link to="/">
          <button className='Logout-btn'>Log out</button>
        </Link>
      </div>
      <img className='navlinklogo' src={navlinklogo}></img>
    </div>

  )
}

export default navbar