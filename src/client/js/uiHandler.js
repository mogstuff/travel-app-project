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



    let flagImgHtml = `<img
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

export { updateUI }