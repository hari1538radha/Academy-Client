import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import NavBar from "../Navbar/navbar";
import ProfileImg from "../../component/Login/Images/Vector.svg";
import "./UserProfile.css";
const Userprofile = () => {
  const [data, setdata] = useState();

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div>
        <div>
          <div className="left-container--profilepage">
            <div >
              <div className="user-Info">
                <div className="Loginlogo">
                  <img src={ProfileImg}></img>
                </div>
                <div className="user-data-container">
                  <h3>John Doe </h3>
                  <p>Student</p>
                </div>
              </div>
 <div className="left-container--dashboard">
 <div className="dashboard-content-container">
                <div className="left-container--dashboard--content">
                  <a href="/quiz">Quiz</a>
                </div>
                <div className="left-container--dashboard--content">
                  <a href="#">Enrolled Course</a>
                </div>
                <div className="left-container--dashboard--content">
                  <a href="#">Saved Items</a>
                </div>
                <div className="left-container--dashboard--content">
                  <a href="#">Update Profile</a>
                </div>
                <div className="left-container--dashboard--content">
                  <a href="/">Logout</a>
                </div>
              </div>
              <div className="left-container-dsahboard--contact">
                <a href="#">Contact Support</a>
              </div>
 </div>
              
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
