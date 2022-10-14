import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import Loginlogo from "../Login/Images/Vector.svg";
import "./CSS/Login.css";
import Footer from "../Footer/footer.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFailure, setShowFailure] = useState(false);
  const { loginData, loading } = useSelector((state) => state.loginInfo);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const userEmail = element[0].value;
    const userPassword = element[1].value;
    element[0].value = "";
    element[1].value = "";
    dispatch(postLoginUser({ userEmail, userPassword }));
    navigate("/landing", { state: { email: userEmail } });
  };

  // useEffect(() => {
  //   if (
  //     loginData &&
  //     loginData.message === "Login success"
  //   ) {
  //     navigate("/landing");
  //   } else {
  //     console.log("No user found");
  //   }
  //   // setShowFailure(true);
  // }, [loginData]);

  return (
    <>
      <div className="all-login-container">
        <NavBar />
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
                <input
                  className="Emails-input"
                  placeholder="Email Address *"
                  type="text"
                  required
                ></input>
                <input
                  className="passwords-input"
                  type="password"
                  placeholder="Password *"
                  required
                ></input>
                <button className="login-btn">LOGIN</button>
                {showFailure ? (
                  <div className="sign-failure">
                    {loginData.data}
                    <span>User Exist Already !!!</span>
                  </div>
                ) : null}
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
