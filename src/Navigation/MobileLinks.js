import React from "react";

// CSS Import
import "./MobileLinks.css";


function MobileLinks() {
    return (
        <ul className="mobile-links">
            <li><a className="nav-links" href="#about">About</a></li>
            <li><a className="nav-links" href="#experience">Experience</a></li>
            <li><a className="nav-links" href="#passions">Passions</a></li>
            <li><a className="nav-links" href="#contact">Contact</a></li>
        </ul>
    )
};

export default MobileLinks;