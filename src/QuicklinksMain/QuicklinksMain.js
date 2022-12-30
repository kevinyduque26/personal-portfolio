import React from "react";

import "./QuicklinksMain.css"
import { AiOutlineFilePdf, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

function QuicklinksMain() {
    return (
        <div className="quicklinks-container full-bleed">
            <a target="_blank" href="/" rel="noopener noreferrer">
                <div className="quicklinks-link">
                    <span className="quicklinks-link-item"><AiOutlineFilePdf /></span>
                    <p className="quicklinks-link-item">Resume</p>
                </div>
            </a>

            <a target="_blank" href="/" rel="noopener noreferrer">
                <div className="quicklinks-link">
                    <span className="quicklinks-link-item"><AiOutlineLinkedin /></span>
                    <p className="quicklinks-link-item">LinkedIn</p>
                </div>
            </a>

            <a target="_blank" href="/" rel="noopener noreferrer">
                <div className="quicklinks-link">
                    <span className="quicklinks-link-item"><AiOutlineGithub /></span>      
                    <p className="quicklinks-link-item">GiHub</p>
                </div>
            </a>


        </div>
    )
};

export default QuicklinksMain;