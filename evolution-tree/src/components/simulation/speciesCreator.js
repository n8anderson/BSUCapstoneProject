import './speciesCreator.scss'

const smallEyes = require('../../assets/simulationAssets/bodyAssets/smallEyes.png');
const noEyes = require('../../assets/simulationAssets/bodyAssets/noEyes.png');
const bigEyes = require('../../assets/simulationAssets/bodyAssets/bigEyes.png');
const balineMouth = require('../../assets/simulationAssets/bodyAssets/balineMouth.png');
const beakMouth = require('../../assets/simulationAssets/bodyAssets/beakMouth.png');
const flattenMouth = require('../../assets/simulationAssets/bodyAssets/flattenMouth.png');
const sharpTeethMouth = require('../../assets/simulationAssets/bodyAssets/sharpTeethMouth.png');
const longTongueMouth = require('../../assets/simulationAssets/bodyAssets/longTongueMouth.png');
const cuppedEar = require('../../assets/simulationAssets/bodyAssets/cuppedEar.png');
const smallEar = require('../../assets/simulationAssets/bodyAssets/smallEar.png');
const noEar = require('../../assets/simulationAssets/bodyAssets/noEar.png');
const webbedHand = require('../../assets/simulationAssets/bodyAssets/webbedHand.png');
const taperedHand = require('../../assets/simulationAssets/bodyAssets/taperedHand.png');
const hoofHand = require('../../assets/simulationAssets/bodyAssets/hoofHand.png');
const wingHand = require('../../assets/simulationAssets/bodyAssets/wingHand.png');
const clawHand = require('../../assets/simulationAssets/bodyAssets/clawHand.png');
const nailedHand = require('../../assets/simulationAssets/bodyAssets/nailedHand.png');
const paddleHand = require('../../assets/simulationAssets/bodyAssets/paddleHand.png');
const bareBody = require('../../assets/simulationAssets/bodyAssets/bareBody.png');
const hairBody = require('../../assets/simulationAssets/bodyAssets/hairBody.png');
const featherBody = require('../../assets/simulationAssets/bodyAssets/featherBody.png');
const scaleBody = require('../../assets/simulationAssets/bodyAssets/scaleBody.png');
const camouflageBody = require('../../assets/simulationAssets/bodyAssets/camouflageBody.png');
const tailBody = require('../../assets/simulationAssets/bodyAssets/tailBody.png');

const baseImage = require('../../assets/simulationAssets/bodyAssets/baseImage.png');


function SpeciesCreator({
  headIndex, bodyIndex, 
  legIndex, mouthIndex,
  earIndex, key, name, setName
}) {
  
  const heads = [smallEyes, noEyes, bigEyes];
  const bodies = [bareBody, hairBody, featherBody, scaleBody, camouflageBody, tailBody];
  const legs = [webbedHand, taperedHand, clawHand, nailedHand, paddleHand, hoofHand, wingHand];
  const mouths = [beakMouth, balineMouth, sharpTeethMouth, longTongueMouth, flattenMouth];
  const ears = [cuppedEar, smallEar, noEar];

  const currentHead = heads[headIndex];
  const currentBody = bodies[bodyIndex];
  const currentLegs = legs[legIndex];
  const currentMouth = mouths[mouthIndex];
  const currentEar = ears[earIndex]

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
      <form className="namebox">
        <label>Species Name</label> 
        <input type="text" value={name} onChange={(text) => handleNameChange(text)} defaultValue={name || ''} placeholder={name || ''}/>
      </form>
    </div>
  );
}

export default SpeciesCreator;