import {   updateUI } from './uiHandler';
import {   displayErrors } from './errorHandler';

function testSubmit(event) {
  
    event.preventDefault();    
  
    try {
        getTestData();
        
    } catch (error) {
        displayErrors(error);
    }
}


const getTestData = async () => {

    console.log('getTestData fired');

    const response = await fetch('http://localhost:8081/test');
    const responseData = await response.json();

    console.log(responseData);

    updateUI(responseData);

    return responseData;

}


export { testSubmit }