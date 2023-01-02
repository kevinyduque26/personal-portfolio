import React from "react";

import "./FeaturedContent.css"
import ContentGallery from "../ContentGallery/ContentGallery";

function FeaturedContent() {
    return (
        <div className="featured-content-container">

            <div className="featured-content">

                <div>
                    <h2>Featured content component</h2>
                    <p>Content to follow</p>
                </div>

                <ContentGallery />

            </div>

        </div>

    )
};

export default FeaturedContent;