import NavigationBar from '../components/navigationBar';
import EvolutionaryTree from '../components/evolutionaryTree';
import axios from 'axios';
import { motion } from "framer-motion";
import './Home.scss'
const audioSound = require('../assets/candyland.mp3');

function Home() {

  const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/testApi';

  const handleClick = () => {
    axios.post(apiURL, {
      message: 'Hello API do you work?'
    })
  }

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
          <button className="button" onClick={() => handleClick()}>Play me</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
