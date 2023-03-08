
//bottom images
  const container = document.querySelector('.scrollContainer')

      function getRandNum(){
        return Math.floor(Math.random() * 583)
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
