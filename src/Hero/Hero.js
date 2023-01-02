import React from "react";

import "./Hero.css"
// import picture from "./picture.jpg"
import picture from "./Header-4 5.png"

function Hero() {
    return (
        <div className="hero-container stacked">

            <div className="hero-container-left-col">
                <div className="hero-container-left-col-content">
                    <div className="eyebrow">KEVIN DUQUE</div>
                    <h1>I'm a <span style={{color: "#1EC5F5"}}>visionary</span> that builds products &amp; creates content.</h1>
                    <p>Currently, I'm a senior product manager with <a className="text-link" target="_blank" href="https://www.bynder.com/en/" rel="noopener noreferrer">Bynder</a> based in Houston, TX. I'm most known for driving clarity and setting a vision in complex situations; oh, and making music.</p>
                    <a className="grid-button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
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