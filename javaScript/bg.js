const body = document.querySelector("body");
const IMG_NUMBER = 3;

// function handleImgLoad() {
//   console.log("finish loading");
// }

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `./img/bg${imgNumber + 1}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);

  // img.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
