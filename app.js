let roarOfJupiter = new Audio("Roar of Jupiter.mp3");
let marsQuake = new Audio("Marsquake.mp3");
let soundsOfSaturn = new Audio("Sounds of Saturn.mp3");
let jupitersAuroras = new Audio("Jupiter's Auroras.mp3");

let roarJupiterButton = document.querySelector("#roarOfJupiter");
let marsButton = document.querySelector("#marsQuake");
let saturnButton = document.querySelector("#soundsOfSaturn");
let jupiterAurorasButton = document.querySelector("#jupitersAuroras");

function playJupiter() {
  if (roarOfJupiter.paused) {
    roarOfJupiter.play();
    roarJupiterButton.textContent = "Pause Audio (Q)";
  } else {
    roarOfJupiter.pause();
    roarJupiterButton.textContent = "Roar of Jupiter (Q)";
  }
}

roarJupiterButton.addEventListener("click", playJupiter);

window.addEventListener("keypress", (event) => {
  if (event.key.toLowerCase() === "q") {
    playJupiter();
  }
});

function playMars() {
  if (marsQuake.paused) {
    marsQuake.play();
    marsButton.textContent = "Pause Audio (W)";
  } else {
    marsQuake.pause();
    marsButton.textContent = "Marsquake (W)";
  }
}

marsButton.addEventListener("click", playMars);

window.addEventListener("keypress", (event) => {
  if (event.key.toLowerCase() === "w") {
    playMars();
  }
});

function playSaturn() {
  if (soundsOfSaturn.paused) {
    soundsOfSaturn.play();
    saturnButton.textContent = "Pause Audio (E)";
  } else {
    soundsOfSaturn.pause();
    saturnButton.textContent = "Sounds of Saturn (E)";
  }
}

saturnButton.addEventListener("click", playSaturn);

window.addEventListener("keypress", (event) => {
  if (event.key.toLowerCase() === "e") {
    playSaturn();
  }
});

function playJupiterA() {
  if (jupitersAuroras.paused) {
    jupitersAuroras.play();
    jupiterAurorasButton.textContent = "Pause Audio (R)";
  } else {
    jupitersAuroras.pause();
    jupiterAurorasButton.textContent = "Jupiter's Auroras (R)";
  }
}

jupiterAurorasButton.addEventListener("click", playJupiterA);

window.addEventListener("keypress", (event) => {
  if (event.key.toLowerCase() === "r") {
    playJupiterA();
  }
});
