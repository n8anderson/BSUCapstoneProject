
import { motion } from "framer-motion";
import NavigationBar from '../../components/navigationBar';
import BackButton from "../../components/backButton";
import './ResultsForHabitat.scss';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { legInfo, headInfo, mouthInfo, earInfo, bodyInfo } from '../../hooks/info-helper';
import axios from "axios";
import { createModel, generateData, trainModel } from "../../hooks/tensorFlow";

function HabitatResults() {

  const location = useLocation();
  const [classroomSpecies, setClassroomSpecies] = useState([]);

  const {
    headIndex,
    bodyIndex,
    legIndex,
    earIndex,
    mouthIndex,
    name,
    speciesId,
    habitat,
    classID
  } = location.state;

  const allScores = [
    headInfo[headIndex].habitatScores[habitat],
    bodyInfo[bodyIndex].habitatScores[habitat],
    legInfo[legIndex].habitatScores[habitat],
    earInfo[earIndex].habitatScores[habitat],
    mouthInfo[mouthIndex].habitatScores[habitat],
  ]

  const positiveScore = allScores.filter((value) => value > 0).reduce((acc, score) => (
    acc + score
  ), 0);
  const negativeScore = allScores.filter((value) => value < 0).reduce((acc, score) => (
    acc + score
  ), 0);

  useEffect(() => {
    const [input, label] = generateData();
    const model = createModel();
    // const setupTraining = async () => {
    //   await trainModel(model, input, label, 150);
    // }
    // setupTraining();
  }, []);

  useEffect(() => {
    const getClassroomSpecies = async () => {
      if (classID) {
        const url = `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/room/getSpecies`
        const result = await axios.post(url, { roomID: classID })
        setClassroomSpecies(result.data.speciesInRoom)
      }
    }
    getClassroomSpecies()
  }, [classID])

  return (
    <motion.div
      className="results-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="results-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
      </div>
    </motion.div>
  );
}

export default HabitatResults;