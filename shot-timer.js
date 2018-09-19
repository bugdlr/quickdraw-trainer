const beep = document.getElementById("beep");
const right = document.getElementById("right");
const left = document.getElementById("left");
const front = document.getElementById("front");
const back = document.getElementById("back");
const directions = [right, left, front, back];
const startButton = document.querySelector("button");

function randomDirection() {
  return directions[Math.floor(Math.random() * directions.length)];
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function playSound() {
  sound.play();
}

function onClick() {
  if (direction.checked) {
    sound = randomDirection();
  } else {
    sound = beep;
  }
  let int = getRandom(3, 8) * 1000;
  console.log(int);
  setTimeout(playSound, int);
}

startButton.addEventListener('click', onClick, false);
