


document.querySelector('.navbar__link-toggle').addEventListener('click', function (){
    var prev = document.querySelector('.navbar__items_on, .navbar__items_off').className;
    var next = document.querySelector('.'+prev).dataset.trololo;
    document.querySelector('.'+prev).className = next;
    document.querySelector('.'+next).dataset.trololo = prev;
})