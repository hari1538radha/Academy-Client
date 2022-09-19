import React from 'react'
import Loginlogo from "../../Images/Vector.svg"
import "./CSS/Login.css"
import Footer from "../Footer/footer"
const Login = () => {
  return (
    <><div className='image'><div className='Login-main'>
    <div className='Login-container'>
      <div className="Loginlogo"> <img src={Loginlogo} ></img></div>
        <input className='Email-input' placeholder='Email Address *' type="text"></input>
        <input className='password-input' type="password" placeholder='Password *'></input>
        <button className='login-btn'>LOGIN</button>
        <div className='login-footer'>
        <p>Don't have an account?</p>
        <a>SIGN UP</a>
        </div>
      
    </div>
</div>
</div>
<div>
  <Footer/>
</div>
</>
    
    
  )
}

export default Login