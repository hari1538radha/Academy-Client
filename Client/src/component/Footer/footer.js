import React from 'react'
import "../Footer/footer.css"
import  Linepic from "../Academy_Login_Page/Images/Linepic.svg"
import Logo from "../Academy_Login_Page/Images/Academy.svg"
import  Location from '../Academy_Login_Page/Images/Locationlogo.svg'
import  callerlogo from '../Academy_Login_Page/Images/CallerLogo.svg'
import  printerlogo from '../Academy_Login_Page/Images/printerlogo.svg'
import  facebook from '../Academy_Login_Page/Images/Facebook.svg'
import  twitter from '../Academy_Login_Page/Images/Twitter.svg'
import  Linkedin from '../Academy_Login_Page/Images/Linkedin.svg'
import  youtube from '../Academy_Login_Page/Images/Youtube.svg'
import  instagram  from '../Academy_Login_Page/Images/Instagram.svg'
import  google from '../Academy_Login_Page/Images/GooglePlus.svg'
import  pinster from '../Academy_Login_Page/Images/
import  printerlogo from '../Academy_Login_Page/Images/

const footer = () => {
  return (
    <div className='footer'>
        <img className='Linepic' src={Linepic}></img>
        <img className='Logo' src={Logo}></img>
        <div>
            <div className='Location-footer'> <img src={Location}></img>
            <p>345 Faulconer Drive, Suite 4 • Charlottesville</p></div>
            <div className='Caller-container'> 
                <img src={callerlogo}></img>
                <p>(123) 456-7</p></div>
                <div className='printer-container'> 
                <img src={printerlogo}></img>
                <p>(123) 456-7</p></div>
                <div>
                    <p> 
                        Social Media
                    </p>
                    <div>
                    
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={Linkedin}></img>
                    <img src={youtube}></img>
                    <img src={instagram}></img>
                    <img src={google}></img>
                    <img src={}></img>
                    <img src={}></img>
                    </div>
                    
                </div>
           
           
        </div>
    </div>
  )
}

export default footer