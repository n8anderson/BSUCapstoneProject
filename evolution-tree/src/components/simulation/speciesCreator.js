import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import axios from 'axios';
import './speciesCreator.scss'
import { useNavigate } from "react-router-dom";

const LeftArrow = require('../../assets/simulationAssets/leftarrow.png');
const RightArrow = require('../../assets/simulationAssets/rightarrow.png');

const legs1 = require('../../assets/simulationAssets/legs1.png')
const legs2 = require('../../assets/simulationAssets/legs2.png')
const legs3 = require('../../assets/simulationAssets/legs3.png')
const body1 = require('../../assets/simulationAssets/body1.png')
const body2 = require('../../assets/simulationAssets/body2.png')
const body3 = require('../../assets/simulationAssets/body3.png')
const head1 = require('../../assets/simulationAssets/head1.png')
const head2 = require('../../assets/simulationAssets/head2.png')
const head3 = require('../../assets/simulationAssets/head3.png')

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/saveSpecies';


function SpeciesCreator({
  headIndex, setHeadIndex, bodyIndex, setBodyIndex,
  legIndex, setLegIndex, key
}) {
  
  const navigate = useNavigate();
  const heads = [head1, head2, head3];
  const bodies = [body1, body2, body3];
  const legs = [legs1, legs2, legs3];
  const [name, setName] = useState('');

  const [currentHead, setCurrentHead] = useState(heads[headIndex]);
  const [currentBody, setCurrentBody] = useState(bodies[bodyIndex]);
  const [currentLegs, setCurrentLegs] = useState(legs[legIndex]);

  const handleClick = (indexType, direction) => {
    if (indexType === 'head') {
      if (headIndex === heads.length - 1 && direction === 'right') {
        setHeadIndex(0)
        setCurrentHead(heads[headIndex])
      } else if (headIndex === 0 && direction === 'left'){
        setHeadIndex(heads.length - 1);
        setCurrentHead(heads[headIndex])
      } else {
        if (direction === 'right') {
          setHeadIndex(headIndex + 1);
        } else {
          setHeadIndex(headIndex - 1);
        }
        setCurrentHead(heads[headIndex])
      }
    }
    if (indexType === 'body') {
      if (bodyIndex === bodies.length - 1 && direction === 'right') {
        setBodyIndex(0);
        setCurrentBody(bodies[bodyIndex])
      } else if (bodyIndex === 0 && direction === 'left'){
        setBodyIndex(bodies.length - 1);
        setCurrentBody(bodies[bodyIndex])
      } else {
        if (direction === 'right') {
          setBodyIndex(bodyIndex + 1);
        } else {
          setBodyIndex(bodyIndex - 1);
        }
        setCurrentBody(bodies[bodyIndex])
      }
    }
    if (indexType === 'leg') {
      if (legIndex === legs.length - 1 && direction === 'right') {
        setLegIndex(0);
        setCurrentLegs(legs[legIndex])
      } else if (legIndex === 0 && direction === 'left'){
        setLegIndex(legs.length - 1);
        setCurrentLegs(legs[legIndex])
      } else {
        if (direction === 'right') {
          setLegIndex(legIndex + 1);
        } else {
          setLegIndex(legIndex - 1);
        }
        setCurrentLegs(legs[legIndex])
      }
    }
  }

  const handleSave = () => {
    axios.post(apiURL, {
      body: bodyIndex,
      head: headIndex,
      legs: legIndex,
      name: name
    }).then((res) => console.log(res))
  }

  const handleNext = () => {
    handleSave();
    navigate(`/habitatSelection`, {state: { headIndex: headIndex, bodyIndex: bodyIndex, legIndex: legIndex }})
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div key={key} className="species-creation-grid">
      <div className="species-image">
        <div className="image-container">
          <img src={currentHead} className="head" alt="Species Head" />
          <img src={currentBody} className="body" alt="Species Body" />
          <img src={currentLegs} className="legs" alt="Species Legs" />
        </div>
      </div>
      <div className="character-legs-left" onClick={() => handleClick('leg', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-legs-right" onClick={() => handleClick('leg', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <div className="character-body-left" onClick={() => handleClick('body', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-body-right" onClick={() => handleClick('body', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <div className="character-head-left" onClick={() => handleClick('head', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-head-right" onClick={() => handleClick('head', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <form className="namebox">
        <label>Species Name</label> 
        <input type="text" value={name} onChange={(text) => handleNameChange(text)} />
      </form>
      <div className="interact-box">
        <div className="save" onClick={() => handleSave()}>
          <h2>Save</h2>
        </div>
        <div className="save" onClick={() => handleNext()}>
          <h2>Next</h2>
        </div>
      </div>
    </div>
  );
}

export default SpeciesCreator;