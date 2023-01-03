var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var image1= "images/dice"+randomNumber1+".png";
var image2= "images/dice"+randomNumber2+".png";
var win;
document.querySelector("div .img1").setAttribute("src",image1);
document.querySelector("div .img2").setAttribute("src",image2);

if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML="🚩Refresh Me";
}
else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML="Refresh Me🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩DRAW🚩"
}