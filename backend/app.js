const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const indexRouter = require('./routes/phone');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// database config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://pisckipy:nopassword@reviewapi-a48cn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => console.log('successfully connected with mongodb.'))
  .catch(err => console.error(err))

app.use('/api', indexRouter);

module.exports = app;
