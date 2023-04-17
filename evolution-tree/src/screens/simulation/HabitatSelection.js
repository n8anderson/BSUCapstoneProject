import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/navigationBar';
import BackButton from '../../components/backButton';
import './HabitatSelection.scss';
import Select from "react-dropdown-select";
import { useLocation, useNavigate } from 'react-router-dom';
import { habitatInfo } from '../../hooks/info-helper';
import axios from 'axios';
import Modal from 'react-modal';

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/getRoom';

const smallEyes = require('../../assets/simulationAssets/bodyAssets/smallEyes.png');
const noEyes = require('../../assets/simulationAssets/bodyAssets/noEyes.png');
const bigEyes = require('../../assets/simulationAssets/bodyAssets/bigEyes.png');
const balineMouth = require('../../assets/simulationAssets/bodyAssets/balineMouth.png');
const beakMouth = require('../../assets/simulationAssets/bodyAssets/beakMouth.png');
const sharpTeethMouth = require('../../assets/simulationAssets/bodyAssets/sharpTeethMouth.png');
const longTongueMouth = require('../../assets/simulationAssets/bodyAssets/longTongueMouth.png');
const cuppedEar = require('../../assets/simulationAssets/bodyAssets/cuppedEar.png');
const smallEar = require('../../assets/simulationAssets/bodyAssets/smallEar.png');
const noEar = require('../../assets/simulationAssets/bodyAssets/noEar.png');
const webbedHand = require('../../assets/simulationAssets/bodyAssets/webbedHand.png');
const taperedHand = require('../../assets/simulationAssets/bodyAssets/taperedHand.png');
const clawHand = require('../../assets/simulationAssets/bodyAssets/clawHand.png');
const nailedHand = require('../../assets/simulationAssets/bodyAssets/nailedHand.png');
const paddleHand = require('../../assets/simulationAssets/bodyAssets/paddleHand.png');
const bareBody = require('../../assets/simulationAssets/bodyAssets/bareBody.png');
const hairBody = require('../../assets/simulationAssets/bodyAssets/hairBody.png');
const featherBody = require('../../assets/simulationAssets/bodyAssets/featherBody.png');
const scaleBody = require('../../assets/simulationAssets/bodyAssets/scaleBody.png');

const baseImage = require('../../assets/simulationAssets/bodyAssets/baseImage.png');


