var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    
    $("#" + randomChoosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);
}

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}