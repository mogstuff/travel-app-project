var Client=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"handleSubmit",(function(){return h})),n.d(t,"loadCountries",(function(){return y})),n.d(t,"selectCountry",(function(){return C})),n.d(t,"testSubmit",(function(){return E}));let a=0,o=1,r=0;function l(e){e>r&&(e=1),e<1&&(e=t.length);let t=document.querySelectorAll("div.trip-slides");o=e,document.getElementById("slide-numbers").innerText=`${o} / ${r}`;for(let e=0;e<t.length;e++)t[e].style.display="none";t[e-1].style.display="block"}function d(){var e;document.getElementById("button-wrapper").style.display="none";let t=document.querySelectorAll("div.trip-slides");for(e=0;e<t.length;e++)t[e].style.display="none";a++,a>t.length&&(a=1),o=a,document.getElementById("slide-numbers").innerText=`${o} / ${r}`,t[a-1].style.display="block",setTimeout(d,3e3)}function i(){if(null==localStorage.getItem("tripData"))return void console.log("no trip data saved");let e=document.createElement("div");e.classList.add("delete-button-wrapper");let t=document.createElement("button");t.innerText="Delete Trip",t.id="delete-trip-button",e.appendChild(t),t.addEventListener("click",(function(){null!=localStorage.getItem("tripData")?(localStorage.removeItem("tripData"),location.reload()):console.log("no trip data saved")})),document.getElementById("buttons").appendChild(e)}const c=async e=>{document.getElementById("results");s(e,"results"),u(e,"results"),m(e,"results"),((e,t)=>{r=e.imageData.hits.length;let n=document.createElement("div");n.classList.add("slideshow-container");let i=document.createElement("div");i.id="slide-numbers",i.classList.add("numbertext"),i.innerText=`${o} / ${r}`,n.appendChild(i);for(const t of e.imageData.hits){let e=document.createElement("div");e.classList.add("trip-slides"),e.classList.add("fade"),e.style.display="none",e.style=`background-image: url(${t.webformatURL}); background-size:cover`,n.appendChild(e)}let c=document.createElement("div");c.id="button-wrapper";let s=document.createElement("a");s.id="prev",s.innerHTML="&#10094",s.addEventListener("click",(function(){l(a--)}),!1),c.appendChild(s);let u=document.createElement("a");u.id="next",u.innerHTML="&#10095;",u.addEventListener("click",(function(){l(a++)}),!1),c.appendChild(u),n.appendChild(c),document.getElementById(t).appendChild(n),d()})(e,"results"),p(e,"results"),i(),function(){let e=document.createElement("div");e.classList.add("print-button-wrapper");let t=document.createElement("button");t.innerText="Print Trip",t.id="print-trip-button",e.appendChild(t),t.addEventListener("click",(function(){var e,t;e=document.getElementById("results").innerHTML,(t=window.open("","","height=500, width=400")).document.title="Print Trip Details",t.document.write("<html>"),t.document.write("<body >"),t.document.write(e),t.document.write("</body></html>"),t.document.close(),t.print()})),document.getElementById("buttons").appendChild(e)}()},s=(e,t)=>{let n=document.createElement("div");n.classList.add("trip-details-headings");let a=document.createElement("h2");a.innerText=`${e.daysUntilTrip} Days until your trip to ${e.geoNamesCoordinates.name}`,n.appendChild(a);let o=document.createElement("h3"),r=new Date(e.arrivalDate).toLocaleDateString(),l=new Date(e.departureDate).toLocaleDateString();o.innerText=`Arriving: ${r}  Departing: ${l} `,n.appendChild(o),document.getElementById(t).appendChild(n)},u=(e,t)=>{let n=`<img\n    src="https://flagcdn.com/192x144/${e.geoNamesCoordinates.countryCode.toLowerCase()}.png"\n    srcset="https://flagcdn.com/192x144/${e.geoNamesCoordinates.countryCode.toLowerCase()}.png 2x,\n      https://flagcdn.com/192x144/${e.geoNamesCoordinates.countryCode.toLowerCase()}.png 3x"\n    width="192"\n    height="144"\n    alt="${e.geoNamesCoordinates.countryName}">`,a=document.createElement("div");a.id="flag";let o=document.createElement("h3");o.innerText=e.geoNamesCoordinates.countryName,a.appendChild(o);let r=document.createElement("div");r.classList.add("flag-wrapper"),r.innerHTML=n,a.appendChild(r),document.getElementById(t).appendChild(a)},m=(e,t)=>{let n=document.createElement("div");n.id="weather-outlook";let a=document.createElement("h3");a.innerText="Weather Outlook",n.appendChild(a);let o=document.createElement("div");o.classList.add("temperatures-wrapper");let r=document.createElement("div");r.classList.add("temperature"),r.innerText=`Temp: ${e.weatherData.data[0].temp} °C`,o.appendChild(r);let l=document.createElement("div");l.classList.add("temperature"),l.innerText=`Min: ${e.weatherData.data[0].min_temp} °C`,o.appendChild(l);let d=document.createElement("div");d.classList.add("temperature"),d.innerText=`Max: ${e.weatherData.data[0].max_temp} °C`,o.appendChild(d),n.appendChild(o),document.getElementById(t).appendChild(n)},p=(e,t)=>{let n=document.createElement("div");n.id="points-of-interest-wrapper";let a=document.createElement("h3");a.innerText="Points of Interest",n.appendChild(a);for(const t of e.sightSeeingData.results){let e=document.createElement("div");e.classList.add("point-of-interest");let a=document.createElement("h4");a.innerText=t.name,e.appendChild(a);let o=document.createElement("p");o.innerText=t.intro,e.appendChild(o),n.appendChild(e)}document.getElementById(t).appendChild(n)};function g(e){let t=document.getElementById("validation");t.innerHTML="";let n=document.createElement("p");n.classList.add("error"),n.innerText=e,t.appendChild(n)}function h(e){e.preventDefault();try{let e=document.getElementById("search_txt").value;if(e.length<3)throw"search cannot be null";let t=document.getElementById("countriesDD").value;if("none"===t)throw"please select a country";let n=new Date(document.getElementById("dpFromDate").value);if(n<new Date)throw"Arrival Date cannot be before tomorrow";let a=new Date(document.getElementById("dpToDate").value);if(a<=n)throw"Departure Date cannot be before or on same day as Arrival";f("http://localhost:8081/travelinfo",{city:e,countryName:t,arrivalDate:n,departureDate:a})}catch(e){g(e)}}const f=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return localStorage.setItem("tripData",JSON.stringify(e)),c(e),e}catch(e){g(e),console.error("error posting data to API",e)}},y=async()=>{if(null!=localStorage.getItem("countriesList")&&localStorage.getItem("countriesList"))return console.log("countries loaded"),void v();const e=await fetch("https://restcountries.eu/rest/v2/all");try{const t=await e.json();localStorage.setItem("countriesList",JSON.stringify(t)),v()}catch(e){console.error("error fetching countries")}};function v(){let e=document.getElementById("countriesDD"),t=JSON.parse(localStorage.getItem("countriesList"));Object.entries(t).forEach(t=>{let n=t[1].name,a=document.createElement("option");a.value=n,a.text=n,e.appendChild(a)})}function E(e){e.preventDefault();try{D()}catch(e){g(e)}}const D=async()=>{console.log("getTestData fired");const e=await fetch("http://localhost:8081/test"),t=await e.json();return console.log(t),c(t),t};(()=>{let e=new Date,t=document.getElementById("dpFromDate");t.min=e,e.setDate(e.getDate()+1),t.value=e.toISOString().slice(0,10);let n=document.getElementById("dpToDate"),a=new Date;a.setDate(a.getDate()+2),n.value=a.toISOString().slice(0,10)})(),y();const C=()=>{document.getElementById("countriesDD").addEventListener("change",()=>{"none"!=document.getElementById("countriesDD").value&&(document.getElementById("validation").innerHTML="")})};C(),(async()=>{if(null==localStorage.getItem("tripData"))return void console.log("no trip data saved");let e=localStorage.getItem("tripData"),t=JSON.parse(e);await c(t)})()}]);