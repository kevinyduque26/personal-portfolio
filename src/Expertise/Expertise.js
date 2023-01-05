import React from "react";

// CSS Import
import "./Expertise.css"

import { AiOutlineSketch, AiOutlineAppstore, AiOutlineUsergroupAdd, AiOutlineNodeIndex } from "react-icons/ai"

function Expertise() {
    return (
        <div className="expertise-container">
            <div className="expertise-body">
                <div className="expertise-content">
                    <div className="expertise-title">
                        <h2>My expertise</h2>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                    <div className="expertise-cards">
                        <div className="expertise-card">
                            <p>
                                <AiOutlineSketch />
                            </p>
                            <h5>Vision & Strategy</h5>
                            <p>Lorem ipsum loremipsum lorem ipsum lorem ipsum</p>
                        </div>
                        <div className="expertise-card">
                            <p>
                                <AiOutlineAppstore />
                            </p>
                            <h5>Feature Roadmap</h5>
                            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                        </div>
                        <div className="expertise-card">
                            <p>
                                <AiOutlineUsergroupAdd />
                            </p>
                            <h5>Stakeholder Management</h5>
                            <p>Lorem ipsumcmxnb vgnkj d bgkn bfgnb lorem ipsum lorem ipsum lorem ipsum</p>
                        </div>
                        <div className="expertise-card">
                            <p>
                                <AiOutlineNodeIndex />
                            </p>
                            <h5>Decision Making</h5>
                            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="expertise-background"></div>
            </div>
        </div>
    )
};

export default Expertise;