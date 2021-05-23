// this fixes the ReferenceError: regeneratorRuntime is not defined issue
// see https://spectrum.chat/jest/general/referenceerror-regeneratorruntime-is-not-defined~b3ef9b65-87cd-4e27-9730-f90b6eeff155
import 'regenerator-runtime/runtime';

import { app } from '../src/server/index';
const supertest = require('supertest');
const { response } = require('express');
const request = supertest(app);
const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;

it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test');  
    expect(res.status).toBe(200);
    // ...
    done();
  });


  
  it('travelinfo runs without error', async done => {
  
    let startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);    
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);

    let userData = {
        city: "Barcelona",
        countryName: "Spain",
        arrivalDate: startDate,
        departureDate: endDate
    };

    const res = await request.post('/travelinfo', userData );  
    expect(res.status).toBe(200);
    // ...
    done();
  });
