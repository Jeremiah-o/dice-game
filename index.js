var randomNum1= Math.floor(Math.random()*6)+1;
var image1='./dice'+ randomNum1+'.png';
document.querySelectorAll("img")[0].setAttribute("src", image1);

var randomNum2= Math.floor(Math.random()*6)+1;
var image2='./dice'+ randomNum2+'.png';
document.querySelectorAll("img")[1].setAttribute("src", image2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 won";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="🚩Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="😒none of you won😒";
}