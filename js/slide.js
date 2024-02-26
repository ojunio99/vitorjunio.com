let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".slider li");
  if (slideIndex >= slides.length) {slideIndex = 0}    
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[slideIndex].style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function() {
    const percentages = document.querySelectorAll(".percentage");
    
    percentages.forEach(function(percentage) {
        const percentageValue = parseInt(percentage.textContent);
        let color;
        if (percentageValue <= 50) {
            // Vermelho (Hue 0° - 50°)
            const hue = percentageValue * (50 / 50);
            color = "hsl(" + hue + ", 100%, 50%)";
        } else if (percentageValue <= 65) {
            // Amarelo (Hue 50° - 65°)
            const hue = 50 + ((percentageValue - 50) * (15 / 15));
            color = "hsl(" + hue + ", 100%, 50%)";
        } else {
            // Verde (Hue 65° - 100°)
            const hue = 65 + ((percentageValue - 65) * (55 / 35));
            color = "hsl(" + hue + ", 100%, 50%)";
        }
        percentage.style.backgroundColor = color;
    });
});