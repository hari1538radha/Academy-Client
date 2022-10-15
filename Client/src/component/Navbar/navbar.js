import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
import Dropdown from "./Dropdown/Dropdown";

const Navbar = ({ profileInfo }) => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbars">
      <div className="top-navmenus">
        <nav ref={navRef}>
          <a href="/#">About us</a>
          <a href="/#">Study Abroad</a>
          <a href="/#">Announcement</a>
          <a href="/#">Forum</a>
          <a href="/#">Ask a Question</a>
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
        </nav>
      </div>
      <div className="mid-navmenus">
        <Link to="/landing" className="logo-img-contain">
          <img
            className="AcademyLogo"
            src={AcademyLogo}
            alt="no img found"
          ></img>
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
      </div>
      <div className="bot-navmenus">
        <nav ref={navRef}>
          <div className="inside-nav-option hidden-navbar-options ">
            <a href="/#">About us</a>
            <a href="/#">Study Abroad</a>
            <a href="/#">Announcement</a>
            <a href="/#">Forum</a>
            <a href="/#">Ask a Question</a>
            <a href="/">Login</a>
            <a href="/signup">Register</a>
          </div>
          <hr className="hidden-divider"></hr>
          <div className="inside-nav-option hidden-navbar-options">
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Blog</a>
            <a href="/#">Academy</a>
            <a href="/#">Events</a>
            <a href="/#">Careers</a>
          </div>
          <hr className="hidden-divider"></hr>
          <div className="inside-nav-option visible-nav-option">
            <a href="/#">Catagory++</a>
            <a href="/#">Specialization++</a>
            <a href="/#">Top Universities</a>
            <a href="/#">Top Colleges</a>
            <a href="/#">Top Schools</a>
            <a href="/#">Top Placements</a>
            <a href="/#">Top Events</a>
            <a href="/#">Resources</a>
            <a href="/#">Internships/Jobs</a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>

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
