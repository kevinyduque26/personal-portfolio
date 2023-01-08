import React from "react";

import "./SkillsEducation.css"
import LanguageTicker from "../LanguageTicker/LanguageTicker";

function SkillsEducation() {
    return (
        <div className="skills-education-container">
            <div className="skills-education-body">
                <div className="skills-education-left">
                    <h2>Skills</h2>
                    <LanguageTicker />
                </div>
                <div className="skills-education-right">
                    <h2>Education</h2>
                </div>
            </div>
        </div>
    )
};

export default SkillsEducation;