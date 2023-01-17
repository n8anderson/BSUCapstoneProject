import { motion } from 'framer-motion';
import NavigationBar from '../components/navigationBar';
import BackButton from '../components/backButton';
import './Educator.scss'

function Educator() {


  return (
    <motion.div
      className="educator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="educator-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        <div className="resources">
          <h1>Other Sources</h1>
          <div classname="link-container">
            <a
              className="case"
              href="https://www.bridgew.edu/center/case"
            >
              Bridgewater State University Case
            </a>
            <i class="fas fa-link"></i>
          </div>
          <div classname="link-container">
            <a
              className="darwin-day"
              href="https://www.bridgew.edu/center/case/darwin-day"
            >
              Bridgewater State University Darwin Day
            </a>
            <i class="fas fa-link"></i>
          </div>
          <div classname="link-container">
            <a
              className="sway"
              href="https://sway.office.com/jLGxoLO4s3zQUoJF?ref=Link "
            >
              Morphological Module: Using Skulls to Create a Bat Phylogenetic Tree
            </a>
            <i class="fas fa-link"></i>
          </div>
        </div>
        <div className="media">
          <h1>Media Links</h1>
          <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/IPjiFG43ZZg"
              title="Misconceptions"
            />
            <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/GhHOjC4oxh8"
              title="What is Evolution?"
            />
        </div>
        <div className="lesson-plan">
          <div className="linking">
            <a
              href="https://google.com"
            >
              Lesson Plan
            </a>
            <i class="fas fa-link"></i>
          </div>
        </div>
        <div className="activities">
          <h1>Activities</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Educator;