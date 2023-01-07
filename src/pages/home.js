import NavBar from "../layouts/navbar";
import LandingDesc from "../components/landingDesc";
import HeadLine from "../components/landingheadline";
import About from "../components/sections/wherewebegan";
import OurWork from "../components/sections/ourwork";
const HomePage = () => {

    return (
        <>
            <NavBar />
            <HeadLine />
            <LandingDesc />
            <About />
            <OurWork />
        </>
    )

}

export default HomePage;