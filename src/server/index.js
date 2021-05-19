const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = process.env.PORT || 8081;

dotenv.config();

const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const geoNamesApiKey = process.env.GEONAMES_USERNAME;

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}


let travelData = {};

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Weather app listening on port 8081!');
})


// chain fetch requests to populate travelData object
app.post('/travelinfo', async (req, res) => {

    // geonames to get coordinates
    let locationSearchString = req.body.city + '+' + req.body.countryName;

    const geonamesUrl = `http://api.geonames.org/searchJSON?q=${locationSearchString}&username=${geoNamesApiKey}&maxRows=1`;

    const geonamesResponse = await fetch(geonamesUrl);
    const geonamesData = await geonamesResponse.json();
    const geoNamesCoordinates = geonamesData.geonames[0];

    res.send(geoNamesCoordinates);
    
    // weatherbit to get weather data


    // pixabay to get image


    // triposo


    // opentrip



    travelData = {
        lng : req.body.lng,
        lat : req.body.lat,
        countryName : req.body.countryName
    }

    res.send(travelData);

});

