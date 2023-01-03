import React from "react";

// CSS Import
import "./Hamburger.css";


function Hamburger({ isOpen }) {
    return (
        <>

            <div className="hamburger">
                <div className="slice slice1"></div>
                <div className="slice slice2"></div>
                <div className="slice slice3"></div>
            </div>

            <style jsx>{`
                .slice1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .slice2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .slice3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
            `}</style>
            
        </>        
    )
};

export default Hamburger;