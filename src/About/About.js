import React from "react";

// CSS Import
import "./About.css";

function About() {
    return (
        <div className="about-container">

            <div className="about-body">

                <div className="about-content-item">
                    <div className="kpi">6+</div>   
                    <p>Years of expereince</p>
                </div>

                <div className="about-content-item aci-mobile-padding-top">
                    <div className="kpi">Senior PM</div>
                    <p>Current role @ Bynder</p>
                </div>

                <div className="about-content-item aci-mobile-padding-top aci-tablet-padding-top">
                    <div className="kpi">Houston</div>
                    <p>Current location</p>
                </div>
                
                <div className="about-content-item aci-mobile-padding-top aci-tablet-padding-top">
                    <div className="kpi">100+</div>
                    <p>Product features shipped</p>
                </div>

            </div>

        </div>

    )
};

export default About;