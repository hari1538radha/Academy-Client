import React from 'react'
import "./AddQuiz.css"
import Navbar from '../Navbar/navbar'
const AddQuiz = () => {
const HandelAddEvent =(e)=>
    {
       e.preventDefault();
     
    }

  return (
    <div>
        <nav><Navbar/></nav>
<form onSubmit={HandelAddEvent}>
<div className='add-quiz-container'>
            <label>Enter the Quiz Questions</label>
<input required={true} type="text" placeholder='enter the quiz questions'></input>
<label>Enter the options</label>
<input required={true} type="text" placeholder='Option 1'></input>
<input required={true} type="text" placeholder='Option 2'></input>
<input required={true} type="text" placeholder='Option 3'></input>

<input required={true} type="text" placeholder='Option 4'></input>
<label>Correct Answer</label>
<input required={true} type="text" placeholder='Correct answer'></input>
<button>Add Quiz</button>           
        </div>
</form>
        
    </div>
  )
}

export default AddQuiz