function displayErrors(error) {

    let errors = document.getElementById('validation');
    errors.innerHTML = '';
    let p = document.createElement('p');
    p.classList.add('error');
    p.innerText = error;
    errors.appendChild(p);
}


export { displayErrors }