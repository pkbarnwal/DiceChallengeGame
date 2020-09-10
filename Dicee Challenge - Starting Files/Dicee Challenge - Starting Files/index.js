var randomNumber1=Math.floor(Math.random()*6) +1;             //Creating Number between 1-6
var  randomDiceImage= "images/"+"dice" + randomNumber1 +".png";           //creating dice image name with folder
document.querySelectorAll('img')[0].setAttribute('src',randomDiceImage);      //changing he source of image



var randomNumber2=Math.floor(Math.random()*6) +1;
var  randomDiceImage2= "images/"+"dice" + randomNumber2 +".png";
document.querySelectorAll('img')[1].setAttribute('src',randomDiceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Woooo ! Player 1 Win";
}
else if (randomNumber2 > randomNumber1){
   // document.querySelector('h1').innerHtml = "Woo ! Player 2 Win";
   document.querySelector('h1').innerHTML = "Woooo ! Player 2 Win";
}
else{
    document.querySelector('h1').innerHTML = "Sorry, Match Draw !!!!";
}
