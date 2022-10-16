
import React from 'react'
import "./AddQuiz.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar/navbar'
import { postQuizData } from '../../Store/Slice/uploadQuizSlice'
const AddQuiz = () => {
  const dispatch = useDispatch();
  const HandelAddEvent = (e) => {
    e.preventDefault();
    const element = e.target.elements

    const quizQuestion = element[0].value;
    const quizOption1 = element[1].value;
    const quizOption2 = element[2].value;
    const quizOption3 = element[3].value;
    const quizOption4 = element[4].value;
    const quizAnswer = element[5].value;
    element[0].value = "";
    element[1].value = "";
    element[2].value = "";
    element[3].value = "";
    element[4].value = "";
    element[5].value = ""


    console.log(quizQuestion, quizOption1, quizOption2, quizOption3, quizOption4, quizAnswer);
    dispatch(postQuizData({ quizQuestion, quizOption1, quizOption2, quizOption3, quizOption4, quizAnswer }));
  }
  const { quizData, quizLoading } = useSelector(state => state.quizUploadInfo)

  useEffect(() => {
    console.log(quizData)
  }, [quizData])


 

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
              placeholder="S/No"
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
            <input  type="text" placeholder="Option 3" className="input-box"></input>

            <input  type="text" placeholder="Option 4" className="input-box"></input>
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
  );
};

export default AddQuiz;
