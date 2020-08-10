var p1=document.querySelector("#player1"); //player 1 main score 
p1.innerText=0;								//set p1 score to 0
var p2=document.querySelector("#player2"); //player 2 main score 
p2.innerText=0;								//set p2 score to 0
var p1r=document.querySelector("#p1round"); //player 1 turn score 
p1r.innerText=0;							//set p1r score to 0
var p2r=document.querySelector("#p2round"); //player 2 turn score 
p2r.innerText=0;							//set p2r score to 0
var fs=document.querySelector("#endcond"); 	//final score by players
var roll=document.querySelector("#roller");	//roll button instance
var hold=document.querySelector("#holder");	//hold button instance
var dice1=document.getElementById("dice1");	//first dice instance
var dice2=document.getElementById("dice2");	//second dice instance
var setgame=document.getElementById("setgame");	//reset button instance
var deciscore=document.getElementById("deciscore"); //target score instance
deciscore.innerText=100; //default final score 100
document.rand1; //random variable 1
document.rand2; //random variable 2
var gameon=true; //game condition is true
var player=p1; //starting player is player1
var playround=p1r; 
var title1=document.getElementById("title1"); //player1 title instance
var title2=document.getElementById("title2"); //player2 title instance
var header=document.getElementById("header"); //header instance
header.innerText="THE PIG-DICE GAME"; // set header title 
title1.classList.add("player"); //add player class current player
roll.addEventListener("click", function(){  //event listener on roll dice 
	//alert("Clicked Roll");
	if (gameon==true) { //check if game is not over
		rand1 =Math.ceil(Math.random()*6); //getting random number form 1-6
    	rand2 =Math.ceil(Math.random()*6);
    	dice1.style.display = 'block'; //imgs as block style
        dice2.style.display = 'block';
        
        dice1.src = 'dice-' + rand1 + '.jpg'; //change src to corresponding dice
        dice2.src = 'dice-' + rand2 + '.jpg';

    	if (rand1===1||rand2===1) { //checking if any dice has 1
    		playround.innerText=0; //busted condition
    		turner(); //change player status
    		setTimeout(function(){ dice1.src = 'dice-' + 0 + '.jpg';dice2.src = 'dice-' + 0 + '.jpg';},1000);
    		//delay dice before resetting to blank
    		
    	} 
    	else {
    		playround.innerText=(parseInt(playround.innerText)+parseInt(rand1)+parseInt(rand2)); //add score to current turn score
    	}

    	return; 
	} 
	
})



hold.addEventListener("click", function(){ //event listener on hold button
	//alert("Clicked hold");
	if (gameon==true) { //check if game is not over
		player.innerText=(parseInt(player.innerText)+parseInt(playround.innerText)); //add turn score to main score
		checker(); //check if player has reached end condition
		playround.innerText=0; //set turn text to 0
    	turner(); //reset player
    	dice1.innerText=0; //reset dice
    	dice2.innerText=0;//reset dice
	} 
})

setgame.addEventListener("click", function(){ //reset function 
	//alert("Clicked hold");
	if (fs.value=="") { //if input is blank
		deciscore.innerText=100;
	} 
	else {
		deciscore.innerText=fs.value; //if input has some number
	}
		gameon=true;
		p1.innerText=0;
		p2.innerText=0;
		p1r.innerText=0;
		p2r.innerText=0;
		dice1.src = 'dice-' + 0 + '.jpg';
		dice2.src = 'dice-' + 0 + '.jpg';
		p1.classList.remove("winner");
		p2.classList.remove("winner");
		if (player==p2) {
			turner();
		}
		header.innerText="THE PIG-DICE GAME";
		header.classList.remove("winner");

})

function checker(){ 
	if (parseInt(player.innerText)>=parseInt(deciscore.innerText)) { //check for winning condition 
		player.classList.add("winner"); //add winner class to main score
		turner(); 
		gameon=false; //set game condition to false
		header.innerText="!!!!Game Over!!!!"; 
		header.classList.add("winner")
	}
}

function turner(){ //to change player in game
	if (player==p1) { //switch between 2 players main score
			player=p2;
		} 
		else {
			player=p1;
		}
		playround.innerText=0;
	if (playround==p1r) { //switch between 2 players turn score
			playround=p2r;
		} 
		else {
			playround=p1r;
		}

	title1.classList.toggle("player"); //toggle player active class
	title2.classList.toggle("player");

}
