import React from "react";
import "./EventUpdate.css";
import { useLocation } from "react-router-dom";
import { UpdateEvent } from "../../Store/Slice/EditEventSlice.js";
import { useDispatch } from "react-redux";
import NavBar from "../Navbar/navbar";

function EventUpdate() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.state);

  const UpdateEventData = (e) => {
    e.preventDefault();
    const component = e.target.elements;
    const eventId = component[0].value;
    const eventName = component[1].value;
    const eventDescription = component[2].value;
    const eventImage = component[3].value;
    const date = component[4].value;

    component[0].value = "";
    component[1].value = "";
    component[2].value = "";
    component[3].value = "";
    component[4].value = "";
    dispatch(
      UpdateEvent({
        eventId,
        eventName,
        eventDescription,
        eventImage,
        date,
      })
    );
  };

  return (
    <>
      <div>
        <form onSubmit={UpdateEventData}>
          <div className="update-content">
            <input
              className="update-title"
              type="text"
              placeholder="Enter the Title "
            ></input>

            <input
              className="update-discription"
              type="text"
              placeholder="Enter the Discription"
            ></input>

            <input
              className="update-date"
              type="date"
              placeholder="Enter the Date"
            ></input>
            <input
              className="update-time"
              type="time"
              placeholder="Enter the Time"
            ></input>
            <input
              className="update-img"
              type="file"
              accept=".png,.svg,.jpeg,.jpg"
            ></input>
            <label className="update-img-label">
              Upload only PNG,JPEG,JPG,SVG type only
            </label>
            <button className="update-submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EventUpdate;
