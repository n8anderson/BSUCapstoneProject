
import { motion } from "framer-motion";
import NavigationBar from '../../components/navigationBar';
import BackButton from "../../components/backButton";
import './ResultsForHabitat.scss';
import * as tf from '@tensorflow/tfjs';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { legInfo, headInfo, mouthInfo, earInfo, bodyInfo } from '../../hooks/info-helper';
import axios from "axios";
import { createModel, generateData, trainModel } from "../../hooks/tensorFlow";
import {
  ComposedChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Label, Line, ReferenceLine
} from 'recharts';

const emulatorsEnabled = false;

function HabitatResults() {

  const location = useLocation();
  const [classroomSpecies, setClassroomSpecies] = useState([]);
  const [readyModel, setReadyModel] = useState(null);
  const [predictedScore, setPredictedScore] = useState(null);

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

  console.log(allScores);

  const scoreTotal = allScores.reduce((acc, score) => (
    acc + score
  ), 0);

  console.log(scoreTotal);


  useEffect(() => {
    if (!readyModel) {
      const [input, label] = generateData();
      const model = createModel();
      const setupTraining = async () => {
        await trainModel(model, input, label, 150)
        .then((setReadyModel(model)));
      }
      setupTraining();
    }
  }, [readyModel]);

  useEffect(() => {
    if (readyModel && scoreTotal) {
      const predictScore = async () => {
      console.log('score total:', scoreTotal);
      const result = await readyModel.predict(tf.tensor([scoreTotal], [1, 1]));
      const data = Math.abs(await result.data())
      const parsedData = (data / Math.ceil(data))
      console.log('PARSED DATA', data)
      setPredictedScore(parsedData);
      }
      predictScore();
    }
  }, [readyModel, scoreTotal])


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
  }, [classID])

  const studentCoordinates = [{
    x: scoreTotal,
    y: predictedScore
  }]

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
          predictedScore && (
            <div className="table">
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
                  <XAxis type="number" dataKey="x" name="Student Score" ticks={[...Array(16).keys()]} domain={[0,15]}>
                    <Label value="Raw Student Score" position='bottom' offset={15}/>
                  </XAxis>
                  <YAxis type="number" dataKey="y" name="Predicted Score">
                    <Label value="Student Predicted Score" position='left' angle={270} />
                  </YAxis>
                  <Tooltip cursor={{ strokeDasharray: '7 7' }} />
                  <Scatter name="Predicted Score for Species" data={studentCoordinates} fill="#8884d8" />
                  <Line data={[{x: 0, y: 0.25}, {x: 15, y: 0.85}]} label="line" dot={false} dataKey="y" stroke="red"/>
                  <Line data={[{x: 7.5, y: 0}, {x: 7.5, y: 1}]} label="line" dot={false} dataKey="y" stroke="blue"/>
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
                    }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
              <p>Red line represents the line to survive</p>
              <p>Blue line represents Survival Axis</p>
              <p>If you are above the red line and to the right of the blue line you can survive AND reproduce</p>
              <p>If you are to the left of the blue line, but above the red line, you species can survive, but won't reproduce effectively</p>
              <p>If you are below the red line, you died</p>
            </div>
          )
        }
      </div>
    </motion.div>
  );
}

export default HabitatResults;