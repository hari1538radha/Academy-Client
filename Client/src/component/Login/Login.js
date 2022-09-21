import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/Slice/LoginSlice";
import Loginlogo from "../Login/Images/Vector.svg";
import "./CSS/Login.css";
import Footer from "../Login/Footer/footer.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const userEmail = element[0].value;
    const userPassword = element[1].value;
    element[0].value = "";
    element[1].value = "";
    dispatch(loginUser({ userEmail, userPassword }));
    useNavigate('/landing');
  };

  return (
    <>
      <div className="image">
        <div className="Login-main">
          <form onSubmit={handleSubmit}>
            <div className="Login-container">
              <div className="Loginlogo">
                {" "}
                <img src={Loginlogo}></img>
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
                <a href="/Signup">SIGN UP</a>
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
