import React, { useState } from "react";
import nextlogo from "./TopUniversity/Admission/Img/next-but.png";
import prevlogo from "./TopUniversity/Admission/Img/prev-but.png";

function RightSideBar({ options }) {
  const [state, setState] = useState();

  const settingState = (e) => {
    setState(e.target.value);
  };
  const myFunction = () => {
    var element = document.getElementById("category-options");
    console.log(element)
    element.classList.toggle("category-options-tile2");
 }
  return (
    <div className="category-options-container">
      <img  className="previous-arrow" src={prevlogo}>
      </img>
      
      {options.map((item) => {
        return (
          <div >
               <button
            value={item}
            id="category-options"
            onClick={settingState}
            className="category-options-tile"
          >
            {item}
          </button>
            </div>
       
        );
      })}
      <button className="next-arrow" onClick={myFunction} >hi</button>
    </div>
  );
}

export default RightSideBar;