
function handleSubmit(e){

    e.preventDefault();

    try {
        
        let searchText = document.getElementById('search_txt').value;

        if(searchText.length < 3){
            throw "search cannot be null";
        }

        console.log('search for: ' + searchText);

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