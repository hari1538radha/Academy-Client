import React, {useState} from "react";

function RightSideBar({ options }) {
  const [state, setState] = useState();

  const settingState = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="catagory-options-container">
      {options.map((item) => {
        return (
          <button
            value={item}
            onClick={settingState}
            className="catagory-options"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default RightSideBar;
