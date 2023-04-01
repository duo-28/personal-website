// Based off w3schools tutorial
// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;

let carousels = {
  1: [1, 2],
  2: [3, 5],
  3: [6, 8]
};

// Next/previous controls
function plusSlides(n, carouselIndex) {
  showSlides(slideIndex += n, carousels[carouselIndex][0], carousels[carouselIndex][1]);
}

// Thumbnail image controls
function currentSlide(n, carouselIndex) {
  showSlides(slideIndex = n, carousels[carouselIndex][0], carousels[carouselIndex][1]);
}

// Shows nth slide of carousel given start and end of carousel
// eg. carousel_1 has 3 slides, so the start is 1, end is 3
// carousel_2 has 4 slides, so the start is 4, end is 7
// Bro this is such a bad way of making multiple carousels but idk+cbb
function showSlides(n, start, end) {
  let i;
  let slides = document.getElementsByClassName("carousel-button");

  let dots = document.getElementsByClassName("dot");
  // Wrap around for slides
  if (n > end) {slideIndex = start};
  if (n < start) {slideIndex = end};
  // Reset slide visibility and dot active class
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }
  // Show slide, set corresponding dot to active
  slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].classList.add('active-dot');
}