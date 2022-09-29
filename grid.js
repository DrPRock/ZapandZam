const containerE1 = document.querySelector(".store");

const colorContainerE1s = document.querySelectorAll(".item");

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