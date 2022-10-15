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
    <div>
      <nav><Navbar /></nav>
      <form onSubmit={HandelAddEvent}>
        <div className='add-quiz-container'>
          <label>Enter the Quiz Questions</label>
          <input required={true} type="text" placeholder='enter the quiz questions'></input>
          <label>Enter the options</label>
          <input required={true} type="text" placeholder='Option 1'></input>
          <input required={true} type="text" placeholder='Option 2'></input>
          <input type="text" placeholder='Option 3'></input>

          <input type="text" placeholder='Option 4'></input>
          <label>Correct Answer</label>
          <input required={true} type="text" placeholder='Correct answer'></input>
          <button>Add Quiz</button>
        </div>
      </form>

    </div>
  )
}

export default AddQuiz