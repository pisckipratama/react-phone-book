const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const firebase = require('firebase');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const config = {
  apiKey: "AIzaSyAuvYHZh-SjCbqQ1FZ60qW0eDWbMRyAPNY",
  authDomain: "pisckify.firebaseapp.com",
  databaseURL: "https://pisckify.firebaseio.com",
  projectId: "pisckify",
  storageBucket: "pisckify.appspot.com",
  messagingSenderId: "269128389336"
}

firebase.initializeApp(config);

const indexRouter = require('./routes/phone');

const app = express();

// app.use(logger('dev'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('*', cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

const userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}))

module.exports = app;
