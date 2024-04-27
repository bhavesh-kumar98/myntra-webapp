// this comment for i try to push but this file note working
let slideIndex = 1;
showSlides(slideIndex);

// for arrow pre/next
function plusSlides(steps) {
  showSlides((slideIndex += steps));
}

//for dot
function currentSlide(currentIndex) {
  showSlides((slideIndex = currentIndex));
}

// fn for the slide show
function showSlides(steps) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  // for all display : none
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for set all dot elem, to none active class
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // img display: block for, (targeted steps, currentIndex, slideInterval)
  slides[slideIndex - 1].style.display = "block";

  // add active class to (targeted steps, currentIndex, slideInterval)
  dots[slideIndex - 1].className += " active";
}

// Automatic Slideshow
let slideInterval = setInterval(() => plusSlides(1), 3000);
