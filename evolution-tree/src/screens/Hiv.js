import { motion } from 'framer-motion';
import NavigationBar from '../components/navigationBar';
import BackButton from '../components/backButton';
import './Hiv.scss';

const hivStruct = require('../assets/hivstructure.png');
const symptoms = require('../assets/symptoms.png');

function Hiv() {

  return (
    <motion.div className="hiv-screen">
      <NavigationBar />
      <div className="hiv-grid-wrapper">
      <div className="back-button-container">
          <BackButton />
        </div>
        <div className="header">
          <h1>Human Immunodeficiency Virus</h1>
          <h3>HIV</h3>
          <img
            src={hivStruct}
            alt="Sebae Hiv"
          />
        </div>
        <div className="hiv-photos-1">
          <img
            src={symptoms}
            alt="Sebae Hiv Habitat"
          />
        </div>
      
        <div className="hiv-photos-2">
            <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/12vTnXekJu8 "
              title="Misconceptions"
            />
            <p>CDC</p>
        </div>
       
        <div className="hiv-info">
          <div className="info-container">
            <h2>Introduction</h2>
            <p>
              The Human Immunodeficiency Virus (HIV) is one of the most infamous viruses found on Earth, found in 
              70 countries this virus has inflicted over 60 million individuals just in the past 25 years. Spread 
              through unprotected sex, needles, and from mother to child through breast milk this virus originally 
              started in central Africa in 1800 when a champanzee possibly transmitted the virus to a human. The 
              theory of transmission is a hunter came into contact with a chimp that was infected with the virus 
              simian immunodeficiency virus and came into contact with the chimp’s blood. The simian immunodeficiency 
              virus is the original virus that started in apes and when humans are infected the virus mutates to 
              become the human immunodeficiency virus. The virus then spread throughout Africa infecting men, women, 
              and children. In the 1970s the virus came to the United States causing symptoms such as rash, mouth 
              ulcers, sore throat, fever, and muscle aches. When HIV goes without treatments and lives in the host 
              for an extended amount of time the virus will lead to Acquired Immunodeficiency Syndrome which is an 
              untreatable condition that will lead to death. It wasn’t until 10 years after the US was introduced 
              to the virus the Center of Disease Control (CDC) announced that HIV/AIDS was an epidemic. An epidemic 
              is when a virus is spreading quickly through a community or population. An epidemic is different from 
              a pandemic as a pandemic is an illness that has spread throughout the entire world. To this day the 
              United States is still in a HIV epidemic, the World Health Organization (WHO) it is a mission of the 
              United Nations to end the HIV pandemic by the year 2030. 
            </p>
          </div>
          <div className="info-container">
            <h2>Virus Definition</h2>
            <p>
              The virus is spread through various ways some can be through contact with an infected individual's blood, 
              using used needles after an infected individual, and if an infected mother breast feeds their infected child. 
              The virus does not spread through saliva like Covid or the flu
            </p>
          </div>
          <div className="info-container">
            <h2>Immune System</h2>
            <p>
              When a person comes into contact with the virus, it will enter into the person's blood stream where it will 
              be met by the dendritic immune cells. Dendritic immune cells are responsible for detecting forigen particles 
              in our system and these cells will go up to these particles and will try to eliminate them before they pose 
              a bigger threat to our body systems. When the virus comes into contact with these immune cells the virus 
              disguises itself and inserts its genetic information into the immune cells and takes it over. The virus will 
              then start to replicate itself, this will trigger immune responses to help fight the virus, however the virus 
              replicates itself so fast that the responses do not work. If the virus stays in the body and the host’s immune 
              system can not fight the virus then AIDS will develop. 
            </p>
          </div>
          <div className="info-container">
            <h2>Prevention</h2>
            <p>Toxins:</p>
            <p>
              The best way to avoid the HIV virus is to ensure that you avoid direct blood contact with other individuals. 
              If you need to clean up someone's blood, ensure that you are wearing gloves and you dispose of the gloves properly. 
              Do not share used medical needles with anyone else. If you use needles to inject medicine make sure that you wear 
              gloves and you dispose of your needles in the  proper disposable bins. Make sure to wear protection during sex 
              such as condoms as they can prevent the spread of multiple sexually transmited dieases. A preventative pill is 
              also available to individuals to use to help prevent the transmission of HIV. 
            </p>
          </div>
          <div className="info-container">
            <h2>Coevolution</h2>
            <p>
              The HIV virus is a rapidly changing virus that can change its form and envelope lipids to help disguise itself 
              from our immune system. However, our immune system has also been adapting and changing to ensure that we do not 
              get sick. This is called an arms race, to ensure that one survives either the human host or the virus will have 
              to constantly evolve in order to survive. The only way that the HIV virus will win is if an even more aggressive 
              form of the virus is created by having an original virus mutate. If a more aggressive form of the virus then our 
              immune system will not be able to defeat the virus and it will be able to keep replicating
            </p>
          </div>
          <div className="info-container">
            <h2>Conservation</h2>
            <p>
              The Sebae Hiv is not endangered. To help protect sea anemones including the Sebae Hiv, humans 
              can take action to help decrease the rate of climate change which will destroy the hiv by causing 
              water temperatures and pH to increase/decrease. Human activity like diving and collecting the anemia 
              for personal aquariums.
            </p>
          </div>
        </div>
        <div className="citation">
          <h3>Citations</h3>
          <div className="citation-container">
            <p
              className="cite"
            >
              Moss, A. R., & Bacchetti, P. (1989). Natural history of HIV infection. Aids, 3(2), 55-62.
            </p>
          </div>
          <div className="citation-container">
            <p
              className="cite"
            >
              Telenti, A. (2005). Adaptation, co-evolution, and human susceptibility to HIV-1 infection. Infection, Genetics and Evolution, 5(4), 327-334.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hiv;