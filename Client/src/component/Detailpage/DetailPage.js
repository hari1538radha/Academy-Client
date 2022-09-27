import React from "react";
import courseimage from "../Landing/Img/Rectangle-15.png";
import "./detailPage.css";
import Navbar from "../Navbar/navbar.js";
// import { course } from '../../Store/Slice/DetailpageSlice.js';
// import {useEffect} from "react"
// import { useDispatch,useSelector } from 'react-redux';
function DetailPage() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(course());
  // }, []);

  // const {courseDetail,loading}=useSelector((state)=>state.course.map(data=>{
  //   if(data.title=="value()"){
  //     return data;
  //   }
  // }))
  return (

    <div>
      <div className="main-container" >
      <Navbar/>
      </div>
      <div className="header-container">
        <h1 className="title">Java</h1>
        <p className="content-container">
          Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove
          Holm niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson.
          Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsumoch al.lorem ipsum dipse ulti lorem iupsum
        </p>
        <img className="detailimage" src={courseimage} />
        <p className="subcontent-container">
          Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove
          Holm niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson.
          Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsum Sos
          pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm
          niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson.
          Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsum Sos
          pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm

          <a className="see-more">See more</a>
        </p>
        </div>
        
        <div className="course-container">
          <p className="course-title"><a href="">Chapters</a></p>
          <p className="course-title"><a href="">Machines</a></p>
          <p className="course-title"><a href="">Electrical</a></p>
          <p className="course-title"><a href="">Java</a></p>
          <p className="course-title"><a href="">C++</a></p>
          <p className="course-title"><a href="">Python</a></p>
          <p className="course-title"><a  href="">Javascript</a></p>
          <p><a className="course-seemore-btn " href="">SeeMore</a>
          </p>
        </div>
        </div> 

  );
}

export default DetailPage;
