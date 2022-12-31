import React from "react";

import "./Footer.css"
import QuicklinksFooter from "../QuicklinksFooter/QuicklinksFooter";

function Footer() {
    return (
        <div className="footer-main-container full-bleed-footer">

            <div className="footer-main-content">
                <div className="eyebrow">CONTACT</div>
                <h2>Get in touch</h2>
                <p>My inbox is always open. Whether you have an interesting opportunity, have a question or just want to say hi, I'll get back to you as soon as I can!</p>
                <a className="flex-button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
            </div>

            <div>
                <QuicklinksFooter />
            </div>

            <div className="design-tag">
                Designed &amp; built by Kevin Duque using React.
            </div>

        </div>
    )
}

export default Footer;