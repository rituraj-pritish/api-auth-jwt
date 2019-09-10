const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

connectDB();
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json({ extended: false }));
require('./services/passport');

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green('Listening'));
});
