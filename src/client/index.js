import { handleSubmit } from './js/formHandler'

import "./styles/main.scss"

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



export { handleSubmit } 