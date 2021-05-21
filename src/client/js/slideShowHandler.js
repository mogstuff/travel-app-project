let slideIndex = 0;
let currentSlide = 1;
let totalSlides = 0;

const addSlideShow = (result, elemendId) => {

    totalSlides = result.imageData.hits.length;

    let container = document.createElement('div');
    container.classList.add('slideshow-container');   
    
    let numberDiv = document.createElement('div');
    numberDiv.id = 'slide-numbers';
    numberDiv.classList.add('numbertext');
    numberDiv.innerText = `${currentSlide} / ${totalSlides}`;
    container.appendChild(numberDiv);

    for (const slide of result.imageData.hits) {
        let slideDiv = document.createElement('div');
        slideDiv.classList.add('trip-slides');
        slideDiv.classList.add('fade');       
        let img = document.createElement('img');
        img.src = slide.webformatURL;
        img.classList.add('slide-img');
        slideDiv.appendChild(img);
       slideDiv.style.display = "none";
        container.appendChild(slideDiv);
    }

    let buttonsDiv = document.createElement('div');   
    buttonsDiv.id = 'button-wrapper';

    let prevLink = document.createElement('a');
    prevLink.id = 'prev';
    prevLink.innerHTML = "&#10094"; 
    prevLink.addEventListener("click", function() { moveSlides(slideIndex--); }, false);
    buttonsDiv.appendChild(prevLink);

    let nextLink = document.createElement('a');
    nextLink.id = 'next';
    nextLink.innerHTML = '&#10095;';   
    nextLink.addEventListener("click", function() { moveSlides(slideIndex++); }, false);
    buttonsDiv.appendChild(nextLink);

    container.appendChild(buttonsDiv);

   let display = document.getElementById(elemendId);
   display.appendChild(container);   

  // manual slideshow
   // moveSlides(slideIndex);

   // animated slideshow
  animateSlides();

}

function moveSlides(slideIndex){ 

    if(slideIndex > totalSlides){
        slideIndex = 1;
    }

    if(slideIndex < 1){
        slideIndex = slides.length;
    }
  
    let slides = document.querySelectorAll('div.trip-slides'); 
    currentSlide = slideIndex;

    let numberDiv = document.getElementById('slide-numbers');
    numberDiv.innerText = `${currentSlide} / ${totalSlides}`;


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}


function animateSlides() {

    let buttonsDiv = document.getElementById('button-wrapper');   
    buttonsDiv.style.display = "none";
  
    var i;
    let slides = document.querySelectorAll('div.trip-slides'); 

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    currentSlide = slideIndex;
    let numberDiv = document.getElementById('slide-numbers');
    numberDiv.innerText = `${currentSlide} / ${totalSlides}`;

    slides[slideIndex-1].style.display = "block";
    setTimeout(animateSlides, 3000);

  }

export { addSlideShow   }