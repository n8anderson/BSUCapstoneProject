import { useState } from 'react';
import tree from '../assets/background.png';
import branches from '../assets/background2.png';
import TreeButton from '../components/treeButton';
import GenericButton from './genericButton';
import './evolutionaryTree.scss'

function EvolutionaryTree() {

  const [speciesState, setSpeciesState] = useState(window.sessionStorage.getItem('species') 
                                                    ? window.sessionStorage.getItem('species') 
                                                    : 'default');

  const defaultSpecies = speciesState === 'default';
  const euchsSpecies = speciesState === 'euch'
  const prokSpecies = speciesState === 'prokaryote'
  const bactSpecies = speciesState === 'bacteria'

    return (
      <>
      {defaultSpecies &&
        <div className="evolutionary-tree">
          <div className="tree-component">
            <img
              src={tree}
              className="evolution-tree"
              alt="logo"
            />
            <div className="euchs">
              <GenericButton
                item="Eucarya"
                onPress={setSpeciesState}
                path="euch"
              />
            </div>
            <div className="archaea">
              <GenericButton
                item="Prokaryote"
                onPress={setSpeciesState}
                path="prokaryote"
              />
            </div>
            <div className="bacteria">
              <GenericButton
                item="Bacteria"
                onPress={setSpeciesState}
                path="bacteria"
              />
            </div>
            <div className="intro">
              <TreeButton
                item="Introduction to Evolution"
                navigatePath="intro"
              />
            </div>
          </div>
        </div>
      }
      {euchsSpecies &&
        <div className="evolution-zoom">
          <div className="back-button">
            <GenericButton
              item="Back"
              onPress={setSpeciesState}
              path="default"
            />
          </div>
          <div className="tree-component">
            <img
              src={branches}
              className="evolution-tree"
              alt="logo"
            />
            <div className="birds">
              <TreeButton
                item="Red Throated Hummingbird "
                navigatePath="humming-bird"
              />
            </div>
            <div className="fish">
              <TreeButton
                item="Clown Fish"
                navigatePath="clown-fish"
              />
            </div>
            <div className="anemone">
              <TreeButton
                item="Anemone"
                navigatePath="anemone"
              />
            </div>
            <div className="plant">
              <TreeButton
                item="Trumpet Vine"
                navigatePath="plant"
              />
            </div>
          </div>
        </div>
      }
      {prokSpecies &&
        <div className="evolution-zoom">
          <div className="back-button">
            <GenericButton
              item="Back"
              onPress={setSpeciesState}
              path="default"
            />
          </div>
          <div className="tree-component">
            <img
              src={branches}
              className="evolution-tree"
              alt="logo"
            />
            <div className="hiv">
              <TreeButton
                item="HIV"
                navigatePath="hiv"
              />
            </div>
          </div>
        </div>
      }
      {bactSpecies &&
        <div className="evolution-zoom">
          <div className="back-button">
            <GenericButton
              item="Back"
              onPress={setSpeciesState}
              path="default"
            />
          </div>
          <div className="tree-component">
            <img
              src={branches}
              className="evolution-tree"
              alt="logo"
            />
            <div className="buch-aph">
              <TreeButton
                item="Buchnera Aphidicola"
                navigatePath="buch-aph"
              />
            </div>
          </div>
        </div>
      }
      </>
    );
}

export default EvolutionaryTree;