let roarOfJupiter = new Audio("Roar of Jupiter.mp3");
let marsQuake = new Audio("Marsquake.mp3");
let soundsOfSaturn = new Audio("Sounds of Saturn.mp3");
let jupitersAuroras = new Audio("Jupiter's Auroras.mp3");

let roarJupiter = document.querySelector("#roarOfJupiter");
let mars = document.querySelector("#marsQuake");
let saturn = document.querySelector("#soundsOfSaturn");
let jupiterAuroras = document.querySelector("#jupitersAuroras");






function playJupiter() {
  if (roarOfJupiter.paused) {
    roarOfJupiter.play();
    roarJupiter.textContent = "Pause Audio (Q)";
  } else {
    roarOfJupiter.pause();
    roarJupiter.textContent = "Roar of Jupiter (Q)";
  }
}

roarJupiter.addEventListener("click", playJupiter);

window.addEventListener("keypress", (event) => {
  if (event.key === "q") {
    playJupiter();
  } else if (event.key === "Q") {
    playJupiter();
  }
});






function playMars() {
    if (marsQuake.paused) {
      marsQuake.play();
      mars.textContent = "Pause Audio (W)";
    } else {
      marsQuake.pause();
      mars.textContent = "Marsquake (W)";
    }
}

roarJupiter.addEventListener("click", playMars);

window.addEventListener("keypress", (event) => {
  if (event.key === "w") {
    playMars();
  } else if (event.key === "W") {
    playMars();
  }
});





function playSaturn() {
  if (soundsOfSaturn.paused) {
    soundsOfSaturn.play();
    saturn.textContent = "Pause Audio (E)";
  } else {
    soundsOfSaturn.pause();
    saturn.textContent = "Sounds of Saturn (E)";
  }
}

soundsOfSaturn.addEventListener("click", playSaturn);

window.addEventListener("keypress", (event) => {
  if (event.key === "e") {
    playSaturn();
  } else if (event.key === "E") {
    playSaturn();
  }
});





function playJupiterA() {
  if (jupitersAuroras.paused) {
    jupitersAuroras.play();
    jupiterAuroras.textContent = "Pause Audio (R)";
  } else {
    jupitersAuroras.pause();
    jupiterAuroras.textContent = "Jupiter's Auroras (R)";
  }
}

jupitersAuroras.addEventListener("click", playJupiterA);

window.addEventListener("keypress", (event) => {
  if (event.key === "r") {
    playJupiterA();
  } else if (event.key === "R") {
    playJupiterA();
  }
});



// function playSaturn() {
//   if (roarOfJupiter.paused) {
//     roarOfJupiter.play();
//     roarJupiter.textContent = "Pause Audio";
//   } else {
//     roarOfJupiter.pause();
//     roarJupiter.textContent = "Roar of Jupiter";
//   }
// }

// roarJupiter.addEventListener("click", playJupiter);

// window.addEventListener("keypress", (event) => {
//   if (event.key === "q" || "Q") {
//     playJupiter();
//   }
// });

// function playJupiterA() {
//   if (roarOfJupiter.paused) {
//     roarOfJupiter.play();
//     roarJupiter.textContent = "Pause Audio";
//   } else {
//     roarOfJupiter.pause();
//     roarJupiter.textContent = "Roar of Jupiter";
//   }
// }

// roarJupiter.addEventListener("click", playJupiter);

// window.addEventListener("keypress", (event) => {
//   if (event.key === "q" || "Q") {
//     playJupiter();
//   }
// });


// mars.addEventListener("click", () => {
//   if (marsQuake.paused) {
//     marsQuake.play();
//     mars.textContent = "Pause Audio";
//   } else {
//     marsQuake.pause();
//     mars.textContent = "Marsquake";
//   }
// });

// saturn.addEventListener("click", () => {
//   if (soundsOfSaturn.paused) {
//     soundsOfSaturn.play();
//     saturn.textContent = "Pause Audio";
//   } else {
//     soundsOfSaturn.pause();
//     saturn.textContent = "Sounds of Saturn";
//   }
// });

// jupiterAuroras.addEventListener("click", () => {
//   if (jupitersAuroras.paused) {
//     jupitersAuroras.play();
//     jupiterAuroras.textContent = "Pause Audio";
//   } else {
//     jupitersAuroras.pause();
//     jupiterAuroras.textContent = "Jupiter's Auroras";
//   }
// });
