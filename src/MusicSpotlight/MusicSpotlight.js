import React from "react";

import "./MusicSpotlight.css"
import videoDesktop from "./music-loop-720.m4v"
import videoMobile from "./music-loop-480.mov"

function MusicSpotlight({ screenWidthSize }) {
    return (

        <div className="music-spotlight-container">

            <div className="music-spotlight-body">

                <div className="music-spotlight-top">
                    
                    <div className="music-spotlight-top-content">
                        <div className="eyebrow">ALTER EGO</div>
                        <h4>My journey with music</h4>
                        <p>Music has been my main creative outlet all my life. There are many lessons from producing music that I apply to product (e.g. trial and error).</p> 
                    </div>

                    <div className="music-spotlight-top-vid">
                        <video src={videoDesktop} style={{ display: screenWidthSize < 767 && "none"}} autoPlay muted loop></video>
                        <video src={videoMobile} style={{ display: screenWidthSize > 767 && "none"}} autoPlay muted loop></video>
                    </div>
                    
                </div>
                
                <div className="music-spotlight-bottom">

                    <div className="music-spotlight-content2 music-spotlight-centered">
                        <div className="eyebrow">WHERE IT STARTED</div>
                        <h5>Where it started</h5>
                        <p>I was facinated by the rise of DJ's and music festivals back in 2011 and started to learn in my dorm room</p>  
                    </div>
                    <div className="music-spotlight-content3 music-spotlight-centered">
                        <div className="eyebrow">WHAT I'VE ACCOMPLISHED</div>
                        <h5>Opening act for Sean Kingston &amp; T-Pain</h5>
                        <p>After over 200+ gigs (at least), I was given the opportunity to open up for Sean Kingston and later, T-Pain.</p>
                    </div>
                    <div className="music-spotlight-content4 music-spotlight-centered">
                        <div className="eyebrow">WHAT'S NEXT</div>
                        <h5>What's next</h5>
                        <p>While I've gone on a four year sabbitical after my first release, I plan to release a 4 track EP by the end of 2023.</p>
                    </div>

                </div>


            </div>     

        </div>

    )
}

export default MusicSpotlight;