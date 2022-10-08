import { Link, useNavigate } from "react-router-dom";
import "./landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
const NavBar = () => {
  const navigate = useNavigate()

  const onClicking = (e) => {
    navigate("/quiz")
  }

  const logout = (e) => {
    navigate("/")
  }
  return (
    <div className="Navbar">
      <Link to="/landing">
        <img className="AcademyLogo" src={AcademyLogo} alt="no img found"></img>
      </Link>
    
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        <button>Academy</button>
        <button>Events</button>
        <button>Careers</button>
        <button onClick={onClicking}>Quiz</button>
      
      <div onClick={logout}>
          <button className='Logout-btn' id="logout-button">Log out</button>
        </div>
    </div>
  );
};

export default NavBar;
