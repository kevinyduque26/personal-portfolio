import React from "react";

// CSS Import
import "./Transition.css"

// File Import
import left from "./standing-left.webp"
import right from "./standing-right.webp"

function Transition() {
    return (
        <div className="transition-container" id="passions">

            <div className="transition-body">

                <div className="transition-content">
                    <h2>Passions</h2>
                    <h5>From the office to the studio</h5>
                    <p>Pursuing hobbies in my personal life has given me the opportunity to expand my skills, mind, and knowledge</p>
                </div>

                <div className="transition-kevin-images">
                    <img src={left} alt="Kevin Duque posed looking to the left"></img>
                    <img src={right} alt="Kevin Duque posed looking to the left"></img>
                </div>

            </div>
        </div>
    )
}

export default Transition;