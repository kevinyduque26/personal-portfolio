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
                    <h2>My transition from day to night mode</h2>
                    <p>Pursuing passions outside of work has given me opportunity to expand my skills, mind, and knowledge.</p>
                </div>

                {/* Consider containing both images in a div for the width */}

                <img src={left} alt="Lorem ipsum" className="image-left"></img>

                <img src={right} alt="Lorem ipsum" className="image-right"></img>

            </div>

        </div>
    )
}

export default Transition;