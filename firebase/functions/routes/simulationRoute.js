/* eslint-disable new-cap */
const express = require('express');
const {registerEndpoint} = require('./route-helper');

const testAPIConnection = (req) => {
  console.log('Got request body', req.body);
  return Promise.resolve({message: 'Success'});
};

const saveSpecies = (req) => {
  const {
    head,
    body,
    legs
  } = req.body;
  console.log('Got the species')
  console.log('Head:', head)
  console.log('Body:', body)
  console.log('Legs:', legs)
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
