import React from "react";

import "./ContentGallery.css"

import image from "./image.jpg"
import vid from "./vid.mp4"
import audio from "./audio.mp3"

function ContentGallery() {
    return (
        <div class="content-gallery-container">

            <div class="content-gallery-column">
                <video src={vid} controls></video>
                <p>Content</p>
            </div>

            <div class="content-gallery-column">
               <img src={image}></img>
                <p>Content</p>
            </div>

            <div class="content-gallery-column">
                <audio src={audio} controls></audio>
                <p>Content</p>
            </div>

            <div class="content-gallery-column">
                <p>Content</p>
                <p>Content</p>
            </div>

        </div>
    )
};

export default ContentGallery;