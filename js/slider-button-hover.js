

document.querySelector('.slider').addEventListener('mouseover', function (){
    document.querySelector('.slider-btn-prev').style.opacity = '1';
    document.querySelector('.slider-btn-next').style.opacity = '1';
})

document.querySelector('.slider').addEventListener('mouseout', function (){
    document.querySelector('.slider-btn-prev').style.opacity = '0';
    document.querySelector('.slider-btn-next').style.opacity = '0';
})




