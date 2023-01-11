import React from "react";

import "./FeaturedContent.css"
import ContentGallery from "../ContentGallery/ContentGallery";

function FeaturedContent() {
    return (
        <div className="featured-content-container">

            <div className="featured-content">

                <div className="feartured-content-title">
                    <h2>Featured content</h2>
                    <p>Beats, photgraphy, and video recaps. I try to find opportunities to create something. </p>
                </div>

                <ContentGallery />

            </div>

        </div>

    )
};

export default FeaturedContent;