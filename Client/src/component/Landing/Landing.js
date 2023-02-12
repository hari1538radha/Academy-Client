import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../Navbar/navbar";
import img1 from "./Img/Frame.svg";
import img3 from "./Img/Vector.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../Footer/footer";
import "./Css/Landing.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import { getEventInfo } from "../../Store/Slice/EventSlice.js";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { getUniversityInfoByName } from "../../Store/Slice/SearchUniversity";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import ListEvent from "../Event/ListEvent/ListEvent";
// import { objectTraps } from "immer/dist/internal";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationState = useLocation().state;
  const navigateDetail = () => {
    navigate("/detail");
  };
  const navigateSearch = () => {
    navigate("/search");
  };
  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
    dispatch(userProfileData(locationState?.email));
  }, []);
  const[searchedData,setSearchedData]=useState([]);
  console.log(searchedData);
  useEffect(()=>{
    setSearchedData(SearchedUniversity.data);
  },[]);
  const handelSearch = (e) => {
    e.preventDefault();
    const ele = e.target.elements
    const searchedUniversity = ele[0].value
    console.log(searchedUniversity)
    dispatch(getUniversityInfoByName({ searchedUniversity }))
  };

  const { topicData, topicLoading } = useSelector((state) => state.topicInfo);
  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  const { userData, loading } = useSelector((state) => state.userProfileInfo);
  const { SearchedUniversity, SearchedUniversityLoading } = useSelector((state) => state.searchUniversityByNameInfo);
  return (
    <div>
      <NavBar profileInfo={userData.data} />
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
            Success is not how high you have climbed, but how <br></br>you make
            a positive difference to the world
          </p>
          <button className="know-button">
            <span className="but-text">Know More</span>
          </button>
        </div>
        <div className="right">
          <div>
            <img className="top-ryt-img" src={img1}></img>
          </div>
        </div>
      </div>

      <form onSubmit={handelSearch}>
        <div className="search">
          <input
            type="text"
            placeholder="  Search  a words you prefer"
            className="search-box"
            required={true}
          ></input>
          <div className="search-img">
            <button className="but-click">
              <img className="search-but" src={img3}></img>
            </button>
          </div>
        </div>
        <div>
      </div>
      </form>
      {/* {
        searchedData?.data?.length>0 && searchedData.data.map((obj)=>(
          <div key={obj._id}>
            <p>{obj.Name_1}clg</p>
          </div>
        ))
      } */}
      <div className="third-container">
        <div className="third-content">
          <div className="third-top">
            <h1>Top Events</h1>
          </div>
          <div className="third-full-con">
            <ListEvent eventsData={eventsData} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
