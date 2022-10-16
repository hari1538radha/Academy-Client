import React, { useState, useEffect } from "react";
import "./EditProfile.css"
import file from "./img/pngtree.jpg"

function EditProfile({reqValues}) {
  // const [name, setname] = useState("")
  console.log(reqValues)
  return (
    <>
      <div className="edit-profile-container">
        <form className="edit-profile-form">
        <h1 className="edit-profile-container-heading">Edit Profile</h1>
          <input type="text" placeholder='Firstname' className="edit-profile-inputs"></input>
          <input type="text" placeholder='Lastname' className="edit-profile-inputs"></input>
          <input type="email" placeholder='email' className="edit-profile-inputs"></input>
          <input type="password" placeholder='Password' className="edit-profile-inputs"></input>
          <label className="add-new-profile-pic">
            <img src={file} alt="no img found" className="profile-file-img"></img>
            <label className="upload-pic-txt">upload profile picture</label>
            <input type="file" className="select-new-pic"></input>
          </label>
          <button className="login-btn">Save Changes</button>
        </form>
      </div>
    </>
  )
}

export default EditProfile