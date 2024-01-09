
let buttonColours = ["red","blue","green","yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$( ".btn" ).click( function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function() {
    if(!started){
        started = true;
        $('#level-title').text('Level 0');
        nextSequence();
    }
});

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("Success");
        
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(() =>{
            $("body").removeClass("game-over");
        }, 250);

        $('#level-title').text('Game Over, Press Any Key To Restart');
        startOver();
    }  
}

function nextSequence(){
    userClickedPattern = [];

    level++;
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $('#' + randomChosenColour).fadeIn(150).fadeOut(150).fadeIn(150);
    // console.log(randomChosenColour);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    // audio.muted = true;
    audio.play();
}

function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(() => {
        $('#' + currentColour).removeClass("pressed");
    }, 150);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

// nextSequence();
