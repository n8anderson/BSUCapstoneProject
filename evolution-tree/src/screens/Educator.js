import { motion } from 'framer-motion';
import NavigationBar from '../components/navigationBar';
import BackButton from '../components/backButton';
import './Educator.scss'
import { useState } from 'react';
import Modal from 'react-modal';
import ShortUniqueId from "short-unique-id";
import axios from 'axios';
import { habitatInfo } from '../hooks/info-helper';
import HabitatSelectionButton from '../components/habitatSelectionButton';

const emulatorsEnabled = true;

const lessonPreview = require('../assets/simulationAssets/lessonPreview.png');

function Educator() {

  const apiURL = emulatorsEnabled
  ? 'http://127.0.0.1:5001/bsu-directed-study/us-central1/api/createRoom'
  : 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/createRoom';


  const [modalVisible, setModalVisible] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [className, setClassName] = useState(null);
  const [UUID, setUUID] = useState(null);

  const [selectedHabitats, setSelectedHabitats] = useState([]);
  
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

  const h1Style = {
    position: 'absolute',
    left: '36%',
    top: '30%'
  }

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 25,
  };

  const disabledButtonStyle = {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 25,
  }

  const onConfirm = () => {
    const getUuid = new ShortUniqueId({ length: 6});
    const uuid = getUuid();
    setUUID(uuid)
    const payload = {
      name: className,
      selectedHabitats,
      classUUID: uuid
    };
    console.log(payload);
    axios.post(apiURL, payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setIsConfirmed(true);
  }

  const onHabitatPress = (item) => {
    if (selectedHabitats.includes(item)) {
      setSelectedHabitats((currSelectedHabitats) => currSelectedHabitats.filter((value) => value !== item))
    } else {
      setSelectedHabitats((currSelectedHabitats) => [...currSelectedHabitats, item])
    }
  }

  const getSelectHabitatContent = () => (
    <div>
      <h2>Select the habitats for the students to complete</h2>
      {Object.entries(habitatInfo).map(([key, value]) => (
        <HabitatSelectionButton
          item={value.name}
          onPress={() => onHabitatPress(key)}
          highlighted={selectedHabitats.includes(key)}
        />
      ))}
      <form className="classname">
        <label style={{ marginRight: 15 }}>Class Name:</label> 
        <input type="text" onChange={(event) => setClassName(event.target.value)} />
      </form>
      <button
        style={selectedHabitats.length >= 1 ? buttonStyle : disabledButtonStyle}
        onClick={() => onConfirm()}
        disabled={selectedHabitats.length < 1}
      >
        Confirm
      </button>
    </div>
  );

  const getHabitatContent = () => {

    return (
      <div>
        <h2>Enter this code on Habitat screen:</h2>
        <h1
          style={h1Style}
        >{UUID}</h1>
      </div>
    )
  };

  return (
    <motion.div
      className="educator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Modal
        isOpen={modalVisible}
        style={customStyles}
        onRequestClose={() => {
          setModalVisible(false)
          setIsConfirmed(false)
          setSelectedHabitats([])
        }}
        ariaHideApp={false}
      >
        {isConfirmed ? getHabitatContent() : getSelectHabitatContent()}
      </Modal>
      <NavigationBar />
      <div className="educator-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        <div className="resources">
          <h1>Other Sources</h1>
          <div classname="link-container">
            <a
              className="case"
              href="https://www.bridgew.edu/center/case"
            >
              Bridgewater State University Case
            </a>
            <i class="fas fa-link"></i>
          </div>
          <div classname="link-container">
            <a
              className="darwin-day"
              href="https://www.bridgew.edu/center/case/darwin-day"
            >
              Bridgewater State University Darwin Day
            </a>
            <i class="fas fa-link"></i>
          </div>
          <div classname="link-container">
            <a
              className="sway"
              href="https://sway.office.com/jLGxoLO4s3zQUoJF?ref=Link "
            >
              Morphological Module: Using Skulls to Create a Bat Phylogenetic Tree
            </a>
            <i class="fas fa-link"></i>
          </div>
        </div>
        <div className="media">
          <h1>Media Links</h1>
          <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/IPjiFG43ZZg"
              title="Misconceptions"
            />
            <iframe
              width="320"
              height="215"
              src="https://www.youtube.com/embed/GhHOjC4oxh8"
              title="What is Evolution?"
            />
        </div>
        <div className="lesson-plan">
          <div className="linking">
            <p>
              Lesson Plan
            </p>
          </div>
          <div className="lesson-plan-content">
            <div className="quick-step">
              <h2>Quick Start</h2>
              <ol>
                <li>Assign Warmup</li>
                <li>Present your evolutionary powerpoint</li>
                <li>Assign simulation worksheet</li>
                <li>Assign your habitats (on this screen)</li>
                <li>Students create their organism</li>
                <li>Review and discuss results</li>
                <li>Repeat steps 4 - 6 for habitats not "complete"</li>
                <li>Record completion of students</li>
                <li>Assign exit ticket</li>
              </ol>
            </div>
            <div className="content-container">
              <img
                alt="Lesson plan preview"
                src={lessonPreview}
                className="lesson-preview"
              />
              <a className="activity-button" href="https://docs.google.com/document/d/17upu0VPojcUnhWrh4RjflQXtZclKGN_ntljs1meJGMY/edit?usp=sharing">
                <h2>Download Entire Lesson Plan</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="activities">
          <h1>Lesson Plan Materials</h1>
          <div className="activity-container">
            <a className="material-button" href="https://forms.gle/AJyQVcVH5W7E7CpZ6">
              <h2>Warmup</h2>
            </a>
            <a className="material-button" href="https://forms.gle/s8AWmGi5YzELAhaD9">
              <h2>Simulation Activity Worksheet</h2>
            </a>
            <div className="material-button" onClick={() => setModalVisible(true)}>
              <h2>Simulation Activity</h2>
            </div>
            <a className="material-button" href="https://forms.gle/LmaY5yJgbPCr1Fjq6">
              <h2>Exit Ticket</h2>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Educator;