import "./sections.css"
import spacesm from "../../assets/globalstyle.css"
import conveyorImage from "../../assets/images/conveyorimage.jpg"
import canadaFacility from "../../assets/images/canadafacility.jpg"
import mexicoFacility from "../../assets/images/mexicofacility.jpg"

const OurWork = () => {


        return (
            <div className="container">
                            <div className="spacesm"></div>

                <div className="row text-center">
                    <h3 className="section-title">Where We're Located</h3>
                </div>
                <div className="spacesm"></div>
                <div className="row">
                    <div className="col-6 section-wrapper">
                        <h4 className="section-title">United States</h4>
                        <p className="section-desc">In our first facility, one of the first products we ever manufactured is a high-speed 
                        packaging machine that is used by many different types of businesses. 
                        This machine is designed to efficiently package a wide variety of products, 
                        from food items to cosmetics, at a high rate of speed. 
                        The machine is constructed from durable materials and is built to last, with minimal maintenance 
                        requirements</p>
                    </div>
                    <div className="col-sm-8 col-md-6 d-flex justify-content-center">
                        <img className="video-format" src={conveyorImage} style={{objectFit:"contain", width:"inherit"}}></img>
                    </div>
                </div>

                <div className="spacesm"></div>

                <div className="row">
                    <div className="col-6 section-wrapper">
                        <h4 className="section-title">Mexico</h4>
                        <p className="section-desc">Mexico contains are second, mid-sized facility  that serves a variety
                        of industries and is equipped with a range of machinery and tools. Containing
                        manual and CNC machines, including lathes, mills, and grinders, as well as an assembly area and a 
                        quality control department, our team of skilled machinists and technicians use these resources to produce 
                        custom parts and products for our clients.</p>
                    </div>
                    <div className="col-sm-8 col-md-6 d-flex justify-content-center">
                        <img className="video-format" src={mexicoFacility} style={{objectFit:"contain"}}></img>
                    </div>
                </div>
                
                <div className="spacesm"></div>


                <div className="row">
                    <div className="col-6 section-wrapper">
                        <h4 className="section-title">Canada</h4>
                        <p className="section-desc">With our third and latest facility located in Canada,
                        this facility is equipped with the most advanced technology and staffed with a team of highly qualified machinists and engineers,
                        We are confident that this expansion enables us to continue to be a leader in the machinery industry 
                        and provide exceptional service to our clients.
                        </p>
                    </div>
                    <div className="col-sm-8 col-md-6 d-flex justify-content-center">
                        <img className="video-format" src={canadaFacility} style={{objectFit:"contain"}}></img>
                    </div>
                </div>


            </div>
        )
}

export default OurWork;