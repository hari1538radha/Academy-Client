import React, { useState } from "react"
import "./css/catagory.css"
import Navbar from "../../Navbar/navbar"
import Footer from "../../Footer/footer"

const Catagory = () => {
    const options = [
        "Agriculture and Allied Disciplines",

        "Architecture, Planning and Design",

        "Arts, Humanities and Social Sciences",

        "Business Administration, Commerce, Management and Finance",

        "Education",

        "Engineering and Technology",

        "Fine Arts, Performing Arts, Visual Arts and Applied Arts",

        "Hotel Management, Hospitality, Tourism and Travel",

        "Journalism, Mass Communication and Media",

        "Law",

        "Library and Information Sciences",

        "Medical and Surgery",

        "Rehabilitation Sciences",

        "Sciences",

        "Vocational Education",
    ]
    
    const [state, setState] = useState()

    const settingState = (e) => {
        setState(e.target.value)
    }
    return (
        <>
        <Navbar/>
        <div className="catagory-page-container">
            <div className="catagory-details">
                {state ? <div className="catagory-details-card">
                    <p><strong>Catagory : </strong>{state}</p>
                </div> : <h1>select the required catagory from the right dashboard</h1>}
            </div>
            <div className="catagory-options-container">
                {options.map((item) => {
                    return <button value={item} onClick={settingState} className="catagory-options">{item}</button>
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Catagory
