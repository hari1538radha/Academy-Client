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
import { getEventInfo } from "../../Store/Slice/EventSlice";
import editImg from "../Login/Images/edit.svg";
import { Link } from "react-router-dom";

const Userprofile = () => {
  const [data, setdata] = useState();
  const dispatch = useDispatch();
  

  
  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
  }, []);

  // const { topicData, eventLoading } = useSelector((state) => state.topicInfo);
  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);

  // console.log(topicData);
  
 
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
            <div className="eve-top">Events</div>
            <div className="third-full-con-pro">
              {eventsData.length > 0 &&
                eventsData.slice(0, 3).map((obj) => {
                  return (
                    <div key={obj.eve}>
                      <div className="third-sub-con">
                        <div className="img">
                          <img className="eve-img" src={img4}></img>
                        </div>
                        <div className="center-pro">
                          <div className="third-head">{obj.eventName}</div>
                          <div className="button-pro">
                            {" "}
                            <Link to="/EventUpdate" state={{ blockDetails:obj}}> 
                            <button className="edit-info"
                             >
                              <img src={editImg}></img>
                            </button>
                            </Link>
                          </div>
                        </div>
                        <p className="details">
                          <p>{obj.eventDescription}</p>{" "}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;