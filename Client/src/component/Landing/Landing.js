import React from "react";
import NavBar from "./navBar";
import img1 from "./Img/Frame.svg";
import img2 from "./Img/button.svg";
import img3 from "./Img/Vector.svg";
import img4 from "./Img/Rectangle 14.jpg";
import Footer from "../../component/Login/Footer/footer.js";
import "./Css/Landing.css";

function landing() {
  return (
    <div>
      <NavBar />
      <>
        <div className="first-container">
          <div className="left">
            <div className="fst-con-head">
              <h1>
                Be led by the <span className="dreams-color">dreams</span>{" "}
              </h1>

              <h1>
                in your <span className="heart-color">heart</span>
              </h1>
            </div>

            <p className="first-con">
              Success is not how high you have climbed, but how <br></br>you
              make a positive difference to the world
            </p>
            <button className="know button">Know More</button>
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
            <div className="sub-top">
              <div className="sub-top-1">
                <h2 className="topic1">Education</h2>
                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
                <a href="">
                  <span class="material-symbols-outlined">menu_book</span>Read
                  More
                </a>
              </div>
              <div className="sub-top-1">
                <h2 className="topic1">Education</h2>
                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
                <a href="">
                  <span class="material-symbols-outlined">menu_book</span>Read
                  More
                </a>
              </div>{" "}
              <div className="sub-top-1">
                <h2 className="topic1">Education</h2>
                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
                <a href="">
                  <span class="material-symbols-outlined">menu_book</span>Read
                  More
                </a>
              </div>{" "}
              <div className="sub-top-1">
                <h2 className="topic1">Education</h2>
                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
                <a href="">
                  <span class="material-symbols-outlined">menu_book</span>Read
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="third-contant">
            <div className="third-top">
              <h1>Top Events</h1>
            </div>
            <div className="third-full-con">
              <div className="third-sub-con">
                <div className="third-sub-con">
                  <img src={img4}></img>
                </div>
                <div className="third-sub-top">
                  <h2>Education</h2>
                </div>

                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
              </div>
              <div className="third-sub-con">
                <img src={img4}></img>

                <div className="third-sub-top">
                  <h2>Education</h2>
                </div>

                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
              </div>
              <div className="third-sub-con">
                <img src={img4}></img>

                <div className="third-sub-top">
                  <h2>Education</h2>
                </div>

                <p className="sub-contain">
                  {" "}
                  Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall.
                  Gåsade döloning. Syll bebel <br></br>till kvasisens. Tres kos
                  masade <br></br>robotdräkt. Heteropp. Vönäna teraskap.
                  <br></br> Vande legga kadinera makrohet <br></br>reatologi.
                  Por hybridkrig och hypobun.<br></br> Evöligt färade, därför
                  att påns tilig.{" "}
                </p>
              </div>
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

export default landing;
