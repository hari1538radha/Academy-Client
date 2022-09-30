import { Link } from "react-router-dom";
import "../Landing/Css/landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
const NavBar = () => {
  return (
    <div className="Navbar">
      <Link to="/landing">
        <img className="AcademyLogo" src={AcademyLogo}></img>
      </Link>
    
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Academy</a>
        <a href="">Events</a>
        <a href="">Careers</a>
        <a href="/quiz">Quiz</a>
      

      {/* <button className="Login-btn">Login</button> */}
      <Link to="/">
          <button className='Logout-btn'>Log out</button>
        </Link>
    </div>
  );
};

export default NavBar;
