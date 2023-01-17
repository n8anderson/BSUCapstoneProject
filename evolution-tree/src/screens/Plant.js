import { motion } from "framer-motion";
import NavigationBar from '../components/navigationBar';
import BackButton from "../components/backButton";
import './Plant.scss';

const trumpetFlower = require('../assets/trumpetFlower.png');
const trumpetFlower2 = require('../assets/trumpetFlower2.png');
const trumpetLocation = require('../assets/trumpetLocations.png');

function Plant() {

  return (
    <motion.div
      className="plant-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="plant-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        <div className="header">
          <h1>Trumpet Vine</h1>
          <h3>Campsis radicans</h3>
          <div className="image-container">
            <img
              alt="Trumpet Flower"
              src={trumpetFlower}
            />
          </div>
        </div>
        <div className="plant-info">
          <div className="info-container">
            <h2>Introduction</h2>
            <p>
              The Campis radicans also known as Trumpet vine is a plant that belongs to the family Bignoniaceae. The 
              Trumpet vine is considered an invasive plant meaning it will often over take a habitat and take resources 
              away from other plants that live in the area. A single Trumpet vine can grow up to 35 feet tall. On the 
              branches flowers in the shape of trumpets will grow in colors like reds, yellows, and oranges. These plants 
              depend on pollinators such as bees and hummingbirds to collect its pollen to help it reproduce.
            </p>
          </div>
          <div className="info-container">
            <h2>Climate</h2>
            <p>
              Native to eastern North America this vine can be found in states as east as Ohio and South Dakota. 
              The progress map of where the population of Trumpet Vines is shown shows that it is slowly moving it’s 
              way out north into california. This plant can live in various climates from hot to cold. 
            </p>
          </div>
          <div className="info-container">
            <h2>Coevolution</h2>
            <p>
              The Trumpet vine has evolved to have its unique shape through years of adaptations, the shape allows 
              pollinators like humming birds and bees to insert their tongues deep into the flower to get its nectar. 
              As the pollinator intakes the nectar the flowers pollen sticks on the pollinator. The hummingbird's beak 
              was adapted to fit into these types of flowers. The colors of the flowers are also to get the attention 
              of the birds as the birds can only see certain colors such as reds and yellows. 
            </p>
          </div>
          <div className="info-container">
            <h2>Conservation</h2>
            <p>
              Clownplant are not endangered. If interested in having a pet Clownplant ensure that they are not plant that were taken 
              from the ocean, but instead from breeders that have had generations of Clownplant that were not from the ocean. This 
              will ensure that the population of the wild Clownplant will not decrease. Another way to protect the Clownplant is to 
              make sure that their homes the sea anemones are also protected from climate change and human activity.
            </p>
          </div>
        </div>
        <div className="plant-photos">
          <div className="image-container">
            <img
              src={trumpetFlower2}
              alt="Trumpet Flower"
            />
            <p>The Spruce / Adrienne Legault</p>
          </div>
          <div className="image-container">
            <img
              src={trumpetLocation}
              alt="Areas in united states where trumpet flower is found"
            />
            <p>Department of Agriculture</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Plant;