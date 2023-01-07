import React from "react";

// CSS Import
import "./Hero.css"

// File Import
import desktopPicture from "./Header-16.9.png";
import mobilePicture from "./Bio.png";

function Hero({ screenWidthSize }) {

    return (
        <div className="hero-container">

            <div className="hero-container-body">

                <div className="hero-container-content">
                    <div className="eyebrow">PRODUCT MANAGER</div>
                    <h1>I'm a <span style={{ color: "#747474" }} >visionary</span> that builds products &amp; creates content</h1>
                    <p className="hero-caption">My name is Kevin Duque and I'm a product manager best known for driving clarity and setting a vision and direction in complex situations; oh, and making music.</p>
                    <a className="grid-button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
                </div>

                <div className="hero-container-media">
                    {screenWidthSize < 950 ? (
                        <img 
                            src={mobilePicture} 
                            alt="Kevin Duque's personal brand logo" 
                        />
                    ) : (
                        <img 
                            src={desktopPicture} 
                            alt="Kevin Duque's personal brand logo" 
                        />
                    )}
                </div>     

                <div className="hero-overlay"></div>

            </div>

        </div>
    )
}

export default Hero;

