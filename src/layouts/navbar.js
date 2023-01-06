import precisionMachineryLogo from "../assets/images/precisionMachineryLogo.svg"
import "./navbar.css"


const NavBar = () => {

    return (
        <div className="container-fluid nav-wrapper">
            <div className="nav-style">
                <img src={precisionMachineryLogo} className="nav-logo" />

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