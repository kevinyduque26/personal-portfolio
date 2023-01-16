import React from "react";

// CSS Import
import "./SkillsEducation.css"

// Component Import
import LanguageTicker from "../LanguageTicker/LanguageTicker";

function SkillsEducation() {
    return (
        <div className="skills-education-container">

            <div className="skills-education-body">

                <div className="skills-education-left">
                    <h2>Technical Skills</h2>
                    <h5>Having product skills is not enough, upskilling is a key differentiator</h5>
                    <p>On the job and through <a href="https://www.thinkful.com/" className="text-link" target="_blank" rel="noopener noreferrer">Thinkful</a>, I've gained practical experience in system design, coding frontend and backend languages, and algorithms. Next, I'll be strengthening my infrastructure skills through AWS certifications.</p>
                    <div className="language-ticker">
                        <LanguageTicker />
                    </div>
                </div>

                <div className="skills-education-filler"></div>

                <div className="skills-education-right">
                    <h2>Education</h2>
                    <div className="education-items">
                        <div className="education-item">
                            <div className="education-item-year">
                                <h5>2022</h5>
                            </div>
                            <div className="education-item-school">
                                <h5>Full-Stack Software Engineering Certificate</h5>
                                <p>Thinkful</p>
                            </div>
                        </div>

                        <div className="education-item edu-margin-top">
                            <div className="education-item-year">
                                <h5>2016</h5>
                            </div>
                            <div className="education-item-school">
                                <h5>Master of Business Administration</h5>
                                <p>Van Loan School at Endicott College</p>
                            </div>
                        </div>

                        <div className="education-item edu-margin-top">
                            <div className="education-item-year">
                                <h5>2015</h5>
                            </div>
                            <div className="education-item-school">
                                <h5>Bachelor of Business Administration, Finance</h5>
                                <p>Endicott College</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
};

export default SkillsEducation;