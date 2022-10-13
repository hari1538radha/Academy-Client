import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postSignupData } from "../../Store/Slice/SignupSlice";
import Footer from "../Footer/footer";
import Loginlogo from "../Login/Images/Vector.svg";
import NavBar from "../Navbar/navbar";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.signupInfo);
  const [loginStatus, setLoginStatus] = useState({ status: 0, message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailur, setShowFailur] = useState(false);
  useEffect(() => {
    console.log(signupData);
    if (signupData) {
      if (signupData.data) {
        if (signupData.data.response === "success") {
          setLoginStatus({
            status: 1,
            message:
              "Your details is registerd successfully !! please login now",
          });
          setShowSuccess(true);
        } else if (signupData.data.response === "Invalid Email") {
          setLoginStatus({
            status: 1,
            message:
              "The Email has been taken already!!! Please enter a new Email ID",
          });
          setShowFailur(true);
        } else if (signupData.data.response === "Inefficient") {
          setLoginStatus({
            status: 2,
            message: "The details is not efficient",
          });
          window.alert("please fill the details");
        }
      } else {
        setLoginStatus({
          status: 0,
          message: "",
        });
      }
    }
  }, [signupData]);

  const handleSignupData = (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const userFirstName = ele[0].value;
    const userLastName = ele[1].value;
    const userEmail = ele[2].value;
    const userPassword = ele[3].value;
    ele[0].value = "";
    ele[1].value = "";
    ele[2].value = "";
    ele[3].value = "";
    dispatch(
      postSignupData({ userFirstName, userLastName, userEmail, userPassword })
    );
  };

  return (
    <div className="all-login-container">
      <NavBar />
      <div className="hidden-container">
        <div className="hidden"></div>
        <h1 className="hidden-pagename">sign up</h1>
      </div>
      <div className="image">
        <div className="Signup-main">
          <form onSubmit={handleSignupData} className="form-signup">
            <div className="Signup-container">
              <div className="Loginlogo">
                <img src={Loginlogo} alt="no img found"></img>
              </div>
              <div className="Name-input-container">
                <input
                  className="fistname-input"
                  placeholder="First name *"
                  type="text"
                  required
                ></input>
                <input
                  className="LastName-input"
                  placeholder="Last name *"
                  type="text"
                  required
                ></input>
              </div>
              <input
                className="Email-input"
                placeholder="Email Address *"
                type="email"
                required
              ></input>
              <input
                className="password-input"
                type="password"
                placeholder="Password *"
                required
              ></input>
              <button className="Signup-btn">SIGN UP</button>
              {showSuccess ? (
                <div className="sign-success">
                  {setLoginStatus.message}

                  <span>
                    SignIn success!!{" "}
                    <Link to="/login" className="sign-success-link">
                      LOG IN
                    </Link>
                  </span>
                </div>
              ) : null}
              {showFailur ? (
                <div className="sign-failur">
                  {setLoginStatus.message}

                  <span>User Exist Already !!!</span>
                </div>
              ) : null}
              <div className="Signup-footer">
                <p>Already have an account? </p>
                <Link to="/login">LOG IN</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <div />
    </div>
  );
};

export default Signup;
