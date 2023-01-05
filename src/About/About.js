import React from "react";

// CSS Import
import "./About.css";

function About() {
    return (
        <div className="about-container">

            <div className="about-body">

                <div className="about-content-row">
                    <div className="about-content-row-item left">
                        <div className="kpi">6+</div>   
                        <p>Years of expereince</p>
                    </div>
                    <div className="about-content-row-item right">
                        <div className="kpi">Senior PM</div>
                        <p>Current role @ Bynder</p>
                    </div>
                </div>

                <div className="about-content-row">
                    <div className="about-content-row-item left">
                        <div className="kpi">Houston</div>
                        <p>Current location</p>
                    </div>
                    <div className="about-content-row-item right">
                        <div className="kpi">100+</div>
                        <p>Product features shipped</p>
                    </div>
                </div>

            </div>

        </div>

    )
};

export default About;