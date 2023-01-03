import React, { useState } from "react";

// CSS Import
import "./Navigation.css";

// Component Import
import Hamburger from "./Hamburger";
import MobileLinks from "./MobileLinks.js";
import DesktopLinks from "./DesktopLinks";

// File Import
import logo from "./logo-symbol-black.svg";


function Navigation({ screenWidthSize }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    };

    if (isOpen && screenWidthSize > 767) {
        setIsOpen(false)
    }

    return (
        <div className="navigation-container">

            <div className="navigation-body">

                {/* Logo */}
                
                <div>
                    <a href="/">
                        <img 
                            src={logo} 
                            alt="Kevin Duque's personal brand logo" 
                        />
                    </a>
                </div>

                {/* Desktop Links and Hamburger */}


                {screenWidthSize > 767 && (
                <div>
                    <DesktopLinks />
                </div>    
                )}

                {screenWidthSize <= 767 && (
                    <div onClick={handleHamburgerClick}>
                        <Hamburger isOpen={isOpen}/>
                    </div> 
                )}

            </div>

            {/* Mobile Links */}

            {isOpen && <MobileLinks />}

        </div>
    )
};

export default Navigation;



