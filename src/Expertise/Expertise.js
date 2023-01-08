import React from "react";

// CSS Import
import "./Expertise.css"

import { AiOutlineSketch, AiOutlineAppstore, AiOutlineUsergroupAdd, AiOutlineNodeIndex } from "react-icons/ai"

import bhlogo from "./Baker.png"
import gelogo from "./Bynder.png"

function Expertise() {
    return (
        <div className="expertise-container">
            <div className="expertise-body">
 
                    <div className="expertise-title">
                        <h4>Trusted by many to bring products to market and execute</h4>
                        <div className="expertise-logos">
                            <img src={bhlogo} alt="Baker Hughes logo"></img>
                            <img src={gelogo} alt="General Electric logo"></img>
                        </div>

                    </div>

                    <div className="expertise-cards">

                        <div className="expertise-card">
                            <p>
                                <AiOutlineSketch />
                            </p>
                            <h5>Vision & Strategy</h5>
                            <p>Lorem ipsum loremipsum lorem ipsum lorem ipsum Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>

                        <div className="expertise-card ec-mobile-padding-top">
                            <p>
                                <AiOutlineAppstore />
                            </p>
                            <h5>Feature Roadmap</h5>
                            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>

                        <div className="expertise-card ec-mobile-padding-top ec-table-padding-top">
                            <p>
                                <AiOutlineUsergroupAdd />
                            </p>
                            <h5>User Experience</h5>
                            <p>Lorem ipsumcmxnb vgnkj d bgkn bfgnb lorem ipsum lorem ipsum lorem ipsum Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>

                        <div className="expertise-card ec-mobile-padding-top ec-table-padding-top">
                            <p>
                                <AiOutlineNodeIndex />
                            </p>
                            <h5>Data Analysis</h5>
                            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>


                        <div className="expertise-card ec-mobile-padding-top ec-table-padding-top">
                            <p>
                                <AiOutlineUsergroupAdd />
                            </p>
                            <h5>Stakeholder Management</h5>
                            <p>Lorem ipsumcmxnb vgnkj d bgkn bfgnb lorem ipsum lorem ipsum lorem ipsum Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>

                        <div className="expertise-card ec-mobile-padding-top ec-table-padding-top">
                            <p>
                                <AiOutlineNodeIndex />
                            </p>
                            <h5>Decision Making</h5>
                            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>
                        
                    </div>

                <div className="expertise-background"></div>
            </div>
        </div>
    )
};

export default Expertise;