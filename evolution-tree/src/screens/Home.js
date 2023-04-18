import NavigationBar from '../components/navigationBar';
import EvolutionaryTree from '../components/evolutionaryTree';
import { motion } from "framer-motion";
import './Home.scss'

function Home() {

  return (
    <div className="App">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
        <div className="App-body">
          <NavigationBar />
          <EvolutionaryTree />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
