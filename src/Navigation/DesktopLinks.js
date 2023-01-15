import React from "react";

// CSS Import
import "./DesktopLinks.css";


function DesktopLinks() {
    return (
        <ul className="desktop-links">
            <li className="desktop-link"><a className="nav-links" href="#about">About</a></li>
            <li className="desktop-link"><a className="nav-links" href="#experience">Experience</a></li>
            <li className="desktop-link"><a className="nav-links" href="#passions">Passions</a></li>
            <li className="desktop-link"><a className="nav-links" href="#contact">Contact</a></li>
            <li><a className="nav-links" href="/">Resume</a></li>
        </ul>
    )
};

export default DesktopLinks;