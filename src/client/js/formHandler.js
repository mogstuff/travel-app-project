
function handleSubmit(e){

    e.preventDefault();

    try {
        
        let searchText = document.getElementById('search_txt').value;

        if(searchText.length < 3){
            throw "search cannot be null";
        }

        console.log('search for: ' + searchText);

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



export { handleSubmit, displayErrors }