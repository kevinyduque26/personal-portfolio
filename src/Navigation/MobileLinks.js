import React from "react";

// CSS Import
import "./MobileLinks.css";


function MobileLinks() {
    return (
        <ul className="mobile-links">
            <li><a className="nav-links" href="/">Home</a></li>
            <li><a className="nav-links" href="/">Experience</a></li>
            <li><a className="nav-links" href="/">Technical Skills</a></li>
            <li><a className="nav-links" href="/">Passions</a></li>
            <li><a className="nav-links" href="/">Contact</a></li>
        </ul>
    )
};

export default MobileLinks;