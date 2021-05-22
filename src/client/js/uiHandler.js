import { addSlideShow } from './slideShowHandler';

const updateUI = async (result) => {

  let display = document.getElementById('results');

  addHeadings(result, 'results');

  addFlagImage(result, 'results');

 addWeather(result, 'results');

 addSlideShow(result, 'results');
 
  addSightSeeingDiv(result, 'results');  

}

const addHeadings = (result, elementId) => {
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

  let display = document.getElementById(elementId);
  display.appendChild(headings);

}


const addFlagImage = (result, elementId) => {

  let flagImgHtml = `<img
    src="https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png"
    srcset="https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png 2x,
      https://flagcdn.com/192x144/${result.geoNamesCoordinates.countryCode.toLowerCase()}.png 3x"
    width="192"
    height="144"
    alt="${result.geoNamesCoordinates.countryName}">`;

  let flagDiv = document.createElement('div');
  flagDiv.id = 'flag';
  let h3 = document.createElement('h3');
  h3.innerText = result.geoNamesCoordinates.countryName;
  flagDiv.appendChild(h3);

  let flagWrapperDiv = document.createElement('div');
  flagWrapperDiv.classList.add('flag-wrapper');
  flagWrapperDiv.innerHTML = flagImgHtml;
  flagDiv.appendChild(flagWrapperDiv);

  let display = document.getElementById(elementId);
  display.appendChild(flagDiv);

}


const addWeather = (result, elementId) => {

  let div = document.createElement('div');
  div.id = 'weather-outlook';
  let h3 = document.createElement('h3');
  h3.innerText = 'Weather Outlook';
  div.appendChild(h3);

  let temperatures = document.createElement('div');
  temperatures.classList.add('temperatures-wrapper');

  let temp = document.createElement('div');
  temp.classList.add('temperature');
  temp.innerText = `Temp: ${result.weatherData.data[0].temp} °C`;
  temperatures.appendChild(temp);

  let min_temp = document.createElement('div');
  min_temp.classList.add('temperature');
  min_temp.innerText = `Min: ${result.weatherData.data[0].min_temp} °C`;
  temperatures.appendChild(min_temp);

  let max_temp = document.createElement('div');
  max_temp.classList.add('temperature');
  max_temp.innerText = `Max: ${result.weatherData.data[0].max_temp} °C`;
  temperatures.appendChild(max_temp);

  div.appendChild(temperatures);

  let display = document.getElementById(elementId);
  display.appendChild(div);  

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

const addSightSeeingDiv = (result, elementId) => {
  let div = document.createElement('div');
  div.id = 'points-of-interest-wrapper';
  let h3 = document.createElement('h3');
  h3.innerText = 'Points of Interest';
  div.appendChild(h3)

  for (const x of result.sightSeeingData.results) {

    let sightDiv = document.createElement('div');
    sightDiv.classList.add('point-of-interest');

    let h4 = document.createElement('h4');
    h4.innerText = x.name;

    sightDiv.appendChild(h4);

    let p = document.createElement('p');
    p.innerText = x.intro;

    sightDiv.appendChild(p);

    div.appendChild(sightDiv);

  }

  let display = document.getElementById(elementId);
  display.appendChild(div);  
  
}



export { updateUI }