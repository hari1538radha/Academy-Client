import React from 'react';

import "./Internship.css";

import Navbar from '../../Navbar/navbar';

import Footer from '../../Footer/footer';

const Internship = () => {
  return (
    <>
    <Navbar/>
        <div className="internship_Container">
            <div className="internship-Button_Container">
                <button>Apply/post Internship</button>
                <button>Apply/post Job</button>
                <button>Register</button>
                <button>Login</button>
            </div>
            <div className="internship_About-Container">
                <p>LearnPlusPlus Internship Notice Board allows 
                    students from all academic disciplines to 
                    register and submit their requests 
                    to industry. This platform connects 
                    industry with students looking for 
                    internships in a particular field of 
                    study and helps them with their track-based 
                    projects.</p>
            </div>
            <div className="internship-All-button_Container">
                <div className="internship-Mid-Button_Container">
                    <button>Internship/Jobs</button>
                    <button>Domain</button>
                    <button>Track</button>
                    <button>Location</button>
                    <button>Search</button>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Internship