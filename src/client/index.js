import { handleSubmit } from './js/formHandler';
import { loadCountries } from './js/countriesDropDown';
import  { testSubmit } from './js/testFormHandler';
import  { loadLatestTripData , addDeleteButton } from './js/localStorageHandler';

import "./styles/main.scss";
import "./styles/results.scss";
import "./styles/slideshow.scss";

const  setDatesOnLoad = () => {

    let startDate = new Date();
    let startPicker = document.getElementById('dpFromDate') ;
    startPicker.min = startDate;
    startDate.setDate(startDate.getDate() + 1);    
    startPicker.value =  startDate.toISOString().slice(0, 10);

   let endPicker = document.getElementById('dpToDate');
   let endDate = new Date();
   endDate.setDate(endDate.getDate() + 2);
   endPicker.value = endDate.toISOString().slice(0, 10);

}

setDatesOnLoad();

loadCountries();

const selectCountry = () => {
    document.getElementById('countriesDD').addEventListener('change', () => {

        let countryName = document.getElementById('countriesDD').value;

        if(countryName != "none"){
            document.getElementById('validation').innerHTML = '';
        }
        
    });
}

selectCountry();

loadLatestTripData();



export { handleSubmit , loadCountries, selectCountry , testSubmit } 