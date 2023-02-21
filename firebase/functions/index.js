/* eslint-disable max-len */
const functions = require("firebase-functions");
const testApi = require("./routes/simulationRoute");
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
})

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));
app.use(morgan("dev"));
app.use("/", testApi);


const api = functions.https.onRequest(app);

module.exports = {
  api,
};
