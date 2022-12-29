import React from "react";

import "./Hero.css"
import picture from "./picture.jpg"


function Hero() {
    return (
        <div className="hero-container stacked">

            <div className="hero-container-left-col">
                <div className="hero-container-left-col-content">
                    <h1><span style={{color: "#1EC5F5"}}>Visionary</span> that builds products & produces music</h1>
                    <p>I'm Kevin Duque, a creative and versatile product manager based in Houston, TX. I'm most known for driving clarity and setting a vision in complex situations; oh, and producing music.</p>
                </div>
                
            </div>

            <div className="hero-container-right-col">
                <img 
                    src={picture} 
                    alt="Kevin Duque's personal brand logo" 
                />
            </div>

        </div>
    )
}

export default Hero;