const updateUI = async (result) => {

    // console.log(result);

    // console.log(`Arrival Date: ${result.arrivalDate}`);
    // console.log(`Departure Date: ${result.departureDate}`);
    // console.log(`Days Until Trip: ${result.daysUntilTrip}`);

    // console.log('geoNamesCoordinates: ');
    // console.log(result.geoNamesCoordinates.countryName);

    // console.log('imageData: ');
    // console.log(result.imageData);

    // console.log('sightSeeingData: ');
    // console.log(result.sightSeeingData);

    // console.log('weatherData: ');
    // console.log(result.weatherData);

    let display = document.getElementById('results');

    let headingsDiv = addHeadings(result);
    display.appendChild(headingsDiv);

    let flagImageDiv = addFlagImage(result);
    display.appendChild(flagImageDiv);

   let weather =  addWeather(result);
   display.appendChild(weather);

    let imageWrapperDiv = addMainImageDiv(result);   
    display.appendChild(imageWrapperDiv);

    let sightSeeingDiv = addSightSeeingDiv(result);
    display.appendChild(sightSeeingDiv);

   
    
}

const addHeadings = (result) => {
    let headings = document.createElement('div');
    headings.classList.add('trip-details-headings');

    let h2 = document.createElement('h2');
    h2.innerText = `${result.daysUntilTrip} Days until your trip to ${result.geoNamesCoordinates.name}`;
    headings.appendChild(h2);



    let h3 = document.createElement('h3');
    let arriveOn = new Date(result.arrivalDate).toLocaleDateString();
    let leaveOn = new Date(result.departureDate).toLocaleDateString();

    h3.innerText = `Arriving: ${arriveOn}  Departing: ${leaveOn} `;
    headings.appendChild(h3);

    return headings;

}


const addFlagImage = (result) => {

    let flagImgHtml = `<img
    src="https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png"
    srcset="https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png 2x,
      https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png 3x"
    width="192"
    height="144"
    alt="${result.geoNamesCoordinates.countryName}">`; 

    let flagDiv = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = result.geoNamesCoordinates.countryName;
    flagDiv.appendChild(h3);

    let flagWrapperDiv = document.createElement('div');
    flagWrapperDiv.classList.add('flag-wrapper');
    flagWrapperDiv.innerHTML = flagImgHtml;

    flagDiv.appendChild(flagWrapperDiv);

    return flagDiv;

}


const addWeather = (result) => {

 let div = document.createElement('div');
let h3 = document.createElement('h3');
h3.innerText = 'Weather Outlook';
div.appendChild(h3);
 
let temperatures = document.createElement('div');

let temp = document.createElement('div');
temp.innerText = `Temp: ${result.weatherData.data[0].temp} °C`;
temperatures.appendChild(temp);

let min_temp = document.createElement('div');
min_temp.innerText = `Min: ${result.weatherData.data[0].min_temp} °C`;
temperatures.appendChild(min_temp);

let max_temp = document.createElement('div');
max_temp.innerText = `Max: ${result.weatherData.data[0].max_temp} °C`;
temperatures.appendChild(max_temp);


div.appendChild(temperatures);  


console.log(result.weatherData.data[0]);

  console.log(result.weatherData.lat);
  console.log(result.weatherData.lon);

console.log(result.weatherData.timezone);



console.log(result.weatherData.data[0].min_temp);

console.log(result.weatherData.data[0].max_temp);

return div;

}


const addMainImageDiv = (result) => {
    let imageWrapperDiv = document.createElement('div');
    imageWrapperDiv.classList.add('img-wrapper');
    let mainImage = document.createElement('img');
    let imgSrc = result.imageData.hits[0].webformatURL;
    imageWrapperDiv.appendChild(mainImage);
    mainImage.src = imgSrc;
    return imageWrapperDiv;
}

const addSightSeeingDiv = (result) => {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = 'Points of Interest';
    div.appendChild(h3)

    for(const x of result.sightSeeingData.results){

         let sightDiv = document.createElement('div');

         let h4 = document.createElement('h4');
         h4.innerText = x.name;

         sightDiv.appendChild(h4);

         let p = document.createElement('p');
         p.innerText = x.intro;

         sightDiv.appendChild(p);

         div.appendChild(sightDiv);

    }

    return div;
}



export { updateUI }