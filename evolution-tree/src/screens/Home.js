import NavigationBar from '../components/navigationBar';
import EvolutionaryTree from '../components/evolutionaryTree';
import { motion } from "framer-motion";
import './Home.scss'

function Home() {

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home-body">
        <NavigationBar />
        <EvolutionaryTree />
      </div>
    </motion.div>
  );
}

export default Home;
