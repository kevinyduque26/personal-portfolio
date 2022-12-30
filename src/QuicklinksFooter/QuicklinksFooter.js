import React from "react";

import "./QuicklinksFooter.css"
import { AiOutlineFilePdf, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

function QuicklinksFooter() {
    return (
        <>
            <div className="quicklinks-footer-container full-bleed-quicklinks-footer">
                <a class="quicklinks-footer-link" target="_blank" href="/" rel="noopener noreferrer">
                    <p className="icon">
                        <AiOutlineFilePdf />         
                    </p>
                    <p>
                        Resume        
                    </p>
                </a>

                <a class="quicklinks-footer-link" target="_blank" href="https://www.linkedin.com/in/kevinyduque/" rel="noopener noreferrer">
                    <p className="icon">
                        <AiOutlineLinkedin />         
                    </p>
                    <p>
                        LinkedIn       
                    </p>
                </a>

                <a class="quicklinks-footer-link" target="_blank" href="https://github.com/kevinyduque26" rel="noopener noreferrer">
                    <p className="icon">
                        <AiOutlineGithub />         
                    </p>
                    <p>
                        GitHub        
                    </p>
                </a>
            </div>
        </>
    )
};

export default QuicklinksFooter;