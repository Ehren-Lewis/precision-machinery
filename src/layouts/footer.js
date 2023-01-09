import "./footer.css";

const Footer = () => {

    return (
        <div className="container-fluid footer-color">
            <hr></hr>
            <div className="row">
                <div className="col-6 d-flex">
                    <p>Precision Machinery</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                <p>2342 Berry Dr, San Francisco, California</p>
                </div>
            </div>
   
            <div className="row text-center">
                <div className="col-3">
                <ul>
                    <li className="list-title">About</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Careers</li>
                </ul>
                </div>
                <div className="col-3">
                <ul>
                    <li className="list-title">About</li>
                </ul>
                    
                </div>
                <div className="col-3">
                <ul>
                    <li className="list-title">About</li>
                </ul>
                    
                </div>
                <div className="col-3">
                <ul>
                    <li className="list-title">Follow</li>
                    <li>@PrecisionMachinery on Instagram</li>
                    <li>@PrecisionMachinery on Twitter</li>
                    <li>@PrecisionMachinery on Linkedin</li>
                    <li>@PrecisionMachinery on Facebook</li>

                </ul>
                    
                </div>
            </div>
            <div className="mt-4"></div>
            <div className="row">
                <div className="col">
                    <p className="copyright"><span>&copy;</span>Precision Machinery All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;