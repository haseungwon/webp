




var slideindex = 1;
showslides(slideindex);

function addslides(n) {
  showslides(slideIndex += n);
}

function slide_now(n) {
  showslides(slideindex = n);
}

function showslides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  {
      slideIndex = 1
  }    
  if (n < 1) 
  {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}