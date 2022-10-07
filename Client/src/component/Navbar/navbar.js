import { Link, useNavigate } from "react-router-dom";
import "./landingNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
import React, { useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { loginAction } from "../../Store/Slice/LogoutSlice.js";
import { fetchuser } from "../../Store/Slice/FindUser.js";

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedin = useSelector((state) => state.onlineStatus);
  const sendlogoutRequest = async() => {
      const res = await axios.post("http://localhost:8001/authenticate/logout", null,{
          withCredentials: true
      }); 
      if(res.status === 200){
          return res;
      }
      return new Error("unable to logout");
  }
  const handleLogout = () => {
      sendlogoutRequest().then(() => dispatch(loginAction.logout()));
      alert("You will be loged out")
  };
  useEffect(() => {
    dispatch(fetchuser())
  },[]);
  const onClicking = (e) => {
    navigate("/quiz")
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
      
      <div>
          {isLoggedin && <Link onClick={handleLogout} to="/"><button className='Logout-btn' id="logout-button">Logout</button></Link> }
        </div>
    </div>
  );
};

export default NavBar;
