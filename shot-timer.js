function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function playSound() {
  new Audio("beep.mp3").play();
}

let int = getRandom(3, 7) * 1000;

const startButton = document.querySelector("button");

startButton.addEventListener('click', function () {
  setTimeout(playSound, int);
});
