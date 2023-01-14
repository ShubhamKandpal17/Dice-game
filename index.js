randomnumber1= Math.ceil(Math.random()*6);
randomnumber2= Math.ceil(Math.random()*6);


document.querySelector("#p1").innerHTML =prompt("Enter Player 1's name","Player 1");
document.querySelector("#p2").innerHTML=prompt("Enter Player 2's name","Player 2");


var img1 = "images/dice"+randomnumber1+".png";
var img2 = "images/dice"+randomnumber2+".png"; 
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);
if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="Draw!";

}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="⛳️ Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins ⛳️";
}
