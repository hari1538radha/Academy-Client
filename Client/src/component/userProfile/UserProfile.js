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
import AddEvent from "../AddEvent/AddEvent";

const Userprofile = () => {
  const [data, setdata] = useState();
  const [content, setcontent] = useState("user-profile")
  const dispatch = useDispatch();
  console.log(content)
  useEffect(() => {
    dispatch(getTopicInfo());
  }, []);

  const { topicData, eventLoading } = useSelector((state) => state.topicInfo);
  console.log(topicData);

  const AddEvents = (e) => {
    e.preventDefault()
    setcontent(e.target.value)
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="profilepage-container">
          <div className="left-container--profilepage">
            <div className="main-dashboard--container">
              <div className="user-Info">
                <div className="Loginlogo-pro">
                  <img src={ProfileImg} alt="no img found"></img>
                </div>
                <div className="user-data-container">
                  <h3>John Doe </h3>
                  <p>Student</p>
                </div>
              </div>
              <div className="left-container--dashboard">
                <div className="dashboard-content-container">
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={dashIconImg} alt="no img found"></img>
                    <a href="/admin/dashboard">Dashboard</a>
                  </div>

                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={quizImg} alt="no img found"></img>
                    <a href="/quiz">Quiz</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={enrolledImg} alt="no img found"></img>
                    <a href="/#">Enrolled Course</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={quizImg} alt="no img found"></img>
                    <a href="/#">Saved Items</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={editProfileImg} alt="no img found"></img>
                    <a onClick={() => setcontent("user-profile")}>Update Profile</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img className="quiz-img" src={eventImg} alt="no img found"></img>
                    <a onClick={() => setcontent("add-event")}>Add Event</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {content === "user-profile" && <div>
            <div className="profilepic-container">
              <label className="img-label">
                <img src={profilepic} className="img-indicator" alt="no img found">
                </img>
                <input
                type="file"
                name="upload"
                id="upload-image"
                className="userprofile-upload"/>
              </label>
              <h2>John Doe</h2>
              <p>Student</p>
            </div>
            <div className="eve-top">
              <h1 className="eve-top-header">Events</h1>
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
          </div>}
          {content === "add-event" && <AddEvent/>}
        </div>
      </div>
    </>
  );
};

export default Userprofile;
