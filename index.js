var randomNumber1, randomNumber2;

//That makes to dices a random number between 1-6.
randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;

//Change the values ​​of each dice to display their images correctly after refreshing the page.
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Change the text in the h1, (which currently says Refresh Me) to show which user won or
//if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
//The emoji makes the h1 more visible to see who won.
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
else {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
  }
  else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
  }
}
