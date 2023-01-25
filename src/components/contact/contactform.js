import "./contactform.css";


const ContactForm = () => {

    return (
        <div className="container">
        <div className="row">
            <h3 className="section-title text-center" id="contact">Reach Out To Us!</h3>
        </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8">
                    <form>
                        <div class="form-group text-light" style={{lineSpacing:".25rem"}}>
                            <label for="name">Name</label>
                            <input type="text" class="form-control bg-transparent text-light" id="name" aria-describedby="name" placeholder="Your Name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control bg-transparent text-light" id="email" placeholder="Your Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control bg-transparent text-light" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn form-button" onClick={e => e.preventDefault()}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactForm;
