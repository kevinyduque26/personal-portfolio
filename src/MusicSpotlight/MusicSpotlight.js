import React from "react";

import "./MusicSpotlight.css"
import video from "./video.MOV"

function MusicSpotlight() {
    return (

        <div className="music-spotlight-container">

            <div className="music-spotlight-body">

                <div className="music-spotlight-content">
                    <div className="music-spotlight-content1 music-spotlight-centered">
                        <div className="eyebrow">ALTER EGO</div>
                        <h2>My journey with music</h2>
                        <p>Music has been my main creative outlet all my life. There are many lessons from producing music that I apply to product (e.g. trial and error).</p> 
                    </div>
                    <div className="music-spotlight-content2 music-spotlight-centered">
                        <div className="eyebrow">WHERE IT STARTED</div>
                        <h4>In my college dorm room</h4>
                        <p>After experiencing a back injury and ending my college lacrosse career short, I was facinated by the rise of DJ's and music festivals. I bought a begginer controller and started mixing myself.</p>  
                    </div>
                    <div className="music-spotlight-content3 music-spotlight-centered">
                        <div className="eyebrow">WHAT I'VE ACCOMPLISHED</div>
                        <h4>Opening act for Sean Kingston &amp; T-Pain</h4>
                        <p>Once I got good, I started playing at local bars and clubs in the Boston area. After over 200 gigs (at least), I was given the opportunity to open up for Sean Kingston and later, T-Pain.</p>
                    </div>
                    <div className="music-spotlight-content4 music-spotlight-centered">
                        <div className="eyebrow">WHAT'S NEXT</div>
                        <h4>A four track bass house EP</h4>
                        <p>I always knew my next chapter was going to be producing original music and after my first release four years ago, my sabbitical is done and I plan to release a 4 track EP by the end of 2023.</p>
                    </div>
                </div>

                <div className="overlay"></div>

                <video src={video} autoPlay muted loop></video>
            </div>     

        </div>

    )
}

export default MusicSpotlight;