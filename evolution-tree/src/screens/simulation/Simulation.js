import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/navigationBar';
import BackButton from '../../components/backButton';
import './Simulation.scss';
import SpeciesCreator from '../../components/simulation/speciesCreator';
import { bodyInfo, headInfo, legInfo, mouthInfo, earInfo } from '../../hooks/info-helper';
import axios from 'axios';
import Select from "react-dropdown-select";

const emulatorsEnabled = true;
const apiURL = emulatorsEnabled
? `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/getSpecies`
: 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/getSpecies';
function Simulation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useLocation();
  const {
    savedHeadIndex,
    savedBodyIndex,
    savedLegIndex,
    savedEarIndex,
    savedMouthIndex,
    savedName,
    savedSpeciesId,
    savedStudentId,
    classID
  } = state || {};
  const [headIndex, setHeadIndex] = useState(savedHeadIndex || 0);
  const [bodyIndex, setBodyIndex] = useState(savedBodyIndex || 0);
  const [legIndex, setLegIndex] = useState(savedLegIndex || 0);
  const [earIndex, setEarIndex] = useState(savedEarIndex || 0);
  const [mouthIndex, setMouthIndex] = useState(savedMouthIndex || 0);
  const [savedSpecies, setSavedSpecies] = useState(null);
  const [options, setOptions] = useState([]);
  const [loadedOption, setLoadedOption] = useState(null);
  const [name, setName] = useState(savedName || '');


  console.log(location)
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

  const handleSave = async () => {
    const saveUrl = emulatorsEnabled
    ? `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/saveSpecies`
    : 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/saveSpecies';
    const result = await axios.post(saveUrl, {
      body: bodyIndex,
      head: headIndex,
      legs: legIndex,
      mouth: mouthIndex,
      ear: earIndex,
      name: name,
      savedSpeciesId: savedSpeciesId
    });

    return result.data.speciesId
  }

  console.log(savedStudentId);

  const handleNext = async () => {
    const speciesId = await handleSave(savedSpeciesId);
    navigate(`/habitatSelection`, {state: { headIndex: headIndex,
                                            bodyIndex: bodyIndex,
                                            legIndex: legIndex,
                                            mouthIndex: mouthIndex,
                                            earIndex: earIndex,
                                            savedSpeciesId: savedSpeciesId || speciesId,
                                            savedClassId: classID,
                                            savedStudentId: savedStudentId,
                                            name: name
                                          }})
  }

  return (
    <motion.div className="simulation-screen">
      <NavigationBar />
      <div className="back-button-container">
        <BackButton />
      </div>
      <div className="creator-content">
        <div className="left-info">
          <div className="infobox-head">
            <h3>Eye Attribute:</h3>
            <p className="bold">{headInfo[headIndex].info}</p>
            <p><b>Pros:</b></p>
            {headInfo[headIndex].pros.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            <p><b>Cons:</b></p>
            {headInfo[headIndex].cons.split('\n').map((value) => (
              <p>{value}</p>
            ))}
          </div>
          <div className="infobox-leg">
            <h3>Hands/Feet Attribute:</h3>
            <p className="bold">{legInfo[legIndex].info}</p>
            <p><b>Pros:</b></p>
            {legInfo[legIndex].pros.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            <p><b>Cons:</b></p>
            {legInfo[legIndex].cons.split('\n').map((value) => (
              <p>{value}</p>
            ))}
          </div>
          <div className="infobox-mouth">
            <h3>Mouth Attribute:</h3>
            <p className="bold">{mouthInfo[mouthIndex].info}</p>
            <p><b>Pros:</b></p>
            {mouthInfo[mouthIndex].pros.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            <p><b>Cons:</b></p>
            {mouthInfo[mouthIndex].cons.split('\n').map((value) => (
              <p>{value}</p>
            ))}
          </div>
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
            name={name}
            setName={setName}
          />
        </div>
        <div className="right-info">
          <div className="load-species">
            <Select 
              options={options}
              onChange={(values) => setLoadedOption(savedSpecies[values[0].value])}
            />
            <div className="load" onClick={() => handleLoad()}>
              <h3 className="header">Load</h3>
            </div>
          </div>
          <div className="infobox-ear">
            <h3>Ear Attribute:</h3>
            <p className="bold">{earInfo[earIndex].info}</p>
            <p><b>Pros:</b></p>
            {earInfo[earIndex].pros.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            <p><b>Cons:</b></p>
            {earInfo[earIndex].cons.split('\n').map((value) => (
              <p>{value}</p>
            ))}
          </div>
          <div className="infobox-body">
            <h3>Body Attribute:</h3>
            <p className="bold">{bodyInfo[bodyIndex].info}</p>
            <p><b>Pros:</b></p>
            {bodyInfo[bodyIndex].pros.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            <p><b>Cons:</b></p>
            {bodyInfo[bodyIndex].cons.split('\n').map((value) => (
              <p>{value}</p>
            ))}
          </div>
          <div className="interact-box">
            <div className="save" onClick={() => handleSave()}>
              <h2>Save</h2>
            </div>
            <div className="save" onClick={() => handleNext()}>
              <h2>Next</h2>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Simulation;