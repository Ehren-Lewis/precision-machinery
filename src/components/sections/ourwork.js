import "./sections.css"
import spacesm from "../../assets/globalstyle.css"
import conveyorImage from "../../assets/images/conveyorimage.jpg"


const OurWork = () => {


        return (
            <div className="container">
                            <div className="spacesm"></div>

                <div className="row text-center">
                    <h3 className="section-title">Our Work</h3>
                </div>
                <div className="spacesm"></div>
                <div className="row">
                    <div className="col-6 section-wrapper">
                        <h4 className="section-title">United Sttates</h4>
                        <p className="section-desc">One of the first products we ever manufactured is a high-speed 
                        packaging machine that is used by many different types of businesses. 
                        This machine is designed to efficiently package a wide variety of products, 
                        from food items to cosmetics, at a high rate of speed. 
                        The machine is constructed from durable materials and is built to last, with minimal maintenance 
                        requirements</p>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <img className="video-format" src={conveyorImage} style={{height:"fit-content"}}></img>
                    </div>
                </div>
            </div>
        )
}

export default OurWork;