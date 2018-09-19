function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function playSound() {
  audio.play();
}

const audio = document.querySelector("audio");

let int = getRandom(3, 7) * 1000;

const startButton = document.querySelector("button");

let onClick = function() {
  setTimeout(playSound, int);
};

startButton.addEventListener('click', onClick, false);
