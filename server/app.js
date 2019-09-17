const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

connectDB();
const app = express();

//middlewares
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(express.json({ extended: false }));
app.use(cors());

app.use(passport.initialize());
require('./services/passport');

app.use('/users', require('./routes/users'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  );
}

module.exports = app;
