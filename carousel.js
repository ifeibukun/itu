let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  const slideWidth = slides[0].clientWidth;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }
  
  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }
  
  showSlide(slideIndex); // Display the first slide initially