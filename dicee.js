var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player1 win";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player2 win";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "match draw";
} else {
  document.querySelector("h1").innerHTML = "refresh me";
}
