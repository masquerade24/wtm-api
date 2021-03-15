const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const models = require("./models");
const helmet = require('helmet');
const hpp = require('hpp');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const morgan = require('morgan');

dotenv.config();
const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    password: process.env.REDIS_PASSWORD,
});

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(hpp());
} else {
    app.use(morgan('dev'));
}

const userRoute = require('./routes/user');
const drugRoute = require('./routes/drug');
const prscRoute = require('./routes/prsc');


app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/drug', drugRoute);
app.use('/prsc', prscRoute);
const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    store: new RedisStore({ client: redisClient }),
}
if (process.env.NODE_ENV === 'production') {
    sessionOption.proxy = true;
}

app.use(session(sessionOption));

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