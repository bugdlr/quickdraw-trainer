const audio = document.querySelector("audio");
const startButton = document.querySelector("button");


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function playSound() {
  audio.play();
}

function onClick() {
  let int = getRandom(3, 6) * 1000;
  console.log(int);
  setTimeout(playSound, int);
}


startButton.addEventListener('click', onClick, false);
