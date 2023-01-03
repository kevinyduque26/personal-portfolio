import React from "react";

// CSS Import
import "./Hero.css"
// import picture from "./picture.jpg"
import picture from "./Header-4 5.png";
import mobilePicture from "./Bio.png";

// Link format 
// <a className="text-link" target="_blank" href="https://www.bynder.com/en/" rel="noopener noreferrer">Bynder</a>

function Hero({ screenWidthSize }) {

    return (
        <div className="hero-container stacked">

            <div className="hero-container-left-col">
                <div className="hero-container-left-col-content">
                    <div className="eyebrow">PRODUCT MANAGER</div>
                    <h1>I'm a visionary that builds products &amp; creates content.</h1>
                    <p>I'm Kevin Duque and I'm a product manager best known for driving clarity and setting a vision and direction in complex situations; oh, and making music.</p>
                    <a className="grid-button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
                </div>                
            </div>

            <div className="hero-container-right-col">
                {screenWidthSize < 767 ? (
                    <img 
                        src={mobilePicture} 
                        alt="Kevin Duque's personal brand logo" 
                    />
                ) : (
                    <img 
                        src={picture} 
                        alt="Kevin Duque's personal brand logo" 
                    />
                )}
                {/* <img 
                    src={picture} 
                    alt="Kevin Duque's personal brand logo" 
                /> */}
            </div>

        </div>
    )
}

export default Hero;

