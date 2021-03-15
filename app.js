const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const models = require("./models");

dotenv.config();

const app = express();

const userRoute = require('./routes/user');
const drugRoute = require('./routes/drug');
const prscRoute = require('./routes/prsc');


app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/drug', drugRoute);
app.use('/prsc', prscRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        hi: "hello",
    });
})
app.use(function (req, res, next) {
    res.status(404);
    res.json({
        message: '서버 오류 발생'
    });
});

models.sequelize.sync().then(() => {
}).catch(err => {
    console.log("연결 실패");
    console.log(err);
});

module.exports = app;