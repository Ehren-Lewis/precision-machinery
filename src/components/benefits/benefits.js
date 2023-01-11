import "./benefits.css"
import "../sections/sections.css"

const Benefits = () => {




    return (
        <div className="container">
            <div className="spacemd"></div>
            <div className="row">
                <h3 className="section-title text-center" id="whatwebring">What We Do Best</h3>
            </div>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div class="accordion accordion-flush" id="benefits">

                        <div className="accordion-item bg-transparent">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Short Lead Times
                            </button>
                                </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#benefits">
                                <div className="accordion-body">
                                Our efficient production processes allow us to deliver machines to our clients in a timely manner.
                                </div>
                            </div>

                        </div>

                        <hr></hr>

                        <div className="accordion-item bg-transparent">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Customization
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#benefits">
                                <div className="accordion-body">
                                We work with our clients to understand their unique needs and design custom solutions that meet those needs.
                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="accordion-item bg-transparent">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Quality
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#benefits">
                                <div className="accordion-body">
                                Our strict quality control processes ensure that our machines are reliable and built to last.
                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="accordion-item bg-transparent">
                            <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Service
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#benefits">
                                <div className="accordion-body">
                                We offer ongoing service and support to our clients to ensure that their machines are running smoothly.                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="accordion-item bg-transparent">
                            <h2 className="accordion-header d-flex justify-content-around" id="headingFive">
                            <button className="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Cost-effectiveness
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#benefits">
                                <div className="accordion-body">
                                Our competitive pricing and cost-saving design solutions make our machinery a cost-effective choice for businesses.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="spacmd"></div> */}
            <div style={{marginTop:"50px"}}></div>
        </div>
    )
}

export default Benefits;