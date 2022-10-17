import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./EditProfile.css"
import file from "./img/pngtree.jpg"
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

function EditEvents({datas}) {
  const [name, setname] = useState("")
  // const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  // console.log(datas)
  return (
    <>
      {datas && <div className="edit-profile-container">
        <form className="edit-profile-form">
        <h1 className="edit-profile-container-heading">Edit Event</h1>
          
          <input type="text" value={datas.eventName} className="edit-profile-inputs"></input>
          
          <input type="text" value={datas.eventDescription} className="edit-profile-inputs"></input>
          
          <input className="edit-profile-inputs" type="date" value={datas.eventDate}></input>
            
          <input className="edit-profile-inputs" type="time" value={datas.eventTime}></input>
          
          <label className="add-new-profile-pic">
            <img src={file} alt="no img found" className="profile-file-img"></img>
            {name && <label className="upload-pic-txt">
                Upload PNG,JPEG,JPG,SVG only
            </label>}
            <input type="file" className="select-new-pic"></input>
          </label>

          <button className="login-btn">Save Changes</button>
        </form>
      </div>}
    </>
  )
}

export default EditEvents