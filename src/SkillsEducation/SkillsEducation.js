import React from "react";

import "./SkillsEducation.css"
import LanguageTicker from "../LanguageTicker/LanguageTicker";

function SkillsEducation() {
    return (
        <div className="skills-education-container">
            <div className="skills-education-body">
                <div className="skills-education-left">
                    <h2>Technical Skills</h2>
                    <h5>Having product skills is not enough, upskilling is a key differentiator</h5>
                    <p>In 2022, I completed a 6-8 months Full-Stack Software Engineering program with Thinkful to learn how to code. I gained practical experience in application level development, frontend and backend technologies, and algorithms. Next, I'll be focusing on infrastructure through AWS certifications.</p>
                    <div className="language-ticker">
                        <LanguageTicker />
                    </div>

                </div>
                <div className="filler"></div>
                <div className="skills-education-right">
                    <h2>Education</h2>
                    <div className="education-item">
                        <div className="education-item-year">
                            <h5>2022</h5>
                        </div>
                        <div className="education-item-school">
                            <h5>Full-Stack Software Enginering Certificate</h5>
                            <p>Thinkful</p>
                        </div>
                    </div>
                    <div className="education-item ei-padding-top">
                        <div className="education-item-year">
                            <h5>2016</h5>
                        </div>
                        <div className="education-item-school">
                            <h5>Masters in Business Adminstration</h5>
                            <p>Van Loan School at Endicott College</p>
                        </div>
                    </div>
                    <div className="education-item ei-padding-top">
                        <div className="education-item-year">
                            <h5>2015</h5>
                        </div>
                        <div className="education-item-school">
                            <h5>Bachelors in Business Adminstration, Finance</h5>
                            <p>Endicott College</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SkillsEducation;