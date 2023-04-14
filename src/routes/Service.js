import Hero from "../componnents/Hero";
import Navbar from "../componnents/Navbar";
import tokyo from "../assets/tokyo.jpg"
import Footer from "../componnents/Footer";
import Trip from "../componnents/Trip";


function Service() {
    return (
        <>
            <Navbar />
            <Hero
                Name="hero-mid"
                heroImg={tokyo}
                buttonText="Travel Plan"
                url="/service"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;