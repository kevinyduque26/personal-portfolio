import React from "react";

import "./FeaturedContent.css"
import ContentGallery from "../ContentGallery/ContentGallery";

function FeaturedContent() {
    return (
        <div className="featured-content-container">

            <div className="featured-content">

                <div className="feartured-content-title">
                    <h2>Featured content</h2>
                    <p>Some of my beats, photography, and video recaps.</p>
                </div>

                <ContentGallery />

            </div>

        </div>

    )
};

export default FeaturedContent;