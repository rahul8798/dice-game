document.querySelector(".Play").addEventListener("click", function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳ Player1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins! ⛳";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  var buttonInnerHtml = this.innerHTML;
  buttonAnimation(buttonInnerHtml);

  function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
      activeButton.classList.remove("pressed");
    }, 100);

  }

});
