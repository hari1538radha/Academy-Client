import React from 'react'
import Footer from '../Login/Footer/footer'
import "./mainquiz.css"
import Navbar from '../Navbar/navbar'

const MainQuiz = () => {
  return (
    <div>
        <nav><Navbar/></nav>
        <div className='main-quiz--conatiner'>
            
            <div className='quiz-questions'>
 <h1 className='Question-number'>Question  1</h1>
 <p className='question'>Lörem ipsum sasor någon krosk sosade far? </p>
 <div className='option--container'>
 <div className='question-option--1'><input type="radio"></input>
 <p>Option 1</p>
 </div>
 <div className='question-option--2'><input type="radio"></input>
 <p>Option 2</p>
 </div>
 <div className='question-option--3'><input type="radio"></input>
 <p>Option 3</p>
 </div>
 <div className='question-option--4'><input type="radio"></input>
 <p>Option 4</p>
 
 </div>
 </div>
 
</div>

<div>
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
</div></div>
        
        <footer><Footer/></footer>

    </div>
  )
}

export default MainQuiz