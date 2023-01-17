import { motion } from "framer-motion";
import NavigationBar from '../components/navigationBar';
import BackButton from "../components/backButton"; 
import './BuchAph.scss'

const buchAphPic = require('../assets/BuchAph.png');
const buchCoev = require('../assets/BuchCoev.png');

function BuchAph() {

  return (
    <motion.div
      className="buch-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="buch-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        <div className="header">
          <h3>Buchnera aphidicola</h3>
          <div className="image-container">
            <img
              src={buchAphPic}
              className="intro-pic"
              alt="Buchnera aphidicola"
            />
            <p>
              University of Minnesota
              <br />
              Ross, L., Pen, I., & Shuker, D. M. (2010). Genomic conflict in scale insects: the causes and consequences of bizarre genetic systems. 
              Biological Reviews, 85(4), 807-828.
            </p>
          </div>
        </div>
        <div className="introduction">
          <h2>Introduction</h2>
          <div className="text-container">
            <p>
              The bacteria 
            </p>
            <p className="italic"> Buchnera aphidicola </p>
            <p>
              is the only member of the genus Buchnera. The bacteria is specialized and works exclusively with the insect Pea aphids. 
              Aphids are tiny insects that eat the sap of various garden plants. The bacteria is found in the stomach of the aphids. 
              In order to survive the bacteria requires nutrients similar to what the aphids desire. They are obligate symbiont which 
              means that they require oxygen and they live in their host symbiotically. While living in the stomach the bacteria performs 
              a feedback loop that intacts the food from the aphids and releases essential amino acids as a waste product. The structure 
              itself consists of a small genome with only 650 kilobases compared to aphids who have 12 genes which can consist of 6 million 
              bases. On the outside of the bacteria there is a thick cell wall and membrane to protect it from the other substances held in 
              the aphids.
            </p>
          </div>
        </div>
        <div className="coevolution">
          <h2>Coevolution</h2>
          <p>
            There is a significant coevolution between the Pea Aphid and Buchnera aphidicola. The two have developed a relationship that 
            is almost as old as the species itself (50 million years), they both evolved to rely on each other for performing vital needs. 
            For example the diet of aphids lacks significantly in proper amino acids to help the aphid to break down food, grow, and 
            repair/rebuild body tissues. In reverse the Buchnera aphidicola gains nutrients it needs to survive and to gain protection 
            from the environment. 
          </p>
        </div>
        <div className="coevolution-photo">
          <img
            src={buchCoev}
            alt="Buchnera aphidicola coevolution"
          />
          <p>
            Photo by Shipher Wu.*
            <br />
            Ross, L., Pen, I., & Shuker, D. M. (2010). Genomic conflict in scale insects: the causes and consequences of bizarre genetic systems. Biological 
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default BuchAph;