 import React from "react";

// CSS Import
import "./Highlights.css"

import planet from "./test-image.webp"
import cup from "./cup.jpeg"
import bynder from "./bynder-logo.webp"
import baker from "./baker-logo.png"

function Highlights() {
    return (
        <div className="highlights-container">
            <div className="highlights-body">

                <div className="highlights-card-top-bottom">
                    {/* <div className="highlights-card-overlay1"></div> */}
                    <div className="card-image">
                        <img src={cup} alt="test"></img>
                    </div>
                    <div className="card-content">
                        <div className="eyebrow">FEATURE RELEASE</div>
                        <h3>Increased image upload speed by 20% for FIFA World Cup Qatar 2022 </h3>
                        <p>Implemented improvement to Bynder's upload API specific for FIFA to better handle images being uploaded directly from the field</p>
                    </div>
                </div>

                <div className="highlights-card-middle">
                    {/* <div className="highlights-card-overlay2"></div> */}
                    <div className="card-image">
                        <img src={bynder} alt="test"></img>
                    </div>
                    <div className="card-content">
                        <div className="eyebrow">M&A</div>
                        <h3>Selected to represent Bynder product team in majority investment transaction by THL</h3>
                        <p>Presented roadmap for specific migration and onboarding tooling related to platform consolidation project between Webdam and Bynder</p>
                    </div>
                </div>
                
                <div className="highlights-card-top-bottom">
                    {/* <div className="highlights-card-overlay3"></div> */}
                    <div className="card-image">
                        <img src={baker} alt="test"></img>
                    </div>
                    <div className="card-content">
                        <div className="eyebrow">PRODUCT LAUNCH</div>
                        <h3>Implemented a new Drupal CMS for the launch of the Baker Hughes rebrand during GE divestiture</h3>
                        <p>Built a new Drupal CMS from the ground up for the new Baker Hughes corporate website that serves customer, suppliers, and marketers for lead generation</p>
                    </div>
                </div>



            </div>


        </div>
    )
};

export default Highlights;