import React from "react";

import "./FeaturedContent.css"
import ContentGallery from "../ContentGallery/ContentGallery";

function FeaturedContent() {
    return (
        <div className="featured-content-container">

            <div className="featured-content">

                <div>
                    <h2>Featured content</h2>
                    <p>Just a sample of the content </p>
                </div>

                <ContentGallery />

            </div>

        </div>

    )
};

export default FeaturedContent;