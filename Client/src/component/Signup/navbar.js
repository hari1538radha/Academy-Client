import { Link } from "react-router-dom"
import AcademyLogo from "../Login/Images/Academy.svg"
import '../Signup/Navbar.css'
const NavBar = () => {
  return (
    <div className='Navbar'>
      <Link to="/landing">
        <img className="AcademyLogo" src={AcademyLogo}></img>
      </Link>
        <Link to="/" className='Login-btn'>Login</Link>
    </div>
  )
}

export default NavBar
