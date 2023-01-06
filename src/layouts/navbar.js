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
            <a href="#" className="nav-brand">
                <img src={precisionMachineryLogo} className="nav-logo" />
            </a>

                {/* <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button> */}
                <div className="nav-anchors">
                    <a className="nav-anchor">Home</a>
                    <a className="nav-anchor">Projects</a>
                    <a className="nav-anchor">Contact</a>
                </div>
            </div>

        </div>
    )
}

export default NavBar;