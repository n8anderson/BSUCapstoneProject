/* eslint-disable new-cap */
const express = require('express');
const {registerEndpoint} = require('./route-helper');

const testAPIConnection = (req) => {
  console.log('Got request body', req.body);
  return Promise.resolve({message: 'Success'});
};

const router = express.Router();
registerEndpoint(
  router,
  '/testApi',
  'post',
  testAPIConnection,
  false
);

module.exports = router;
