import {   updateUI } from './uiHandler';
import {   displayErrors } from './errorHandler';

function handleSubmit(e) {

    e.preventDefault();

    try {

        let searchText = document.getElementById('search_txt').value;

        if (searchText.length < 3) {
            throw "search cannot be null";
        }

        let countryName = document.getElementById('countriesDD').value;


        if (countryName === 'none') {
            throw "please select a country";
        }

        let fromDate = new Date(document.getElementById('dpFromDate').value);

        if (fromDate < new Date()) {
            throw "Arrival Date cannot be before tomorrow";
        }

        let toDate = new Date(document.getElementById('dpToDate').value);

        if (toDate <= fromDate) {
            throw "Departure Date cannot be before or on same day as Arrival";
        }

        let userData = {
            city: searchText,
            countryName: countryName,
            arrivalDate: fromDate,
            departureDate: toDate
        };

        showPreloader();

        postUserData('http://localhost:8081/travelinfo', userData);

    } catch (error) {
        displayErrors(error);
    }

}


const postUserData = async (url = '', data = {}) => {


    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)

    });

    try {

        const data = await response.json();
        // console.info('response from posting data to Api: ');
        // console.log(data);

        localStorage.setItem('tripData', JSON.stringify(data));

        updateUI(data);
        return data;

    } catch (error) {
        displayErrors(error);
        console.error('error posting data to API', error);
    }

}


function showPreloader() {

    let results = document.getElementById('results');
    results.innerHTML = '';
    results.scrollIntoView({ behavior: "smooth" });

    let loader = document.createElement('div');
    loader.classList.add('loader');
    results.appendChild(loader);

    let heading = document.createElement('div');
    heading.innerHTML = '<p>.... processing data</p>';
    results.appendChild(heading);

}


export { handleSubmit, postUserData }