import React from "react";

// CSS Import
import "./Expertise.css"

// File Import
import bylogo from "./by-logo.svg"
import bhlogo from "./bh-logo.svg"
import gelogo from "./ge-logo.svg"
import fflogo from "./ff-logo.svg"
import bplogo from  "./bp-logo.svg"
import eqlogo from "./eq-logo.svg"
import salogo from "./sa-logo.svg"
import yplogo from "./yp-logo.svg"

// Icon Import
import { AiOutlineSketch, AiOutlineAppstore, AiOutlineUsergroupAdd, AiOutlineNodeIndex } from "react-icons/ai"

function Expertise() {
    return (
        <div className="expertise-container">

            <div className="expertise-body">

                <div className="expertise-top-content">

                    <div className="expertise-title">
                        <h4>Trusted by many to bring products to market and execute</h4>
                    </div>
                    
                    <div className="expertise-logos">                            
                            
                        <img src={fflogo} alt="FIFA logo" className="expertise-logo-special"></img>
                        <img src={bhlogo} alt="Baker Hughes logo" className="expertise-logo"></img>
                        <img src={bplogo} alt="British Petroleum logo" className="expertise-logo"></img>
                        <img src={bylogo} alt="Bynder logo" className="expertise-logo"></img>

                        <img src={eqlogo} alt="Equinor logo" className="expertise-logo el-margin-top"></img>
                        <img src={yplogo} alt="YPF logo" className="expertise-logo-special el-margin-top"></img>
                        <img src={gelogo} alt="General Electric logo" className="expertise-logo el-margin-top"></img>
                        <img src={salogo} alt="Saudi Aramco logo" className="expertise-logo el-margin-top"></img>

                    </div>

                </div>
 


                <div className="expertise-cards">

                    <div className="expertise-card">
                        <div className="expertise-card-icon">
                            <AiOutlineSketch />
                        </div>
                        <h5>Vision & Strategy</h5>
                        <p>
                            I excel with setting vision and strategy at the full product or product team level with a focus on simplicity.
                            Ideally, its broken down into three parts (ex. crawl, walk, run) and easily shows the path forward and business value.
                        </p>
                    </div>

                    <div className="expertise-card ec-column-margin-top">
                        <div className="expertise-card-icon">
                            <AiOutlineAppstore />
                        </div>
                        <h5>Feature Roadmap</h5>
                        <p>
                            I leverage my feature roadmap to align execution across multiple stakeholders including UX, engineering, sales, and others.
                            I'll create different versions depending on the audience, especially customers or users. 
                        </p>
                    </div>

                    <div className="expertise-card ec-column-margin-top ec-tablet-margin-top">
                        <div className="expertise-card-icon">
                            <AiOutlineUsergroupAdd />
                        </div>
                        <h5>User Experience</h5>
                        <p>
                            I like to conduct hands on user research and speak directly with customers and users to understand their problem and needs. 
                            This translates into new feature candidates with good user experience and design at the forefront.
                        </p>
                    </div>

                    <div className="expertise-card ec-column-margin-top ec-tablet-margin-top">
                        <div className="expertise-card-icon">
                            <AiOutlineNodeIndex />
                        </div>
                        <h5>Data Analysis</h5>
                        <p>
                            I make usage tracking part of the definition of done where possible and focus on impactful metrics that contribute to the company's objectives.
                            I avoid analysis paralysis and use proxies when needed, especially in greenfield proposals. 
                        </p>
                    </div>


                    <div className="expertise-card ec-column-margin-top ec-tablet-margin-top">
                        <div className="expertise-card-icon">
                            <AiOutlineUsergroupAdd />
                        </div>
                        <h5>Stakeholder Management</h5>
                        <p>
                            I take the time to learn and understand which communication methods are effective within the organization and who should be in my stakeholder group.
                            I'm transparent and communicate often even with tough news.
                        </p>
                    </div>

                    <div className="expertise-card ec-column-margin-top ec-tablet-margin-top">
                        <div className="expertise-card-icon">
                            <AiOutlineNodeIndex />
                        </div>
                        <h5>Leadership</h5>
                        <p>
                            I put people first and invest time in mentoring and coaching others. I take accountability for my decisions and own up to my mistakes.
                            I believe in moving fast with less but stay disciplined with a good process and framework.
                        </p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
};

export default Expertise;