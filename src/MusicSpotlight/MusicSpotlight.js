import React from "react";

// CSS Import
import "./MusicSpotlight.css"

// File Import
import videoDesktop from "./music-loop-720.m4v"
import videoMobile from "./music-loop-480.mov"
import videoMobilePoster from "./music-loop-poster.jpg"


function MusicSpotlight({ screenWidthSize }) {
    return (

        <div className="music-spotlight-container">

            <div className="music-spotlight-body">

                <div className="music-spotlight-top">
                    
                    <div className="music-spotlight-top-content">
                        <h4>My journey with music</h4>
                        <p>Music has been my main creative outlet all my life. There are many lessons from producing music that I apply to product (e.g., experimentation).</p> 
                    </div>

                    <div className="music-spotlight-top-vid">
                        {screenWidthSize > 767 ? (
                            <video src={videoDesktop} autoPlay muted loop></video>
                        ) : (
                            <video src={videoMobile} poster={videoMobilePoster} controls muted loop></video>
                        )}                       
                    </div>
                    
                </div>
                
                <div className="music-spotlight-bottom">

                    <div className="music-spotlight-bottom-content">
                        <h5>Where it started</h5>
                        <p>I was fascinated by the rise of DJ's back in 2011 and started to learn in my dorm room.</p>  
                    </div>
                    <div className="music-filler"></div>
                    <div className="music-spotlight-bottom-content msbc-margin-top">
                        <h5>Sean Kingston &amp; T-Pain</h5>
                        <p>After over 200+ gigs, I got the opportunity to open for Sean Kingston and later, T-Pain.</p>
                    </div>
                    <div className="music-filler"></div>
                    <div className="music-spotlight-bottom-content msbc-margin-top">
                        <h5>What's next</h5>
                        <p>Following my last release in 2018, I plan to release a 4 track EP by the end of this year.</p>
                    </div>

                </div>


            </div>     

        </div>

    )
}

export default MusicSpotlight;