
var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1-dice6

var randomImageSource = "../assets/images/" + randomDiceImage; //images/dice1-dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "../assets/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩P1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "P2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "🎌Draw!!";
}