import { useState } from "react";
import axios from 'axios';
import './speciesCreator.scss'
import { useNavigate } from "react-router-dom";

const LeftArrow = require('../../assets/simulationAssets/leftarrow.png');
const RightArrow = require('../../assets/simulationAssets/rightarrow.png');

const apiURL = 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/saveSpecies';

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


function SpeciesCreator({
  headIndex, setHeadIndex, bodyIndex, setBodyIndex,
  legIndex, setLegIndex, mouthIndex, setMouthIndex,
  earIndex, setEarIndex, key
}) {
  
  const navigate = useNavigate();
  const heads = [smallEyes, noEyes, bigEyes];
  const bodies = [bareBody, hairBody, featherBody, scaleBody];
  const legs = [webbedHand, taperedHand, clawHand, nailedHand, paddleHand];
  const mouths = [balineMouth, beakMouth, sharpTeethMouth, longTongueMouth];
  const ears = [cuppedEar, smallEar, noEar];
  const [name, setName] = useState('');

  const [currentHead, setCurrentHead] = useState(heads[headIndex]);
  const [currentBody, setCurrentBody] = useState(bodies[bodyIndex]);
  const [currentLegs, setCurrentLegs] = useState(legs[legIndex]);
  const [currentMouth, setCurrentMouth] = useState(mouths[mouthIndex]);
  const [currentEar, setCurrentEar] = useState(ears[earIndex]);
  console.log(bodies[3]);

  const handleClick = (indexType, direction) => {
    console.log('here');
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

    if (indexType === 'mouth') {
      if (mouthIndex === mouths.length - 1 && direction === 'right') {
        setMouthIndex(0);
        setCurrentMouth(mouths[mouthIndex])
      } else if (mouthIndex === 0 && direction === 'left'){
        setMouthIndex(mouths.length - 1);
        setCurrentMouth(mouths[mouthIndex])
      } else {
        if (direction === 'right') {
          setMouthIndex(mouthIndex + 1);
        } else {
          setMouthIndex(mouthIndex - 1);
        }
        setCurrentMouth(mouths[mouthIndex])
      }
    }

    if (indexType === 'ear') {
      if (earIndex === ears.length - 1 && direction === 'right') {
        setEarIndex(0);
        setCurrentEar(ears[earIndex])
      } else if (earIndex === 0 && direction === 'left'){
        setEarIndex(ears.length - 1);
        setCurrentEar(ears[earIndex])
      } else {
        if (direction === 'right') {
          setEarIndex(earIndex + 1);
        } else {
          setEarIndex(earIndex - 1);
        }
        setCurrentEar(ears[earIndex])
      }
    }
  }

  const handleSave = async () => {
    const result = await axios.post(apiURL, {
      body: bodyIndex,
      head: headIndex,
      legs: legIndex,
      mouth: mouthIndex,
      ear: earIndex,
      name: name
    });

    return result.data.speciesId
  }

  const handleNext = async () => {
    const speciesId = await handleSave();
    navigate(`/habitatSelection`, {state: { headIndex: headIndex,
                                            bodyIndex: bodyIndex,
                                            legIndex: legIndex,
                                            mouthIndex: mouthIndex,
                                            earIndex: earIndex,
                                            speciesId: speciesId
                                          }})
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div key={key} className="species-creation-grid">
      <div className="species-image">
        <div className="image-container">
          <img src={baseImage} className="" alt="Species base" />
          <img src={currentHead} className="head" alt="Species Head" />
          <img src={currentBody} className="body" alt="Species Body" />
          <img src={currentLegs} className="legs" alt="Species Legs" />
          <img src={currentMouth} className="mouth" alt="Species mouth" />
          <img src={currentEar} className="ear" alt="Species ear" />
        </div>
      </div>
      <div className="character-head-left" onClick={() => handleClick('head', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-head-right" onClick={() => handleClick('head', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <div className="character-ear-left" onClick={() => handleClick('ear', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-ear-right" onClick={() => handleClick('ear', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <div className="character-mouth-left" onClick={() => handleClick('mouth', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-mouth-right" onClick={() => handleClick('mouth', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <div className="character-body-left" onClick={() => handleClick('body', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-body-right" onClick={() => handleClick('body', 'right')}>
        <img src={RightArrow} alt="Fancy Arrow Png @clipartmax.com" className="right-arrow"/>
      </div>
      <div className="character-legs-left" onClick={() => handleClick('leg', 'left')}>
        <img src={LeftArrow} alt="Fancy Arrow Png @clipartmax.com" className="left-arrow"/>
      </div>
      <div className="character-legs-right" onClick={() => handleClick('leg', 'right')}>
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