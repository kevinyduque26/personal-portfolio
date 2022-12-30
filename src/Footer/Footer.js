import React from "react";

import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container footer-stacked">
            <div className="eyebrow">CONTACT</div>
            <h2>Get in touch</h2>
            <p>My inbox is always open. Whether you have an interesting opportunity, have a question or just want to say hi, I'll get back to you as soon as I can!</p>
            <a className="button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
            <div className="design-tag">Designed & built by Kevin Duque.</div>
        </div>
    )
}

export default Footer;