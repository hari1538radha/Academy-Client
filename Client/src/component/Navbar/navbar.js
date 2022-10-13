import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
import Dropdown from "./Dropdown/Dropdown";

const Navbar = ({ profileInfo }) => {
  console.log(profileInfo);
  const navigate = useNavigate();

  const logout = (e) => {
    navigate("/");
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbars">
      <Link to="/landing" className="logo-img-contain">
        <img className="AcademyLogo" src={AcademyLogo} alt="no img found"></img>
      </Link>
      <nav ref={navRef}>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
        <a href="/#">Blog</a>
        <a href="/#">Academy</a>
        <a href="/#">Events</a>
        <a href="/#">Careers</a>
        <a href="/quiz">Quiz</a>
        {profileInfo && <Dropdown profileInfo={profileInfo}></Dropdown>}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      {/* <div onClick={logout}>
          <button className='Logout-btn' id="logout-button">Log out</button>
        </div> */}

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
