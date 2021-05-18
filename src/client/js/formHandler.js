
function handleSubmit(e){

    e.preventDefault();

    try {
        
        let searchText = document.getElementById('search_txt').value;

        console.log('search for: ' + searchText);



    } catch (error) {
        
    }


}


export { handleSubmit }