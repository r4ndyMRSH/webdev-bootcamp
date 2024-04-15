//alert("Test");

var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var userChosenColour;
var level = 0;
var started = false;

function nextSequence() {
  $("h1").text("Level " + level);
  level++;
  var randomNumber = Math.round(Math.random() * 3);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(color) {
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(curentColor) {
  $("#" + curentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + curentColor).removeClass("pressed");
  }, 100);
}

$("body").keydown(function(){
  if (!started){
    nextSequence();
    started = !started;
  };
    
  // alert("test start");
});

$(".btn").click(function (event) {
  userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  console.log(userClickedPattern);
});

