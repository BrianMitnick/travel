import Hero from "../componnents/Hero";
import Navbar from "../componnents/Navbar";
import kyoto from "../assets/kyoto.jpg"
import Footer from "../componnents/Footer";
import AboutUs from "../componnents/AboutUs";



function About() {
    return (
        <>
            <Navbar />
            <Hero
                Name="hero-mid"
                heroImg={kyoto}
                buttonText="Travel Plan"
                url="/about"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;