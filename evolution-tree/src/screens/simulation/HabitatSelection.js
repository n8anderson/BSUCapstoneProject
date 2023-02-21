import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/navigationBar';
import BackButton from '../../components/backButton';
import './HabitatSelection.scss';
import Select from "react-dropdown-select";
import { useLocation, useNavigate } from 'react-router-dom';

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/getSpecies';

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
  const options = [
    {
      // value: '\\assets\\simulationBackgrounds\\arctic.jpg',
      value: 'arctic',
      label: 'Arctic'
    },
    {
      // value: '/assets/simulationBackgrounds/desert.png',
      value: 'desert',
      label: 'Desert'
    },
    {
      // value: '/assets/simulationBackgrounds/ocean.png',
      value: 'ocean',
      label: 'Ocean'
    },
    {
      // value: '/assets/simulationBackgrounds/rainforest.png',
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


  return (
    <motion.div className="simulation-screen">
      <NavigationBar />
      <div className="background">
        <div className={selectedHabitat}>
          <div className="back-button-container">
            <BackButton />
          </div>
          <div className="species-view">
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
        </div>
      </div>
    </motion.div>
  )
}

export default HabitatSelection;