import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import NavBar from "../Navbar/navbar";
import profilepic from "../Login/Images/PROFILEPIC.svg";
import ProfileImg from "../../component/Login/Images/Vector.svg";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import "./UserProfile.css";
import enrolledImg from "../Login/Images/enrollImg.svg";
import editProfileImg from "../Login/Images/edit.svg";
import logoutImg from "../Login/Images/log-img.svg";
import quizImg from "../Login/Images/quizImg.svg";
import dashImg from "../Login/Images/dashboard-img.svg";
import contactImg from "../Login/Images/contact-img.svg";
import img4 from "../Landing/Img/Rectangle-14.jpg";
import profilequiz from "../Login/Images/profilequiz.svg";
import dashIconImg from "../Login/Images/dash-icon.png";
import eventImg from "../Login/Images/event-icon.png";
const Userprofile = () => {
  const [data, setdata] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopicInfo());
  }, []);

  const { topicData, eventLoading } = useSelector((state) => state.topicInfo);
  console.log(topicData);

  const AddEvents = () => {};

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div>
        <div className="profilepage-container">
          <div className="left-container--profilepage">
            <div className="main-dashboard--container">
              <div className="user-Info">
                <div className="Loginlogo-pro">
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
                    <img className="quiz-img" src={dashIconImg}></img>
                    <a href="/admin/dashboard">Dashboard</a>
                  </div>

                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={quizImg}></img>
                    <a href="/quiz">Quiz</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={enrolledImg}></img>
                    <a href="#">Enrolled Course</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={quizImg}></img>
                    <a href="#">Saved Items</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={editProfileImg}></img>
                    <a href="#">Update Profile</a>
                  </div>
                  <div className="left-container--dashboard--content">
                  <img className="quiz-img" src={eventImg}></img>
                    <a href="/profile/AddEvent">Add Event</a>
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
          <div>
            <div className="profilepic-container">
              <img src={profilepic}></img>
              <h2>John Doe</h2>
              <p>Student</p>
            </div>
            <div className="eve-top">
              Events
            </div>
            <div>
              <div className="second-contant">
                <div className="sub-container-pro">
                  {/* <h1 className="topic"> Topics</h1> */}

                  <div className="sub-top">
                    <div className="sub-top-1">
                      <h2 className="topic1">Education</h2>
                      <p className="sub-contain-pro">
                        Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade
                        döloning. Syll bebel till kvasisens. Tres kos masade
                        robotdräkt. Heteropp. Vönäna teraskap. Vande legga
                        kadinera makrohet reatologi. Por hybridkrig och hypobun.
                        Evöligt färade, därför att påns tilig.
                      </p>

                      <div className="Read-More">
                        <a href="/detail">
                          <img className="book-logo"></img>
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="sub-top-1">
                      <h2 className="topic1">Quiz</h2>
                      <p className="sub-contain-pro">
                        Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade
                        döloning. Syll bebel till kvasisens. Tres kos masade
                        robotdräkt. Heteropp. Vönäna teraskap. Vande legga
                        kadinera makrohet reatologi. Por hybridkrig och hypobun.
                        Evöligt färade, därför att påns tilig.
                      </p>

                      <div className="Read-More">
                        <a href="/detail">
                          <img className="book-logo"></img>
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="sub-top-1">
                      <h2 className="topic1">Game</h2>
                      <p className="sub-contain-pro">
                        Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade
                        döloning. Syll bebel till kvasisens. Tres kos masade
                        robotdräkt. Heteropp. Vönäna teraskap. Vande legga
                        kadinera makrohet reatologi. Por hybridkrig och hypobun.
                        Evöligt färade, därför att påns tilig.
                      </p>

                      <div className="Read-More">
                        <a href="/detail">
                          <img className="book-logo"></img>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
