import Hero from "../componnents/Hero";
import Navbar from "../componnents/Navbar";
import thumbnail from "../assets/thumbnail.jpg"
import Destination from "../componnents/Destination";
import Trip from "../componnents/Trip";
import Footer from "../componnents/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                Name="hero"
                heroImg={thumbnail}
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination."
                buttonText="JapanTravel"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home;