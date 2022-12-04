
//bottom images
  const container = document.querySelector('.scrollContainer')

      function getRandNum(){
        return Math.floor(Math.random() * 458)
      }
      
      function loadImages(numImages = 12){
        let i = 0;
        while(i < numImages){
          const img = document.createElement('img')
          img.src = 'pics/' + getRandNum() + '.jpg'
          container.appendChild(img)
          i++
        }
      }
      
 //listen for scroll
      
      window.addEventListener('scroll', () => {
        if(window.scrollY + window.innerHeight == document.documentElement.scrollHeight){
          loadImages()
        }
      })
