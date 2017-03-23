var size = window.innerHeight;
if(window.innerWidth < window.innerHeight)
	size = window.innerWidth;

var canvas = document.getElementById('canvas');
canvas.width = size;
canvas.height = size;

var board;

function newBoard(size){
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
	redrawBoard(board);
}

function gameClick(e){
	console.log(e);
	revealNode(Math.floor(e.clientX/size),Math.floor(e.clientY/size));
}

function startNewGame(){
	newGameRequest();
	canvas.onclick = gameClick;
	newBoard(20);
	redrawBoard(board);
}