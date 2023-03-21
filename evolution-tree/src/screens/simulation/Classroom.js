
import { motion } from "framer-motion";
import NavigationBar from '../../components/navigationBar';
import BackButton from "../../components/backButton";
import './Classroom.scss';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

function Classroom() {

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
    classID
  } = location.state;

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
      className="classroom-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavigationBar />
      <div className="classroom-grid-wrapper">
        <div className="back-button-container">
          <BackButton />
        </div>
        {classroomSpecies.length > 0 && (
          <div className="species-list">
            {classroomSpecies.map((species) => (
              <p>{species.speciesName}</p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Classroom;