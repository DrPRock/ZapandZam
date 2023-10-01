//new featured link
const imgElements = document.querySelectorAll('.newChild img');

imgElements.forEach(img => {
  img.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank');
  });
});
//bottom images
  const container = document.querySelector('.scrollContainer')

      function getRandNum(){
        return Math.floor(Math.random() * 597)
      }
      
      function loadImages(numImages = 20){
        let i = 0;
        while(i < numImages){
          const img = document.createElement('img')
          img.src = 'pics/' + getRandNum() + '.jpg'
          container.appendChild(img)
          i++
        }
      }
      loadImages()
 //listen for scroll
      
    let debounceTimeoutId;


    window.addEventListener('scroll', () => {
       clearTimeout(debounceTimeoutId);
       debounceTimeoutId = setTimeout(() => {
        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight * 0.95)) {
      loadImages();
    }
  }, 2);
}, { passive: true });

// Get all taglines and hide them

    const taglines = document.querySelectorAll('.tagline');
    taglines.forEach(tagline => {
      tagline.style.display = 'none';
});

// Pick a random tagline and show it

    const randomIndex = Math.floor(Math.random() * taglines.length);
    taglines[randomIndex].style.display = 'block';
