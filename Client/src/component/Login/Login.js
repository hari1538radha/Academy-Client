import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import Loginlogo from "../Login/Images/Vector.svg";
import "./CSS/Login.css";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const userEmail = element[0].value;
    const userPassword = element[1].value;
    element[0].value = "";
    element[1].value = "";
    dispatch(postLoginUser({ userEmail, userPassword }));
    navigate("/landing");
  };
  

  return (
    <>
    <NavBar/>
      <div className="image">
        <div className="Login-main">
          <form onSubmit={HandleSubmit}>
            <div className="Login-container">
              <div className="Loginlogo">
                <img src={Loginlogo} alt="no img found"></img>
              </div>
              <input
                className="Email-input"
                placeholder="Email Address *"
                type="text"
              ></input>
              <input
                className="password-input"
                type="password"
                placeholder="Password *"
              ></input>
              <button className="login-btn">LOGIN</button>
              <div className="login-footer">
                <p>Don't have an account?</p>
                <Link to="/Signup">SIGN UP</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
