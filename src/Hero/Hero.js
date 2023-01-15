import React from "react";

// CSS Import
import "./Hero.css"

// File Import
import desktopPicture from "./desktop.webp";
import mobilePicture from "./mobile.webp";

function Hero({ screenWidthSize }) {

    return (
        <div className="hero-container">

            <div className="hero-container-body">

                <div className="hero-container-content">
                    <div className="eyebrow">PRODUCT MANAGER</div>
                    <h1>I'm a <span style={{ color: "#747474" }} >visionary</span> that builds products &amp; creates content</h1>
                    <p className="hero-caption">My name is Kevin Duque. I'm a product manager best known for driving clarity and setting a vision and direction in complex situations; oh, and making music.</p>
                    <a className="hero-button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
                </div>

                <div className="hero-container-media">
                    {screenWidthSize < 800 ? (
                        <img 
                            src={mobilePicture} 
                            alt="Kevin Duque's personal brand logo" 
                            className="hero-image-mobile"
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

