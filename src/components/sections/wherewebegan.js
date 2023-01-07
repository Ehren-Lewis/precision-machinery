import outsideMachinery from "../../assets/videos/machineryOutside.mp4"
import "./sections.css"
import {spacemd} from "../../assets/globalstyle.css"
const About = () => {

    return (
        <div className="container">
        <div className="spacemd"></div>
            <div className="row">
                <div className="col-sm-6 col-md-6 align-self-center">
                    <h3 className="section-title text-center">Where We Began</h3>
                    <p className="section-desc">Operating out of a small workshop with 
                    a few employees, Precision Machinery designed and built custom machinery for clients. As we grew, 
                    we expanded and moved to a larger facility to handle the increased workload. Today, 
                    we are a respected provider of custom machinery reaching all across North America</p>

                </div>
                <div className="col-sm-8 col-md-6">
                <video className="video-format" autoPlay={true} muted loop>
                    <source src={outsideMachinery}/>
                </video>
                </div>
            </div>
        </div>
    )
}

export default About