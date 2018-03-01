/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

var rndmNmbr = 0;

function rndm(){
	rndmNmbr = Math.floor(Math.random()*36);
}

function createDiv(){
	var storedNumber = rndmNmbr;
	if(storedNumber===0){
		var div = document.createElement('div');
		var node = document.createTextNode(storedNumber);
		div.appendChild(node);
		var element = document.getElementById('appendHere');
		element.appendChild(div).setAttribute('class', 'zero');
		rndm();
	}else if(storedNumber%2===1){
		var div1 = document.createElement('div');
		var node1 = document.createTextNode(storedNumber);
		div1.appendChild(node1);
		var element1 = document.getElementById('appendHere');
		element1.appendChild(div1).setAttribute('class', 'odd');
		rndm();
	}else if(storedNumber%2===0){
		var div2 = document.createElement('div');
		var node2 = document.createTextNode(storedNumber);
		div2.appendChild(node2);
		var element2 = document.getElementById('appendHere');
		element2.appendChild(div2).setAttribute('class', 'even');
		rndm();
	}
}

var ignition = false;

var startStop = setInterval(createDiv, 5000);


function startSwitch(){
	if(ignition === false){
		ignition = true;
		console.log('Start Status:', ignition);
		createDiv();
		return startStop;
	}else{
		ignition = false;
		console.log('Start Status:', ignition);
		clearInterval(startStop);
	}
}

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.


