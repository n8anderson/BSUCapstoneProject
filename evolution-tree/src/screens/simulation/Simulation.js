import { motion } from 'framer-motion';
import NavigationBar from '../../components/navigationBar';
import BackButton from '../../components/backButton';
import './Simulation.scss';
import SpeciesCreator from '../../components/simulation/speciesCreator';

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/testApi';

function Simulation() {
  return (
    <motion.div className="simulation-screen">
      <NavigationBar />
      <div className="back-button-container">
        <BackButton />
      </div>
      <div className="species-creator">
        <SpeciesCreator />
      </div>
    </motion.div>
  )
}

export default Simulation;