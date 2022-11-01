import React, { useState, useEffect } from "react";
import "./AddQuiz.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/navbar";
import { postQuizData } from "../../Store/Slice/uploadQuizSlice";

const AddQuiz = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false)

  const [error, setError] = useState({})

  const [buttonText, setButtonText] = useState("Add-Quiz")

  const [state, setState] = useState({
    quizQuestionNo: "",
    quizQuestion: "",
    quizOption1: "",
    quizOption2: "",
    quizOption3: "",
    quizOption4: "",
    quizAnswer: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  }

  const validate = (e) => {
    const errors={}
    if (!e.quizQuestionNo){
      errors.quizQuestionNo = "enter the serial number"
    }
    if(!e.quizQuestion){
      errors.quizQuestion = "enter the question"
    }
    if(!e.quizOption1){
      errors.quizOption1 = "enter the option"
    }
    if(!e.quizOption2){
      errors.quizOption2 = "enter the option"
    }
    // if(!e.quizOption3){
    //   errors.quizOption3 = "enter the option"
    // }
    // if(!e.quizOption4){
    //   errors.quizOption4 = "enter the option"
    // }
    if(!e.quizAnswer){
      errors.quizAnswer = "enter the correct answer"
    }
    return errors
  }

  const handelAddQuiz = (e) => {
    e.preventDefault();
    setError(validate(state))
    setStatus(true)
  };

  useEffect(() => {
    if(Object.values(error).length === 0 && status){
      setButtonText("Added-Quiz")
      dispatch(postQuizData(state))
    }
  }, [status])

  const { quizData, quizLoading } = useSelector(
    (state) => state.quizUploadInfo
  );

  useEffect(() => {
    console.log(quizData);
  }, [quizData]);

  return (
    <div className="total-page">
      <div className="form">
        <div className="form-add">
          <form onSubmit={handelAddQuiz} className="form-data">
            <div className="add-quiz-container">
              <label className="title-add-quiz">
                Enter the Quiz Questions:
              </label>
              <div className="first-box">
                <input
                  required={true}
                  type="number"
                  placeholder="S/No"
                  className="input-que-box"
                  min="1" max="100"
                  onChange={handleChange}
                ></input>
                <textarea
                  required={true}
                  type="text"
                  placeholder="Enter The Quiz Questions"
                  className="input-box-1"
                  onChange={handleChange}
                ></textarea>
              </div>
              <label className="title-add-quiz">
                If options are true or false leave last two fields empty
              </label>
              <input
                required={true}
                type="text"
                placeholder="Option 1"
                className="input-box"
                onChange={handleChange}
              ></input>
              <p>{error.quizOption1}</p>
              <input
                required={true}
                type="text"
                placeholder="Option 2"
                className="input-box"
                onChange={handleChange}
              ></input>
              <p>{error.quizOption2}</p>
              <input
                type="text"
                placeholder="Option 3"
                className="input-box"
                onChange={handleChange}
              ></input>

              <input
                type="text"
                placeholder="Option 4"
                className="input-box"
                onChange={handleChange}
              ></input>
              <label className="title-add-quiz">Correct Answer:</label>
              <input
                required={true}
                type="text"
                placeholder="Correct answer"
                className="input-box"
                onChange={handleChange}
              ></input>
              <p>{error.quizAnswer}</p>
              <button className={`add-button-${buttonText}`}>{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
