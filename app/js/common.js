let hash = document.location.hash.slice(1);
let indexOfSlide = 0;

if (hash) {
  if (hash === '#test') {
    indexOfSlide = 1
  }
  else if (hash === '#fat') {
    indexOfSlide = 2
  }
}

$('.product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  initialSlide: indexOfSlide,
  asNavFor: '.product__slider-images'
});

$('.product__slider-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: indexOfSlide,
  asNavFor: '.product__slider',
  arrows: false,
});