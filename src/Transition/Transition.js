import React from "react";

import "./Transition.css"

import left from "./Standing 1.png"
import right from "./Standing 2.png"

function Transition() {
    return (
        <div className="transition-container">
            <div className="transition-body">

                <div className="transition-content transition-centered">
                    <div className="eyebrow">PASSIONS</div>
                    <h2>From day to night mode</h2>
                    <p>Pursuing passions in my personal life has given me the opportunity to expand my skills, mind, and knowledge</p>
                </div>

                {/* Consider containing both images in a div for the width */}

                <div className="transition-kevin-images">
                    <img src={left} alt="Lorem ipsum" className="image-left"></img>
                    <img src={right} alt="Lorem ipsum" className="image-right"></img>
                </div>

            </div>
        </div>
    )
}

export default Transition;