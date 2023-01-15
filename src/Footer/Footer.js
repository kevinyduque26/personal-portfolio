import React from "react";

import "./Footer.css"

import { AiOutlineFilePdf, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

import kdFooterLogo from "./kevin-duque-logo-full.svg"

function Footer() {
    return (
        <div className="footer-main-container" id="contact">

            <div className="footer-main-body">

                <div className="footer-main-content">
                    <div className="eyebrow">CONTACT</div>
                    <h2>Get in touch</h2>
                    <p>Whether you have an interesting opportunity or just want to chat, feel free to drop me a note!</p>
                    <a className="dark-button" target="_blank" href="mailto:kevinyduque26@gmail.com" rel="noopener noreferrer">Say Hello</a>
                    <p>kevinyduque26@gmail.com</p>
                </div>

                <div className="footer-main-content-links">

                    <a class="footer-link" target="_blank" href="/" rel="noopener noreferrer">
                        <AiOutlineFilePdf />       
                        <div className="footer-link-text">Resume</div>
                    </a>

                    <a class="footer-link flt-padding-left" target="_blank" href="https://www.linkedin.com/in/kevinyduque/" rel="noopener noreferrer">
                        <AiOutlineLinkedin />         
                        <div className="footer-link-text">LinkedIn</div>     
                    </a>

                    <a class="footer-link flt-padding-left" target="_blank" href="https://github.com/kevinyduque26" rel="noopener noreferrer">
                        <AiOutlineGithub />         
                        <div className="footer-link-text">GitHub</div>       
                    </a>

                </div>

                <div className="footer-bottom">
                    
                    <a href="/">
                        <img src={kdFooterLogo} className="kd-footer-logo"></img>
                    </a>

                    <div className="footer-bottom-links">

                        <a class="footer-link" href="#about">
                            <div>About</div>
                        </a>

                        <a class="footer-link flt-padding-left" href="#experience">
                            <div>Experience</div>     
                        </a>

                        <a class="footer-link flt-padding-left" href="#passions">       
                            <div>Passions</div>       
                        </a>

                    </div>
                    
                </div>

            </div>

        </div>
    )
};

export default Footer;