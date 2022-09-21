import React from "react";
import NavBar from "./navBar";
import img1 from "./Img/Frame.svg";
// import img2 from "./Img/button.svg";
// import img3 from "./Img/Vector.svg";
import img4 from "./Img/Rectangle 14.jpg";
import Footer from "./Footer/footer.js"

function landing() {
  return (
    <div>
      <NavBar />
      <>
        <div className="first-container">
          <div className="left">
            <p>Be led by the dreams in your heart</p>
            <p>
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
        
        </div>
        <div className="second-container">
          <h1>Topics</h1>
          <div className="second-container-sub">
            <div>
             
              <a href="">know more</a>
            </div>
            <div>
           
              <a href="">know more</a>
            </div>
            <div>
            
              <a href="">know more</a>
            </div>
            <div>
           
              <a href="">know more</a>
            </div>
          </div>
        </div>
        <div className="third-container">
            <h1>Top Events</h1>
            <div>
                <img src={img4}></img>
                <h2>Education</h2>
                 <div>
                 Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall. Gåsade
                döloning. Syll bebel <br></br>till kvasisens. Tres kos masade{" "}
                <br></br>robotdräkt. Heteropp. Vönäna teraskap.<br></br> Vande
                legga kadinera makrohet <br></br>reatologi. Por hybridkrig och
                hypobun.<br></br> Evöligt färade, därför att påns tilig.{" "}
                 </div>

            </div>
            <div>
                <img src={img4}></img>
                <h2>Education</h2>
                 <div>
                 Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall. Gåsade
                döloning. Syll bebel <br></br>till kvasisens. Tres kos masade{" "}
                <br></br>robotdräkt. Heteropp. Vönäna teraskap.<br></br> Vande
                legga kadinera makrohet <br></br>reatologi. Por hybridkrig och
                hypobun.<br></br> Evöligt färade, därför att påns tilig.{" "}
                 </div>

            </div>
            <div>
                <img src={img4}></img>
                <h2>Education</h2>
                 <div>
                 Lörem ipsum kvasitropi svemester.<br></br> Anaitet lall. Gåsade
                döloning. Syll bebel <br></br>till kvasisens. Tres kos masade{" "}
                <br></br>robotdräkt. Heteropp. Vönäna teraskap.<br></br> Vande
                legga kadinera makrohet <br></br>reatologi. Por hybridkrig och
                hypobun.<br></br> Evöligt färade, därför att påns tilig.{" "}
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
