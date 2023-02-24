// Based off w3schools tutorial
// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;

// Next/previous controls
function plusSlides(n, slideArray) {
  showSlides(slideIndex += n, slideArray[0], slideArray[1]);
}

// Thumbnail image controls
function currentSlide(n, slideArray) {
  showSlides(slideIndex = n, slideArray[0], slideArray[1]);
}

// Shows nth slide of carousel given start and end of carousel
// eg. carousel_1 has 3 slides, so the start is 1, end is 3
// carousel_2 has 4 slides, so the start is 4, end is 7
// Bro this is such a bad way of making multiple carousels but idk+cbb
// Like adding 1 slide to an earlier carousel means i gotta change all the numbers
// But luckily about me and hobbies probably wont change much righht
function showSlides(n, start, end) {
  let i;
  let slides = document.getElementsByClassName("carousel-button");
  //slides = slides.slice(slideArray[0], slideArray[1]);

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