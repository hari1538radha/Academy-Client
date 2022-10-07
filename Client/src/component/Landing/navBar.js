import React, { useEffect} from "react";
import AcademyLogo from "../Login/Images/Academy.svg";
import "../Landing/Css/landingNav.css";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom"
import { loginAction } from "../../Store/Slice/LoginStatus.js";
import { fetchuser } from "../../Store/Slice/FindUser.js";

const NavBar = () => {
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
      alert("you will be loged out")
  };
  useEffect(() => {
    dispatch(fetchuser())
  },[]);

  return (
    <div className="Navbar">
      <img className="AcademyLogo" src={AcademyLogo}></img>

      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Blog</a>
      <a href="">Academy</a>
      <a href="">Events</a>
      <a href="">Careers</a>
      <a href="">Develop</a>
      {isLoggedin && <Link onClick={handleLogout} to="/"><button className="Login-btn">Logout</button>o</Link> }
    </div>
  );
};

export default NavBar;
