const beep = document.getElementById("beep");
const right = document.getElementById("right");
const left = document.getElementById("left");
const front = document.getElementById("front");
const back = document.getElementById("back");
const directions = [right, left, front, back];
const startButton = document.querySelector("button");
const onoffSwitch = document.getElementById("myonoffswitch");
let min = document.getElementById("min");
let max = document.getElementById("max");
const maxOptions = max.getElementsByTagName("option");
const minOptions = min.getElementsByTagName("option");
let minValue = 3;
let maxValue = 6;
let int;
let isPaused = true;

function randomDirection() {
  return directions[Math.floor(Math.random() * directions.length)];
}

function getRandom() {
  return int = ((Math.random() * (maxValue - minValue)) + minValue) * 1000;
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

  setTimeout(playSound, getRandom());
  console.log(int);

  if(onoffSwitch.checked) {
    loop();
  }
}

function loop() {
  setTimeout(onClick, 4000 + int);
}

// disable options based off selections
function disableMaxOptions(value) {
  for (let i = 0; i < maxOptions.length; i++) {
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


// EVENT LISTENERS
min.addEventListener('click', function () {
  minValue = parseInt(min.options[min.selectedIndex].value);
  disableMaxOptions(minValue);
})

max.addEventListener('click', function () {
  maxValue = parseInt(max.options[max.selectedIndex].value);
  disableMinOptions(maxValue);
})

onoffSwitch.addEventListener('click', function() {
  onoffSwitch.classList.toggle("checked");
  if (!onoffSwitch.checked) {
    clearInterval(loop);
  }
})

startButton.addEventListener('click', onClick, false);
