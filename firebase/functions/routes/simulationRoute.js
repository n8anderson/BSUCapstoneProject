/* eslint-disable new-cap */
const express = require('express');
const {registerEndpoint} = require('./route-helper');
const { getFirestore } = require('firebase-admin/firestore');

const testAPIConnection = (req) => {
  console.log('Got request body', req.body);
  return Promise.resolve({message: 'Success'});
};

const saveSpecies = async (req) => {
  const {
    head,
    body,
    legs
  } = req.body;
  console.log('Got the species')
  console.log('Head:', head)
  console.log('Body:', body)
  console.log('Legs:', legs)
  console.log(getFirestore())
  await getFirestore().collection('species').add({
      headIndex: head,
      bodyIndex: body,
      legsIndex: legs
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // const batch = getFirestore().collection().add({})
  // .collection('savedSpecies')
  // .set({
  //   headIndex: head,
  //   bodyIndex: body,
  //   legsIndex: legs
  // })

  return Promise.resolve({message: 'Success'});
}

const router = express.Router();
registerEndpoint(
  router,
  '/testApi',
  'post',
  testAPIConnection,
  false
);

registerEndpoint(
  router,
  '/saveSpecies',
  'post',
  saveSpecies,
  false
);

module.exports = router;
