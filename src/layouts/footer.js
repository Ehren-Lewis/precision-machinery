import "./footer.css";

const Footer = () => {

    return (
        <div className="container-fluid footer-color">
        <div className="space-lg"></div>
            <hr></hr>
            <div className="row">
                <div className="col-6 d-flex">
                    <p>Precision Machinery</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                <p>2342 Berry Dr, San Francisco, California</p>
                </div>
            </div>
   
            <div className="row text-center d-flex justify-content-around">
                <div className="col-sm-6 col-md-3 mt-3">
                <ul>
                    <li className="list-title">ABOUT</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Careers</li>
                </ul>
                </div>
                <div className="col-sm-6 col-md-3 mt-3">
                <ul>
                    <li className="list-title">SERVICES</li>
                    <li>Get a quote</li>
                    <li>Plans and Pricings</li>
                    <li>Request a Demo</li>
                    <li>Contribute to Precision Machinery</li>
                </ul>
                    
                </div>

                <div className="col-sm-6 col-md-3 mt-3">
                <ul>
                    <li className="list-title">FOLLOW</li>
                    <li>@PrecisionMachinery on Instagram</li>
                    <li>@PrecisionMachinery on Twitter</li>
                    <li>@PrecisionMachinery on Linkedin</li>
                    <li>@PrecisionMachinery on Facebook</li>

                </ul>
                    
                </div>
            </div>
            <div className="mt-4"></div>
            <div className="row">
                <div className="col copyright">
                    <p><span>&copy;</span>Precision Machinery All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;