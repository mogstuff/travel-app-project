
function handleSubmit(e){

    e.preventDefault();

    try {
        
        let searchText = document.getElementById('search_txt').value;

        if(searchText.length < 3){
            throw "search cannot be null";
        }

        console.log('search for: ' + searchText);

        let countryName = document.getElementById('countriesDD').value;

        console.log('Selected Country is : ' + countryName);

        if(countryName === 'none'){
            throw "please select a country";
        }
        
        let fromDate = new Date(document.getElementById('dpFromDate').value);
        console.log('From: ' + fromDate);

        if(fromDate < new Date()){
            throw "Arrival Date cannot be before tomorrow";
        }

        let toDate = new Date(document.getElementById('dpToDate').value);
        console.log('To: ' + toDate);

        if(toDate <= fromDate){
            throw "Departure Date cannot be before or on same day as Arrival";
        }

        // send users selections to server method /travelinfo
        let userData = {
            city: searchText,
            countryName: countryName
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
        console.info('response from posting data to Api: ');
        console.log(data);

        updateUI(data);
        return data;

    } catch (error) {
        displayErrors(error);
        console.error('error posting data to API', error);
    }

}


const updateUI = async (result) => {
    let display = document.getElementById('results');
    display.innerText = JSON.stringify(result);
}

export { handleSubmit, displayErrors, postUserData, updateUI }