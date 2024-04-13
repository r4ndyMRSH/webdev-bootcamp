function drumHit(path) {
  var audio = new Audio(path);
  audio.play();
}

function makeSound(keyName) {
  switch (keyName) {
    case "w":
      drumHit("./sounds/tom-1.mp3");
      break;
    case "a":
      drumHit("./sounds/tom-2.mp3");
      break;
    case "s":
      drumHit("./sounds/tom-3.mp3");
      break;
    case "d":
      drumHit("./sounds/tom-4.mp3");
      break;
    case "j":
      drumHit("./sounds/snare.mp3");
      break;
    case "k":
      drumHit("./sounds/crash.mp3");
      break;
    case "l":
      drumHit("./sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
}

function buttonAnimation(curentKey){
  var activeButton = document.querySelector("." + curentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

//Button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
