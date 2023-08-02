let roarOfJupiter = new Audio("Roar of Jupiter.mp3");
let marsQuake = new Audio("Marsquake.mp3");
let soundsOfSaturn = new Audio("Sounds of Saturn.mp3");
let jupitersAuroras = new Audio("Jupiter's Auroras.mp3");

let roarJupiter = document.querySelector("#roarOfJupiter");
let mars = document.querySelector("#marsQuake");
let saturn = document.querySelector("#soundsOfSaturn");
let jupiterAuroras = document.querySelector("#jupitersAuroras");

roarJupiter.addEventListener("click", () => {
  if (roarOfJupiter.paused) {
    roarOfJupiter.play();
    roarJupiter.textContent = "Pause Audio";
  } else {
    roarOfJupiter.pause();
    roarJupiter.textContent = "Roar of Jupiter";
  }
});

mars.addEventListener("click", () => {
  if (marsQuake.paused) {
    marsQuake.play();
    mars.textContent = "Pause Audio";
  } else {
    marsQuake.pause();
    mars.textContent = "Marsquake";
  }
});

saturn.addEventListener("click", () => {
  if (soundsOfSaturn.paused) {
    soundsOfSaturn.play();
    saturn.textContent = "Pause Audio";
  } else {
    soundsOfSaturn.pause();
    saturn.textContent = "Sounds of Saturn";
  }
});

jupiterAuroras.addEventListener("click", () => {
  if (jupitersAuroras.paused) {
    jupitersAuroras.play();
    jupiterAuroras.textContent = "Pause Audio";
  } else {
    jupitersAuroras.pause();
    jupiterAuroras.textContent = "Jupiter's Auroras";
  }
});
