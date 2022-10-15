import { Link } from "react-router-dom";
import "../Navbar/landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
import Dropdown from "../Navbar/Dropdown/Dropdown";

const AdminNavBar = ({ profileInfo }) => {
  console.log(profileInfo);
  return (
    <header className="navbars admin-navbar">
      <div className="mid-navmenus">
        <Link to="/landing" className="logo-img-contain">
          <img
            className="AcademyLogo"
            src={AcademyLogo}
            alt="Logo"
          ></img>
        </Link>
        <nav>
          {profileInfo && <Dropdown profileInfo={profileInfo}></Dropdown>}
        </nav>
      </div>
    </header>
  );
};

export default AdminNavBar;
