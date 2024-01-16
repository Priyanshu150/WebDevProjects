
// document.querySelector("button").addEventListener("click", handleClick);

let btn = document.querySelectorAll(".drum");

for(let i=0; i<btn.length; ++i){
    btn[i].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        handleClick(buttoninnerHTML);
        addAnimation(buttoninnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    handleClick(event.key);
    addAnimation(event.key);
});

function handleClick(key){
    switch(key){
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'a': 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        default:
            console.log(buttoninnerHTML);
            break;
    };
    // alert("I got clicked!");
    // console.log(this.innerHTML);
    // this.style.color = "white";
}

function addAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 200);
}
// alert("Drum-Kit!!");
// let str = prompt("Drum-Kit");
// console.log(str);
// console.log("Drum-Kit");