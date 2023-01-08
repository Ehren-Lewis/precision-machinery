import "./benefits.css"
import "../sections/sections.css"

const Benefits = () => {




    return (
        <div className="container">
            <div className="spacemd"></div>
            <div className="row">
                <h3 className="section-title  text-center">Benefits (I Know I'm lame)</h3>
            </div>
            <div className="row">
                <div className="col-8">
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Short Lead Times
                            </button>
                                </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Our efficient production processes allow us to deliver machines to our clients in a timely manner.
                                </div>
                            </div>

                        </div>

                        <hr></hr>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Customization
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                We work with our clients to understand their unique needs and design custom solutions that meet those needs.
                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Quality
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Our strict quality control processes ensure that our machines are reliable and built to last.
                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Service
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                We offer ongoing service and support to our clients to ensure that their machines are running smoothly.                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed bg-transparent section-title accordion-button-style" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Cost-effectiveness
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Our competitive pricing and cost-saving design solutions make our machinery a cost-effective choice for businesses.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;