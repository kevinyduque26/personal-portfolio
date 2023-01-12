import React from "react";

import "./Transition.css"

import left from "./Standing 1.png"
import right from "./Standing 2.png"

function Transition() {
    return (
        <div className="transition-container">

            <div className="transition-body">

                <div className="transition-content">
                    <h2>Passions</h2>
                    <h5>From day to night mode</h5>
                    <p>Pursuing passions in my personal life has given me the opportunity to expand my skills, mind, and knowledge</p>
                </div>

                <div className="transition-kevin-images">
                    <img src={left} alt="Lorem ipsum"></img>
                    <img src={right} alt="Lorem ipsum"></img>
                </div>

            </div>
        </div>
    )
}

export default Transition;