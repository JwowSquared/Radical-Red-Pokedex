//What is happening

var colors = ["red", "blue", "yellow", "green", "black", "white"];
var next;
var code;
var solution = "";
var idx;
var gameLive;

//This is the only function I call directly
alert("Welcome to Mastermind!\nGuess the combination of 4 random colors.\nClick the circles to cycle through the colors!");
newGame();

// a whole bunch of functions
function newGame() {
	if (solution != "") {
		alert("Previous solution was " + solution + ".");
	}

	code = genCode();
	solution = genSolution();
	idx = -1;
	gameLive = true;
	
	var board = document.getElementById("board");
	while (board.firstChild) {
		board.removeChild(board.firstChild);
	}
	
	var temp = document.createElement("h1");
	temp.innerHTML = "Mastermind";
	board.appendChild(temp);
	
	temp = document.createElement("div");
	temp.className = "restart";
	temp.innerHTML = "New Game";
	board.appendChild(temp);
	temp.addEventListener("click", function() {
		newGame();
	}, false);
	
	temp = document.createElement("div");
	temp.className = "next";
	temp.innerHTML = "Start";
	board.appendChild(temp);
	temp.addEventListener("click", function() {
		if (gameLive && idx < 10) {
			if (idx == -1) {
				idx++;
				this.innerHTML = "Submit";
			} else {
				fullGuess = getGuess();
				if (checkFull(fullGuess)) {
					handlePegs(fullGuess);
					if (checkWin(fullGuess)) {
						gameLive = false;
						alert("You Won! Solution was " + solution + ".");
					} else {
						idx++;
					}
				} else {
					alert("Only complete guesses can be submitted.");
				}
			}
		}
		if (idx > 9) {
			alert("You Lose! Solution was " + solution + ".");
		}
	}, false);
	next = document.getElementsByClassName("next")[0];
	createBoard();
}

function genSolution() {
	var out = ""
	var sep = "";
	for (i = 0; i < code.length; i++) {
		out += sep + colors[code[i]];
		sep = ", ";
	}
	return (out);
}

function genCode() {
	var out = [];
	var i;
	for (i = 0; i < 4; i++) {
		out.push(Math.floor(Math.random() * 6));
	}
	return (out);
}

function checkRound(el) {
	var rows = document.getElementsByClassName("row");
	var row = findIndex(rows, el.parentElement);
	if (row == idx) {
		return (true);
	} else {
		return (false);
	}
}

function findIndex(arr, obj) {
	var i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == obj) {
			return (i);
		}
	}
	return (-1);
}

function cycleColor(el) {
	if (gameLive && checkRound(el)) {
		var i = findIndex(colors, el.style.backgroundColor);
		if (i == -1 || i == 5) {
			i = 0;
		}
		else {
			i++;
		}
		el.style.backgroundColor = colors[i];
	}
}

function getGuess() {
	var row = document.getElementsByClassName("row")[idx];
	var slots = row.children;
	var fullGuess = [];
	var i, j;
	for (i = 1; i < slots.length; i++) {
		j = findIndex(colors, slots[i].style.backgroundColor);
		fullGuess.push(j);
	}
	return (fullGuess);
}

function checkFull(fullGuess) {
	var i;
	for (i = 0; i < fullGuess.length; i++) {
		if (fullGuess[i] == -1) {
			return (false);
		}
	}
	return (true);
}

function checkWin(fullGuess) {
	var i;
	for (i = 0; i < fullGuess.length; i++) {
		if (fullGuess[i] != code[i]) {
			return (false);
		}
	}
	return (true);
}

function handlePegs(fullGuess) {
	var row = document.getElementsByClassName("row")[idx];
	var slots = row.children[0].children;
	if (idx < 9) {
		next.style.top = String(160 + 134 * (1 + idx)) + "px";
	}
	var pegs = [0, 0, 0, 0];
	var numRed = 0, numWhite = 0;
	var i, j;

	for (i = 0; i < code.length; i++) {
		if (code[i] == fullGuess[i]) {
			pegs[i] = 1;
			numRed++;
		}
	}

	for (i = 0; i < code.length; i++) {
		for (j = 0; j < fullGuess.length; j++) {
			if (pegs[i] != 1 && code[i] == fullGuess[j]) {
				if (pegs[j] == 0) {
					pegs[j] = 2;
					numWhite++;
					break;
				}
			}
		}
	}

	i = 0;
	while (numRed-- > 0) {
		slots[i++].style.backgroundColor = "red";
	}
	while (numWhite-- > 0) {
		slots[i++].style.backgroundColor = "white";
	}
}

// populate the game board
function createBoard() {
	var i, j, row, et, board, holder, peg, guess;
	
	board = document.getElementById("board");
	
	for (i = 0; i < 10; i++) {
		row = document.createElement("div");
		row.className = "row";
		holder = document.createElement("div");
		holder.className = "holder";
		for (j = 0; j < 4; j++) {
			peg = document.createElement("div");
			peg.className = "peg";
			holder.appendChild(peg);
		}
		row.appendChild(holder);
		for (j = 0; j < 4; j++) {
			guess = document.createElement("div");
			guess.className = "guess";
			guess.addEventListener("click", function (){
				cycleColor(this);
			}, false);
			row.appendChild(guess);
		}
		board.appendChild(row);
	}
	return (board);
}
