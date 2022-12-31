import React from "react";

import "./MusicSpotlight.css"
import image from "./image.JPG"

function MusicSpotlight() {
    return (
        <div className="music-video-wrapper">

            {/* <video src={video} autoPlay muted loop></video> */}
            <img src={image} alt="Kevin Duque on stage DJ'ing to a crowd as the opening act for Sean Kingston"></img>

            <div className="music-layout">
                <div className="music-content1 music-centered">
                    <div className="eyebrow">ALTER EGO</div>
                    <h2>My journey with music</h2>
                    <p>Music has been my main creative outlet all my life. There are many lessons from producing music that I apply to product (e.g. trial and error).</p> 
                </div>
                <div className="music-content2 music-centered">
                    <div className="eyebrow">WHERE IT STARTED</div>
                    <h3>In my college dorm room</h3>
                    <p>After experiencing a back injury and ending my college lacrosse career short, I was facinated by the rise of DJ's and music festivals. I bought a begginer controller and started mixing myself.</p>  
                </div>
                <div className="music-content3 music-centered">
                    <div className="eyebrow">WHAT I'VE ACCOMPLISHED</div>
                    <h3>Opening act for Sean Kingston &amp; T-Pain</h3>
                    <p>Once I got good, I started playing at local bars and clubs in the Boston area. After over 200 gigs (at least), I was given the opportunity to open up for Sean Kingston and later, T-Pain.</p>
                </div>
                <div className="music-content4 music-centered">
                    <div className="eyebrow">WHAT'S NEXT</div>
                    <h3>A four track bass house EP</h3>
                    <p>I always knew my next chapter was going to be producing original music and after my first release four years ago, my sabbitical is done and I plan to release a 4 track EP by the end of 2023.</p>
                </div>
            </div>

        </div>
    )
}

export default MusicSpotlight;