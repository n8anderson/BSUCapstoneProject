import { motion } from 'framer-motion';
import NavigationBar from '../components/navigationBar';
import BackButton from '../components/backButton';
import './Anemone.scss';

const anemoneheader = require('../assets/anemone.png');
const anemFoodWeb = require('../assets/anemFoodWeb.png');
const anemHabitat = require('../assets/anemHabitat.png');
const anemCoEv = require('../assets/anemCoEv.png');

function Anemone() {

  return (
    <motion.div className="anemone-screen">
      <NavigationBar />
      <div className="anemone-grid-wrapper">
      <div className="back-button-container">
          <BackButton />
        </div>
        <div className="header">
          <h1>Sebae anemone</h1>
          <h3>Heteractis crispa</h3>
          <img
            src={anemoneheader}
            alt="Sebae Anemone"
          />
        </div>
        <div className="anemone-photos-1">
          <img
            src={anemHabitat}
            alt="Sebae Anemone Habitat"
          />
          <img
            src={anemCoEv}
            alt="Sebae Anemone Coevolution Example"
          />
        </div>
        <div className="anemone-photos-2">
          <img
              src={anemFoodWeb}
              alt="Sebae Anemone Food Web"
            />
        </div>
        <div className="anemone-info">
          <div className="info-container">
            <h2>Introduction</h2>
            <p>
            Apart from the oldest family of venomous marine animals, Heteractis crispa also known as the Sebae 
            Anemone have tentacles that possess organelles that contain a toxin that can be used to kill predators. 
            They attach themselves to rocks through a part of their body called the pedal. On the opposite side 
            from the pedal there is a mouth to intact their food. These deadly animals are often found on warm 
            water off of the Indian and Pacific ocean. They can grow to be 22 centimeters (12 inch.). They have 
            famously formed a close relationship with fish that help protect each other. 
            </p>
          </div>
          <div className="info-container">
            <h2>Habitat</h2>
            <p>
              Found in warmer waters (25-28℃) anemone can be found in shallow reefs, seabeds, and lagoons. 
              When in a symbiotic relationship with fish they can be found typical depth of their habitats are 
              from 1 to 12 meters. However, when they are by themselves they can be found at depths of 50 meters. 
              This animal tends to live in rocky environments so they can attach themselves to a stable anchor. 
            </p>
          </div>
          <div className="info-container">
            <h2>Food Web</h2>
            <p>
              The preferred food preferences of the Sebae Anemone are shrimp, squaid, and silverside. Before eating, 
              the anemone will sting their prey to cause the prey’s body to seize up and become debilitated so the 
              animal can easily consume their food without having to fight. Sebae Anemone fall victim to predators 
              such as angelfish, starfish, and even other Anemone. By having a symbiotic relationship with anemone 
              fish such as clown fish, they can help fight off predators of the anemone and keep them safe. 
            </p>
          </div>
          <div className="info-container">
            <h2>Evolution</h2>
            <p>Toxins:</p>
            <p>
              Studies have been performed to determine the evolution of the toxins found in the tenaces of the Sebae 
              Anemone. Each tentacle contains cells called nematocysts, which allows the anemone to sting their prey. 
              When the tentacle striked the prey the toxins from the cells can cause the victim to have parasysis, 
              pain, and tissue damage. Similar cells are found in other toxic animals around the world for example 
              in frogs and jellyfish. These cells function as a mutation found in the genome of these animals. It is 
              predicted that a lack of defenses caused the animal another time to compensate and to create a defense 
              to ward off predators and to get their prey. So over time there was a gradual mutation in the gene to 
              create these toxins. Researchers are still unaware of how these mutations occurred as it has been very 
              understudied.
            </p>
          </div>
          <div className="info-container">
            <h2>Coevolution</h2>
            <p>
              The Sebae Anemone is one of the three anemone that has coevolved with Clownfish. Clownfish have evolved 
              to have a mucous coating on its bodies that helps protect the fish from the stinging tentacles of the 
              anemone which they have made home out of. In return the Clownfish help keep away the anemone predators 
              and release their feces into the anemone for a food source. 
            </p>
          </div>
          <div className="info-container">
            <h2>Conservation</h2>
            <p>
              The Sebae Anemone is not endangered. To help protect sea anemones including the Sebae Anemone, humans 
              can take action to help decrease the rate of climate change which will destroy the anemone by causing 
              water temperatures and pH to increase/decrease. Human activity like diving and collecting the anemia 
              for personal aquariums.
            </p>
          </div>
        </div>
        <div className="citation">
          <h3>Citations</h3>
          {/* Vocab */}
          <div className="citation-container">
            <a
              className="cite"
              href="https://audubonnatureinstitute.org/aquarium/sea-anemone"
            >
              https://audubonnatureinstitute.org/aquarium/sea-anemone
            </a>
          </div>
          <div className="citation-container">
            <p
              className="cite"
              href="https://www.amnh.org/research/paleontology"
            >
              Maison, K. A., & Graham, K. S. (2016). Status review report: orange clownfish (Amphiprion percula).
            </p>
          </div>
          <div className="citation-container">
            <p
              className="cite"
            >
              Andreev YA, Kozlov SA, Koshelev SG, Ivanova EA, Monastyrnaya MM, Kozlovskaya EP, Grishin EV. Analgesic compound from sea anemone Heteractis crispa is 
              the first polypeptide inhibitor of vanilloid receptor 1 (TRPV1). J Biol Chem. 2008 Aug 29;283(35):23914-21. doi: 10.1074/jbc.M800776200. Epub 2008 Jun 25. 
              PMID: 18579526; PMCID: PMC3259759.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Anemone;