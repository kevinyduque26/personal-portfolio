import React from "react";

import "./QuicklinksMain.css"
import { AiOutlineFilePdf, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

function QuicklinksMain() {
    return (
        <div className="quicklinks-main-container full-bleed-main">
            <a target="_blank" href="/" rel="noopener noreferrer">
                <div className="quicklinks-main-link">
                    <span className="quicklinks-main-link-item"><AiOutlineFilePdf /></span>
                    <p className="quicklinks-main-link-item">Resume</p>
                </div>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/kevinyduque/" rel="noopener noreferrer">
                <div className="quicklinks-main-link">
                    <span className="quicklinks-main-link-item"><AiOutlineLinkedin /></span>
                    <p className="quicklinks-main-link-item">LinkedIn</p>
                </div>
            </a>

            <a target="_blank" href="https://github.com/kevinyduque26" rel="noopener noreferrer">
                <div className="quicklinks-main-link">
                    <span className="quicklinks-main-link-item"><AiOutlineGithub /></span>      
                    <p className="quicklinks-main-link-item">GitHub</p>
                </div>
            </a>


        </div>
    )
};

export default QuicklinksMain;