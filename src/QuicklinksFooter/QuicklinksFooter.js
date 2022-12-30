import React from "react";

import "./QuicklinksFooter.css"
import { AiOutlineFilePdf, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

function QuicklinksFooter() {
    return (
        <div className="quicklinks-footer-container full-bleed-footer">
            <a target="_blank" href="/" rel="noopener noreferrer">
                <div className="quicklinks-footer-link">
                    <span className="quicklinks-footer-link-item"><AiOutlineFilePdf /></span>
                    <p className="quicklinks-footer-link-item">Resume</p>
                </div>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/kevinyduque/" rel="noopener noreferrer">
                <div className="quicklinks-footer-link">
                    <span className="quicklinks-footer-link-item"><AiOutlineLinkedin /></span>
                    <p className="quicklinks-footer-link-item">LinkedIn</p>
                </div>
            </a>

            <a target="_blank" href="https://github.com/kevinyduque26" rel="noopener noreferrer">
                <div className="quicklinks-footer-link">
                    <span className="quicklinks-footer-link-item"><AiOutlineGithub /></span>      
                    <p className="quicklinks-footer-link-item">GitHub</p>
                </div>
            </a>


        </div>
    )
};

export default QuicklinksFooter;