function HabitatSelection() {
  const location = useLocation();
  const navigate = useNavigate()

  const [classID, setClassID] = useState(null);
  const [className, setClassName] = useState(null);

  const options = Object.entries(habitatInfo).map(([key, value]) => (
    {
      value: key,
      label: value.name
    }
  ));

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height: 400
    },
  };
  
  const [selectedHabitat, setSelectedHabitat] = useState('arctic');
  const [createStudentVisible, setCreateStudentVisible] = useState(false);
  const [studentAlias, setStudentAlias] = useState(null);
  const [teacherSelectedHabitats, setTeacherSelectedHabitats] = useState(false);
  const [studentID, setStudentID] = useState(null);

  const {
    headIndex,
    bodyIndex,
    legIndex,
    earIndex,
    mouthIndex,
    name,
    speciesId
  } = location.state;

  const heads = [smallEyes, noEyes, bigEyes];
  const bodies = [bareBody, hairBody, featherBody, scaleBody];
  const legs = [webbedHand, taperedHand, clawHand, nailedHand, paddleHand];
  const mouths = [balineMouth, beakMouth, sharpTeethMouth, longTongueMouth];
  const ears = [cuppedEar, smallEar, noEar];

  const [classOptions, setClassOptions] = useState(null);

  useEffect(() => {
    if (className && !studentID) {
      setCreateStudentVisible(true);
    }
  }, [className, studentID])

  const handleNext = async () => {
    const url = `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/species/update`
    await axios.post(url, { speciesId, classID, habitat: selectedHabitat })
    navigate(`/results`, {state: { headIndex: headIndex,
      bodyIndex: bodyIndex,
      legIndex: legIndex,
      mouthIndex: mouthIndex,
      earIndex: earIndex,
      speciesId: speciesId,
      classID: classID,
      habitat: selectedHabitat
    }})
  }

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 25,
    position: 'absolute',
    top: '25%',
    right: 100
  };

  const onConfirm = async () => {
    if (!classID) {
      return
    }

    const loadedInfo = await axios.post(apiURL, {
      roomID: classID
    })
    
    const { selectedHabitats } = loadedInfo.data
    setSelectedHabitat(selectedHabitats[0])
    setTeacherSelectedHabitats(selectedHabitats)
    setClassOptions(options.filter((option) => selectedHabitats.includes(option.value)))
    setClassName(loadedInfo.data.className)
  }

  const handleRandom = () => {
    const usedOptions = classOptions || options;
    const choice = usedOptions[Math.floor((usedOptions.length *  Math.random()))]

    setSelectedHabitat(choice.value)
  };

  const saveStudentName = async () => {
    const studentURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/student';
    const result = await axios.post(studentURL, {
      roomID: classID,
      speciesId: speciesId,
      habitatsToComplete: teacherSelectedHabitats
    });
    setStudentID(result.data.studentId);
    setCreateStudentVisible(false);
  }

  const getCreateStudentContent = () => (
    <div>
      <h2>Please Enter Your Name:</h2>
      <form className="classname">
        <label style={{ marginRight: 15 }}>Name:</label> 
        <input type="text" onChange={(event) => setStudentAlias(event.target.value)} />
      </form>
      <button
        style={buttonStyle}
        onClick={() => saveStudentName()}
      >
        Confirm
      </button>
    </div>
  );

  return (
    <motion.div className="simulation-screen">
      <Modal
        isOpen={createStudentVisible}
        style={customStyles}
        onRequestClose={() => {
          setCreateStudentVisible(false);
        }}
        ariaHideApp={false}
      >
        {getCreateStudentContent()}
      </Modal>
      <NavigationBar />
      <div className="background">
        <div className={selectedHabitat}>
          <div className="back-button-container">
            <BackButton />
          </div>
          <div className="habitat-box">
            <h3>{habitatInfo[selectedHabitat].name}</h3>
            {habitatInfo[selectedHabitat].bodyText.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            <a
              className="citation"
              href={habitatInfo[selectedHabitat].citation}
            >
              Citation
            </a>
          </div>
          <div className="species-view">
            {
              className
              &&
              (
                <h1 className="class-header">{className}</h1>
              )
            }
            {
              studentID
              &&
              (
                <h1 className="student-header">{studentAlias}</h1>
              )
            }
            <div className="species-image">
              <div className="image-container">
                <img src={baseImage} className="" alt="Species base" />
                <img src={heads[headIndex]} className="head" alt="Species Head" />
                <img src={bodies[bodyIndex]} className="body" alt="Species Body" />
                <img src={legs[legIndex]} className="legs" alt="Species Legs" />
                <img src={mouths[mouthIndex]} className="mouth" alt="Species mouth" />
                <img src={ears[earIndex]} className="ear" alt="Species ear" />
              </div>
              <p>{name}</p>
            </div>
            <div className="interact-box">
              <div className="next" onClick={() => handleNext()}>
                <h2>{className ? 'Start' : 'Next'}</h2>
              </div>
            </div>
            <div className="random-box">
              <div className="random" onClick={() => handleRandom()}>
                <h2>Random</h2>
              </div>
            </div>
          </div>
          <Select 
            options={classOptions || options}
            onChange={(values) => setSelectedHabitat(values[0].value)}
            className="load-habitat"
          />
          <form className="classname">
            <label style={{ marginRight: 15 }}>Class ID:</label> 
            <input type="text" onChange={(event) => setClassID(event.target.value)} />
          </form>
          <button
            style={buttonStyle}
            onClick={() => onConfirm()}
          >
            Confirm
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default HabitatSelection;