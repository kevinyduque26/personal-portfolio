import React, { useState } from "react";

import "./Experience.css"

function Experience() {

    const [tab, setTab] = useState("London")

    console.log(tab)

    const handleClick = (city) => {
        setTab(city)
    }


    return (
        <div className="experience-container">
            <div className="experience-body">
                <div className="experience-content">
                    <h4> Senior Product Manager</h4>
                    <p>Content will go here</p>

                </div>
                <div className="experience-tabs">

                    <div id="London" className="tabcontent" style={{ display: tab === "London" ? "block" : "none"}} >
                        <h1>London</h1>
                        <p>London is the capital city of England.</p>
                    </div>

                    <div id="Paris" className="tabcontent" style={{ display: tab === "Paris" ? "block" : "none"}}>
                        <h1>Paris</h1>
                        <p>Paris is the capital of France.</p>
                    </div>

                    <div id="Tokyo" className="tabcontent">
                        <h1>Tokyo</h1>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>

                    <div id="Oslo" className="tabcontent">
                        <h1>Oslo</h1>
                        <p>Oslo is the capital of Norway.</p>
                    </div> 
                    <div className="buttons">
                        <button className="tablink" onClick={() => handleClick("London")}>London</button>
                        <button className="tablink" onClick={() => handleClick("Paris")}>Paris</button>
                        {/* <button className="tablink" style={tab !== "Tokyo" && "backgroundColor: ''"} onclick={setTab("Tokyo")}>Tokyo</button>
                        <button className="tablink" style={tab !== "Oslo" && "backgroundColor: ''"} onclick={setTab("Oslo")}>Oslo</button> */}
                    </div>


                </div>

            </div>


        </div>
    )
};

export default Experience;