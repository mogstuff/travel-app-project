const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = process.env.PORT || 8081;

dotenv.config();

const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const { dependencies } = require('webpack');
const geoNamesApiKey = process.env.GEONAMES_USERNAME;
const weatherBitApiKey = process.env.WEATHERBIT_KEY;
const pixabayApiKey = process.env.PIXABAY_KEY;
const triposoApiKey = process.env.TRIPOSO_KEY;
const triposoAccountID = process.env.TRIPOSO_ACCOUNTID;

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

//console.log(JSON.stringify(mockAPIResponse));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
  //  console.log('test method running on server');
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  //  console.log('Weather app listening on port 8081!');
})


// chain fetch requests to populate travelData object
app.post('/travelinfo', async (req, res) => {

    // geonames to get coordinates
    let locationSearchString = req.body.city + '+' + req.body.countryName;

    const geonamesUrl = `http://api.geonames.org/searchJSON?q=${locationSearchString}&username=${geoNamesApiKey}&maxRows=1`;

    const geonamesResponse = await fetch(geonamesUrl);
    const geonamesData = await geonamesResponse.json();
    const geoNamesCoordinates = geonamesData.geonames[0];
    travelData.geoNamesCoordinates = geoNamesCoordinates;

    const lat = geonamesData.geonames[0].lat;
    const lng = geonamesData.geonames[0].lng;

    // weatherbit to get weather data
    let today = new Date();
    let arrivalDate = new Date(req.body.arrivalDate);
    let departureDate = new Date(req.body.departureDate);
    travelData.arrivalDate = arrivalDate;
    travelData.departureDate = departureDate;

    // add countdown field
    let diffInTime = arrivalDate.getTime() - today.getTime();
    let daysUntilTrip = Math.round(Math.abs(diffInTime/(1000*60*60*24)));
    travelData.daysUntilTrip = daysUntilTrip; 


    // > 15 days away then add start_day and end_day
    // https://www.weatherbit.io/api/climate-normals

    let weatherBitUrl = `https://api.weatherbit.io/v2.0/current?key=${weatherBitApiKey}&lang=en&lat=${lat}&lon=${lng}`;

    if (daysUntilTrip > 15) {
       
        let arrivalMonth =   ("0" + (arrivalDate.getMonth() + 1)).slice(-2);
        let arrivalDayOfMonth = ("0" + arrivalDate.getDate()).slice(-2);
        let arrive = `${arrivalMonth}-${arrivalDayOfMonth}`; 

        let departureMonth =   ("0" + (departureDate.getMonth() + 1)).slice(-2);
        let departureDayOfMonth = ("0" + departureDate.getDate()).slice(-2);
        let leave =  `${departureMonth}-${departureDayOfMonth}`; 

        weatherBitUrl = `https://api.weatherbit.io/v2.0/normals?lat=${lat}&lon=${lng}&start_day=${arrive}&end_day=${leave}&tp=monthly&key=${weatherBitApiKey}`;

    }

    travelData.weatherBitUrl = weatherBitUrl;

    const weatherBitResponse = await fetch(weatherBitUrl);
    const weatherBitData = await weatherBitResponse.json();

    travelData.weatherData = weatherBitData;

    // pixabay to get image
    let pixabayUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&lang=en&q=${locationSearchString}&category=places`;

    const pixaBayResponse = await fetch(pixabayUrl);
    let pixabayImageData = await pixaBayResponse.json();

  //  console.log("PIXABAY: " + pixabayUrl);

  if(pixabayImageData.totalHits == 0){
    pixabayUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&lang=en&q=${req.body.countryName}&category=places`;
    let pixaBayResponseForCountry = await fetch(pixabayUrl);
    pixabayImageData = await pixaBayResponseForCountry.json();
  }

  travelData.imageData = pixabayImageData;
  
    

    // triposo api - get points of interest within 5km
    const distanceInMetres = 5000;

    let triposoUrl = `https://www.triposo.com/api/20210317/poi.json?annotate=distance:${lat},${lng}&tag_labels=sightseeing&distance=<${distanceInMetres}&fields=id,name,score,intro,tag_labels&order_by=-score&account=${triposoAccountID}&token=${triposoApiKey}`;
      
    const triposoResponse = await fetch(triposoUrl);
    const triposoData = await triposoResponse.json();

    travelData.sightSeeingData = triposoData;

    res.send(travelData);

});


module.exports = {
    app
}