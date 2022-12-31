import React from "react";

import "./LanguageTicker.css"
import Ticker from 'react-ticker'

function LanguageTicker() {

    const kicker = 70
    
    const size1 = Math.floor(10 + Math.random() * kicker)
    const size2 = Math.floor(10 + Math.random() * kicker)
    const size3 = Math.floor(10 + Math.random() * kicker)
    const size4 = Math.floor(10 + Math.random() * kicker)

    const size5 = Math.floor(10 + Math.random() * kicker)
    const size6 = Math.floor(10 + Math.random() * kicker)
    const size7 = Math.floor(10 + Math.random() * kicker)
    const size8 = Math.floor(10 + Math.random() * kicker)

    const size9 = Math.floor(10 + Math.random() * kicker)
    const size10 = Math.floor(10 + Math.random() * kicker)
    const size11 = Math.floor(10 + Math.random() * kicker)
    const size12 = Math.floor(10 + Math.random() * kicker)

    return (
        <div className="ticker-container">
            <div className="ticker-row">
                <Ticker mode="smooth" speed="20" >
                    {({ index }) => (
                        <>
                            <div style={{fontSize: `${size1}px`}} className="ticker-item">HTML</div>
                            <div style={{fontSize: `${size2}px`}} className="ticker-item">CSS</div>
                            <div style={{fontSize: `${size3}px`}} className="ticker-item">JavaScript</div>
                            <div style={{fontSize: `${size4}px`}} className="ticker-item">React</div>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="ticker-row">
                <Ticker direction="toRight" mode="chain" speed="25" offset="50">
                    {({ index }) => (
                        <>
                            <div style={{fontSize: `${size5}px`}} className="ticker-item">NodeJS</div>
                            <div style={{fontSize: `${size6}px`}} className="ticker-item">Express</div>
                            <div style={{fontSize: `${size7}px`}} className="ticker-item">PostgreSQL</div>
                            <div style={{fontSize: `${size8}px`}} className="ticker-item">Knex</div>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="ticker-row">
                <Ticker mode="smooth" speed="20" offset="50">
                    {({ index }) => (
                        <>
                            <div style={{fontSize: `${size9}px`}} className="ticker-item">Data Structures</div>
                            <div style={{fontSize: `${size10}px`}} className="ticker-item">Algorithms</div>
                            <div style={{fontSize: `${size11}px`}} className="ticker-item">Git</div>
                            <div style={{fontSize: `${size12}px`}} className="ticker-item">GitHub</div>
                        </>
                    )}
                </Ticker>
            </div>

        </div>

    )

}

export default LanguageTicker;