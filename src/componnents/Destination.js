import "./Destination.css"
import DestinationData from "./DestinationData"
import fuji from "../assets/fuji.jpg"
import tokyo from "../assets/tokyo.jpg"
import tokyo2 from "../assets/tokyo2.jpg"
import fuji2 from "../assets/fuji2.jpg"


const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Give the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="firts-des"
        heading="Tokyo"
        text="Tokyo, Japan is one of the most popular tourist destinations in the world and offers many incredible experiences for travelers. However, it is difficult to say if Tokyo is the most touristy place because it is very subjective and depends on each individual's preferences. Some people may prefer natural tourist destinations such as beaches and mountains, while others may be more interested in culture, history, and architecture. Tokyo offers a variety of experiences for tourists that include delicious food, large shopping centers, advanced technology, popular attractions such as Tokyo Disneyland, art museums, flower gardens, and much more"
        img1={tokyo}
        img2={tokyo2}
      />

      <DestinationData
        className="firts-des-reverse"
        heading="Mt. Fuji"
        text="Mount Fuji is the tallest volcano in Japan, standing at 3,776.24 meters (12,389 feet) tall. It is located between Shizuoka Prefecture and Yamanashi Prefecture, and is one of the most famous volcanoes in the world, attracting many tourists to Japan. Mount Fuji is considered a symbol of Japan's natural beauty and was designated as a UNESCO World Heritage Site in 2013. Climbing to the summit of Mount Fuji is usually done during the summer season between July and September. "
        img1={fuji}
        img2={fuji2}
      />
    </div>
  )
}

export default Destination