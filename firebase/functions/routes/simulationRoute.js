/* eslint-disable new-cap */
const express = require('express');
const {registerEndpoint} = require('./route-helper');
const { getFirestore } = require('firebase-admin/firestore');

const saveSpecies = async (req) => {
  const {
    head,
    body,
    legs,
    ear,
    mouth,
    name
  } = req.body;
  let speciesId = '';
  await getFirestore().collection('species').add({
      headIndex: head,
      bodyIndex: body,
      legsIndex: legs,
      earIndex: ear,
      mouthIndex: mouth,
      name: name
    })
    .then((res) => speciesId = res.id)
    .catch((err) => console.log(err));

  return Promise.resolve({message: 'Success', speciesId});
}

const updateSpecies = async (req) => {
  const {
    classID,
    speciesId,
    habitat,
    coordinatesByHabitat
  } = req.body

  const updatedSpecies = {};

  const snapshot = await getFirestore().collection('species').doc(speciesId).get();

  if (!speciesId) {
    return;
  }

  if (classID) {
    updatedSpecies.classID = classID;
  }

  if (habitat) {
    updatedSpecies.habitat = habitat;
  }

  if (coordinatesByHabitat) {
    updatedSpecies.coordinatesByHabitat = {
      ...snapshot.data().coordinatesByHabitat,
      ...coordinatesByHabitat
    };
  }

  console.log("updated species:", updatedSpecies)

  await getFirestore().collection('species').doc(speciesId).update(updatedSpecies)
    .then((res) => console.log(res))
}

const getSpecies = async () => {
  const snapshot = await getFirestore().collection('species').get()

  const speciesList = {}
  let options = []
  snapshot.forEach((doc) => {
    const species = doc.data()

    speciesList[doc.id] = {...species}
    options.push({
      value: doc.id,
      label: doc.data().name
    })
  })

  return Promise.resolve({speciesList: speciesList, options: options})
}

const createRoom = async (req) => {
  const {
    name,
    selectedHabitats,
    classUUID
  } = req.body;

  await getFirestore().collection('classroom').doc(classUUID).set({
    className: name,
    selectedHabitats
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

return Promise.resolve({message: 'Success'});
}

const getRoom = async (req) => {
  const {
    roomID
  } = req.body;

  const snapshot = await getFirestore().collection('classroom').doc(roomID).get()

  return Promise.resolve(snapshot.data())
}

const getAllSpeciesInRoom = async (req) => {
  const {
    roomID
  } = req.body;

  const snapshot = await getFirestore().collection('species').where('classID', '==', roomID).get()

  const speciesInRoom = snapshot.docs.map((doc) => {
    console.log(doc.data())
    return {
    speciesName: doc.data().name,
    coordinatesByHabitat: doc.data().coordinatesByHabitat,
    speciesID: doc.id
  }})

  return Promise.resolve({ speciesInRoom })
}

const createStudent = async (req) => {
  const {
    roomID,
    speciesId,
    habitatsToComplete
  } = req.body;

  const habitatObject = {};

  habitatsToComplete.forEach((habitat) => {
    habitatObject[habitat] = false
  });

  let studentId = ''
  await getFirestore().collection('student').add({
    roomID,
    speciesID: speciesId,
    habitatStatus: habitatObject
  })
  .then((res) => studentId = res.id)
  .catch((err) => console.log(err));

  console.log(studentId);
  return Promise.resolve({ message: 'success', studentId });
}

const router = express.Router();

registerEndpoint(router, '/saveSpecies', 'post', saveSpecies);
registerEndpoint(router, '/species/update', 'post', updateSpecies);
registerEndpoint(router, '/room/getSpecies', 'post', getAllSpeciesInRoom);
registerEndpoint(router, '/getSpecies', 'get', getSpecies);
registerEndpoint(router, '/createRoom', 'post', createRoom);
registerEndpoint(router, '/getRoom', 'post', getRoom);
registerEndpoint(router, '/student', 'post', createStudent);

module.exports = router;
