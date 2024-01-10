let player1score = Math.floor(Math.random()*6)+1;
let player2score = Math.floor(Math.random()*6)+1;

console.log(player1score);
console.log(player2score);

// document.querySelector(".img1").src = "images/dice"+player1score+".png";
// document.querySelector(".img2").src = "images/dice"+player2score+".png";

if(player1score == player2score){
    document.querySelector('h1').textContent = "It's a tie😶‍🌫️";
}
else if(player1score > player2score){
    document.querySelector('h1').textContent = "🤩Player1 wins!";
}
else{
    document.querySelector('h1').textContent = "Player2 wins!🤩";
}

document.querySelector(".img1").src = "images/dice"+player1score+".png";
document.querySelector(".img2").src = "images/dice"+player2score+".png";