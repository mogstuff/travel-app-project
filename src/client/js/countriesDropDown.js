const loadCountries = async () => {

    if (localStorage.getItem('countriesList') != null && localStorage.getItem('countriesList')) {
        console.log('countries loaded');
        populateDropDown();
        return;
    }

    const url = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(url);

    try {

        const countriesList = await response.json();
        localStorage.setItem('countriesList', JSON.stringify(countriesList));
        populateDropDown();

    } catch (error) {
        console.error('error fetching countries');
    }


}


function populateDropDown(){
    
    let dd = document.getElementById('countriesDD');
    let countries = JSON.parse(localStorage.getItem('countriesList'));

    Object.entries(countries).forEach((x) => { 

        let countryName = x[1].name;
        let option = document.createElement('option');
        option.value = countryName;
        option.text = countryName;
        dd.appendChild(option);
    });

}


export { loadCountries }