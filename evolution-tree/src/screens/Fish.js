
import { motion } from "framer-motion";
import NavigationBar from '../components/navigationBar';
import BackButton from "../components/backButton";
import './Fish.scss';

const clownFish = require('../assets/clownfish.png')
const clownFishMap = require('../assets/clownfish-map.png')
const clownFishEvo = require('../assets/clownfish-evo.png')

function Fish() {

  return (
    <motion.div
      className="fish-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="fish-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        <div className="header">
          <h1>Clown Fish</h1>
          <h3>Amphiprioninae ocellaris</h3>
          <div className="image-container">
            <img
              src={clownFish}
              className="intro-pic"
              alt="Clown Fish"
            />
          </div>
        </div>
        <div className="clownfish-info">
          <div className="info-container">
            <h2>Introduction</h2>
            <p>
              Most known for being featured in the hit Pixar movie Finding Nemo, the Clownfish (Amphiprioninae ocellaris) 
              are fish that live in warmer waters in the pacific ocean. These types of fish are monogamous which means that 
              once they find a mate, they will stay with each other for the rest of their life span. However, if the female 
              of the pair disappears then the males can choose gender roles and can take over the reproduction responsibilities. 
              This adaptation increases the population rate and the reproduction rate, ensuring that the fish's genes will be 
              passed on and will decrease the risk of extinction among the population.
            </p>
          </div>
          <div className="info-container">
            <h2>Habitat</h2>
            <p>
              Found in sea beds and reefs, these fish live in the warmer waters (25-28℃) of the pacific ocean around Australia, 
              New Guinea, and California. Clownfish are considered to be habitat specialists, which means that they know how to 
              optimize their habitat in order to survive. What makes this type of fish  specialized is their relationship with 
              sea anemone as they have found a home in these toxic stinging animals. The usual depth where anemias and clownfish 
              can be found is typically around 1 to 12 meters. 
            </p>
          </div>
          <div className="info-container">
            <h2>Food Web</h2>
            <p>
              The clownfish are typically omnivores which means that they can eat both meat and plants. Their main food source are 
              plankton and planktonic algae, but are known for eating remnants of other fish that have fallen prey to their 
              predator. Predators of the clownfish include: great white sharks, barracudas, and other larger fish. The protection 
              of the clown fishes home the sea pneumonia helps ward off these predators. 
            </p>
          </div>
          <div className="info-container">
            <h2>Evolution</h2>
            <p>Bodys:</p>
            <p>
            The Clownfish are recognizable because of their signature white strips and their orange bodies. Studies have compared and 
            contrasted different type of clownfish around the world and discovered that the famous stripes, body shape, and dorsal fin 
            shape are all related to the habitat of the species of fish. This could depend on the type of predator that lives in the 
            area, if the reef or seabed is rocky or smooth. 
            </p>
          </div>
          <div className="info-container">
            <h2>Coevolution</h2>
            <p>
              There is a coevolution between Clownfish and the sea anemone species Heteractis crispa, H. magnifica, and Stichodactyla 
              gigantea. The Clownfish have evolved a mucus coating on its body to ensure that the venous tentacles of the sea anemone. 
              In return the sea anemone is protected from its predators as the Clownfish help chase them away and the feces of the 
              fish is food for the anemone. 
            </p>
          </div>
          <div className="info-container">
            <h2>Conservation</h2>
            <p>
              Clownfish are not endangered. If interested in having a pet Clownfish ensure that they are not fish that were taken 
              from the ocean, but instead from breeders that have had generations of Clownfish that were not from the ocean. This 
              will ensure that the population of the wild Clownfish will not decrease. Another way to protect the Clownfish is to 
              make sure that their homes the sea anemones are also protected from climate change and human activity.
            </p>
          </div>
        </div>
        <div className="clownfish-photos">
          <img
            src={clownFishMap}
            alt="Map of clownfish habitat"
          />
          <img
            src={clownFishEvo}
            alt="Clownfish evolution chart"
          />
        </div>
        <div className="citation">
          <h3>Citations</h3>
          {/* Vocab */}
          <div className="citation-container">
            <a
              className="cite"
              href="https://doi.org/10.1038/srep35461"
            >
              Casas, L., Saborido-Rey, F., Ryu, T. et al. Sex Change in Clownfish: Molecular Insights from Transcriptome Analysis. Sci Rep 6, 35461 (2016). https://doi.org/10.1038/srep35461
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
              Maison, K. A., & Graham, K. S. (2016). Status review report: orange clownfish (Amphiprion percula).
            </p>
          </div>
          <div className="citation-container">
            <a
              className="cite"
              href="https://doi.org/10.1186/s12915-018-0559-7"
            >
              Salis, P., Roux, N., Soulat, O. et al. Ontogenetic and phylogenetic simplification during white stripe evolution in clownfishes. BMC Biol 16, 90 (2018). https://doi.org/10.1186/s12915-018-0559-7
            </a>
          </div> 
          <div className="citation-container">
            <a
              className="cite"
              href="https://doi.org/10.1186/1471-2148-12-212"
            >
              Litsios, G., Sims, C.A., Wüest, R.O. et al. Mutualism with sea anemones triggered the adaptive radiation of clownfishes. BMC Evol Biol 12, 212 (2012). https://doi.org/10.1186/1471-2148-12-212
            </a>
          </div> 
          <div className="citation-container">
            <p
              className="cite"
            >
              Maison, K. A., & Graham, K. S. (2016). Status review report: orange clownfish (Amphiprion percula).
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Fish;