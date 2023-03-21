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
    speciesId
  } = req.body

  await getFirestore().collection('species').doc(speciesId).update({ classID })
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
    habitat,
    classUUID
  } = req.body;

  await getFirestore().collection('classroom').doc(classUUID).set({
    className: name,
    habitat
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

  const speciesInRoom = snapshot.docs.map((doc) => ({
    speciesName: doc.data().name
  }))

  return Promise.resolve({ speciesInRoom })
}

const router = express.Router();

registerEndpoint(router, '/saveSpecies', 'post', saveSpecies);
registerEndpoint(router, '/species/update', 'post', updateSpecies);
registerEndpoint(router, '/room/getSpecies', 'post', getAllSpeciesInRoom);
registerEndpoint(router, '/getSpecies', 'get', getSpecies);
registerEndpoint(router, '/createRoom', 'post', createRoom);
registerEndpoint(router, '/getRoom', 'post', getRoom);

module.exports = router;
