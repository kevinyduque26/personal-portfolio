import React from "react";

import "./Navigation.css"
import logo from "./symbol_black.png"

function Navigation() {
    return (
        <div className="navigation">
            
            <div className="navigation-left">
                <a href="/">
                    <img 
                        src={logo} 
                        alt="Kevin Duque personal logo" 
                    />
                </a>
            </div>

            <div className="navigation-right">
                <div className="navigation-option">
                    <h4>Home</h4>
                </div>
                <div className="navigation-option">
                    <h4>Experience</h4>
                </div>
                <div className="navigation-option">
                    <h4>Technical Skills</h4>
                </div>
                <div className="navigation-option">
                    <h4>Music</h4>
                </div>
                <div className="navigation-option">
                    <h4>Contact</h4>
                </div>
            </div>

        </div>
    );
};

export default Navigation;