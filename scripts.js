var size = window.innerHeight;
if(window.innerWidth < window.innerHeight)
	size = window.innerWidth;

var canvas = document.getElementById('canvas');
canvas.width = size;
canvas.height = size;

var board;

function newBoard(size){
	console.log("new board");
	board = new Array(size);
	for(var i = 0; i < board.length; i++){
		board[i] = new Array(size);
		for(var j = 0; j < board[i].length;j++){
			board[i][j] = -2;
		}
	}
}

function NodeRevealed(node){
	board[node.X][node.Y] = node.Type;
	redrawBoard();
}

function ClearNodesRevealed(nodes){
	nodes.forEach(function(element) {
		board[element.X][element.Y] = element.Type;
	}, this);
	redrawBoard();
}

function GameOver(gb){
	for(var i = 0; i < gb.length; i ++)
		for(var j = 0; j < gb[i].length;j++)
			board[i][j] = gb[i][j].Type;
	redrawBoard();
	setTimeout(function(e){alert("Game over!")},1);
}

function gameClick(e){
	console.log(e);
	var x = Math.floor(e.clientX/size*board.length);
	var y = Math.floor(e.clientY/size*board.length);
	console.log("x = " + x);
	console.log("y = " + y);
	revealNode(x,y);
}

function startNewGame(){
	newGameRequest();
	canvas.onclick = gameClick;
	newBoard(20);
	redrawBoard();
}