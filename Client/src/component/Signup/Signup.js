import React from 'react'
import NavBar from './navbar'
import Loginlogo from "../Login/Images/Vector.svg"
import Footer from '../Login/Footer/footer'
import "./Signup.css"

const Signup = () => {

const handleSignupData = (e) =>
{ 
  e.preventDefault();
  const ele =e.target.elements;
  const firstName = ele[0].value;
  const lastName = ele[1].value;
  const Emailid = ele[2].value;
  const password = ele[3].value;


  console.log(firstName,lastName,Emailid,password);
  ele[0].value =""
  ele[1].value=""
  ele[2].value=""
  ele[3].value=""
}


  return (
    <div>
        <NavBar/>
        <><div className='image'><div className='Signup-main'>
          <form onSubmit={handleSignupData}>
          <div className='Signup-container'>
        <div className="Loginlogo"> <img src={Loginlogo} ></img></div>
        <p>Sign up</p>
        <div className='Name-input-container'><input className='fistname-input' placeholder='First name *' type="text"></input>
        <input className='LastName-input' placeholder='Last name *' type="text"></input></div>
        <input className='Email-input' placeholder='Email Address *' type="text"></input>
        <input className='password-input' type="password" placeholder='Password *'></input>
        <button className='Signup-btn'>SIGN UP</button>
        <div className='Signup-footer'>
          <p>Already have an account? </p>
          <a>LOG IN</a>
        </div>

      </div>
          </form>
     
    </div>
    </div>
      <div>
        <Footer />
      </div>
    </>
    </div>
  )
}

export default Signup