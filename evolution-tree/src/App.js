
import './App.scss';
import {
  Routes,
  useLocation,
  Route
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '@fontsource/sora';
import '@fontsource/roboto';
import Home from './screens/Home';
import Educator from './screens/Educator';
import Plant from './screens/Plant';
import HummingBird from './screens/HummingBird';
import Anemone from './screens/Anemone';
import Hiv from './screens/Hiv';
import BuchAph from './screens/BuchAph';
import Fish from './screens/Fish';
import Intro from './screens/Intro';

// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const emulatorsEnabled = true;
const firebaseConfig = emulatorsEnabled ? 
{
  apiKey: "AIzaSyCFAtoMg1YNQIDlJrS76hQe0qPVMjq449M",
} : {
  apiKey: "AIzaSyCFAtoMg1YNQIDlJrS76hQe0qPVMjq449M",
  authDomain: "bsu-directed-study.firebaseapp.com",
  projectId: "bsu-directed-study",
  storageBucket: "bsu-directed-study.appspot.com",
  messagingSenderId: "743922708266",
  appId: "1:743922708266:web:29fb0198ba06f40fb73853",
  measurementId: "G-914027ME73"
};

if (emulatorsEnabled) {
  firebase.initializeApp(firebaseConfig, '[DEFAULT]')
} else {
  firebase.initializeApp(firebaseConfig)
}

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="popLayout" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/educator' element={<Educator />} />
          <Route path='/plant' element={<Plant />} />
          <Route path='/humming-bird' element={<HummingBird />} />
          <Route path='/anemone' element={<Anemone />} />
          <Route path='/hiv' element={<Hiv />} />
          <Route path='/buch-aph' element={<BuchAph />} />
          <Route path='/clown-fish' element={<Fish />} />
          <Route path='/intro' element={<Intro />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
