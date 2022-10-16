import React, { useState } from "react"
import "./css/catagory.css"
import Navbar from "../../Navbar/navbar"
import Footer from "../../Footer/footer"

const Catagory = () => {
    const options = ["option1","option2","option3","option4","option5","option6","option7","option8","option9"]
    
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
