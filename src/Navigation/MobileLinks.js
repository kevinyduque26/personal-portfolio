import React from "react";

// CSS Import
import "./MobileLinks.css";

// File Import
import resume from "./Kevin Duque - Resume 2023.pdf"

function MobileLinks() {
    return (
        <ul className="mobile-links">
            <li><a className="nav-links" href="#about">About</a></li>
            <li><a className="nav-links" href="#experience">Experience</a></li>
            <li><a className="nav-links" href="#passions">Passions</a></li>
            <li><a className="nav-links" href="#contact">Contact</a></li>
            <li><a className="nav-links" href={resume}>Resume</a></li>
        </ul>
    )
};

export default MobileLinks;