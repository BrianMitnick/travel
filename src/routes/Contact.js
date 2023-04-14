import Hero from "../componnents/Hero";
import Navbar from "../componnents/Navbar";
import osaka from "../assets/osaka.jpg"
import Footer from "../componnents/Footer";
import Contactform from "../componnents/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                Name="hero-mid"
                heroImg={osaka}
                buttonText="Japan Travel"
                url="/contact"
                btnClass="hide"
            />
            <Contactform />
            <Footer />
        </>
    )
}

export default Contact;