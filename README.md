
<script>
let slideIndex = 1;
//run slide fn from 1 mean(O)
showSlides(slideIndex);

// for arrow pre/next
function plusSlides(n) {
// slideIndex += n
//slideIndex = 1+1 ,2 mean(1)

  showSlides(slideIndex += n);
}

//for dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// fn for the slide show
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
  	slideIndex = 1
  }
  if (n < 1) {
  	slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Automatic Slideshow
// let slideInterval = setInterval(function() { plusSlides(1); }, 10000);

</script>

</body>
</html>
