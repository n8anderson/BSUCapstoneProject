
import { motion } from "framer-motion";
import * as tf from '@tensorflow/tfjs';
import { useEffect, useMemo, useRef, useState } from "react";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from 'react-modal';
import {
  ComposedChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Label, Line, ReferenceLine
} from 'recharts';
import BackButton from "../../components/backButton";
import NavigationBar from '../../components/navigationBar';
import { legInfo, headInfo, mouthInfo, earInfo, bodyInfo, habitatInfo, successThresholds } from '../../hooks/info-helper';
import { createModel, generateData, trainModel } from "../../hooks/tensorFlow";
import './ResultsForHabitat.scss';

const emulatorsEnabled = false;

function HabitatResults() {

  const navigate = useNavigate();
  const location = useLocation();
  const [classroomSpecies, setClassroomSpecies] = useState([]);
  const [classroomCoordinates, setClassroomCoordinates] = useState(null)
  const [readyModel, setReadyModel] = useState(null);
  const [predictedScores, setPredictedScores] = useState(null);

  const [completionCertificateVisible, setCompletionCertificateVisible] = useState(false);

  const [studentCurrentStatus, setStudentCurrentStatus] = useState(null);

  const isPredicting = useRef(false);
  const isTraining = useRef(false);

  const {
    headIndex,
    bodyIndex,
    legIndex,
    earIndex,
    mouthIndex,
    speciesId,
    classID,
    classHabitats,
    name,
    studentID
  } = location.state;

  const scoreTotals = useMemo(() => ({}), [])
  const allScores = useMemo(() => ({}), [])

  useMemo(() => {
    if (allScores && scoreTotals) {
      classHabitats.forEach((habitat) => allScores[habitat] = [
        headInfo[headIndex].habitatScores[habitat],
        bodyInfo[bodyIndex].habitatScores[habitat],
        legInfo[legIndex].habitatScores[habitat],
        earInfo[earIndex].habitatScores[habitat],
        mouthInfo[mouthIndex].habitatScores[habitat],
      ]);
      Object.entries(allScores).forEach(([key, value]) => {
        scoreTotals[key] = value.reduce((acc, score) => (
          acc + score
        ), 0)
      })
    }
  }, [bodyIndex, headIndex, legIndex, earIndex, mouthIndex, classHabitats, scoreTotals, allScores]);

  useEffect(() => {
    if (!isTraining.current && !readyModel) {
      const [input, label] = generateData();
      const model = createModel();
      const setupTraining = async () => {
        await trainModel(model, input, label)
        .then(() => {
          isTraining.current = false;
          setReadyModel(model);
        })
        .catch((err) => console.log(err));
      }
      setupTraining();
    }
  }, [readyModel]);

  useEffect(() => {
    if (readyModel && scoreTotals != null && Object.keys(scoreTotals).length > 0 && !isPredicting.current && !predictedScores && speciesId != null) {
      isPredicting.current = true;
      const url = emulatorsEnabled
      ? `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/species/update`
      : 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/species/update';
      const predictScore = async (habitat, scoreTotal) => {
        const predictInput = Array(32).fill(0);
        predictInput[0] = scoreTotal;
        const reshapedInput = tf.tensor2d(predictInput, [1, 32]).reshape([-1, 1])
        const result = await readyModel.predict(reshapedInput);
        const data = Math.abs(await result.dataSync()[0])
        setPredictedScores((currData) => ({
          ...currData,
          [habitat]: data
        }));
        await axios.post(url, {speciesId, coordinatesByHabitat: { [habitat]: {
          x: scoreTotal,
          y: data
        }}})
      }
      
      const syncData = async () => {
        for (const object of Object.entries(scoreTotals)) {
          const [habitat, score] = object;
          await predictScore(habitat, score);
        }
        isPredicting.current = false;
      }
      syncData();
    }
  }, [readyModel, scoreTotals, predictedScores, speciesId])

  useEffect(() => {
    const getClassroomSpecies = async () => {
      if (classID) {
        const url = emulatorsEnabled
        ? `http://127.0.0.1:5001/bsu-directed-study/us-central1/api/room/getSpecies`
        : 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/room/getSpecies';
        const result = await axios.post(url, { roomID: classID })
        setClassroomSpecies(result.data.speciesInRoom)
      }
    }
    getClassroomSpecies()
  }, [classID]);

  useEffect(() => {
    if (classroomSpecies && speciesId != null && (!classroomCoordinates || Object.keys(classroomCoordinates).length === 0)) {
      const speciesLessCurrentStudent = classroomSpecies.filter((species) => species.speciesID !== speciesId);
      const otherStudentCoords = speciesLessCurrentStudent.map((species) => ({...species.coordinatesByHabitat}))
      let studentCoordsByHabitat = {}
      otherStudentCoords.forEach((student) => {
        Object.entries(student).forEach(([habitat, habitatScores]) => {
          if (!studentCoordsByHabitat[habitat]) {
            studentCoordsByHabitat[habitat] = [habitatScores]
          } else {
            studentCoordsByHabitat[habitat].push(habitatScores)
          }
        })
      })
      setClassroomCoordinates(studentCoordsByHabitat)
    }
  }, [classroomSpecies, speciesId, classroomCoordinates]);

  const studentCoordinates = useMemo(() => {
    if (predictedScores && scoreTotals) {
      const habitatScores = {};
      for (const object of Object.entries(predictedScores)) {
        const [habitat, score] = object;
        habitatScores[habitat] = {
          x: scoreTotals[habitat],
          y: score
        }
      }
      return habitatScores;
    }
  }, [predictedScores, scoreTotals])

  const isSufficientToPass = (habitat) => {
    if (studentCoordinates[habitat].y >= successThresholds[studentCoordinates[habitat].x] || (studentCurrentStatus && studentCurrentStatus[habitat])) {
      return true
    }
    return false
  }

  useEffect(() => {
    const saveStudentStatus = async () => {
      if (studentCoordinates && Object.keys(studentCoordinates).length >= classHabitats.length && studentID) {
        const habitatStatus = {};
        Object.entries(studentCoordinates).forEach(([habitat, coordSet]) => {
          const success = coordSet.y >= successThresholds[coordSet.x];
          if (success) {
            habitatStatus[habitat] = success
          }
        })
        const url = emulatorsEnabled
          ? "http://127.0.0.1:5001/bsu-directed-study/us-central1/api/student"
          : 'https://us-central1-bsu-directed-study.cloudfunctions.net/api/student';
        const result = await axios.put(url, { habitatStatus, studentId: studentID })
        setStudentCurrentStatus(result.data.habitatStatus);
      };
    }
    saveStudentStatus();
  }, [studentCoordinates, classHabitats, studentID]);


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

  const getCompletionContent = () => (
    <div>
      <h2>Congratulations!</h2>
      <p>You have completed all of the habitats by successfully surviving with your created species!</p>
      <br />
      <br />
      <br />
      <p>Please show this to your instructor to receive credit of completion!</p>
      <button
        style={{
          width: 200,
          height: 40,
          margin: 'auto',
          backgroundColor: '#637675',
          boxShadow: '0 4 4 rgba(0, 0, 0, 0.4)',
          borderRadius: 10,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 18,
          textAlign: 'center',
          color: 'white',
        }}
        onClick={() => setCompletionCertificateVisible(false)}
      >
        Close
      </button>
    </div>
  );

  return (
    <motion.div
      className="results-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Modal
        isOpen={completionCertificateVisible}
        style={customStyles}
        onRequestClose={() => {
          setCompletionCertificateVisible(false);
        }}
        ariaHideApp={false}
      >
        {getCompletionContent()}
      </Modal>
      <NavigationBar />
      <div className="results-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        {
          ((studentCoordinates && Object.keys(studentCoordinates).length > 0)) && (
            <><div className="multiple-tables">
              {Object.entries(studentCoordinates).map(([habitat, score]) => (
                <div className="table" key={habitat}>
                  <h3 className={isSufficientToPass(habitat) ? "green" : "red"}>{habitatInfo[habitat].name}</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                      margin={{
                        top: 50,
                        right: 20,
                        bottom: 50,
                        left: 20
                      }}
                    >
                      <CartesianGrid />
                      <XAxis type="number" dataKey="x" name="Student Score" ticks={[...Array(16).keys()]} domain={[0, 15]}>
                        <Label value="Raw Student Score" position='bottom' offset={15} />
                      </XAxis>
                      <YAxis type="number" dataKey="y" name="Predicted Score">
                        <Label value="Chance of Survival" position='left' angle={270} />
                      </YAxis>
                      <Tooltip cursor={{ strokeDasharray: '7 7' }} />
                      <Scatter name="Predicted Score for Species" data={[score]} fill="#AAFF00" />
                      {classroomCoordinates && (
                        <Scatter name="Predicted score for other students" data={classroomCoordinates[habitat]} fill="#ADD8E6" />
                      )}
                      <Line data={[{ x: 0, y: 0.25 }, { x: 15, y: 0.85 }]} label="line" dot={false} dataKey="y" stroke="red" />
                      <Line data={[{ x: 7.5, y: 0 }, { x: 7.5, y: 1 }]} label="line" dot={false} dataKey="y" stroke="blue" />
                      <ReferenceLine y={0} stroke="#000000" />
                      <ReferenceLine x={0} stroke="#000000" />
                      <ReferenceLine
                        segment={[
                          {
                            x: 0,
                            y: 0
                          },
                          {
                            x: 0,
                            y: 0
                          }
                        ]}
                        label={{
                          value: "(0,0)",
                          position: "bottom"
                        }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                  <button
                    onClick={() => navigate('../simulation', {state: {
                      savedHeadIndex: headIndex,
                      savedBodyIndex: bodyIndex,
                      savedLegIndex: legIndex,
                      savedEarIndex: earIndex,
                      savedMouthIndex: mouthIndex,
                      savedName: name,
                      savedSpeciesId: speciesId,
                      savedStudentId: studentID,
                      classID
                    }})}
                  >Retry</button>
                </div>
              ))}

            </div>
            <div className="results-description">
              <p>Red line represents the line to survive</p>
              <p>Blue line represents Survival Axis</p>
              <p>If you are above the red line and to the right of the blue line you can survive AND reproduce</p>
              <p>If you are to the left of the blue line, but above the red line, you species can survive, but won't reproduce effectively</p>
              <p>If you are below the red line, you died</p>
              <p>To survive you must be to the right of the blue line and near the red line</p>
            </div></>
          )
        }
        {!(predictedScores && Object.keys(predictedScores).length > 0) && (
          <div className="activity-indicator">
            <Dots
              size={40}
            />
          </div>
        )}
        {studentCurrentStatus && (
          <button
            className={Object.values(studentCurrentStatus).every((status) => status) ? 'completion-certificate' : 'completion-certificate-disabled' }
            disabled={!Object.values(studentCurrentStatus).every((status) => status)}
            onClick={() => setCompletionCertificateVisible(true)}
          >
            Get Completion Certificate
          </button>
        )}

      </div>
      <div className="back-to-home-container">
        <button
          className="back-to-home"
          onClick={() => navigate('../')}
        >
          Reset and Back to Home
        </button>
      </div>
    </motion.div>
  );
}

export default HabitatResults;