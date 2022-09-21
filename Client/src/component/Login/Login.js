import React from 'react'
import Loginlogo from "../Login/Images/Vector.svg"
import "./CSS/Login.css"
import Footer from "../Login/Footer/footer.js"
import {useDispatch,useSelector} from "react-redux"
const Login = () => {



const Handelsubmitdata = (e) =>
{
e.preventDefault();
   const element = e.target.elements
   const Email =element[0].value;
   const password = element[1].value;


}




  return (
    <><div className='image'><div className='Login-main'>
      <form onSubmit={Handelsubmitdata}>
      <div className='Login-container'>
        <div className="Loginlogo"> <img src={Loginlogo} ></img></div>
        <input className='Email-input' placeholder='Email Address *' type="text"></input>
        <input className='password-input' type="password" placeholder='Password *'></input>
        <button className='login-btn'>LOGIN</button>
        <div className='login-footer'>
          <p>Don't have an account?</p>
          <a href='/Signup'>SIGN UP</a>
        </div>

      </div>
      </form>
     
    </div>
    </div>
      <div>
        <Footer />
      </div>
    </>


  )
}

export default Login