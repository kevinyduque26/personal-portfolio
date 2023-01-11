import React from "react";

// CSS Import
import "./ContentGallery.css"

// Audio Import
import radioHipHop from "./Audio/radio-hip-hop.mp3"
import electronicMoombahton from "./Audio/electronic-moombahton.mp3"
import trapHipHop from "./Audio/trap-hip-hop.mp3"
import oldSchool from "./Audio/old-school.mp3"

// Video Import
import nicaragua from "./Video/nicaragua-480.mov"
import nicaraguaPoster from "./Video/nicaragua-480-poster.jpg"
import charlotte from "./Video/charlotte.mov"
import charlottePoster from "./Video/charlotte-poster.jpg"
import lukeAshley from "./Video/luke-ashley-480.mov"
import lukeAshleyPoster from "./Video/luke-ashley-poster.jpg"
import austin from "./Video/austin-480.mov"
import austinPoster from "./Video/austin-poster.jpg"

// Image Import
import slyMondern from "./Image/sly-modern.jpg"
import paris from "./Image/paris.jpg"
import zainab from "./Image/z-bio.jpg"
import tate from "./Image/tate.jpg"

function ContentGallery() {
    return (
        <div class="content-gallery-container">

            <div class="content-gallery-column">
                <div className="audio-container">
                    <h5>Radio Hip-Hop</h5>
                    <audio src={radioHipHop} controls></audio>
                </div>
                <video src={nicaragua} poster={nicaraguaPoster} controls></video>
                <img src={tate} alt="Male looking up at effiel tower"></img>
                
            </div>

            <div class="content-gallery-column">
                <div className="audio-container">
                    <h5>Electronic Pop</h5>
                    <audio src={electronicMoombahton} controls></audio>
                </div>
                <img src={zainab} alt="Portrait of Zaniab Eid"></img>
                <video src={charlotte} poster={charlottePoster} controls></video>
               
            </div>

            <div class="content-gallery-column">
                <div className="audio-container">
                    <h5>Trap Hip-Hop</h5>
                    <audio src={trapHipHop} controls></audio>
                </div>
                <video src={lukeAshley} poster={lukeAshleyPoster} controls></video>
                <img src={paris} alt="Male looking up at effiel tower"></img>             
            </div>

            <div class="content-gallery-column">
                <div className="audio-container">
                    <h5>Old School</h5>
                    <audio src={oldSchool} controls></audio>
                </div>
                <img src={slyMondern} alt="Male leaning on a wall in a modern stylish outfit"></img>
                <video src={austin} poster={austinPoster} controls></video>
            </div>

        </div>
    )
};

export default ContentGallery;