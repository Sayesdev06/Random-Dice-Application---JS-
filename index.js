var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

/-------  Method 1 --------/;

image1.src = "images/dice" + randomNumber1 + ".png";

/-------  Method 2 --------/;

image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins 🏆 !";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🏆 !";
} else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
