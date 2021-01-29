var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { db } = require('./models/index')

var apiRoutes = require('./routes/api/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);
// app.use('/users', usersRouter);

db.sync()
    .then(() => {
        console.log('database ready');
    })
    .catch(err => {
        console.log('database connection failed',err);
    })

module.exports = app;
