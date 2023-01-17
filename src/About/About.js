import React from "react";

// CSS Import
import "./About.css";

function About() {
    return (
        <div className="about-container" id="about">

            <div className="about-body">

                <div className="about-content-item">
                    <div className="kpi">6+</div>   
                    <p>Years of experience</p>
                </div>

                <div className="about-content-item ">
                    <div className="kpi">Senior PM</div>
                    <p>Current role @ Bynder</p>
                </div>

                <div className="about-content-item aci-padding-bottom-767">
                    <div className="kpi">Houston</div>
                    <p>Current location</p>
                </div>
                
                <div className="about-content-item aci-padding-bottom-767 aci-padding-bottom-less-767">
                    <div className="kpi">50+</div>
                    <p>Product features shipped</p>
                </div>

            </div>

        </div>

    )
};

export default About;