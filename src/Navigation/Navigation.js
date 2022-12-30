import React, { useEffect, useState } from "react";

import logo from "./logo-symbol-black.svg"
import Hamburger from "./Hamburger";
import MobileLinks from "./MobileLinks.js";
import DesktopLinks from "./DesktopLinks";


function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth)

    useEffect(() => {
        const resizeScreenWidthSize = () => setScreenWidthSize(window.innerWidth);
        window.addEventListener("resize", resizeScreenWidthSize); 
        return () => window.removeEventListener("resize", resizeScreenWidthSize);
    });

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    };

    if (isOpen && screenWidthSize > 767) {
        setIsOpen(false)
    }

    return (
        <>
            <div className="navigation">
                <a href="/">
                    <img 
                        src={logo} 
                        alt="Kevin Duque's personal brand logo" 
                    />
                </a>
                {screenWidthSize > 767 && <DesktopLinks />}
                {screenWidthSize <= 767 && (
                    <div onClick={handleHamburgerClick}>
                        <Hamburger isOpen={isOpen}/>
                    </div> 
                )}
            </div>

            {isOpen && <MobileLinks />}

            <style jsx>{`
                .navigation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 70px;
                    padding-left: 15px;
                    ${isOpen ? null : `box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75)`}
                }
                
                .navigation img {
                    height: 80px;
                }
            `}</style>

        </>
    );
};

export default Navigation;

