const btnE1 = document.querySelector(".bLink");

btnE1.addEventListener("mouseover", (event) => {
  const x = (event.pageX - btnE1.offsetLeft);
  const y = (event.pageY - btnE1.offsetTop);

  btnE1.style.setProperty("--xPos", x + "px");
  btnE1.style.setProperty("--yPos", y + "px");
});


//right images
  const shoulder = document.querySelector('.right')

      function getRandNum(){
        return Math.floor(Math.random() * 147)
      }
      
      function sideImages(numImages = 7){
        let i = 0;
        while(i < numImages){
          const img = document.createElement('img')
          img.src = 'pics/' + getRandNum() + '.jpg'
          shoulder.appendChild(img)
          i++
        }
      }
      sideImages()
 
//bottom images
  const container = document.querySelector('.scrollContainer')

      function getRandNum(){
        return Math.floor(Math.random() * 147)
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
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
          loadImages()
        }
      })
