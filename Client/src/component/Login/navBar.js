import { Link } from 'react-router-dom'
import AcademyLogo from "../Login/Images/Academy.svg"
import "./CSS/Navbar.css"
const NavBar = () => {
  return (
    <div className='Navbar'>
      <Link to="/landing">
        <img className="AcademyLogo" src={AcademyLogo}></img>
      </Link>
        <Link to="/signup" className='Login-btn'>SIGN UP</Link>
    </div>
  )
}

export default NavBar