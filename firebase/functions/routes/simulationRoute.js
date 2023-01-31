/* eslint-disable new-cap */
const express = require('express');
const {registerEndpoint} = require('./route-helper');
const { getFirestore } = require('firebase-admin/firestore');

const saveSpecies = async (req) => {
  const {
    head,
    body,
    legs,
    name
  } = req.body;
  await getFirestore().collection('species').add({
      headIndex: head,
      bodyIndex: body,
      legsIndex: legs,
      name: name
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return Promise.resolve({message: 'Success'});
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

const router = express.Router();

registerEndpoint(router, '/saveSpecies', 'post', saveSpecies);
registerEndpoint(router, '/getSpecies', 'get', getSpecies);

module.exports = router;
