


$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dot:false,
        prevArrow: $('.slider-btn-prev'),
        nextArrow: $('.slider-btn-next'),
        fade: true
      });
    });