const beep = document.getElementById("beep");
const right = document.getElementById("right");
const left = document.getElementById("left");
const front = document.getElementById("front");
const back = document.getElementById("back");
const directions = [right, left, front, back];
const startButton = document.querySelector("button");
let min = document.getElementById("min");
let max = document.getElementById("max");
const maxOptions = max.getElementsByTagName("option");
const minOptions = min.getElementsByTagName("option");
let minValue = 3;
let maxValue = 6;
let int;

function randomDirection() {
  return directions[Math.floor(Math.random() * directions.length)];
}

function getRandom(minValue, maxValue) {
  int = ((Math.random() * (maxValue - minValue)) + minValue) * 1000;
  console.log(int);
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
  getRandom(minValue, maxValue);
  setTimeout(playSound, int);
}

function disableMaxOptions(value) {
  for (let i = 0; i < minOptions.length; i++) {
      if (maxOptions[i].value <= value) {
      maxOptions[i].setAttribute("disabled", true);
    } else {
      maxOptions[i].removeAttribute("disabled");
    }
  }
}

function disableMinOptions(value) {
  for (let i = 0; i < minOptions.length; i++) {
      if (minOptions[i].value >= value) {
      minOptions[i].setAttribute("disabled", true);
    } else {
      minOptions[i].removeAttribute("disabled");
    }
  }
}

min.addEventListener('click', function () {
  minValue = parseInt(min.options[min.selectedIndex].value);
  disableMaxOptions(minValue);
})

max.addEventListener('click', function () {
  maxValue = parseInt(max.options[max.selectedIndex].value);
  disableMinOptions(maxValue);
})

startButton.addEventListener('click', onClick, false);
