import {   updateUI } from './uiHandler';

function loadLatestTripData(){

if(localStorage.getItem('tripData') == null){
    console.log('no trip data saved');
    return;
}

let tripData = localStorage.getItem('tripData');
let tripDataJSON = JSON.parse(tripData);

updateUI(tripDataJSON);

}


export { loadLatestTripData }