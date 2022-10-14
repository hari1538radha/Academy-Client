import React from "react";
import "./AddEvent.css";
import NavBar from "../Navbar/navbar";
import { useDispatch } from "react-redux";
import { PostEventData } from "../../Store/Slice/AddEventSlice";
const AddEvent = () => {
  const dispatch = useDispatch();

  const HandelEventData = (e) => {
    e.preventDefault();
    console.log(e);
    const element = e.target.elements;
    const eventName = element[0].value;
    const eventDescription = element[1].value;
    const eventDate = element[2].value;
    const eventTime = element[3].value;
    const eventImage = element[4].value;

    element[0].value = "";
    element[1].value = "";
    element[2].value = "";
    element[3].value = "";
    element[4].value = "";
    dispatch(
      PostEventData({
        eventName,
        eventDescription,
        eventDate,
        eventTime,
        eventImage,
      })
    );
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={HandelEventData}>
          <div className="form-content">
            <input
              className="input-title"
              type="text"
              required={true}
              placeholder="Enter the Title "
            ></input>
            <input
              className="input-discription"
              type="text"
              required={true}
              placeholder="Enter the Discription"
            ></input>
            <input
              className="input-date"
              type="date"
              required={true}
              placeholder="Enter the Date"
            ></input>
            <input
              className="input-time"
              type="time"
              required={true}
              placeholder="Enter the Time"
            ></input>
            <input
              className="input-img"
              type="file"
              required={true}
              accept=".png,.svg,.jpeg,.jpg"
            ></input>
            <label className="input-img-label">
              Upload only PNG,JPEG,JPG,SVG type only
            </label>
            <button className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
