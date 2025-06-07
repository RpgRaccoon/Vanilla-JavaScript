var randomNumber = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.getElementsByClassName("img1")[0].src = "images/dice" + randomNumber + ".png";
document.getElementsByClassName("img2")[0].src = "images/dice" + randomNumber2 + ".png";
if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
