
//bottom images
  const container = document.querySelector('.scrollContainer')

      function getRandNum(){
        return Math.floor(Math.random() * 460)
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
      loadImages()
 //listen for scroll
      
      window.addEventListener('scroll', () => {
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
          loadImages()
        }
      })
//button color
const containerE1 = document.querySelector(".btnL");

const colorContainerE1s = document.querySelectorAll("button");

generateColors();

function generateColors() {
  colorContainerE1s.forEach(
    (colorContainerE1) => {
    const newColorCode = randomColor();
    colorContainerE1.style.backgroundColor = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}