"use strict";

// const numberOfDrumButtons = document.querySelector(".drum").length;

// for (let i = 0; i <= numberOfDrumButtons; i++) {
//   document.querySelector(".drum")[i].addEventListener("click", function () {
//     let buttonInnerHTML = this.innerHTML;
//     switch (buttonInnerHTML) {
//       case "w":
//         const tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         const tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         const tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         const tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         const snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         const crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         const kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;

//       default:
//         console.log(buttonInnerHTML);
//     }
//   });
// }

// press key to play the drum
document.addEventListener("keydown", function (e) {
  if (e.key === "w") {
    const tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    const tom2 = new Audio("sounds\tom-2.mp3");
    tom2.play();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "s") {
    const tom3 = new Audio("sounds\tom-3.mp3");
    tom3.play();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "d") {
    const tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "j") {
    const snare = new Audio("sounds/snare.mp3");
    snare.play();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "k") {
    const crash = new Audio("sounds/crash.mp3");
    crash.play();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "l") {
    const kickBass = new Audio("sounds/kick-base.mp3");
    kickBass.play();
  }
});
