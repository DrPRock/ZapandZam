const btnE1 = document.querySelector(".bLink");

btnE1.addEventListener("mouseover", (event) => {
  const x = (event.pageX - btnE1.offsetLeft);
  const y = (event.pageY - btnE1.offsetTop);

  btnE1.style.setProperty("--xPos", x + "px");
  btnE1.style.setProperty("--yPos", y + "px");
});


      const pictures = ['batEarrings.jpg', 'batNecklace.jpg', 'candyWitchEarrings.jpg'];
      const picture = pictures[Math.floor(Math.random() * pictures.length)];
      document.getElementById("thumb").innerHTML = ('<img class=right1 src="' + picture + '"/>');

      const pictures1 = ['bax1.jpg', 'mandala.jpg', 'necklaceStar.jpg'];
      const picture1 = pictures1[Math.floor(Math.random() * pictures1.length)];
      document.getElementById("thumb1").innerHTML = ('<img class=right1 src="' + picture1 +  '"/>');

      const pictures2 = ['palmTree.jpg', 'spoonRestA.jpg', 'necklaceSilverRect.jpg'];
      const picture2 = pictures2[Math.floor(Math.random() * pictures2.length)];
      document.getElementById("thumb2").innerHTML = ('<img class=right1 src="' + picture2 + '"/>');

      const pictures3 = ['largtrayButterfly.jpg', 'sloth.jpg', 'turtle.jpg'];
      const picture3 = pictures3[Math.floor(Math.random() * pictures3.length)];
      document.getElementById("thumb3").innerHTML = ('<img class=right1 src="' + picture3 + '"/>');
 
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
