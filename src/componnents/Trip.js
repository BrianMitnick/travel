import "./Trip.css"
import TripData from "./TripData";
import Trip1 from "../assets/bali.jpg"
import Trip2 from "../assets/6.jpg"
import Trip3 from "../assets/8.jpg"
import singapore from "../assets/singapore.jpg"
import newyork from "../assets/newyork.jpg"
import Usa from "../assets/USa.jpg"
import tokyo from "../assets/tokyo.jpg"
import fuji from "../assets/fuji.jpg"
import kyoto from "../assets/kyoto.jpg"
import osaka from "../assets/osaka.jpg"
import hokaido from "../assets/hokaido.jpg"
import fufuoka from "../assets/fufuoka.jpg"

function Trip() {
   return (
      <div className="trip">
         <h1>Recent Trips</h1>
         <p>you can discover unique destinations using Google Maps.</p>
         <div className="tripcard">
            <TripData
               image={Trip1}
               heading="Trip In Indonesian"
               text="Indonesia,officually the Republic of Indonesia,is a country in Southeast Asia and Ocenia between the Indian and Pacific oceans. It consists of over 17.000 island, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
            />

            <TripData
               image={Trip3}
               heading="Trip In Malaysia"
               text="Malaysia is a Southeast Asian Country accupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforest and mix of Malay,Chinese,Indian,and European Cultural influences"
            />


            <TripData
               image={Trip2}
               heading="Trip In France"
               text="France, in Western Europe,encompasses medievel cities, alpine villages and Mediterranean beaches. Paris,its capital, is famed for its fashion house, classical art mesuems including  the louvre and monuments like the eiffel Tower"
            />


         </div>
         <div className="tripcard">
            <TripData
               image={singapore}
               heading="Trip In Singapore"
               text="Singapore is a country located in Southeast Asia. It is a small island nation with a population of about 5.7 million people. Singapore is known for its cleanliness, modernity, and efficiency, as well as its diverse culture and cuisine.
               The official languages of Singapore are Malay, Mandarin, Tamil, and English. English is widely spoken and used as the main language of business, education, and government. Singapore is also a popular tourist destination with many attractions, such as Marina Bay Sands, Gardens by the Bay, Sentosa Island, and Universal Studios Singapore."
            />

            <TripData
               image={newyork}
               heading="Trip In Usa, New york"
               text="New York is a state located in the northeastern region of the United States of America. It is the 27th largest state in terms of land area and has a population of approximately 20 million people, making it the fourth most populous state in the US.
               New York State is known for its diverse geography, ranging from the Appalachian Mountains to the Hudson River Valley to the Great Lakes. It is also home to one of the world's most iconic cities, New York City, which is the most populous city in the United States with over 8 million residents. New York City is known for its landmarks such as the Statue of Liberty, the Empire State Building, Times Square, and Central Park, as well as its cultural institutions such as the Metropolitan Museum of Art and Broadway theaters."
            />


            <TripData
               image={Usa}
               heading="Trip In Uni Emirat Arabic, Dubai"
               text="Dubai is a city located in the United Arab Emirates (UAE). It is located on the southeast coast of the Persian Gulf and is one of the seven emirates that make up the UAE. Dubai is the largest city in the UAE and is known for its modern architecture, luxury shopping, and vibrant nightlife."
            />

         </div>

         <h1>Trip From Outside Of Japan To Japan</h1>
         <p>You can see on Google Maps for Local Trips</p>

         <div className="tripcard">
            <TripData
               image={tokyo}
               heading="Trip In Local Tokyo"
               text="Tokyo, Japan is one of the most popular tourist destinations in the world and offers many incredible experiences for travelers. However, it is difficult to say if Tokyo is the most touristy place because it is very subjective and depends on each individual's preferences.
               Some people may prefer natural tourist destinations such as beaches and mountains, while others may be more interested in culture, history, and architecture. Tokyo offers a variety of experiences for tourists that include delicious food, large shopping centers, advanced technology, popular attractions such as Tokyo Disneyland, art museums, flower gardens, and much more."
            />

            <TripData
               image={fuji}
               heading="Trip In Local Fuji"
               text="Mount Fuji is the tallest volcano in Japan, standing at 3,776.24 meters (12,389 feet) tall. It is located between Shizuoka Prefecture and Yamanashi Prefecture, and is one of the most famous volcanoes in the world, attracting many tourists to Japan. Mount Fuji is considered a symbol of Japan's natural beauty and was designated as a UNESCO World Heritage Site in 2013. Climbing to the summit of Mount Fuji is usually done during the summer season between July and September."
            />


            <TripData
               image={kyoto}
               heading="Trip In Local Kyoto"
               text="Kyoto, Japan is one of the most popular tourist destinations in the world, known for its beautiful traditional Japanese architecture, stunning gardens, historical shrines and temples, as well as Japanese food and crafts.
               However, just like Tokyo, it is difficult to say whether Kyoto is the most touristy place because it is very subjective and depends on each individual's preferences."
            />

         </div>

         <div className="tripcard">
            <TripData
               image={osaka}
               heading="Trip In Local Osaka"
               text="Osaka is one of the big cities in Japan that is popular as a tourist destination. However, to determine whether Osaka is the most touristy place or not, it is very subjective depending on the preferences and interests of tourists. Some people may prefer natural or beach tourist attractions, while others may prefer to visit cities that have a rich historical and cultural heritage. Osaka has many attractive tourist attractions such as Osaka Castle, Shitennoji Temple, Universal Studios Japan, and Dotonbori, which offer different tourist experiences. Therefore, it is important to consider your own interests and preferences when choosing tourist destinations that you want to visit."
            />

            <TripData
               image={hokaido}
               heading="Trip In Local Hokkaido"
               text="Hokkaido is one of the most popular tourist destinations in Japan because of its spectacular natural beauty, unique seasons, and delicious cuisine. However, it cannot be said that Hokkaido is the most popular tourist destination in the world because everyone has different preferences in choosing their vacation destinations. There are many interesting tourist attractions around the world and each place has its own uniqueness."
            />

            <TripData
               image={fufuoka}
               heading="Trip In Local Fufuoka"
               text="Fukuoka is a large city in Japan that has many interesting tourist attractions such as shrines, parks, museums, beaches, and delicious food. However, whether Fukuoka is the most popular tourist destination in the world depends on each individual's preference in choosing a vacation spot. There are many fascinating tourist spots around the world that have unique attractions."
            />

         </div>
      </div>
   )
}

export default Trip;