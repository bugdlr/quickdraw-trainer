const audio = document.querySelector("audio");
const startButton = document.querySelector("button");
let int = getRandom(3, 7) * 1000;


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function playSound() {
  audio.play();
}

function onClick() {
  setTimeout(playSound, int);
}


startButton.addEventListener('click', onClick, false);
