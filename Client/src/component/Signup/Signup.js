import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postSignupData } from "../../Store/Slice/SignupSlice";
import Footer from "../Footer/footer";
import Loginlogo from "../Login/Images/Vector.svg";
import NavBar from "../Navbar/navbar";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData, loading } = useSelector((state) => state.signupInfo);
  const [loginStatus, setLoginStatus] = useState({ status: 0, message: "" });

  useEffect(() => {
    if (signupData.response === "success") {
      setLoginStatus({
        status: 1,
        message: "success",
      });
      // navigate('/landing');
    } else if (signupData.response === "failure") {
      setLoginStatus({
        status: 1,
        message: "failure",
      });
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
    <div>
      <NavBar />
      <>
        <div className="image">
          <div className="Signup-main">
            <form onSubmit={handleSignupData}>
              <div className="Signup-container">
                <div className="Loginlogo">
                  {" "}
                  <img src={Loginlogo}></img>
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
                <div className="Signup-footer">
                  <p>Already have an account? </p>
                  <Link to="/landing">LOG IN</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
      <div />
    </div>
  );
};

export default Signup;
