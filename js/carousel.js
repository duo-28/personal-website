let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-button");
  
  let dots = document.getElementsByClassName("dot");
  // 
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
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