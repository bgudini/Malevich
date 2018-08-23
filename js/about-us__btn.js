


//about-us__btn

document.querySelector('.about-us__btn').addEventListener('click', function (){
    var prev = document.querySelector('.about-us__description-open, .about-us__description-hide').className;
    var next = document.querySelector('.'+prev).dataset.collaps;
    document.querySelector('.'+prev).className = next;
    document.querySelector('.'+next).dataset.collaps = prev; 
})


