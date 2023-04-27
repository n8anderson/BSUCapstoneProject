
import { motion } from "framer-motion";
import * as tf from '@tensorflow/tfjs';
import { useEffect, useMemo, useRef, useState } from "react";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {
  ComposedChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Label, Line, ReferenceLine
} from 'recharts';
import BackButton from "../../components/backButton";
import NavigationBar from '../../components/navigationBar';
import { legInfo, headInfo, mouthInfo, earInfo, bodyInfo, habitatInfo, successThresholds } from '../../hooks/info-helper';
import { createModel, generateData, trainModel } from "../../hooks/tensorFlow";
import './ResultsForHabitat.scss';

const emulatorsEnabled = true;

function HabitatResults() {

  const location = useLocation();
  const [classroomSpecies, setClassroomSpecies] = useState([]);
  const [classroomCoordinates, setClassroomCoordinates] = useState(null)
  const [readyModel, setReadyModel] = useState(null);
  const [predictedScores, setPredictedScores] = useState(null);

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
    classHabitats
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
    console.log(studentCoordinates[habitat].y >= successThresholds[studentCoordinates[habitat].x])
    if (studentCoordinates[habitat].y >= successThresholds[studentCoordinates[habitat].x]) {
      console.log('here')
      return true
    }
    return false
  }

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
                </div>
              ))}

            </div>
            <div className="results-description">
              <p>Red line represents the line to survive</p>
              <p>Blue line represents Survival Axis</p>
              <p>If you are above the red line and to the right of the blue line you can survive AND reproduce</p>
              <p>If you are to the left of the blue line, but above the red line, you species can survive, but won't reproduce effectively</p>
              <p>If you are below the red line, you died</p>
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
      </div>
    </motion.div>
  );
}

export default HabitatResults;