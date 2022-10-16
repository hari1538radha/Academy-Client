import React from "react";
import "./AddQuiz.css";
import Navbar from "../Navbar/navbar";
const AddQuiz = () => {
  const HandelAddEvent = (e) => {
    e.preventDefault();
  };

  return (
    <div className="total-page">
      {/* <nav>
        <Navbar />
      </nav> */}
      <div className="form">
      <div className="form-add">
       
          <form onSubmit={HandelAddEvent} className="form-data">
          <div className="add-quiz-container">
            <label  className="title-add-quiz">Enter the Quiz Questions:</label>
            <div className="first-box">
            <input
              required={true}
              type="number"
              placeholder="No"
              className="input-que-box"
            ></input>
            <input
              required={true}
              type="text"
              placeholder="Enter The Quiz Questions"
              className="input-box-1"
            ></input>
            </div>
            <label className="title-add-quiz">Enter the options (if true or false enter first two options alone):</label>
            <input required={true} type="text" placeholder="Option 1"  className="input-box"></input>
            <input required={true} type="text" placeholder="Option 2" className="input-box"></input>
            <input required={true} type="text" placeholder="Option 3" className="input-box"></input>

            <input required={true} type="text" placeholder="Option 4" className="input-box"></input>
            <label className="title-add-quiz">Correct Answer:</label>
            <input
              required={true}
              type="text"
              placeholder="Correct answer"
              className="input-box"
            ></input>
            <button className="add-button">Add Quiz</button>
            </div>
          </form>
      
      </div>
      </div>
    </div>
  );
};

export default AddQuiz;
