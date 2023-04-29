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

const emulatorsEnabled = false;
const apiURL = emulatorsEnabled
? `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/getSpecies`
: 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/getSpecies';
function Simulation() {
  const navigate = useNavigate();
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

  const handleClick = (indexType, direction) => {
    if (indexType === 'head') {
      if (headIndex === Object.keys(headInfo).length - 1 && direction === 'right') {
        setHeadIndex(0)
      } else if (headIndex === 0 && direction === 'left'){
        setHeadIndex(Object.keys(headInfo).length - 1);
      } else {
        if (direction === 'right') {
          setHeadIndex(headIndex + 1);
        } else {
          setHeadIndex(headIndex - 1);
        }
      }
    }
    if (indexType === 'body') {
      if (bodyIndex === Object.keys(bodyInfo).length - 1 && direction === 'right') {
        setBodyIndex(0);
      } else if (bodyIndex === 0 && direction === 'left'){
        setBodyIndex(Object.keys(bodyInfo).length - 1);
      } else {
        if (direction === 'right') {
          setBodyIndex(bodyIndex + 1);
        } else {
          setBodyIndex(bodyIndex - 1);
        }
      }
    }
    if (indexType === 'leg') {
      if (legIndex === Object.keys(legInfo).length - 1 && direction === 'right') {
        setLegIndex(0);
      } else if (legIndex === 0 && direction === 'left'){
        setLegIndex(Object.keys(legInfo).length - 1);
      } else {
        if (direction === 'right') {
          setLegIndex(legIndex + 1);
        } else {
          setLegIndex(legIndex - 1);
        }
      }
    }

    if (indexType === 'mouth') {
      if (mouthIndex === Object.keys(mouthInfo).length - 1 && direction === 'right') {
        setMouthIndex(0);
      } else if (mouthIndex === 0 && direction === 'left'){
        setMouthIndex(Object.keys(mouthInfo).length - 1);
      } else {
        if (direction === 'right') {
          setMouthIndex(mouthIndex + 1);
        } else {
          setMouthIndex(mouthIndex - 1);
        }
      }
    }

    if (indexType === 'ear') {
      if (earIndex === Object.keys(earInfo).length - 1 && direction === 'right') {
        setEarIndex(0);
      } else if (earIndex === 0 && direction === 'left'){
        setEarIndex(Object.keys(earInfo).length - 1);
      } else {
        if (direction === 'right') {
          setEarIndex(earIndex + 1);
        } else {
          setEarIndex(earIndex - 1);
        }
      }
    }
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
            <div className="header-container">
              <button
                onClick={() => handleClick('head', 'left')}
              >
                Prev
              </button>
              <h3>Eye Attribute:</h3>
              <button
                onClick={() => handleClick('head', 'right')}
              >
                Next
              </button>
            </div>
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
            <div className="header-container">
              <button
                onClick={() => handleClick('leg', 'left')}
              >
                Prev
              </button>
              <h3>Hands/Feet Attribute:</h3>
              <button
                onClick={() => handleClick('leg', 'right')}
              >
                Next
              </button>
            </div>
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
            <div className="header-container">
              <button
                onClick={() => handleClick('mouth', 'left')}
              >
                Prev
              </button>
              <h3>Mouth Attribute:</h3>
              <button
                onClick={() => handleClick('mouth', 'right')}
              >
                Next
              </button>
            </div>
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
            bodyIndex={bodyIndex}
            legIndex={legIndex}
            earIndex={earIndex}
            mouthIndex={mouthIndex}
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
            <div className="header-container">
              <button
                onClick={() => handleClick('ear', 'left')}
              >
                Prev
              </button>
              <h3>Ear Attribute:</h3>
              <button
                onClick={() => handleClick('ear', 'right')}
              >
                Next
              </button>
            </div>
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
            <div className="header-container">
              <button
                onClick={() => handleClick('body', 'left')}
              >
                Prev
              </button>
              <h3>Body Attribute:</h3>
              <button
                onClick={() => handleClick('body', 'right')}
              >
                Next
              </button>
            </div>
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