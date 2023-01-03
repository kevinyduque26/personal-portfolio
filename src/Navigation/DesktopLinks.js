import React from "react";

// CSS Import
import "./DesktopLinks.css";


function DesktopLinks() {
    return (
        <ul className="desktop-links">
            <li className="desktop-link"><a className="nav-links" href="/">Home</a></li>
            <li className="desktop-link"><a className="nav-links" href="/">Experience</a></li>
            <li className="desktop-link"><a className="nav-links" href="/">Technical Skills</a></li>
            <li className="desktop-link"><a className="nav-links" href="/">Passions</a></li>
            <li><a className="nav-links" href="/">Contact</a></li>
        </ul>
    )
};

export default DesktopLinks;