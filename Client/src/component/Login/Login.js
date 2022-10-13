import React from "react";
 import { useState, useEffect } from "react";
import NavBar from "../Navbar/navbar";
import { useDispatch, useSelector} from "react-redux";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import Loginlogo from "../Login/Images/Vector.svg";
import "./CSS/Login.css";
import Footer from "../Footer/footer.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[data,setdata] =useState("") || data  
 
  const HandleSubmit = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const userEmail = element[0].value;
    const userPassword = element[1].value;
    element[0].value = "";
    element[1].value = "";
    dispatch(postLoginUser({ userEmail, userPassword }));
  
    
    navigate("/", {state: {email: userEmail} });
  };
  const{loginData,loading} =useSelector(state => state.loginInfo)
  
  useEffect(() => {
    
    if(loginData) 
    {
      if(loginData.data)
      {
        console.log(loginData)
        console.log("logindata.data")
        if(loginData.data.message)
        {
          navigate("/landing")
          console.log(loginData.data.message)
          
          console.log("logindata.data.message")
        }
      }
      else
      {
        console.log(loginData)
        console.log("logindata.data not found")
      }
      console.log(loginData)
      console.log("login data ")
    }
   else {
    console.log("gvdvjhga")
   }

  }, [loginData])
  



  

  return (
    <>
    <div className="all-login-container">
    <NavBar/>
    <div className="hidden-container">
      <div className="hidden"></div>
      <h1 className="hidden-pagename">log in</h1>
    </div>
      <div className="image">
        <div className="Login-main">
          <form onSubmit={HandleSubmit}>
            <div className="Login-container">
              <div className="Loginlogo">
                <img src={Loginlogo} alt="no img found"></img>
              </div>
              <div>
                {data}
              </div>
              <input
                className="Emails-input"
                placeholder="Email Address *"
                type="text"
              ></input>
              <input
                className="passwords-input"
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
    </div>

    </>
  );
};

export default Login;
