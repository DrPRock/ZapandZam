// Get all taglines and hide them

    const taglines = document.querySelectorAll('.tagline');
    taglines.forEach(tagline => {
      tagline.style.display = 'none';
});

// Pick a random tagline and show it

    const randomIndex = Math.floor(Math.random() * taglines.length);
    taglines[randomIndex].style.display = 'block';

//new featured link
const imgElements = document.querySelectorAll('.newChild img');

imgElements.forEach(img => {
  img.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank');
  });
});

// Parallax effect
window.addEventListener("scroll", function() {
  var y = window.scrollY;
  document.querySelector(".css-slideshow").style.transform = "translateY(" + y * -0.5 + "px)";
});

