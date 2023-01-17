import { motion } from "framer-motion";
import NavigationBar from '../components/navigationBar';
import BackButton from "../components/backButton";
import './Intro.scss'
const hummingBird = require('../assets/hummingbird.png');
const flower = require('../assets/flower.png');
const paleontology = require('../assets/paleontology.png');
const darwin = require('../assets/darwin.png');
const finch = require('../assets/finch.png');

function Intro() {

  const whatIs = 'Evolution is a slow and gradual process that every species has gone through.'
                  + ' It is when adaptations are inherited through generation of a species. ';
  const whyDoes = 'The driving force behind evolution is called natural selection. ' 
                  + 'Natural selection is a process that can lead to a species evolution by adaptations. '
                  + 'In species genomes mutations can happen randomly, if these mutations benefit a species in '
                  + 'survival then they are likely to be passed on within generations. This is the concept behind the phase ' 
                  + '“Survival of the fittest”. We are not looking for the strongest organisms but the likelihood of that '
                  + 'organism being able to survive to reproduce. If organisms do not have this beneficial mutation then they '
                  + 'will likely be killed meanng their genetics with out the mutations will be ended. ';

  const misconception = 'There are many misconceptions of the process of evolution. In many cases people just say that evolution '
                  + 'is just a “theory” and is not a definite fact. However, in science a theory is an idea that is supported with '
                  + ' an abundant amount of expert based sources that agree with the idea.';
  const misconceptionLine1 = 'To much of our belief humans are not the most evolved species. The Earth has been around for 4.5 billion years '
                  + 'so to believe that we are the most evolved species isn’t correct. In fact ever organism on Earth is equally '
                  + 'as evolved as one another and humans just were able to develop a more complex brain than some of the other ';
  const misconceptionLine2 ='(but that does not make us the best species).'
                  + 'Evolution is not random. It just doesn’t happen one day, it takes thousands of years and generations. The process '
                  + 'of evolution occurs when an organisms is given an adaptation that allows it to be able to survive long enough for the adaptation to go on. ';
  const coevolution = 'Co evolution is the process of evolution occurring at the same time between two or more species where the two species depend on the others evolution.'
  const studyOf = 'Evolution and Coevolution can be studied by using many different branches of science: Paleontology, Phylogenics, Ethology, Genomics, '
                  + 'and Molecular Biology. Paleontology is the study of fossils of animals and organisms found by paleontologists. They compare and '
                  + 'contrast different bone structures among different organisms to see if they are related. Phylogenics is the study of evolutionary '
                  + 'relationships and can show us the relationships among different species. Ethology is the study of animal behavior and can tell us and '
                  + 'other researchers how the organisms interact with their environment and how evolution has shaped that interaction. More modern techniques '
                  + 'used today are genomics and molecular biology. Genomics is the study of organisms\' genomes such as DNA and its genes. Molecular biology '
                  + 'is the study of cellular molecules.'
  return (
    <motion.div
      className="intro"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: '100%',transition: { duration: 0.1 } }}
    >
      <NavigationBar />
      <div className="intro-grid-wrapper">
      <div className="back-button-container">
          <BackButton />
        </div>
        <div className="intro-header">
          <h1>Introduction to Evolution</h1>
        </div>
        <div className="about-evo">
          <div className="what-is">
            <h3>What is Evolution:</h3>
            <p>{whatIs}</p>
            <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/GhHOjC4oxh8"
              title="Misconceptions"
            />
          </div>
          <div className="why-does">
            <h3>Why does evolution happen?</h3>
            <p>{whyDoes}</p>
          </div>
          <div className="misconception">
            <h3>Misconceptions of Evolution:</h3>
            <p>
              {misconception}
              <br />
              <br />
              {misconceptionLine1}
              <br />
              <br />
              {misconceptionLine2}
            </p>
          </div>
          <div className="misconception-vid">
            <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/IPjiFG43ZZg "
              title="Misconceptions"
            />
          </div>
          <div className="coevolution">
            <h3>What is coevolution:</h3>
            <p>{coevolution}</p>
          </div>
          <img
            src={hummingBird}
            className="coevolution-pic-left"
            alt="Humming Bird"
          />
          <img
            src={flower}
            className="coevolution-pic-right"
            alt="Flower"
          />
          <div className="study-of">
            <h3>How is Evolution and Co-Evolution Studied:</h3>
            <p>{studyOf}</p>
          </div>
          <img
            src={paleontology}
            className="study-of-pic"
            alt="Paleontology"
          />
        </div>
        <div className="vocab">
          {/* Vocab */}
          <h3>Evolution Vocabulary</h3>
          <dl>
            <dt>Evolution</dt>
            <dd>Genetic change over time.</dd>
            <dt>Co-evolution</dt>
            <dd>Evolution of species that are closely associated with each other.</dd>
            <dt>Adaptation</dt>
            <dd>When species inherit traits that will make them be able to outcompete with the other individuals in the same population.</dd>
            <dt>Mutation</dt>
            <dd>Change in organisms genetics.</dd>
            <dt>Natural Selection</dt>
            <dd>The process that can lead to the evolution of organisms by adaptations.</dd>
            <dt>Genomics</dt>
            <dd>
              The study of genomes 
              {'('}
              DNA and its genes
              {')'}
              .
            </dd>
            <dt>Molecular Biology</dt>
            <dd>The study of cellular molecules.</dd>
            <dt>Paleontology</dt>
            <dd>Study of fossils.</dd>
            <dt>Phylogenetic Trees</dt>
            <dd>Shows evolutionary relationships.</dd>
            <dt>Ethology</dt>
            <dd>Study of animals behavior.</dd>
            <dt>Survival of the Fittest</dt>
            <dd>Likelyhood of being able to survive to reproduce</dd>
          </dl>
        </div>
        <div className="scientists">
          <h3 className="darwin-header">Charles Darwin</h3>
          <img
            className="darwin-pic"
            src={darwin}
            alt="Charles Darwin"
          />
          <p className="darwin-desc">
            Darwin was a naturalist aboard the HMS Beagle and traveled to many different regions like the Galapagos Islands. 
            When traveling, Darwin sketched down his observations between different organisms and found that organisms seemed 
            to have different traits depending on their environments and needs. While in the Galapagos he studied finches and tortoises. 
            Once he returned to England after his journey he compiled all of his findings in a book that he published in 1859 called 
            the “Theory of Evolution”. The theory popularized the idea that species change over time, however to many at the time it 
            seemed controversial. 
          </p>
          <img
            className="finch-pic"
            src={finch}
            alt="Galapagos Finch"
          />
          {/* Scientist behind Evolution*/}
        </div>
        <div className="citation">
          <h3>Citations</h3>
          {/* Vocab */}
          <div className="citation-container">
            <a
              className="cite"
              href="https://happygringo.com/blog/darwins-galapagos-finch/"
            >
              Darwin's finches: An icon of evolution at the Galapagos Islands. Happy Gringo Travel. (n.d.). Retrieved October 1, 2022, from https://happygringo.com/blog/darwins-galapagos-finch/ 
            </a>
          </div>
          <div className="citation-container">
            <a
              className="cite"
              href="https://www.amnh.org/research/paleontology"
            >
              Division of Paleontology. American Museum of Natural History. (n.d.). Retrieved October 1, 2022, from https://www.amnh.org/research/paleontology
            </a>
          </div>
          <div className="citation-container">
            <a
              className="cite"
              href="https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_Introductory_Biology_(CK-12)/05%3A_Evolution/5.23%3A_Coevolution"
            >
              Libretexts. (2021, March 6). 5.23: Coevolution. Biology LibreTexts. Retrieved October 1, 2022, from https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_Introductory_Biology_(CK-12)/05%3A_Evolution/5.23%3A_Coevolution
            </a>
          </div>
          <div className="citation-container">
            <a
              className="cite"
              href="https://www.smithsonianmag.com/science-nature/the-evolution-of-charles-darwin-110234034/"
            >
              Magazine, S. (2005, December 1). The evolution of Charles Darwin. Smithsonian.com. Retrieved October 1, 2022, from https://www.smithsonianmag.com/science-nature/the-evolution-of-charles-darwin-110234034/
            </a>
          </div> 
          <div className="citation-container">
            <a
              className="cite"
              href="https://www.youtube.com/watch?v=GhHOjC4oxh8"
            >
              sciencestatedclearly. (2013, January 10). What is evolution? YouTube. Retrieved October 1, 2022, from https://www.youtube.com/watch?v=GhHOjC4oxh8 
            </a>
          </div> 
          <div className="citation-container">
            <a
              className="cite"
              href="https://www.youtube.com/watch?v=IPjiFG43ZZg"
            >
              scishow. (2017, February 8). Common misconceptions about evolution. YouTube. Retrieved October 1, 2022, from https://www.youtube.com/watch?v=IPjiFG43ZZg 
            </a>
          </div> 
          <div className="citation-container">
            <a
              className="cite"
              href="https://fineartamerica.com/featured/trumpet-honeysuckle-william-tasker.html"
            >
              Tasker, W. (n.d.). Trumpet honeysuckle by William Tasker. Fine Art America. Retrieved October 1, 2022, from https://fineartamerica.com/featured/trumpet-honeysuckle-william-tasker.html
            </a>
          </div> 
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;