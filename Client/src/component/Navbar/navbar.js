import { Link, useNavigate } from "react-router-dom";
import "./landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
import Dropdown from "./Dropdown/Dropdown";

const NavBar = ({ profileInfo }) => {
  console.log(profileInfo);
  const navigate = useNavigate();

  const onClicking = (e) => {
    navigate("/quiz");
  };

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
      {profileInfo && <Dropdown profileInfo={profileInfo}></Dropdown>}
    </div>
  );
};

export default NavBar;
