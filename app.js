const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const userRoute = require('./routes/user');
const drugRoute = require('./routes/drug');

app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/drug', drugRoute);

module.exports = app;