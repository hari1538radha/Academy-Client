import React from 'react'
import NavBar from '../../component/Navbar/navbar'
import StartQuizlog from "../Login/Images/Start Quiz.svg"
import Quizimage from "../Login/Images/quiz-image.svg"
import "./quiz.css"
import Footer from '../Login/Footer/footer'
const quiz = () => {
    const startQuiz =() =>
    {
        console.log("hi")
    }
  return (
    <div>
        <div><NavBar/></div>
        <div className='main-container'><div className='quiz-container'>
            <img src={StartQuizlog} className='quiz-header'></img>
            <div  className='quiz-container-block'> 
            <div className='quiz-image'>
          
                </div>
            <div  className='quiz-details-container'>
                <div className='quiz-details'  > <div className='quiz-details-left'>
                <p>Date: </p> 
                <p>Time Limit: </p>
                <p>Attempts:</p>
                <p>Points:</p>
                </div>
                <div className='quiz-details-right'>
                    <p>
                    18/09/2022
                    </p>
                    <p>
                    30 Mins
                    </p>
                    <p>
                    Once
                    </p>
                    <p>
                    200 Points
                    </p>
                </div></div>
               
              <button onClick={startQuiz} className='quiz-start-btn'>Start</button>
           
            </div>
            </div>
           
        </div>
        <div  className='chapters-container'>
           <p>Chapters</p>
           <p>Machines</p>
           <p>Networks</p>
           <p> Electricals</p>
           <p>Java</p>
           <p>C++</p>
           <p>Python</p>
           <p>Javascript</p>
           <button className="chapter-seemore-btn">See More</button>
        </div>
        </div>
          <Footer/>
        </div>
  )
}

export default quiz