let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slides")[0].children;
  const totalSlides = slides.length;
  
  if (n >= totalSlides) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = totalSlides - 4;
  }
  
  for (let i = 0; i < totalSlides; i++) {
    if (i >= slideIndex && i < slideIndex + 4) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
  
  if (slideIndex + 4 >= totalSlides) {
    clearInterval(slideInterval);
  }
}
const slideInterval = setInterval(function() {
  changeSlide(1);
}, 3000);
