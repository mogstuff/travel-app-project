import {   updateUI } from './uiHandler';

const loadLatestTripData = async() => {

if(localStorage.getItem('tripData') == null){
    console.log('no trip data saved');
    return;
}

let tripData = localStorage.getItem('tripData');
let tripDataJSON = JSON.parse(tripData);

await updateUI(tripDataJSON);

//addDeleteButton();
}

function deleteTripData(){

    if(localStorage.getItem('tripData') == null){
        console.log('no trip data saved');
        return;
    }

    localStorage.removeItem('tripData');

    location.reload();

}


function addDeleteButton(){

    if(localStorage.getItem('tripData') == null){
        console.log('no trip data saved');
        return;
    }

    let div = document.createElement('div');
div.classList.add('delete-button-wrapper');
let deleteButton = document.createElement('button');
deleteButton.innerText = "Delete Trip";
deleteButton.id = 'delete-trip-button';
div.appendChild(deleteButton);

deleteButton.addEventListener('click', function(){ deleteTripData(); });

document.getElementById('buttons').appendChild(div);
}


export { loadLatestTripData , addDeleteButton}