
function handleSubmit(e){

    e.preventDefault();

    try {
        
        let searchText = document.getElementById('search_txt').value;

        if(searchText.length < 3){
            throw "search cannot be null";
        }

      //  console.log('search for: ' + searchText);

        let countryName = document.getElementById('countriesDD').value;

    //    console.log('Selected Country is : ' + countryName);

        if(countryName === 'none'){
            throw "please select a country";  
        }
        
        let fromDate = new Date(document.getElementById('dpFromDate').value);
//console.log('From: ' + fromDate);

        if(fromDate < new Date()){
            throw "Arrival Date cannot be before tomorrow";
        }

        let toDate = new Date(document.getElementById('dpToDate').value);
   //     console.log('To: ' + toDate);

        if(toDate <= fromDate){
            throw "Departure Date cannot be before or on same day as Arrival";
        }

        // send users selections to server method /travelinfo
        let userData = {
            city: searchText,
            countryName: countryName,
            arrivalDate : fromDate,
            departureDate : toDate
        };

       postUserData('http://localhost:8081/travelinfo', userData);

    } catch (error) {
        displayErrors(error);
    }

}



function displayErrors(error) {
   
    let errors = document.getElementById('validation');
    errors.innerHTML = '';
    let p = document.createElement('p');
    p.classList.add('error');
    p.innerText = error;
    errors.appendChild(p);
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

        updateUI(data);
        return data;

    } catch (error) {
        displayErrors(error);
        console.error('error posting data to API', error);
    }

}


const updateUI = async (result) => {

    console.log(result);

    console.log(`Arrival Date: ${result.arrivalDate}`);
    console.log(`Departure Date: ${result.departureDate}`);
    console.log(`Days Until Trip: ${result.daysUntilTrip}`);   

    console.log('geoNamesCoordinates: ');
    console.log(result.geoNamesCoordinates.countryName);

    console.log('imageData: ');
    console.log(result.imageData);

    console.log('sightSeeingData: ');
    console.log(result.sightSeeingData);

    console.log('weatherData: ');
    console.log(result.weatherData);

    let display = document.getElementById('results');
  //  display.innerText = JSON.stringify(result);

    let imageWrapperDiv = document.createElement('div');
    imageWrapperDiv.classList.add('img-wrapper');
    let mainImage = document.createElement('img');
    let imgSrc = result.imageData.hits[0].webformatURL;   
    imageWrapperDiv.appendChild(mainImage);
    mainImage.src = imgSrc;
    display.appendChild(imageWrapperDiv);

   

let    flagImgHtml = `<img
    src="https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png"
    srcset="https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png 2x,
      https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png 3x"
    width="192"
    height="144"
    alt="${result.geoNamesCoordinates.countryName}">`;

    console.log('FLAG IMAGE URL: ');
    console.log(flagImgHtml);

    let flagWrapperDiv = document.createElement('div');
    flagWrapperDiv.classList.add('flag-wrapper');
    flagWrapperDiv.innerHTML = flagImgHtml;

    display.appendChild(flagWrapperDiv);


}

export { handleSubmit, displayErrors, postUserData, updateUI }