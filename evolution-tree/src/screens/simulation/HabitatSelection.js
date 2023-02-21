import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/navigationBar';
import BackButton from '../../components/backButton';
import './HabitatSelection.scss';
import Select from "react-dropdown-select";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/getRoom';

const legs1 = require('../../assets/simulationAssets/legs1.png')
const legs2 = require('../../assets/simulationAssets/legs2.png')
const legs3 = require('../../assets/simulationAssets/legs3.png')
const body1 = require('../../assets/simulationAssets/body1.png')
const body2 = require('../../assets/simulationAssets/body2.png')
const body3 = require('../../assets/simulationAssets/body3.png')
const head1 = require('../../assets/simulationAssets/head1.png')
const head2 = require('../../assets/simulationAssets/head2.png')
const head3 = require('../../assets/simulationAssets/head3.png')


function HabitatSelection() {
  const location = useLocation();
  const navigate = useNavigate()

  const [savedSpecies, setSavedSpecies] = useState(null)
  const [classID, setClassID] = useState(null);
  const [className, setClassName] = useState(null);
  const options = [
    {
      value: 'arctic',
      label: 'Arctic'
    },
    {
      value: 'desert',
      label: 'Desert'
    },
    {
      value: 'ocean',
      label: 'Ocean'
    },
    {
      value: 'rainforest',
      label: 'Rainforest'
    }
  ]
  
  const [selectedHabitat, setSelectedHabitat] = useState('arctic');

  const {
    headIndex,
    bodyIndex,
    legIndex,
    name
  } = location.state;

  const heads = [head1, head2, head3];
  const bodies = [body1, body2, body3];
  const legs = [legs1, legs2, legs3];

  console.log(selectedHabitat);

  const handleNext = () => {
    navigate(`/habitatSelection`)
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
    console.log('here');
    if (!classID) {
      return
    }

    const loadedInfo = await axios.post(apiURL, {
      roomID: classID
    })

    setSelectedHabitat(loadedInfo.data.habitat);
    setClassName(loadedInfo.data.className)
  }

  return (
    <motion.div className="simulation-screen">
      <NavigationBar />
      <div className="background">
        <div className={selectedHabitat}>
          <div className="back-button-container">
            <BackButton />
          </div>
          <div className="species-view">
            {
              className
              &&
              (
                <h1>{className}</h1>
              )
            }
            <div className="species-image">
              <div className="image-container">
                <img src={heads[headIndex]} className="head" alt="Species Head" />
                <img src={bodies[bodyIndex]} className="body" alt="Species Body" />
                <img src={legs[legIndex]} className="legs" alt="Species Legs" />
              </div>
              <p>{name}</p>
            </div>
            <div className="interact-box">
              <div className="next" onClick={() => handleNext()}>
                <h2>Next</h2>
              </div>
            </div>
          </div>
          <Select 
            options={options}
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