import NavBar from "../layouts/navbar";
import LandingDesc from "../components/headlines/landingDesc";
import HeadLine from "../components/headlines/landingheadline";
import About from "../components/sections/wherewebegan";
import OurWork from "../components/sections/ourwork";
import Benefits from "../components/benefits/benefits";
import ContactForm from "../components/contact/contactform";
import Footer from "../layouts/footer";

const HomePage = () => {

    return (
        <>
            <NavBar />
            <HeadLine />
            <LandingDesc />
            <About />
            <OurWork />
            <Benefits />
            <ContactForm />
            <Footer />
        </>
    )

}

export default HomePage;