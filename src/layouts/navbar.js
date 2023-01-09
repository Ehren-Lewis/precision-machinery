import precisionMachineryLogo from "../assets/images/precisionMachineryLogo.svg"
import "./navbar.css"

import { useState } from 'react';

const NavBar = () => {

    const [navbarOpen, setnavbarOpen ] = useState(false)
    
    const handleToggle = () => {
        setnavbarOpen(prev => !prev)
    }

    return (
        <div className="container-fluid nav-wrapper">
            <div className="navbar navbar-expand-md nav-style">
            <a href="#headline" className="nav-brand">
                <img src={precisionMachineryLogo} className="nav-logo" />
            </a>

                {/* <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button> */}
                <div className="nav-anchors">
                    <a className="nav-anchor" href="#wherewebegan">Where We Began</a>
                    <a className="nav-anchor" href="#wherewevebeen">Where We've Been</a>
                    <a className="nav-anchor" href="#whatwebring">What We Bring</a>
                    <a className="nav-anchor" href="#contact">Contact Us</a>
                </div>
            </div>

        </div>
    )
}

export default NavBar;