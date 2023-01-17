import { motion } from "framer-motion";
import NavigationBar from '../components/navigationBar';
import BackButton from "../components/backButton"; 
import './HummingBird.scss'

const hummingBird = require('../assets/hummingBirdScreen.png');
const habitat = require('../assets/birdHabitat.png');
const beak1 = require('../assets/beak1.png');
const beak2 = require('../assets/beak2.png');
const flightImg = require('../assets/flightImg.png');
const anatomy = require('../assets/anatomy.png');
const coevolution = require('../assets/hbirdcoevolution.png');


function Birds() {

  return (
    <motion.div
      className="birds-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="birds-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        <div className="header">
          <h1>Red-throated Hummingbird </h1>
          <h3>Archilochus colubris</h3>
          <div className="image-container">
            <img
              src={hummingBird}
              className="intro-pic"
              alt="Humming Bird"
            />
            <p>
              Photo by C W FCC
              <br />
              https://madisonaudubon.org/fff/2022/9/9/ruby-throated-hummingbird
            </p>
          </div>
        </div>
        <div className="introduction">
          <h2>Introduction</h2>
          <div className="text-container">
            <p>
              Weighing only 3.5 grams as an adult, 
            </p>
            <p className="italic"> Archilochus colubris </p>
            <p>
              , commonly known as the Red- throated Hummingbird are important pollinators 
              that are popular to see in North America. As one of the largest species of Hummingbirds in North America these tiny organisms migrate 
              throughout the year spending the summer and spring in Canada and the United States and then moving south to Mexico and some of the 
              southern states in the US during the winter months to stay warm. 
            </p>
          </div>
        </div>
        <div className="habitat-pic">
          <img
              src={habitat}
              className="bird-habitat"
              alt="Humming Bird Habitat"
            />
        </div>
        <div className="habitat">
          <h2>Habitat</h2>
          <div className="text-container">
            <p>
            The Red-throated Hummingbird will spend April through September in the Easten part of the United States and Canada.
            They can be found in deciduous forests and woodland forests. These forests are known for having distinct four seasons, 
            with one season where leaves fall from the branches. Water proximity is important to these tiny birds so they are able 
            to readily get insects. 
            </p>
            <p>
            When winter months come upon the United States and Canada the Hummingbirds flee south to the warmth of Mexico and the southernmost US states (ex. Florida and Texas).
            After they reach their winter home, this species lives in dry forests and citrus groves. 
            </p>
          </div>
        </div>
        <div className="food-web">
          <h2>Food Web</h2>
          <p>
            The diet of the Red-throated Hummingbird mostly consists of nectar from various plants and insects. Some of the 
            favorite plants for the Hummingbird are the red buckeye, trumpet creeper, and jewelweed. When collecting nectar from 
            these plants the bird hovers over the flower and dips its elongated beak into the flower and sticks their long 
            tongues onto the nectaries. Their tongues have structures called lamellae which are fibers on the tongue designed to 
            obtain nectar. When looking for insects the Hummingbird looks towards prey that is stuck in tree sap or on leaves of 
            trees. Insects hunted by this tiny bird are: mosquitoes, gnats, and spiders. 
          </p>
          <div className="text-container">
            <p>
              The Red-throated Hummingbird is prey to bigger bird species like owls, hawks, and eagles. Since they are so little they can 
              easily fit in these bigger predator tallens. Cats are also a predator for
            </p>
            <p className="italic">
              &nbsp;Archilochus colubris&nbsp;
            </p>
            <p>
              since many home owners love 
              to put up Hummingbird feeders to watch them, it makes them easy targets for these commonly loved felines. 
            </p>
          </div>
        </div>
        <div className="beaks">
          <h2>Beaks</h2>
          <p>
            The hummingbird beaks are one of the most known characteristics of the tiny bird's features. A Lot of research 
            has gone into this species' beaks as they are elongated and thin. Many have speculated that the reason for this 
            long shape is to be able to get deep into the flower to reach the nectar. We can compare the hummingbird beaks 
            to those of a Great Horned Owl’s beak. By looking at the figure to the right, we can observe that the owl’s beak 
            has a sharp point at the end and is overall thicker, this is because the Owl’s prey are animals that need to 
            be killed like mice. Their beaks are designed to match their food preferences like the Hummingbird.
          </p>
        </div>
        <div className="beaks-images">
          <div className="beaks-image1">
            <img
              src={beak1}
              alt="Humming bird beak 1"
            />
            <p>© Hilton Pond Center </p>
          </div>
          <div className="beaks-image2">
            <img
              src={beak2}
              alt="Humming bird beak 2"
            />    
          </div>
        </div>
        <div className="flight">
          <h2>Flight</h2>
          <div className="flight-text">
            <p>
            The flight pattern of a hummingbird is also noteworthy, when they approach the flowers they hover in the air while 
            they feed on the nectar. When they beat their wings they move in a figure eight pattern at rates of eighty beats a 
            second. The hummingbird is the only bird that is able to fly backwards. Theories have been presented that this mode 
            of transportation could have evolved being able to be competitive during foraging for insects and getting to a flower's 
            nectar first. 
            </p>
          </div>
          <img
              src={flightImg}
              alt="Humming bird flying patterns"
          />
          <img
            src={anatomy}
            alt="Humming bird anatomy"
          />    
        </div>
        <div className="coevolution">
          <h2>Coevolution</h2>
          <p>
          Theories have been shown that Hummingbirds and flowering plants have coevolved with each other for the benefit of one another. 
          One theory is that the supply of nectar in the flowers evolved during the same time where the beaks started to become elongated 
          for the bird. Some studies have shown that certain plants have developed elongated flowers like the hummingbird-plant with 
          colors known to attract the birds so they can get pollinated by that species and not others like bees. 
          </p>
        </div>
        <div className="coevolution-photo">
          <img
            src={coevolution}
            alt="hummingbird coevolution"
          />
          <p>
          Suarez, R. K., & Gass, C. L. (2002). Hummingbird foraging and the relation between bioenergetics and behaviour. 
          Comparative Biochemistry and Physiology Part A: Molecular & Integrative Physiology, 133(2), 335-343.
          </p>
        </div>
        <div className="conservation">
          <h2>Conservation</h2>
          <p>
          Although they are tiny, these hummingbirds face many big problems on our planet. A few of these are climate change, deforestation, 
          and invasive species. Climate change and deforestation are affecting these birds by getting rid of the habitats they have come to 
          live in and their food preferences are becoming to die out. Invasive plants also cause issues for the hummingbirds as they often 
          over take native plants that the bird eats from. Things that you can do to help these birds are putting up feeders and educating 
          yourself about how valuable these species are to our ecosystems.
          </p>
        </div>
        <div className="google-map">
          <iframe
            title="Google interactive migration map"
            src="https://www.google.com/maps/d/embed?mid=1Gv1agHBJ2fKydG1n2YTVPcHafnI0d3YZ&ehbc=2E312F"
            className="map"
          />
          <p>
            Interactive map provided by https://www.HummingbirdCentral.com of spring migration and first sightings of hummingbirds in the USA & 
            Canada in 2022 as reported by website viewers.
          </p>
        </div>
        <div className="cornell-map">
            <h2>Interactive Cornell Migration Map</h2>
            <a href="https://science.ebird.org/en/status-and-trends/species/rthhum/abundance-map-weekly?week=45">Animated Migration Pattern</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Birds;