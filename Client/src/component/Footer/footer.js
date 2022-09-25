import React from "react";
import Linepic from "../Login/Images/Linepic.svg";
import Logo from "../Login/Images/Academy.svg";
import Location from "../Login/Images/Locationlogo.svg";
import callerlogo from "../Login/Images/CallerLogo.svg";
import printerlogo from "../Login/Images/printerlogo.svg";
import facebook from "../Login/Images/Facebook.svg";
import twitter from "../Login/Images/Twitter.svg";
import Linkedin from "../Login/Images/LinkedIn.svg";
import youtube from "../Login/Images/Youtube.svg";
import instagram from "../Login/Images/Instagram.svg";
import google from "../Login/Images/GooglePlus.svg";
import pinster from "../Login/Images/Pinterest.svg";
import Wifilogo from "../Login/Images/wifilogo.svg";

const footer = () => {
  return (
    <div className="footer">
      <div className="Linepic">
        <img src={Linepic}></img>
      </div>

      <img className="Logo" src={Logo}></img>
      <div>
        <div className="Location-footer">
          {" "}
          <img src={Location}></img>
          <p>345 Faulconer Drive, Suite 4 • Charlottesville</p>
        </div>
        <div className="Caller-container">
          <img src={callerlogo}></img>
          <p>(123) 456-7</p>
        </div>
        <div className="printer-container">
          <img src={printerlogo}></img>
          <p>(123) 456-7</p>
        </div>
        <div className="Social">
          <p>Social Media</p>
          <div className="Social-logos">
            <img src={facebook} alt="facebook"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={Linkedin} alt="Linkedin"></img>
            <img src={youtube} alt="Youtube"></img>
            <img src={instagram} alt="Instagram"></img>
            <img src={google} alt="Google"></img>
            <img src={pinster} alt="Pinster"></img>
            <img src={Wifilogo} alt="wifilogo"></img>
          </div>
        </div>
      </div>
      <div className="Line2"></div>
      <div className="footer-link-container">
        <div className="Footer-link">
          <a href="#">ABOUT US</a>
          <a href="#"> CONTACT US </a>
          <a href="#">HELP</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#"> DISCLAIMER</a>
        </div>
        <div className="Copyright-container">
          <p>Copyright © 2018 • Lift Media Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
