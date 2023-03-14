import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/navigationBar';
import BackButton from '../../components/backButton';
import './Simulation.scss';
import SpeciesCreator from '../../components/simulation/speciesCreator';
import { bodyInfo, headInfo, legInfo } from '../../hooks/info-helper';
import axios from 'axios';
import Select from "react-dropdown-select";

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/getSpecies';

function Simulation() {

  const [headIndex, setHeadIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [legIndex, setLegIndex] = useState(0);
  const [earIndex, setEarIndex] = useState(0);
  const [mouthIndex, setMouthIndex] = useState(0);
  const [savedSpecies, setSavedSpecies] = useState(null);
  const [options, setOptions] = useState([]);
  const [loadedOption, setLoadedOption] = useState(null);

  useEffect(() => {
    const getSpecies = async () => {
      const result = await axios.get(apiURL);
      setSavedSpecies(result.data.speciesList);
      setOptions(result.data.options)
    }
    getSpecies()
  },[])

  const handleLoad = () => {
    setBodyIndex(loadedOption.bodyIndex);
    setHeadIndex(loadedOption.headIndex);
    setLegIndex(loadedOption.legsIndex);
    setMouthIndex(loadedOption.mouthIndex);
    setEarIndex(loadedOption.mouthIndex);
  };

  return (
    <motion.div className="simulation-screen">
      <NavigationBar />
      <div className="back-button-container">
        <BackButton />
      </div>
      <div className="species-creator">
        <SpeciesCreator
          headIndex={headIndex}
          setHeadIndex={setHeadIndex}
          bodyIndex={bodyIndex}
          setBodyIndex={setBodyIndex}
          legIndex={legIndex}
          setLegIndex={setLegIndex}
          earIndex={earIndex}
          setEarIndex={setEarIndex}
          mouthIndex={mouthIndex}
          setMouthIndex={setMouthIndex}
          key={`${headIndex}${bodyIndex}${legIndex}${earIndex}${mouthIndex}`}
        />
      </div>
      <div className="infobox-head">
        <h3>Head Attribute</h3>
        <p>{headInfo[headIndex].info}</p>
        <p>Score: {headInfo[headIndex].score}</p>
      </div>
      <div className="infobox-body">
        <h3>Body Attribute</h3>
        <p>{bodyInfo[bodyIndex].info}</p>
        <p>Score: {bodyInfo[bodyIndex].score}</p>
      </div>
      <div className="infobox-leg">
        <h3>Legs Attribute</h3>
        <p>{legInfo[legIndex].info}</p>
        <p>Score: {legInfo[legIndex].score}</p>
      </div>
      <div className="load-species">
        <Select 
          options={options}
          onChange={(values) => setLoadedOption(savedSpecies[values[0].value])}
        />
        <div className="load" onClick={() => handleLoad()}>
          <h3 className="header">Load</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default Simulation;