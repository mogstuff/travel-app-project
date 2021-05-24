# Travel App

  

This is the final Capstone project in the [Udacity Front End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

  

## Specifications

  

Build a travel application where users complete a simple form entering the location they are traveling to and the date they are leaving. If the trip is within a week get the current weather forecast, if it is in the future then get a predicted forecast.

  

For weather information use the Weatherbit API, this only take coordinates so use the Geonames API to retrieve those coordinates. Once this information has been retrieved use the Pixabay API to display an image of the location.

  

### Skills Demonstrated

  

- Manipulating the DOM with JavaScript

- JavaScript Event Listeners

- Fetch API

- Asynchronous JavaScript

- Jest Testing Framework

- Node.js Express

- HTML 5

- SASS

- Responsive Web Design

- Service Workers

- Local Storage API

  

### APIs

  

- http://api.geonames.org

- https://api.weatherbit.io

- https://pixabay.com

- https://www.triposo.com

  
  

### Detailed Specifications

  

As per the project rubric the following requirements have been met:

  

- Webpack: Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.

- Testing: There should be at least one test for the express server and application javascript

- Offline capabilities: The project must have service workers installed.

- Usability: All features are usable across modern desktop, tablet, and phone browsers.

- Styling: Styling is set up in a logical way. All interactive elements have hover states.

- HTML Structure: HTML structure should be indented properly with classes and ID’s that make sense.

- Visual Design: The design should clearly be different from the design used in projects 3 and 4.

- Server : Server should be a near duplication of project 3 with the exception of additional added member: value pairs.

- Client/index.js : 	At least one function should be imported.
								At least one event listener should be imported.								
								(styles referenced in html/css)

  

The following extra features as specified in the rubric "Extend Options / Ways to Stand Out" have been implemented:  

- Add end date and display length of trip.

- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).

- Allow the user to remove the trip.

- Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.

- Allow user to Print their trip and/or export to PDF.

Additional features: 

- Images from Pixabay are rendered in an animated slideshow

- Points of Interest within 5km of the location have been included via the https://www.triposo.com api  
- A list of countries is retreived via the http://api.geonames.org and added to local storage, this is to prevent fuzzy search terms, for example entering Paris may also bring up Paris, Texas, USA whereas Paris France is more specific.

### Features  

- Images from Pixabay are rendered as an animated slideshow

- Points of Interest within 5km of the location have been included via the https://www.triposo.com api

- Latest trip can be saved and removed from local storage

- Service Workers have been added to provide offline availability with a cached copy of the application

- Webpack has been employed to optimise performance

- Unit tests including endpoint testing have been employed using the Jest testing framework
- 
### Deployment 
  

The web application has been deployed to the Heroku platform and can be viewed here:
 

[https://savvy-traveller.herokuapp.com/](https://savvy-traveller.herokuapp.com/)