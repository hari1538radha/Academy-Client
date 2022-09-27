import React from "react";
import { useEffect } from "react";
import NavBar from "./navBar";
import img1 from "./Img/Frame.svg";
// import img2 from "./Img/button.svg";
import img3 from "./Img/Vector.svg";
import img4 from "./Img/Rectangle 14.jpg";
// import img5 from "./Img/Quiz.jpg"
import Footer from "../Footer/footer";
import "./Css/Landing.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import { getEventInfo } from "../../Store/Slice/EventSlice.js";

function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
  }, []);

  const { topicData, topicLoading } = useSelector((state) => state.topicInfo);
  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  const {loginData,loading} = useSelector((state) => state.loginInfo);
    console.log(loginData)


  return (
    <div>
      <NavBar />
      <>
        <div className="first-container">
          <div className="left">
            <div className="fst-con-head">
              <h1>
                Be led by the <span className="dreams-color">dreams</span> in
              </h1>

              <h1>
                your <span className="heart-color">heart</span>
              </h1>
            </div>

            <p className="first-con">
              Success is not how high you have climbed, but how <br></br>you
              make a positive difference to the world
            </p>
            <button className="know button">
              <span className="but-text">Know More</span>
            </button>
          </div>
          <div className="right">
            <img src={img1}></img>
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="  Search  a words you prefer"
            className="search-box"
            required={true}
          ></input>
          <div className="search-img">
            <img src={img3}></img>
          </div>
        </div>
        <div className="second-contant">
          <div className="sub-con">
            <h1 className="topic"> Topics</h1>
            {/* <button className="next-but"><span className="material-symbols-outlined">navigate_next</span></button> */}
            <div className="sub-top">
              {topicData.length > 0 &&
                topicData.map((obj) => {
                  return (
                    <div className="sub-top-1" key={obj.id}>
                      <h2 className="topic1">{obj.topicTitle}</h2>
                      <p className="sub-contain">{obj.topicDescription}</p>
                      <a className="readmore" href="">
                        <span className="material-symbols-outlined">
                          menu_book
                        </span>
                        Read More
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="third-content">
            <div className="third-top">
              <h1>Top Events</h1>
            </div>
            <div className="third-full-con">
              {eventsData.length > 0 &&
                eventsData.map((obj) => {
                  return (
                    <div key={obj.eve}>
                      <div className="third-sub-con">
                        <div className="img">
                          <img src={img4}></img>
                        </div>
                        <div className="third-head">{obj.eventName}</div>
                        <div className="third-con">
                          <p className="details"> {obj.eventDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    </div>
  );
}

export default Landing;
