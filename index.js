require('dotenv').config();
const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const User = require('./models/User');
const Body = require('./models/Body');
const Event = require('./models/Event');
const app = require('./auth');
const schedule = require('node-schedule')
const fetchClouds = require('./fetchClouds')
const fetchSpace = require('./fetchSpace')

// create job scheduled to run at midnight every day
const j = schedule.scheduleJob('* 0 0 * * *', updateEvents)

// will use user location
// currently using coordinates for los angeles
function updateEvents() {
    // User.getLocation()
    // .then(fetchClouds)
    // get weather forecast
    // fetchClouds([37.8267, -122.4233])
    fetchSpace()
}

updateEvents()

//Connect to stylesheets
// app.use(express.static('public'));

//Configure body-parser to read data sent by HTML form tags
app.use(bodyParser.urlencoded({ extended: false }));

// Configure body-parser to read JSON bodies
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('You express app is ready!');
});